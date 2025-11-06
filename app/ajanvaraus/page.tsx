export default function BookingPage() {
  const bookingUrl = 'https://booking.vello.fi/hoitohuonezenni?office=0ad83a98-1f61-4c99-99e9-e818fbcfe981&services=3c2dec0f-bd2b-48db-a455-be0ea4c50b65&lang=fi';

  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
          Hinnasto ja ajanvaraus
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Valitse sinulle sopiva hoito ja varaa aika
        </p>
      </section>

      <section className="space-y-8 pt-8 border-t border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-900">
          Hinnasto
        </h2>

        <div className="space-y-4">
          {/* Price Table */}
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900">
                BodyMind energiahoito
              </h3>
            </div>
            <div className="px-6 py-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Kesto</span>
                <span className="font-medium text-gray-900">60 min</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Hinta</span>
                <span className="font-medium text-gray-900">[Hinta] €</span>
              </div>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900">
                Ensikäynti
              </h3>
            </div>
            <div className="px-6 py-4 space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Kesto</span>
                <span className="font-medium text-gray-900">75 min</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Hinta</span>
                <span className="font-medium text-gray-900">[Hinta] €</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6">
          <p className="text-gray-700">
            <strong>Maksutavat:</strong> Käteinen, MobilePay
          </p>
        </div>
      </section>

      <section className="pt-8 border-t border-gray-200">
        <div className="bg-gray-900 text-white rounded-lg p-8 text-center space-y-6">
          <h2 className="text-3xl font-semibold">
            Varaa aika
          </h2>
          <p className="text-gray-300">
            Käytämme helppokäyttöistä verkkovarausjärjestelmää.
            Valitse sinulle sopiva aika ja vahvista varaus.
          </p>
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors font-medium"
          >
            Siirry varaamaan aikaa →
          </a>
        </div>
      </section>

      <section className="space-y-6 pt-8 border-t border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-900">
          Peruutusehdot
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            [Peruutusehdot ja -aikarajat tulevat tähän]
          </p>
        </div>
      </section>

      <section className="space-y-6 pt-8 border-t border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-900">
          Usein kysytyt kysymykset
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Miten valmistaudun hoitoon?
            </h3>
            <p className="text-gray-700">
              [Vastaus tulee tähän]
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Voiko hoitoon tulla raskaana?
            </h3>
            <p className="text-gray-700">
              [Vastaus tulee tähän]
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Kuinka usein hoitoon kannattaa tulla?
            </h3>
            <p className="text-gray-700">
              [Vastaus tulee tähän]
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
