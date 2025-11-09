export default function ContactPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
          Yhteystiedot
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Ota yhteyttä tai tule käymään
        </p>
      </section>

      <div className="pt-8 border-t border-gray-200">
        <div className="bg-gray-100 rounded-lg h-64 lg:h-80 flex items-center justify-center mb-8">
          <p className="text-gray-400 text-center px-4">
            Kuva rakennuksesta tai sisäänkäynnistä
          </p>
        </div>
      </div>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Hoitohuone Zenni
          </h2>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Osoite</h3>
              <p className="text-gray-700">
                Salpapuistonkatu 7<br />
                53850 Lappeenranta
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Puhelin</h3>
              <p className="text-gray-700">
                <a href="tel:+358401234567" className="hover:underline">
                  [Puhelinnumero]
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Sähköposti</h3>
              <p className="text-gray-700">
                <a href="mailto:info@hoitohuonezenni.fi" className="hover:underline">
                  [Sähköpostiosoite]
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Aukioloajat
          </h2>
          <div className="space-y-2 text-gray-700">
            <div className="flex justify-between">
              <span>Maanantai - Perjantai</span>
              <span className="font-medium">[Ajat]</span>
            </div>
            <div className="flex justify-between">
              <span>Lauantai</span>
              <span className="font-medium">[Ajat]</span>
            </div>
            <div className="flex justify-between">
              <span>Sunnuntai</span>
              <span className="font-medium">Suljettu</span>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Ajanvaraus tapahtuu verkkovarausjärjestelmän kautta.
          </p>
        </div>
      </section>

      <section className="pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Löydä perille
        </h2>
        {/* Google Maps embed */}
        <div className="rounded-lg overflow-hidden h-96 w-full">
          <iframe
            src="https://maps.google.com/maps?q=Salpapuistonkatu+7,+53850+Lappeenranta&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="mt-4">
          <p className="text-gray-700">
            Hoitohuone sijaitsee Lappeenrannassa, Salpapuistonkatu 7. Pysäköintipaikkoja löytyy kadun varrelta.
          </p>
        </div>
      </section>

      <section className="space-y-6 pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900">
          Ota yhteyttä
        </h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
              Nimi
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              placeholder="Nimesi"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
              Sähköposti
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              placeholder="sahkoposti@esimerkki.fi"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
              Viesti
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
              placeholder="Kirjoita viestisi tähän..."
            />
          </div>

          <button
            type="submit"
            className="px-8 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            Lähetä viesti
          </button>
        </form>
        <p className="text-sm text-gray-600">
          Huom: Lomake ei ole vielä toiminnassa. Ota yhteyttä suoraan puhelimitse tai sähköpostitse.
        </p>
      </section>
    </div>
  );
}
