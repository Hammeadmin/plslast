import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, FileText, ArrowLeft } from 'lucide-react';

export function IntegritetspolicyPage() {
  return (
    <div className="bg-gradient-to-br from-primary-50 via-brandBeige to-accent-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back button */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-sm text-gray-600 hover:text-blue-600">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Tillbaka till startsidan
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-10">
          <div className="flex items-center mb-8">
            <Shield className="h-10 w-10 text-blue-600 mr-4" />
            <h1 className="text-3xl font-bold text-gray-900">Integritetspolicy</h1>
          </div>

          <div className="prose prose-blue max-w-none">
            <p className="text-lg text-gray-700 mb-6">
              Senast uppdaterad: 1 maj 2025
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">1. Introduktion</h2>
            <p className="text-gray-700 mb-4">
              Farmispoolen AB ("vi", "oss", eller "vår") respekterar din integritet och är engagerade i att skydda dina personuppgifter. Denna integritetspolicy informerar dig om hur vi hanterar dina personuppgifter när du besöker vår webbplats eller använder vår plattform, och berättar om dina rättigheter enligt dataskyddslagstiftningen.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">2. Personuppgiftsansvarig</h2>
            <p className="text-gray-700 mb-4">
              Farmispoolen AB är personuppgiftsansvarig för de personuppgifter som samlas in och behandlas via vår plattform. Om du har frågor om denna policy eller hur vi hanterar dina uppgifter, vänligen kontakta oss på:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <p className="text-gray-700">
                <strong>Farmispoolen AB</strong><br />
                Drottninggatan 123<br />
                111 23 Stockholm<br />
                E-post: dataskydd@farmispoolen.se<br />
                Telefon: 08-123 45 67
              </p>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">3. Vilka personuppgifter vi samlar in</h2>
            <p className="text-gray-700 mb-4">
              Beroende på din relation till oss (arbetsgivare eller yrkesperson) och hur du använder vår plattform, kan vi samla in och behandla följande typer av personuppgifter:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">För yrkespersoner:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Namn och kontaktuppgifter</li>
                  <li>Professionell information (roll, erfarenhet, system)</li>
                  <li>Legitimationsnummer och verifieringsstatus</li>
                  <li>Tillgänglighet och schemapreferenser</li>
                  <li>Arbetshistorik och genomförda pass</li>
                  <li>Bankuppgifter för utbetalningar</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">För arbetsgivare:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Företagsnamn och kontaktuppgifter</li>
                  <li>Apoteksuppgifter och adressinformation</li>
                  <li>Kontaktpersoner och deras roller</li>
                  <li>Bemanningsbehov och publicerade pass</li>
                  <li>Faktureringsuppgifter</li>
                </ul>
              </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">4. Hur vi använder dina personuppgifter</h2>
            <p className="text-gray-700 mb-4">
              Vi behandlar dina personuppgifter för följande ändamål:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Tillhandahålla och administrera vår plattform och tjänster</li>
              <li>Matcha arbetsgivare med lämpliga yrkespersoner</li>
              <li>Hantera användarregistrering och konton</li>
              <li>Verifiera yrkespersoners legitimationer och kvalifikationer</li>
              <li>Hantera betalningar och fakturering</li>
              <li>Kommunicera med dig om din användning av plattformen</li>
              <li>Skicka relevanta notifieringar om pass och ansökningar</li>
              <li>Förbättra och utveckla våra tjänster</li>
              <li>Följa lagkrav och förordningar</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">5. Laglig grund för behandling</h2>
            <p className="text-gray-700 mb-4">
              Vi behandlar dina personuppgifter baserat på följande lagliga grunder:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li><strong>Avtal:</strong> För att uppfylla vårt avtal med dig när du använder vår plattform</li>
              <li><strong>Berättigat intresse:</strong> När vi har ett legitimt affärsintresse som inte åsidosätter dina rättigheter</li>
              <li><strong>Samtycke:</strong> I vissa fall där vi uttryckligen ber om ditt samtycke</li>
              <li><strong>Rättslig förpliktelse:</strong> För att uppfylla våra juridiska skyldigheter</li>
            </ul>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">6. Delning av personuppgifter</h2>
            <p className="text-gray-700 mb-4">
              Vi kan dela dina personuppgifter med följande kategorier av mottagare:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Arbetsgivare och yrkespersoner som använder plattformen (endast relevant information för matchning)</li>
              <li>Betaltjänstleverantörer för att hantera betalningar</li>
              <li>IT-tjänsteleverantörer som hjälper oss att driva plattformen</li>
              <li>Myndigheter när det krävs enligt lag</li>
            </ul>
            <p className="text-gray-700 mb-4">
              Vi säljer aldrig dina personuppgifter till tredje part.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">7. Datalagring och säkerhet</h2>
            <p className="text-gray-700 mb-4">
              Vi behåller dina personuppgifter endast så länge som är nödvändigt för de ändamål som anges i denna policy, eller för att uppfylla våra juridiska skyldigheter. Vi implementerar lämpliga tekniska och organisatoriska åtgärder för att skydda dina personuppgifter mot obehörig åtkomst, förlust eller skada.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">8. Dina rättigheter</h2>
            <p className="text-gray-700 mb-4">
              Enligt dataskyddslagstiftningen har du följande rättigheter:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
              <li>Rätt till tillgång till dina personuppgifter</li>
              <li>Rätt till rättelse av felaktiga uppgifter</li>
              <li>Rätt till radering ("rätten att bli bortglömd")</li>
              <li>Rätt till begränsning av behandling</li>
              <li>Rätt till dataportabilitet</li>
              <li>Rätt att invända mot behandling</li>
              <li>Rätt att inte bli föremål för automatiserat beslutsfattande</li>
            </ul>
            <p className="text-gray-700 mb-4">
              För att utöva någon av dessa rättigheter, vänligen kontakta oss via kontaktuppgifterna ovan.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">9. Cookies och liknande tekniker</h2>
            <p className="text-gray-700 mb-4">
              Vår webbplats använder cookies och liknande tekniker för att förbättra din upplevelse och analysera trafik. Du kan hantera dina cookie-inställningar i din webbläsare. För mer information, se vår separata cookie-policy.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">10. Ändringar i denna policy</h2>
            <p className="text-gray-700 mb-4">
              Vi kan uppdatera denna integritetspolicy från tid till annan för att återspegla ändringar i vår verksamhet eller lagkrav. Vi kommer att meddela dig om väsentliga ändringar genom att publicera den nya policyn på vår webbplats och, om det är lämpligt, kontakta dig direkt.
            </p>

            <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">11. Klagomål</h2>
            <p className="text-gray-700 mb-4">
              Om du är missnöjd med hur vi hanterar dina personuppgifter, vänligen kontakta oss först så att vi kan försöka lösa problemet. Du har också rätt att lämna in ett klagomål till Integritetsskyddsmyndigheten (www.imy.se).
            </p>
          </div>
        </div>

        <div className="bg-primary-50 rounded-lg p-6 mb-10"> {/* Changed background to primary-50 (light green) */}
         <div className="flex items-center mb-4">
            <Lock className="h-6 w-6 text-primary-600 mr-2" /> {/* Changed icon color to primary-600 (green) */}
            <h2 className="text-xl font-semibold text-gray-900">Ditt integritetsskydd är viktigt för oss</h2>
          </div>
          <p className="text-gray-700">
           Om du har frågor om hur vi hanterar dina personuppgifter eller vill utöva dina rättigheter, tveka inte att kontakta oss på <a href="mailto:dataskydd@farmispoolen.se" className="text-primary-600 hover:underline">dataskydd@farmispoolen.se</a>. {/* Changed link color to primary-600 (green) */}
          </p>
        </div>

        <div className="text-center">
          <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700"> {/* Changed link color to primary-600 and hover to primary-700 */}
            <ArrowLeft className="h-4 w-4 mr-1" />
            Tillbaka till startsidan
          </Link>
        </div>
      </div>
    </div>
  );
}

export default IntegritetspolicyPage;