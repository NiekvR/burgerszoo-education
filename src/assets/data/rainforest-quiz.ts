import { Quiz } from '../../app/quiz/model/quiz';

export const RAINFOREST: Quiz = {
  timed: false,
  title: 'REIS DOOR HET REGENWOUD',
  image: 'assets/img/burgers_bush_small.png',
  description: [
    'In Arnhem is het regenwoud dichtbij en kun je áltijd door het tropische bos wandelen – gewoon in Burgers’ Bush!',
    'Met deze digitale quiz zie en beleef je meer van het regenwoud. De tocht begint bij het verblijf van de otters.',
    'Als je na de laatste vraag de antwoorden verstuurt, krijg je de uitslag te zien. Onder wie alle vragen goed heeft verloten we drie echte Burgers’ Zoo knuffelaardvarkens!'
  ],
  personalInformation: 'Dat was de laatste vraag! Straks krijg je te zien wat de goede antwoorden waren! Denk je dat je misschien alle vragen goed hebt? Vul dan hier je naam, adres en emailadres in. Dan doe je mee voor een origineel aardvarkenknuffel! Natuurlijk kun je ons in dat vak ook vertellen, wat je van deze digitale speurtocht vond!',
  questions: [
    {
      category: {
        title: 'VOGELGELUIDEN',
        description: 'Al deze vogelsoorten leven vrij in de Bush. Ze zijn niet altijd makkelijk te zien. Het helpt om goed op geluiden te letten. Maar… welke vogel maakt welk geluid? ',
      },
      type: 'sound',
      sound: 'assets/sound/bush-sound-1.mp3',
      answers: [
        {
          answer: 'Fazantduif',
          image: 'assets/img/groennekfazantduif.jpg',
          correct: false
        },
        {
          answer: 'Irena',
          image: 'assets/img/irena3.png',
          correct: false
        },
        {
          answer: 'Geribbelde neushoornvogel',
          image: 'assets/img/geribbelde_neushoornvogel4.jpg',
          correct: true
        }
      ]
    },
    {
      category: {
        title: 'VOGELGELUIDEN',
        description: 'Al deze vogelsoorten leven vrij in de Bush. Ze zijn niet altijd makkelijk te zien. Het helpt om goed op geluiden te letten. Maar… welke vogel maakt welk geluid? ',
      },
      type: 'sound',
      sound: 'assets/sound/bush-sound-2.mp3',
      answers: [
        {
          answer: 'Shamalijster',
          image: 'assets/img/shamalijster.jpg',
          correct: true
        },
        {
          answer: 'Kuifibis',
          image: 'assets/img/kuifibis.jpg',
          correct: false
        },
        {
          answer: 'Dolksteekduif',
          image: 'assets/img/dolksteekduif.jpg',
          correct: false
        }
      ]
    },
    {
      category: {
        title: 'VOGELGELUIDEN',
        description: 'Al deze vogelsoorten leven vrij in de Bush. Ze zijn niet altijd makkelijk te zien. Het helpt om goed op geluiden te letten. Maar… welke vogel maakt welk geluid? ',
      },
      type: 'sound',
      sound: 'assets/sound/bush-sound-3.mp3',
      answers: [
        {
          answer: 'Chachalaca',
          image: 'assets/img/chachalaca.jpg',
          correct: true
        },
        {
          answer: 'Rode ibis',
          image: 'assets/img/rode-ibis.jpg',
          correct: false
        },
        {
          answer: 'Buidelspreeuw',
          image: 'assets/img/buidelspreeuw.png',
          correct: false
        }
      ]
    },
    {
      category: {
        title: 'PLANTEN EN DIEREN',
        description: 'Hoe goed ken jij de planten en dieren uit de Bush?',
      },
      question: 'Loop door naar de otters. Otters zijn kleine roofdieren. Er zijn slechts 13 ottersoorten op aarde, maar deze hebben zich aangepast aan allerlei verschillende ecosystemen. Zo leeft de kleinklauwotter die in de Bush zien is, in de mangroven en wetlands van Azië. Welke otter bestaat niet in het echt?',
      type: 'text',
      answers: [
        {
          answer: 'Een otter die in het Amazonegebied van Brazilië voorkomt, een echte regenwoudsoort dus.',
          correct: false
        },
        {
          answer: 'Een otter die in Australië in waterpoeltjes leeft en veel in eucalyptusbomen klimt.',
          correct: true
        },
        {
          answer: 'Een otter die bij Canada leeft, in koud zeewater zwemt en vooral zee-egels eet.',
          correct: false
        }
      ]
    },
    {
      category: {
        title: 'PLANTEN EN DIEREN',
        description: 'Hoe goed ken jij de planten en dieren uit de Bush?',
      },
      question: 'Draai je om: je ziet aan de andere kant van het pad de reuzenbamboe groeien. Bamboe is heel groot gras. Deze plant staat bekend om heel veel bijzondere feiten… maar één zin hier klopt niet. Welke?',
      type: 'text',
      image: 'assets/img/bamboe-header.jpg',
      answers: [
        {
          answer: 'Bamboe groeit superhard. Het record is ongeveer één meter groei per dag!',
          correct: false
        },
        {
          answer: 'Van bamboevezels maakt men kleding, maar ook borden en bekers.',
          correct: false
        },
        {
          answer: 'Bamboe bloeit maar één keer, daarna gaat de plant dood.',
          correct: false
        },
        {
          answer: 'Reuzenpanda’s eten uitsluitend reuzenbamboe.',
          correct: true
        },
        {
          answer: 'Er zijn zo’n 1000 verschillende soorten bamboe.',
          correct: false
        }
      ]
    },
    {
      category: {
        title: 'PLANTEN EN DIEREN',
        description: 'Hoe goed ken jij de planten en dieren uit de Bush?',
      },
      question: 'Loop een klein stukje door. Je steekt water over, en direct links én rechts van het pad zie je een plant met reusachtige bladeren: het olifantsoor. Elk blad van deze plant wordt zelfs nog groter dan het oor van een Aziatische olifant! Waarvoor gebruikt men de bladeren van deze plant in de tropen wel eens?',
      type: 'text',
      image: 'assets/img/olifantsoor.jpg',
      answers: [
        {
          answer: 'Voor een fotoshoot met een baby op zo’n groot blad.',
          correct: false
        },
        {
          answer: 'Als paraplu bij een tropische regenbui.',
          correct: true
        },
        {
          answer: 'Kleingesneden is het een prima salade; een blad is genoeg voor de hele familie.',
          correct: false
        }
      ]
    },
    {
      category: {
        title: 'PLANTEN EN DIEREN',
        description: 'Hoe goed ken jij de planten en dieren uit de Bush?',
      },
      question: 'Wat is de reden dat deze plant zulke grote bladeren heeft?',
      type: 'text',
      image: 'assets/img/olifantsoor.jpg',
      answers: [
        {
          answer: 'Omdat het regenwoud zo\'n vruchtbare grond heeft, groeit het olifantsoor gewoon zo hard.',
          correct: false
        },
        {
          answer: 'Olifanten lusten deze plant, en die hebben natuurlijk een grote maag en altijd veel honger.',
          correct: false
        },
        {
          answer: 'Omdat er in het regenwoud weinig licht tot op de grond komt, zijn grote bladeren handig om toch voldoende licht op te vangen.',
          correct: true
        }
      ]
    },
    {
      category: {
        title: 'PLANTEN EN DIEREN',
        description: 'Hoe goed ken jij de planten en dieren uit de Bush?',
      },
      question: 'Een stukje verderop zie je links van het pad een naaldboom: de kamerden. Er komen niet veel naaldbomen voor in het regenwoud. Vroeger kwamen de kamerden en haar familie wereldwijd voor, maar nu nog slechts op een paar plaatsen. Deze soort leeft al heel lang op aarde: ze waren het favoriete voedsel van dinosaurussen! Welke dino’s eten graag van de toppen van de kamerden?',
      type: 'text',
      image: 'assets/img/kamerden.jpg',
      answers: [
        {
          answer: 'De triceratops.',
          correct: false
        },
        {
          answer: 'De diplodocus.',
          correct: true
        },
        {
          answer: 'De velociraptor.',
          correct: false
        }
      ]
    },
    {
      category: {
        title: 'PLANTEN EN DIEREN',
        description: 'Hoe goed ken jij de planten en dieren uit de Bush?',
      },
      question: 'Kijk aan de andere kant van het pad een beetje de bosjes in. Op een meter afstand van het pad zie je de bloeiwijze en vruchten van een vissenstaartpalm. Dat ziet er bijzonder uit! Deze palm maakt trossen van kleine vruchten… maar wat is de meest bekende vrucht van een palm?',
      type: 'text',
      image: 'assets/img/visstaartpalm.jpg',
      answers: [
        {
          answer: 'De kokosnoot.',
          correct: true
        },
        {
          answer: 'De mango.',
          correct: false
        },
        {
          answer: 'De maracuja.',
          correct: false
        }
      ]
    },
    {
      category: {
        title: 'PLANTEN EN DIEREN',
        description: 'Hoe goed ken jij de planten en dieren uit de Bush?',
      },
      question: 'Op het dak van het huisje groeit een epifytische gember. Hij heeft een prachtige oranje bloeiwijze. Epifyten, dat zijn planten die op andere planten groeien. Zo komen ze aan licht, ook al zijn ze zelf klein. Op het dak zie je nog meer planten die zo leven. Welke planten zijn ook vaak epifytisch? (een stukje verder staat ook een bord waar het op te lezen is.)',
      type: 'text',
      image: 'assets/img/epifyt.jpg',
      answers: [
        {
          answer: 'Lianen.',
          correct: false
        },
        {
          answer: 'Bananenplanten.',
          correct: true
        },
        {
          answer: 'Orchideeën.',
          correct: false
        }
      ]
    },
    {
      category: {
        title: 'PLANTEN EN DIEREN',
        description: 'Hoe goed ken jij de planten en dieren uit de Bush?',
      },
      question: 'Blijf rechtdoor lopen. Dan zie je rechts van het pad twee cacaobomen. Deze bomen hebben bijna het hele jaar door op hun stam kleine bloemen en ook vruchten. De cacaoboom is een héél belangrijke boom – want zonder cacaoboom geen chocola! Van welk onderdeel van de boom wordt cacao gemaakt?',
      type: 'text',
      image: 'assets/img/cacao.jpg',
      answers: [
        {
          answer: 'Van het sap van de bladeren.',
          correct: false
        },
        {
          answer: 'Van de zaadjes in de vrucht.',
          correct: true
        },
        {
          answer: 'Van de schil van de vrucht.',
          correct: false
        }
      ]
    },
    {
      category: {
        title: 'PLANTEN EN DIEREN',
        description: 'Hoe goed ken jij de planten en dieren uit de Bush?',
      },
      question: 'Sla bij de volgende afslag rechts af. Tel vanaf het bordje ‘eenrichtingsverkeer’ de grotere bomen direct rechts naast het pad. In de tweede boom groeit een bijzondere klimplant: een vanille. Hoe krijgt de vanille het voor elkaar om op een boomstam omhoog te klimmen?',
      type: 'text',
      image: 'assets/img/vanille.jpg',
      answers: [
        {
          answer: 'Met zuignappen op de bladeren.',
          correct: false
        },
        {
          answer: 'Met zelf aangemaakt plaklijm op de bladeren.',
          correct: false
        },
        {
          answer: 'Met hechtwortels op de stengel.',
          correct: true
        }
      ]
    },
    {
      category: {
        title: 'PLANTEN EN DIEREN',
        description: 'Hoe goed ken jij de planten en dieren uit de Bush?',
      },
      question: 'Vervolg het pad tot je op de brug staat. Ga rechts in het water en op de boomstam in het water op zoek naar de terekay-schildpadden. Wat lusten deze waterschildpadden?',
      type: 'text',
      image: 'assets/img/terekay.jpg',
      answers: [
        {
          answer: 'Planten en slakken: het zijn alleseters.',
          correct: true
        },
        {
          answer: 'Waterplanten: het zijn vegetariërs.',
          correct: false
        },
        {
          answer: 'Vissen en kikkers: het zijn vleeseters.',
          correct: false
        }
      ]
    },
    {
      category: {
        title: 'PLANTEN EN DIEREN',
        description: 'Hoe goed ken jij de planten en dieren uit de Bush?',
      },
      question: 'Houd rechts aan, neem de afslag rechts en je komt opnieuw bij een brug. Rechts zit een dier dat goed kan zwemmen en knaagtanden heeft. Het is de grootste familie van de cavia’s. Hoe heet dit dier?',
      type: 'text',
      image: 'assets/img/capybara.jpg',
      answers: [
        {
          answer: 'Tamandua.',
          correct: false
        },
        {
          answer: 'Capybara.',
          correct: true
        },
        {
          answer: 'Tapir.',
          correct: false
        }
      ]
    },
    {
      category: {
        title: 'PLANTEN EN DIEREN',
        description: 'Hoe goed ken jij de planten en dieren uit de Bush?',
      },
      question: 'Kijk ook links van de brug! Daar zie je een afstand gigantisch lange bladeren! Bij welke plant horen deze enorm grote bladeren?',
      type: 'text',
      answers: [
        {
          answer: 'Palmen.',
          correct: true
        },
        {
          answer: 'Coniferen.',
          correct: false
        },
        {
          answer: 'Trompetbomen.',
          correct: false
        }
      ]
    },
    {
      category: {
        title: 'PLANTEN EN DIEREN',
        description: 'Hoe goed ken jij de planten en dieren uit de Bush?',
      },
      question: 'Aan het einde van de brug rechts zie je een heel grote boom. Het is een ficus, oftewel een vijgenboom. Waarom heeft hij van die gekke luchtwortels aan zijn takken hangen?',
      type: 'text',
      image: 'assets/img/ficus.jpg',
      answers: [
        {
          answer: 'Ze vangen extra water op.',
          correct: false
        },
        {
          answer: 'Ze vangen extra licht op.',
          correct: false
        },
        {
          answer: 'Ze groeien uit tot extra stammen en geven zo meer houvast in de grond.',
          correct: true
        }
      ]
    },
  ]
};

export const DESERT_ANIMALS: Quiz = {
  timed: true,
  title: 'DESERT DIEREN',
  image: 'assets/img/Mexicaanse_Nonpareil.jpg',
  description: [
    'Desert Dierzichtbaarheid'
  ],
  personalInformation: 'Dat was de laatste vraag! Straks krijg je te zien wat de goede antwoorden waren! Vul hier je naam (voornaame en achternaam) in!',
  questions: [
    {
      category: {
        title: 'DESERT DIEREN',
      },
      question: 'Welk dier is dit?',
      image: 'assets/img/gambels_kuifkwartel.jpg',
      type: 'open',
      answer: 'Gambels Kuifkwartel'
    },
    {
      category: {
        title: 'DESERT DIEREN',
      },
      question: 'Welk dier is dit?',
      image: 'assets/img/gele-kernbijter.jpg',
      type: 'open',
      answer: 'Gele kernbijter'
    },
    {
      category: {
        title: 'DESERT DIEREN',
      },
      question: 'Welk dier is dit?',
      image: 'assets/img/socorroduif.jpg',
      type: 'open',
      answer: 'Socorroduif'
    },
    {
      category: {
        title: 'DESERT DIEREN',
      },
      question: 'Welk dier is dit?',
      image: 'assets/img/regenbooggors.jpg',
      type: 'open',
      answer: 'Regenbooggors'
    },
    {
      category: {
        title: 'DESERT DIEREN',
      },
      question: 'Welk dier is dit?',
      image: 'assets/img/witvleugelduif.jpg',
      type: 'open',
      answer: 'Witvleugelduif'
    },
    {
      category: {
        title: 'DESERT DIEREN',
      },
      question: 'Welk dier is dit?',
      image: 'assets/img/zwartkopkardinaal.jpeg',
      type: 'open',
      answer: 'Zwartkopkardinaal'
    },
    {
      category: {
        title: 'DESERT DIEREN',
      },
      question: 'Welk dier is dit?',
      image: 'assets/img/mexicaanse_nonpareil_test.jpg',
      type: 'open',
      answer: 'Mexicaanse nonpareil'
    },
    {
      category: {
        title: 'DESERT DIEREN',
      },
      question: 'Welk dier is dit?',
      image: 'assets/img/ultramarijn_bisschop.jpg',
      type: 'open',
      answer: 'Ultramarijn bisschop'
    },
    {
      category: {
        title: 'DESERT DIEREN',
      },
      question: 'Welk dier is dit?',
      image: 'assets/img/montezuma_kwartel.jpg',
      type: 'open',
      answer: 'Montezumakwartel'
    },
    {
      category: {
        title: 'DESERT DIEREN',
      },
      question: 'Welk dier is dit?',
      image: 'assets/img/treursijs.jpg',
      type: 'open',
      answer: 'Treursijs'
    }
  ]
};

export const DESERT_ANIMALS_TEST: Quiz = {
  timed: true,
  title: 'DESERT DIEREN',
  image: 'assets/img/Mexicaanse_Nonpareil.jpg',
  description: [
    'Desert Dierzichtbaarheid'
  ],
  personalInformation: 'Dat was de laatste vraag! Straks krijg je te zien wat de goede antwoorden waren! Vul hier je naam (voornaame en achternaam) in!',
  questions: [
    {
      category: {
        title: 'DESERT DIEREN',
      },
      question: 'Welk dier is dit?',
      image: 'assets/img/rozebuikgors_man.jpg',
      type: 'open',
      answer: 'Rozebuikgors'
    },
    {
      category: {
        title: 'DESERT DIEREN',
      },
      question: 'Welk dier is dit?',
      image: 'assets/img/kalkoengier.jpg',
      type: 'open',
      answer: 'Kalkoengier'
    },
    {
      category: {
        title: 'DESERT DIEREN',
      },
      question: 'Welk dier is dit?',
      image: 'assets/img/Mexicaanse_roodmus.jpg',
      type: 'open',
      answer: 'Mexicaanse roodmus'
    },
    {
      category: {
        title: 'DESERT DIEREN',
      },
      question: 'Welk dier is dit?',
      image: 'assets/img/rozebuikgors_vrouw.jpeg',
      type: 'open',
      answer: 'Rozebuikgors'
    },
    {
      category: {
        title: 'DESERT DIEREN',
      },
      question: 'Welk dier is dit?',
      image: 'assets/img/musduif.jpeg',
      type: 'open',
      answer: 'Musduif'
    }
  ]
};
