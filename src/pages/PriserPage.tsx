// src/pages/PriserPage.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Check, ArrowLeft, Building2, Briefcase, Shield, Clock, Calendar, HelpCircle } from 'lucide-react';

export function PriserPage() {
  return (
    // CORRECTED: Changed background from blue gradient to slate-50
    <div className="bg-brandBeige min-h-screen"> {/* Or bg-primary-50 or the gradient */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back button */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-sm text-gray-600 hover:text-primary-600">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Tillbaka till startsidan
          </Link>
        </div>

        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Priser & abonnemang
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Transparenta och flexibla prismodeller anpassade för olika behov
          </p>
        </div>

        {/* Pricing Tabs - Updated colors */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            <a href="#for-employers" className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-primary-600 bg-primary-600 text-sm font-medium text-white hover:bg-primary-700 focus:z-10 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500">
              <Building2 className="h-5 w-5 mr-2" />
              För arbetsgivare
            </a>
            <a href="#for-professionals" className="relative inline-flex items-center px-4 py-2 rounded-r-md border border-primary-600 bg-white text-sm font-medium text-primary-600 hover:bg-primary-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500">
              <Briefcase className="h-5 w-5 mr-2" />
              För personal
            </a>
          </div>
        </div>

        {/* For Employers Section */}
        <section id="for-employers" className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">För apotek & arbetsgivare</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {/* Standard Plan - Updated colors */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border-2 border-primary-500 relative">
              <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULÄRAST
              </div>
              <div className="p-8 bg-gradient-to-br from-primary-100 to-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Standard</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">5 990</span>
                  <span className="ml-1 text-xl text-gray-500">kr/mån</span>
                </div>
                <p className="mt-4 text-sm text-gray-600">Idealisk för medelstora apotek med regelbundna bemanningsbehov.</p>
              </div>
              <div className="border-t border-gray-100"></div>
              <div className="p-8 space-y-4">
                <div className="flex items-start"><Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /> <span className="ml-3 text-gray-700">Publicera upp till 6 pass i månaden</span></div>
                <div className="flex items-start"><Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="ml-3 text-gray-700">Standardpublicering av pass</span></div>
                <div className="flex items-start"><Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="ml-3 text-gray-700">Schemaläggning för upp till 4 anställda</span></div>
                <div className="flex items-start"><Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="ml-3 text-gray-700">Avancerad lönehantering och rapportering</span></div>
                <div className="flex items-start"><Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="ml-3 text-gray-700">Prioriterad support via telefon och e-post</span></div>
                <div className="pt-6">
                  <Link to="/register?plan=standard" className="block w-full text-center px-4 py-2 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors">
                    Välj Standard
                  </Link>
                </div>
              </div>
            </div>

            {/* Premium Plan - Updated colors */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-primary-200">
              <div className="p-8 bg-gradient-to-br from-primary-50 to-white">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">9 990</span>
                  <span className="ml-1 text-xl text-gray-500">kr/mån</span>
                </div>
                <p className="mt-4 text-sm text-gray-600">För större apotekskedjor med omfattande bemanningsbehov.</p>
              </div>
              <div className="border-t border-gray-100"></div>
              <div className="p-8 space-y-4">
                <div className="flex items-start"><Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="ml-3 text-gray-700">Obegränsade publicerade pass</span></div>
                <div className="flex items-start"><Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="ml-3 text-gray-700"><strong className="text-primary-600">Akuta pass</strong> - högre synlighet och prioritet</span></div>
                <div className="flex items-start"><Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="ml-3 text-gray-700">Publicera längre uppdrag</span></div>
                <div className="flex items-start"><Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="ml-3 text-gray-700">Obegränsad schemaläggning för anställda</span></div>
                <div className="flex items-start"><Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="ml-3 text-gray-700">Avancerad lönehantering och rapportering</span></div>
                <div className="flex items-start"><Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="ml-3 text-gray-700">Dedikerad kundansvarig</span></div>
                <div className="pt-6">
                  <Link to="/register?plan=premium" className="block w-full text-center px-4 py-2 border border-primary-600 text-primary-600 font-medium rounded-md hover:bg-primary-50 transition-colors">
                    Välj Premium
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section - Updated colors */}
         <div className="mt-12 bg-primary-50 rounded-lg p-6 max-w-3xl mx-auto"> {/* Or a beige variant */}
           <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <HelpCircle className="h-5 w-5 text-primary-600 mr-2" />
              Vanliga frågor om prissättning för arbetsgivare
            </h3>
            <div className="space-y-4">
              <div><h4 className="font-medium text-gray-900">Finns det några dolda avgifter?</h4><p className="text-gray-700 text-sm mt-1">Nej, våra priser är transparenta och inkluderar alla funktioner som anges i respektive plan. Det tillkommer inga extra avgifter för grundläggande användning av plattformen.</p></div>
              <div><h4 className="font-medium text-gray-900">Finns det någon bindningstid?</h4><p className="text-gray-700 text-sm mt-1">Våra standardabonnemang löper månadsvis utan bindningstid. Vi erbjuder även rabatterade årsabonnemang med 10% rabatt.</p></div>
              <div><h4 className="font-medium text-gray-900">Varför erbjuder ni bara två planer?</h4><p className="text-gray-700 text-sm mt-1">Vi har förenklat vårt erbjudande för att fokusera på de planer som bäst möter våra kunders behov. Standard och Premium ger den flexibilitet och funktionalitet som moderna apotek behöver.</p></div>
              <div><h4 className="font-medium text-gray-900">Vad är akuta pass?</h4><p className="text-gray-700 text-sm mt-1">Akuta pass är en Premium-funktion som ger dina pass högre synlighet och prioritet i sökresultaten. De visas högst upp i listan och markeras tydligt för att attrahera fler sökande när du behöver bemanning snabbt.</p></div>
            </div>
          </div>
        </section>

        {/* For Professionals Section - Updated colors */}
        <section id="for-professionals" className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">För yrkespersoner</h2>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 max-w-3xl mx-auto">
            <div className="p-8 bg-gradient-to-br from-primary-50 to-white"> {/* Changed from blue-50 */}
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Helt kostnadsfritt</h3>
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold text-gray-900">0</span>
                    <span className="ml-1 text-xl text-gray-500">kr</span>
                  </div>
                </div>
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                  GRATIS
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Som yrkesperson är det helt kostnadsfritt att använda Farmispoolen. Vi tar inga avgifter från dig - våra intäkter kommer från arbetsgivarna.
              </p>
            </div>
            <div className="border-t border-gray-100"></div>
            <div className="p-8 space-y-4">
              <div className="flex items-start"><Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="ml-3 text-gray-700">Skapa och hantera din professionella profil</span></div>
              <div className="flex items-start"><Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="ml-3 text-gray-700">Sök och ansök om tillgängliga pass</span></div>
              <div className="flex items-start"><Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="ml-3 text-gray-700">Hantera ditt schema och tillgänglighet</span></div>
              <div className="flex items-start"><Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="ml-3 text-gray-700">Kommunicera med arbetsgivare</span></div>
              <div className="flex items-start"><Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" /><span className="ml-3 text-gray-700">Få betalt direkt genom plattformen</span></div>
              <div className="pt-6">
                <Link to="/register?type=professional" className="block w-full text-center px-4 py-2 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors">
                  Registrera dig nu
                </Link>
              </div>
            </div>
          </div>

          {/* FAQ Section - Updated colors */}
          <div className="mt-12 bg-slate-100 rounded-lg p-6 max-w-3xl mx-auto"> {/* Changed from blue-50 */}
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <HelpCircle className="h-5 w-5 text-primary-600 mr-2" />
              Vanliga frågor för yrkespersoner
            </h3>
            <div className="space-y-4">
              <div><h4 className="font-medium text-gray-900">Tas det några avgifter från min lön?</h4><p className="text-gray-700 text-sm mt-1">Nej, vi tar inga avgifter från din lön. Du får 100% av den överenskomna ersättningen för dina pass.</p></div>
              <div><h4 className="font-medium text-gray-900">Hur fungerar utbetalningar?</h4><p className="text-gray-700 text-sm mt-1">Efter att ett pass har slutförts och godkänts av arbetsgivaren, betalas din ersättning ut enligt överenskommet schema (vanligtvis månadsvis). Du kan följa alla dina utbetalningar i din profil.</p></div>
              <div><h4 className="font-medium text-gray-900">Måste jag ta ett visst antal pass?</h4><p className="text-gray-700 text-sm mt-1">Nej, du bestämmer helt själv hur mycket eller lite du vill arbeta. Det finns inga minimikrav på antal pass.</p></div>
            </div>
          </div>
        </section>

        {/* Included in all plans Section - Updated icon colors */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Vad ingår i alla planer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600 mb-4 mx-auto">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center mb-2">Säker plattform</h3>
              <p className="text-gray-600 text-center text-sm">Krypterad kommunikation och säker hantering av personuppgifter enligt GDPR.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600 mb-4 mx-auto">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center mb-2">24/7 Tillgänglighet</h3>
              <p className="text-gray-600 text-center text-sm">Vår plattform är tillgänglig dygnet runt för att passa dina behov.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600 mb-4 mx-auto">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center mb-2">Schemaläggning</h3>
              <p className="text-gray-600 text-center text-sm">Kraftfulla verktyg för att hantera scheman och tillgänglighet.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600 mb-4 mx-auto">
                <DollarSign className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center mb-2">Betalningshantering</h3>
              <p className="text-gray-600 text-center text-sm">Säker och automatiserad hantering av alla betalningar och löner.</p>
            </div>
          </div>
        </section>

        {/* CTA Section - Updated colors */}
        <div className="bg-primary-600 rounded-xl py-12 px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-6">
            Redo att komma igång?
          </h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-8"> {/* Changed from blue-100 */}
            Välj den plan som passar dina behov och börja använda Farmispoolen idag.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/register?type=employer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 shadow-md transition-colors"
            >
              <Building2 className="mr-2 h-5 w-5" />
              Registrera som apotek
            </Link>
            <Link
              to="/register?type=professional"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-white hover:bg-primary-100 shadow-md transition-colors" // Matched style with the one above for consistency
            >
              <Briefcase className="mr-2 h-5 w-5" />
              Registrera som yrkesperson
            </Link>
          </div>
        </div>

        {/* Contact Section - Updated colors */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Har du frågor om våra priser?</h2>
          <p className="text-gray-600 mb-6">
            Kontakta vårt team för att diskutera dina specifika behov och få ett skräddarsytt erbjudande.
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center justify-center px-6 py-3 border border-primary-600 text-base font-medium rounded-md text-primary-600 hover:bg-primary-50 transition-colors"
          >
            Kontakta oss
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PriserPage; // Ensuring default export is present if this was the original structure