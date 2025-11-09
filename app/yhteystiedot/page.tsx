import ContactForm from '../components/ContactForm';

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
                <a href="tel:+358408018707" className="hover:underline">
                  040 801 8707
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Sähköposti</h3>
              <p className="text-gray-700">
                <a href="mailto:Huttunen.jenni@gmail.com" className="hover:underline">
                  Huttunen.jenni@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Facebook</h3>
              <a
                href="https://www.facebook.com/share/1G27UjE6Qh/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1877F2] text-white rounded-lg hover:bg-[#0C63D4] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                Seuraa Facebookissa
              </a>
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

      <section className="pt-8 border-t border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Ota yhteyttä
        </h2>
        <ContactForm />
      </section>
    </div>
  );
}
