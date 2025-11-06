import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
          Minusta
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Energiahoitaja Jenni Huttunen
        </p>
      </section>

      {/* Placeholder for portrait image */}
      <section className="pt-8">
        <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
          <p className="text-gray-400">Kuva tulossa</p>
        </div>
      </section>

      <section className="space-y-6 pt-8 border-t border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-900">
          Tervetuloa Hoitohuone Zenniin
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Olen Jenni Huttunen, koulutettu energiahoitaja Lappeenrannasta.
            [Tähän tulee henkilökohtainen tarina ja koulutustaustat]
          </p>
          <p>
            [Kuvaus koulutuksesta, sertifikaateista ja henkilökohtaisesta
            lähestymistavasta hoitotyöhön]
          </p>
          <p>
            [Mikä innostaa työssä ja mitä haluan tarjota asiakkailleni]
          </p>
        </div>
      </section>

      <section className="space-y-6 pt-8 border-t border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-900">
          Koulutus ja osaaminen
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            [Kuvaus BodyMind-koulutuksesta ja muista relevanteista
            koulutuksista tai sertifikaateista]
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>BodyMind Energy Balancing Method -koulutus</li>
            <li>[Muut koulutukset]</li>
            <li>[Sertifikaatit]</li>
          </ul>
        </div>
      </section>

      <section className="pt-8 border-t border-gray-200">
        <div className="bg-gray-50 rounded-lg p-8 space-y-4">
          <blockquote className="text-xl italic text-gray-700 text-center">
            "[Henkilökohtainen lainaus tai motto, joka kuvaa
            hoitofilosofiaasi]"
          </blockquote>
          <p className="text-center text-gray-600">— Jenni Huttunen</p>
        </div>
      </section>

      <section className="pt-8 border-t border-gray-200">
        <div className="bg-gray-50 rounded-lg p-8 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            Haluatko tavata?
          </h2>
          <p className="text-gray-600">
            Varaa aika ja tutustutaan
          </p>
          <Link
            href="/ajanvaraus"
            className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Varaa aika
          </Link>
        </div>
      </section>
    </div>
  );
}
