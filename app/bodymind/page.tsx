import Link from 'next/link';

export default function BodyMindPage() {
  return (
    <div className="space-y-12">
      <section className="space-y-6">
        <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 leading-tight">
          BodyMind Energy Balancing Method
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Suomalainen kokonaisvaltainen energiahoitomenetelmä
        </p>
      </section>

      <section className="space-y-6 pt-8 border-t border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-900">
          Mikä on BodyMind?
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            BodyMind Energy Balancing Method on suomalainen energiahoitomenetelmä,
            joka yhdistää noin 30 erilaista tekniikkaa kattavaksi hoitokokonaisuudeksi.
            Menetelmä kehitettiin vuonna 2011, ja se on herättänyt kiinnostusta sekä
            lääketieteen ammattilaisten että tavallisten ihmisten keskuudessa
            vaikuttavuutensa ansiosta.
          </p>
          <p>
            Toisin kuin monet yksittäiseen tekniikkaan perustuvat hoitomuodot,
            BodyMind tarjoaa hoitajalle laajan työkalupakin, jonka avulla voidaan
            käsitellä monenlaisia ongelmia yksilöllisesti. Menetelmä sisältää
            tekniikoiden lisäksi syvällistä ymmärrystä siitä, mistä kehon ongelmat
            kumpuavat ja miten ne ilmenevät kehossa ja mielessä.
          </p>
        </div>
      </section>

      <section className="space-y-6 pt-8 border-t border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-900">
          Kokonaisvaltainen lähestymistapa
        </h2>

        <div className="bg-gray-100 rounded-lg h-64 lg:h-80 flex items-center justify-center">
          <p className="text-gray-400 text-center px-4">
            Kuva: Kädet, tasapaino, tai kokonaisvaltaisuutta kuvaava rauhoittava kuva
          </p>
        </div>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            BodyMind on holistinen energiahoitojärjestelmä, jossa asiakkaita
            hoidetaan kaikilla tasoilla: fyysisellä, energeettisellä ja emotionaalisella.
            Menetelmä yhdistää syvän ymmärryksen tehokkaaseen tekniikkaan, mikä tuottaa
            erinomaisia tuloksia.
          </p>
          <p>
            Hoitomuotoja, joita on käytetty BodyMind-menetelmän perustana, ovat muun
            muassa Reiki, Body Code ja Emotion Code, EFT, Energy Medicine, hypnoosi
            sekä Pranic healing. Menetelmä on jatkuvasti kehittyvä kokonaisuus,
            jossa tekniikoita ja kurssisisältöjä kehitetään jatkuvasti uuden tiedon
            karttuessa.
          </p>
        </div>
      </section>

      <section className="space-y-6 pt-8 border-t border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-900">
          Mitä BodyMind voi hoitaa?
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            BodyMind-menetelmän on raportoitu auttavan monenlaisiin oireisiin ja
            haasteisiin:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Alaselkäkivut ja muut kivut</li>
            <li>Unihäiriöt</li>
            <li>Kaamosmasennus</li>
            <li>Ahdistus ja masennus</li>
            <li>Stressiin liittyvät oireet</li>
            <li>Emotionaaliset traumat</li>
            <li>Yleinen hyvinvoinnin tukeminen</li>
          </ul>
        </div>
      </section>

      <section className="space-y-6 pt-8 border-t border-gray-200">
        <h2 className="text-3xl font-semibold text-gray-900">
          Koulutus ja taustat
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            BodyMind-menetelmä opetetaan seitsemän kurssin aikana, joiden aikana
            koulutetaan noin 30 tekniikkaa. Menetelmä kehitettiin laajan tutkimus-
            ja testaustyön tuloksena, jossa analysoitiin yli 40 erilaista hoitomuotoa
            ja niiden vaikuttavuutta.
          </p>
          <p>
            Lisätietoja BodyMind-menetelmästä löydät{' '}
            <a
              href="https://suomenenergiahoitajat.fi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 underline hover:text-gray-700"
            >
              Suomen Energiahoitajat Oy:n verkkosivuilta
            </a>
            .
          </p>
        </div>
      </section>

      <section className="pt-8 border-t border-gray-200">
        <div className="bg-gray-50 rounded-lg p-8 text-center space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">
            Kiinnostuitko BodyMind-hoidosta?
          </h2>
          <p className="text-gray-600">
            Varaa aika Hoitohuone Zenniin ja koe itse menetelmän vaikutukset
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
