import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Image */}
      <div className="bg-gray-100 rounded-lg h-64 lg:h-96 flex items-center justify-center -mx-6 lg:-mx-12 -mt-12 lg:-mt-16 mb-8">
        <p className="text-gray-400 text-center px-4">
          Hero-kuva: Rauhallinen kuva luonnosta, kynttilöistä tai hoitohuoneesta
        </p>
      </div>

      {/* Hero Section */}
      <section className="space-y-6">
        <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
          Tervetuloa Hoitohuone Zenniin
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Rauhallista ja tasapainottavaa energiahoitoa Lappeenrannassa
        </p>
        <div>
          <Link
            href="/ajanvaraus"
            className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Varaa aika
          </Link>
        </div>
      </section>

      {/* What is Energy Healing */}
      <section className="space-y-6 pt-8 border-t border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-900">
          Mitä on energiahoito?
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Energiahoito on kokonaisvaltainen hoitomuoto, joka tukee kehon luontaista
            kykyä parantaa itseään. Hoidossa keskitytään energian tasapainottamiseen
            ja jumien vapauttamiseen kehosta ja mielestä.
          </p>
          <p>
            Hoidon aikana asiakas makaa rennosti hoitopöydällä, ja hoitaja työskentelee
            käsillään kehon energia-aloilla. Hoito on hellävaraista ja rauhoittavaa.
            Monet kokevat hoidon aikana syvää rentoutumista ja rauhaa.
          </p>
          <p>
            Energiahoito voi auttaa muun muassa stressin, ahdistuksen, kipujen ja
            unettomuuden kanssa. Se tukee kokonaisvaltaista hyvinvointia ja tasapainoa.
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="space-y-6 pt-8 border-t border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-900">
          Mitä hoidossa tapahtuu?
        </h2>

        <div className="bg-gray-100 rounded-lg h-64 lg:h-80 flex items-center justify-center">
          <p className="text-gray-400 text-center px-4">
            Kuva hoitohuoneesta tai rauhallisesta tilasta
          </p>
        </div>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Hoitokerta alkaa lyhyellä keskustelulla, jossa käymme läpi tämänhetkisen
            tilanteesi ja toiveesi hoidolle. Sen jälkeen pääset makaamaan rauhassa
            hoitopöydälle.
          </p>
          <p>
            Hoidon aikana työskentelen kehosi energiakentässä käyttäen BodyMind
            Energy Balancing -menetelmän tekniikoita. Hoito kestää noin tunnin,
            ja sen jälkeen on hyvä ottaa hetki aikaa palautumiseen.
          </p>
          <p>
            Jokainen hoitokerta on yksilöllinen, ja keho ottaa vastaan juuri sen,
            mitä se sillä hetkellä tarvitsee.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-8 border-t border-gray-200">
        <div className="bg-gray-50 rounded-lg p-8 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            Haluatko varata ajan?
          </h2>
          <p className="text-gray-600">
            Valitse sinulle sopiva aika verkkovarausjärjestelmästämme
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
