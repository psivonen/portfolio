export const projects = [
  {
    id: 1,
    title: "Verkkosivusto malli valokuvaajalle",
    slug: "verkkosivusto-malli-valokuvaajalle",
    subtitle: "HTML5, CSS ja JavaScript",
    description:
      "Verkkosivusto malli on houkutteleva ja dynaaminen verkkosivusto valokuvaajalle, joka tarjoaa valikoiman valokuvaus palveluita, kursseja ja työpajoja. Sivuston tavoitteena on esitellä valokuvaajan portfolio, houkutella potentiaalisia asiakkaita ja tarjota käyttäjille alusta, jolla he voivat ilmoittautua valokuvaus kursseille ja työpajoille. Minulle projektin tarkoituksena oli kerrata ja syventää full stack kehittämistä.",
    thumbnail: "/static/images/ph-learning-thumbnail.png",
    images: [
      "/static/images/ph-learning-2.png",
      "/static/images/ph-learning-3.png",
    ],
    features: "Avain ominaisuuksiin kuuluu valokuvaus palveluiden myyminen sekä kurssien ja workshoppien järjestäminen. Sisältää visuaalisesti houkuttelevan portfolion, joka korostaa valokuvaajan parhaita töitä. Mobiili ystävällinen käyttöliittymä varmistaa saavutettavuuden ja käytettävyyden eri laitteilla. Kursseja ja työpajoja voidaan rajata vaikeusasteen mukaan.",
    conclusion: "Projekti esittelee kykyäni suunnitella ja toteuttaa kattava verkkosivusto korostaen taitojani full stack kehittämisessä, käyttökokemuksen suunnittelussa ja kykyä kehittää visuaalisesti miellyttäviä verkkosivustoja.",
    demo: "https://psivonen.github.io/ph-learning-demo/",
    github: "https://github.com/psivonen/ph-learning",
    stack: ["html", "css", "php", "javascript", "bootstrap", "mysql"],
  },
  {
    id: 2,
    title: "Tehtävänhallinta työkalu",
    subtitle: "Flask",
    description:
      "Projekti perustuu Miguel Grinbergin kirjan Flask Web Development (toinen painos) lähdekoodi esimerkkeihin. Tarkoituksena oli luoda käyttäjäystävällinen tehtävänhallinta järjestelmä, joka on suunniteltu parantamaan tuottavuutta. Tämän projektin tavoitteena oli luoda selkeä alusta, joka helpottaa yksilöiden tehokasta organisointia, seurantaa ja tehtävien suorittamista. Minulle projektin tarkoituksena oli oppia Flaskia ja kehittää nykyistä osaamista.",
    thumbnail: "/static/images/taskmanager-thumbnail.png",
    images: [
      "/static/images/taskmanager-1.png",
      "/static/images/taskmanager-2.png",
      "/static/images/taskmanager-3.png",
      "/static/images/taskmanager-4.png",
    ],
    features: "Käyttäjät voivat helposti luoda räätälöityjä tehtävä luetteloita järjestääkseen toimintaansa projektien, prioriteettien tai minkä tahansa mukautettujen luokkien perusteella. Käyttäjä voi päivittää luetteloiden nimet, lisätä tai poistaa tehtäviä ja tehdä muutoksia muuttuvien tarpeiden mukaan. Tarvittaessa voidaan poistaa vaivattomasti tehtävä luettelot, jotka eivät enää ole merkityksellisiä. Henkilökohtaiset hallinta paneelit näyttävät käyttäjille ajankohtaisen yhteenvedon heidän tehtävä luetteloista. Hallinta paneeli näyttää käyttäjille visuaalisesti miten tehtävät edistyvät.",
    conclusion: "Tämä projekti esittelee osaamistani full stack kehittämisessä korostaen sekä front-end että back-end näkökohtia, käyttäjän todennusta, tietojen pysyvyyttä ja intuitiivista käyttöliittymää. Se on käytännön osoitus koodaus taidoistani ja web kehityksen parhaiden käytäntöjen ymmärtämisestä.",
    github: "https://github.com/psivonen/taskmanager",
    stack: ["flask", "python", "javascript", "bootstrap", "mysql"],
  },
  {
    id: 3,
    title: "Plant Guide",
    subtitle: "React",
    description:
      "React sovellus, jossa kasveista kiinnostuneet käyttäjät voivat tutustua Perenual API:sta peräisin olevaan laajaan kasvikokoelmaan, joka tarjoaa kattavaa tietoa eri lajeista. Responsiivinen ja selkeä Bootstrapin avulla rakennettu käyttöliittymä, jotta palvelua voidaan käyttää monella eri laitteella. Projektissa on hyödynnetty Firebasen eri toimintoja käyttäjien todentamiseen ja tietokantaan.",
    thumbnail: "/static/images/plant-guide-thumbnail.png",
    images: [
      "/static/images/plant-guide-1.png",
      "/static/images/plant-guide-2.png",
      "/static/images/plant-guide-3.png"
    ],
    features: "Reactilla ja Bootstrapilla rakennettu käyttäjäystävällinen käyttöliittymä tarjoaa saumattoman ja mobiili ystävällisen käyttökokemuksen. Tarjolla laaja kasvilaji kokoelma, joista on saatavilla yksityiskohtaiset tiedot hoidosta, kastelusta, auringonvalo vaatimuksista ja paljon muuta. Sovelluksen esteettistä vetovoimaa parantaa Bootstrap, joka tarjoaa responsiivisen ja visuaalisesti houkuttelevan ulkoasun eri laitteissa. Reaaliaikainen tietojen synkronointi ja turvallinen käyttäjien todennus Firebasen avulla.",
    conclusion: "Tämä React sovellus esittelee taitojani front-end kehittämisessä, suunnittelussa ja integroinnissa ulkoisten API:iden kanssa.",
    demo: "https://psivonen.github.io/plant-guide-demo/",
    github: "https://github.com/psivonen/plant-guide",
    stack: ["react", "bootstrap", "firebase"],
  },
  {
    id: 4,
    title: "Search images",
    subtitle: "React ja Tailwind CSS",
    description:
      "React sovellus, jonka avulla käyttäjät voivat vaivattomasti etsiä laadukkaita kuvia. Tämä sovellus tarjoaa saumattoman ja visuaalisesti miellyttävän kokemuksen hyödyntäen Tailwind CSS:n tehoa tyylikkääseen ja responsiiviseen käyttöliittymään ja integroimalla Unsplash API:n laajaan kuvakirjastoon. Projekti perustuu ensimmäiseen React projektiini, jonka tein vuosia sitten. Halusin tuoda projektin nykypäivään ja kehittää React osaamistani.",
    thumbnail: "/static/images/search-images-thumbnail.png",
    images: [
      "/static/images/search-images-1.png",
      "/static/images/search-images-2.png",
    ],
    features: "Käyttäjä voi hakea korkealaatuisia kuvia hakusanan perusteella. Sovellus hakee dynaamisesti tulokset Unsplash API:a hyödyntämällä ja tarjoaa monipuolisen valikoiman kuvia. Visuaalisesti miellyttävä muotoilu, johon on hyödynnetty Tailwind CSS:n tehokkuutta ja tyylikkyyttä. Sovellus on myös optimoitu eri laitteille, mikä varmistaa johdonmukaisen ja miellyttävän käyttökokemuksen. Unsplash API:n resursseja hyödyntäen voidaan näyttää käyttäjälle korkealaatuisia kuvia.",
    conclusion: "Tämä React sovellus esittelee taitojani front-end kehittämisessä, suunnittelussa ja integroinnissa ulkoisten API:iden kanssa. Pystyin tuomaan vanhan projektini nykypäivään.",
    demo: "https://psivonen.github.io/search-images-II/",
    github: "https://github.com/psivonen/search-images-II",
    stack: ["react", "tailwindcss"],
  },
];
