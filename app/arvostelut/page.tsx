import Link from 'next/link';

export default function TestimonialsPage() {
  // Placeholder testimonials
  const testimonials = [
    {
      id: 1,
      quote: '[Asiakaskokemus tulee tähän. Kuvaus siitä, miten hoito on auttanut ja mitä hyötyä siitä on ollut.]',
      name: '[Nimi]',
      date: '[Päivämäärä]',
    },
    {
      id: 2,
      quote: '[Toinen asiakaskokemus tulee tähän. Kuvaus kokemuksesta ja tuntemuksista hoidon jälkeen.]',
      name: '[Nimi]',
      date: '[Päivämäärä]',
    },
    {
      id: 3,
      quote: '[Kolmas asiakaskokemus tulee tähän. Mikä muuttui ja miten hoito vaikutti hyvinvointiin.]',
      name: '[Nimi]',
      date: '[Päivämäärä]',
    },
  ];

  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
          Kokemuksia
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Mitä asiakkaat kertovat Hoitohuone Zennistä
        </p>
      </section>

      <section className="space-y-8 pt-8 border-t border-gray-200">
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-lg p-6 space-y-4"
            >
              <blockquote className="text-gray-700 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="pt-4 border-t border-gray-200 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gray-200 flex-shrink-0 flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Kuva</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6 pt-8 border-t border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-900">
          Haluatko jakaa oman kokemuksesi?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Arvostamme suuresti asiakkaidemme palautetta. Jos haluat jakaa
          kokemuksesi Hoitohuone Zennistä, voit ottaa yhteyttä sähköpostitse
          tai sosiaalisen median kautta.
        </p>
      </section>

      <section className="pt-8 border-t border-gray-200">
        <div className="bg-gray-50 rounded-lg p-8 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            Koe itse
          </h2>
          <p className="text-gray-600">
            Varaa aika ja koe energiahoidon vaikutukset
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
