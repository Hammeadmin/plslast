import { Handler } from '@netlify/functions';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

// Create the clients with the correct environment variables
const resend = new Resend(process.env.RESEND_API_KEY);
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

// --- Professional HTML Email Template ---
const createStyledEmailHtml = (title: string, body: string, footerText: string = "Detta är ett automatiskt meddelande. Vänligen svara inte på detta email.") => {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 20px auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
      <div style="background-color: #007bff; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">Farmis</h1>
      </div>
      <div style="padding: 20px;">
        <h2 style="font-size: 20px; color: #007bff; margin-top: 0;">${title}</h2>
        ${body}
        <p style="margin-top: 30px; font-size: 12px; color: #888;">${footerText}</p>
      </div>
      <div style="background-color: #f7f7f7; color: #888; padding: 15px; text-align: center; font-size: 12px;">
        <p>&copy; ${new Date().getFullYear()} Farmis. Alla rättigheter förbehållna.</p>
      </div>
    </div>
  `;
};

// --- Helper function with ALL email types ---
const buildEmailContent = (emailType: string, payload: any) => {
  const fromAddress = 'noreply@farmispoolen.se';
  const supportAddress = 'support@farmispoolen.se';

  switch (emailType) {
    case 'employeeInvitation':
      // This case is handled by Supabase Auth emails now, but we keep a simple version for existing users.
      return { to: payload.email, from: fromAddress, subject: `Inbjudan från ${payload.companyName}`, html: createStyledEmailHtml('Du har en ny inbjudan', `<p>Du har fått en inbjudan att arbeta för <strong>${payload.companyName}</strong>. Vänligen logga in på ditt Farmis-konto för att se och acceptera din inbjudan.</p>`)};

    case 'shiftApplicationAccepted':
      return { to: payload.userEmail, from: fromAddress, subject: `Din ansökan har accepterats!`, html: createStyledEmailHtml('Ansökan Accepterad', `<p>Grattis! Din ansökan för passet "<strong>${payload.shiftTitle}</strong>" har blivit accepterad.</p>`) };
    
    case 'shiftApplicationRejected':
      return { to: payload.userEmail, from: fromAddress, subject: `Uppdatering om din ansökan`, html: createStyledEmailHtml('Angående din ansökan', `<p>Tack för ditt intresse för passet "<strong>${payload.shiftTitle}</strong>". Tjänsten har tillsatts av en annan sökande.</p>`) };

    case 'newShiftNotification':
      return { to: [], from: fromAddress, subject: `Nytt arbetspass: ${payload.shiftTitle}`, html: createStyledEmailHtml('Nytt Arbetspass Tillgängligt', `<p>Ett nytt arbetspass har publicerats:</p><div style="background-color:#f9f9f9;padding:15px;border-radius:5px;"><h3 style="margin-top:0;"><strong>${payload.shiftTitle}</strong></h3><p><strong>Datum:</strong> ${payload.shiftDate||'Ej specificerat'}</p><p><strong>Tid:</strong> ${payload.shiftTime||'Ej specificerat'}</p><p><strong>Plats:</strong> ${payload.shiftLocation||'Ej specificerat'}</p></div><p>Logga in för att ansöka.</p>`) };

    case 'newPostingNotification':
      return { to: [], from: fromAddress, subject: `Nytt uppdrag: ${payload.postingTitle}`, html: createStyledEmailHtml('Nytt Uppdrag Tillgängligt', `<p>Ett nytt uppdrag har publicerats:</p><div style="background-color:#f9f9f9;padding:15px;border-radius:5px;"><h3 style="margin-top:0;"><strong>${payload.postingTitle}</strong></h3><p><strong>Beskrivning:</strong> ${payload.postingDescription||'Ingen beskrivning.'}</p><p><strong>Plats:</strong> ${payload.postingLocation||'Ej specificerat'}</p></div><p>Logga in för att ansöka.</p>`) };
    
    case 'contactForm':
      if (!payload.name || !payload.email || !payload.message) throw new Error('Missing data for contact form email.');
      return { to: supportAddress, from: fromAddress, reply_to: payload.email, subject: `Kontaktformulär: ${payload.name}`, html: `<p><strong>Avsändare:</strong> ${payload.name} (${payload.email})</p><p><strong>Meddelande:</strong></p><p>${payload.message}</p>` };
      
    case 'sickReport':
      if (!payload.shiftTitle || !payload.shiftDate || !payload.employeeName) throw new Error('Missing data for sick report email.');
      return { to: '', from: fromAddress, subject: `Sjukanmälan: ${payload.employeeName}`, html: createStyledEmailHtml(`Sjukanmälan från ${payload.employeeName}`, `<p>En anställd, <strong>${payload.employeeName}</strong>, har anmält sig sjuk för passet:</p><ul><li><strong>Pass:</strong> ${payload.shiftTitle}</li><li><strong>Datum:</strong> ${payload.shiftDate}</li></ul>`, "Detta är ett meddelande till arbetsgivaren.") };
      
    case 'payrollReport':
      if (!payload.recipientEmail || !payload.pdfData || !payload.payPeriod || !payload.employerName) throw new Error('Missing data for payroll report email.');
      return { to: payload.recipientEmail, from: fromAddress, subject: `Lönerapport för ${payload.payPeriod} - ${payload.employerName}`, html: createStyledEmailHtml(`Lönerapport för ${payload.payPeriod}`, `<p>Hej,</p><p>Här kommer lönerapporten för perioden ${payload.payPeriod}.</p><p>Vänliga hälsningar,<br/>${payload.employerName}</p>`), attachments: [{ filename: `Lonerapport-${payload.payPeriod}.pdf`, content: payload.pdfData }] };

    default:
      throw new Error(`The email type "${emailType}" is unknown.`);
  }
};

// --- Main Handler with all logic ---
export const handler: Handler = async (event) => {
  const headers = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'Content-Type', 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Content-Type': 'application/json' };
  if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers, body: '' };
  if (event.httpMethod !== 'POST') return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };

  try {
    const { emailType, payload } = JSON.parse(event.body || '{}');
    if (!emailType || !payload) {
        return { statusCode: 400, headers, body: JSON.stringify({ error: "Request must include 'emailType' and 'payload'." }) };
    }
    if (emailType === 'userInvitation') {
        const { inviteeEmail } = payload;
        if (!inviteeEmail) throw new Error("Missing email for user invitation.");

        // Use Supabase's built-in generic invite. No employer data is needed.
        // This will send the "Invite User" email template you have in Supabase.
        const { error } = await supabase.auth.admin.inviteUserByEmail(inviteeEmail);

        // Supabase returns an error if the user already exists.
        // For a generic invite, this is not a failure, so we can ignore that specific error.
        if (error && !error.message.includes('User already registered')) {
            throw new Error(`Supabase invite error: ${error.message}`);
        }

    } else if (emailType === 'employeeInvitation') {
      const { employerId, inviteeEmail, relationshipType } = payload;
      if (!employerId || !inviteeEmail || !relationshipType) throw new Error("Missing data for invitation.");

      const { data: existingUser } = await supabase.from('profiles').select('id').eq('email', inviteeEmail).single();

      if (existingUser) {
        // --- USER EXISTS ---
        const { data: employerProfile } = await supabase.from('profiles').select('pharmacy_name').eq('id', employerId).single();
        const companyName = employerProfile?.pharmacy_name || 'ditt företag';

        // **THIS IS THE CRITICAL FIX**
        // We now capture the response and check for an error.
        const { error: insertError } = await supabase.from('employer_employee_relationships').insert({
            employer_id: employerId,
            employee_id: existingUser.id,
            relationship_type: relationshipType,
            status: 'pending'
        });

        // If the database returned an error, throw it to stop the function.
        if (insertError) {
            throw new Error(`Database error creating relationship: ${insertError.message}`);
        }
        
        // This part will now only run if the database insert was successful.
        const emailData = { to: inviteeEmail, from: 'noreply@farmispoolen.se', subject: `Inbjudan från ${companyName}`, html: createStyledEmailHtml('Du har en ny inbjudan', `<p>Du har fått en inbjudan att arbeta för <strong>${companyName}</strong>. Vänligen logga in på ditt Farmis-konto för att se och acceptera din inbjudan.</p>`)};
        await resend.emails.send(emailData);

      } else {
        // --- NEW USER ---
        // This logic uses Supabase Auth and is already correct.
        const { error: inviteError } = await supabase.auth.admin.inviteUserByEmail(inviteeEmail, { data: { invited_by_employer_id: employerId, initial_relationship_type: relationshipType } });
        if (inviteError) {
          throw new Error(`Supabase invite error: ${inviteError.message}`);
        }
      }
     
    } else if (emailType === 'newShiftNotification' || emailType === 'newPostingNotification') {
    // FINAL: Fetch only users who want notifications
    const { data: employees, error } = await supabase
      .from('profiles')
      .select('email')
      .in('role', ['pharmacist', 'egenvårdsrådgivare', 'säljare'])
      .eq('receives_notifications', true); // Add this filter
        const emails = users?.map(u => u.email).filter(Boolean) as string[] | undefined;
        if (emails && emails.length > 0) {
            const emailData = buildEmailContent(emailType, payload);
            await resend.emails.send({ ...emailData, to: emails });
        }
    } else if (emailType === 'sickReport') {
        if (!payload.employerId) throw new Error("Employer ID is required for sick reports.");
        const { data: employer } = await supabase.from('profiles').select('email').eq('id', payload.employerId).single();
        if (employer?.email) {
            const emailData = buildEmailContent(emailType, payload);
            await resend.emails.send({ ...emailData, to: employer.email });
        }
    } else {
        const emailData = buildEmailContent(emailType, payload);
        await resend.emails.send(emailData as any);
    }
    
    return { statusCode: 200, headers, body: JSON.stringify({ success: true, message: `Process for '${emailType}' initiated.` }) };

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown server error occurred.';
    console.error("Email sending error:", errorMessage);
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Failed to send email', details: errorMessage }) };
  }
};