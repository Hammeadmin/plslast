import React from 'react';
import { Link } from 'react-router-dom';
import {
  Briefcase,
  Heart,
  Target,
  Users,
  Building2,
  Calendar,
  ShieldCheck,
  Pill,
  Globe,
  TrendingUp,
  ArrowRight
} from 'lucide-react';

export function AboutPage() {
  return (
    <div className="bg-gradient-to-br from-primary-50 via-brandBeige to-accent-50 min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Om Farmispoolen
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Vi förändrar apoteksbemanning över hela Sverige med vår innovativa digitala plattform.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Vår historia</h2>
              <div className="mt-6 text-gray-600 space-y-4">
                <p>
                  Farmispoolen grundades 2025 av ett team av apotekspersonal och teknikentreprenörer som insåg utmaningarna med apoteksbemanning över hela Sverige.
                </p>
                <p>
                  Vi såg apotek kämpa med att hitta kvalificerad personal med kort varsel, medan skicklig personal letade efter mer flexibla arbetsmöjligheter. Vår plattform överbryggar denna klyfta och skapar en win-win-lösning för båda sidor.
                </p>
                <p>
                  Idag är Farmispoolen den ledande apoteksbemanningsplattformen i Sverige, som kopplar samman hundratals apotek med tusentals kvalificerad personal varje månad.
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="bg-primary-50 rounded-xl p-8 shadow-md">
                <div className="flex items-center mb-6">
                  <Pill className="h-8 w-8 text-primary-600" />
                  <span className="ml-3 text-2xl font-bold text-gray-900">Farmispoolen</span>
                </div>
                <div className="space-y-4 text-gray-600">
                  <p className="flex items-start">
                    <Globe className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Huvudkontor i Stockholm, betjänar hela Sverige</span>
                  </p>
                  <p className="flex items-start">
                    <Calendar className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Grundat 2025</span>
                  </p>
                  <p className="flex items-start">
                    <Users className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Team av apoteksexperter och teknikspecialister</span>
                  </p>
                  <p className="flex items-start">
                    <TrendingUp className="h-5 w-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Snabbt växande nätverk av apotek och personal</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Vår ambition & vision</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-primary-50 rounded-lg p-8 shadow-md">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600 mb-6 mx-auto">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">Vår ambition</h3>
              <p className="text-gray-600 text-center">
                Att förenkla apoteksbemanning genom att koppla samman arbetsgivare med kvalificerad personal genom en effektiv, transparent och användarvänlig digital plattform.
              </p>
            </div>

            <div className="bg-primary-50 rounded-lg p-8 shadow-md">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600 mb-6 mx-auto">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">Vår vision</h3>
              <p className="text-gray-600 text-center">
                Att bli den betrodda partnern för alla apoteksbemanningsbehov i hela Skandinavien, och säkerställa att varje apotek har tillgång till kvalificerad personal när de behöver dem.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Våra värderingar</h2>
            <p className="mt-4 text-lg text-gray-600">
              Principerna som vägleder allt vi gör
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-primary-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600 mb-4 mx-auto">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 text-center mb-2">Kvalitet</h3>
              <p className="text-gray-600 text-center">
                Vi säkerställer att all apotekspersonal är verifierad och har rätt kvalifikationer och erfarenhet.
              </p>
            </div>

            <div className="bg-primary-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600 mb-4 mx-auto">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 text-center mb-2">Effektivitet</h3>
              <p className="text-gray-600 text-center">
                Vår plattform förenklar bemanningsprocessen, sparar tid och resurser för alla inblandade parter.
              </p>
            </div>

            <div className="bg-primary-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary-100 text-primary-600 mb-4 mx-auto">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 text-center mb-2">Flexibilitet</h3>
              <p className="text-gray-600 text-center">
                Vi anpassar oss till de unika behoven hos varje arbetsgivare och yrkesperson, och erbjuder anpassningsbara lösningar.
              </p>
            </div>
          </div>
        </div>
      </div>

            
      {/* CTA Section */}
      <div className="bg-primary-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white">
            Gå med i Farmispoolen-gemenskapen
          </h2>
          <p className="mt-4 text-xl text-primary-100 max-w-2xl mx-auto">
            Oavsett om du är ett apotek som söker personal eller en yrkesperson som söker pass, är vi här för att hjälpa.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            {/* KORRIGERAD LÄNK FÖR ARBETSGIVARE */}
            <Link
              to="/register?userType=employer"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 shadow-md transition-colors"
            >
              <Building2 className="mr-2 h-5 w-5" />
              För arbetsgivare
            </Link>
            {/* KORRIGERAD LÄNK FÖR PERSONAL */}
            <Link
              to="/register?userType=personal"
              className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-primary-700 shadow-md transition-colors"
            >
              <Briefcase className="mr-2 h-5 w-5" />
              För personal
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}