import React from 'react';
import { Link } from 'react-router-dom';
import {
  Heart, Target, Users, Building2, Calendar, CheckCircle, CalendarPlus, UserPlus, ArrowRight
} from 'lucide-react';

export default function ForApotek() {
  return (
    <div className="bg-gradient-to-br from-primary-50 via-brandBeige to-accent-50 min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            För Arbetsgivare
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Förenkla dina bemanningsbehov med tillgång till kvalificerad apotekspersonal. Publicera pass, granska sökande och tillsätt positioner snabbt.
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Fördelar för arbetsgivare</h2>
            <p className="mt-4 text-lg text-gray-600">
              Varför apotek väljer Farmispoolen för sina bemanningsbehov
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600 mb-4 mx-auto">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 text-center mb-2">Kvalificerad personal</h3>
              <p className="text-gray-600 text-center">
                Tillgång till en pool av verifierade apotekspersonal med rätt kvalifikationer och erfarenhet.
              </p>
            </div>

            <div className="bg-primary-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600 mb-4 mx-auto">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 text-center mb-2">Snabb bemanning</h3>
              <p className="text-gray-600 text-center">
                Fyll pass snabbt, även med kort varsel. Vår plattform kopplar dig samman med tillgängliga yrkespersoner i ditt område.
              </p>
            </div>

            <div className="bg-primary-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600 mb-4 mx-auto">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 text-center mb-2">Minskat administrativt arbete</h3>
              <p className="text-gray-600 text-center">
                Vår plattform hanterar den administrativa bördan, från att publicera pass till att bearbeta betalningar.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scheduling Section - NEW */}
      <div className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Schemaläggning & Personalhantering</h2>
            <p className="mt-4 text-lg text-gray-600">
              Hantera både tillfällig och fast personal på ett ställe
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <CalendarPlus className="h-6 w-6 text-primary-600 mr-3" />
                Schemaläggning
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Skapa kompletta scheman för hela perioder med några få klick</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Automatisk schemaläggning baserad på personalens tillgänglighet</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Publicera lediga pass direkt från schemat när det behövs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Visualisera scheman för att enkelt identifiera luckor</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <UserPlus className="h-6 w-6 text-primary-600 mr-3" />
                Personalhantering
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Hantera både heltids-, deltids- och timanställda i samma system</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Spåra arbetstimmar, övertid och ledighet för all personal</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Sätt målarbetstimmar och få varningar vid överbelastning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-accent-500 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Integrerad lösning för både fast personal och tillfällig extrapersonal</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Hur det fungerar</h2>
            <p className="mt-4 text-lg text-gray-600">
              En enkel process för att hitta kvalificerad apotekspersonal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-600 text-white font-bold text-lg mb-4 mx-auto">
                1
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center mb-2">Skapa ditt konto</h3>
              <p className="text-gray-600 text-center">
                Registrera ditt apotek och fyll i din profil med all relevant information.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-600 text-white font-bold text-lg mb-4 mx-auto">
                2
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center mb-2">Publicera dina pass</h3>
              <p className="text-gray-600 text-center">
                Skapa detaljerade passannonser med krav, tider och ersättning.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-600 text-white font-bold text-lg mb-4 mx-auto">
                3
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center mb-2">Granska sökande</h3>
              <p className="text-gray-600 text-center">
                Bläddra bland ansökningar, granska profiler och välj de bästa kandidaterna för dina pass.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-600 text-white font-bold text-lg mb-4 mx-auto">
                4
              </div>
              <h3 className="text-lg font-medium text-gray-900 text-center mb-2">Bekräfta & slutför</h3>
              <p className="text-gray-600 text-center">
                Godkänn sökande, hantera processen digitalt och hantera betalning genom vår plattform.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Redo att förenkla din personalhantering?
          </h2>
          <p className="mt-4 text-xl text-primary-100 max-w-2xl mx-auto">
            Gå med hundratals apotek som redan använder Farmispoolen för både schemaläggning och bemanning
          </p>
          <div className="mt-8">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 shadow-md transition-colors"
            >
              Registrera ditt apotek
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}