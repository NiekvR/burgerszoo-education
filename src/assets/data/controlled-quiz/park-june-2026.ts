import {Quiz} from '../../../app/quiz/model/quiz';
import {Ecodisplays} from '../../../app/quiz/model/ecodisplays.enum';

export const ParkJune2026: Quiz = {
  timed: true,
  title: 'Park June 2026',
  image: 'assets/img/rode_tangara.jpg',
  description: [
    'De quiz start zo. Even geduld aub.'
  ],
  questions: [
    {
      category: {
        title: 'PARK',
      },
      question: 'Jonge stokstaartjes worden vooral opgevoed door hun...',
      image: 'assets/img/stokstaartjes.jpg',
      type: 'text',
      ecodisplay: Ecodisplays.Park,
      answers: [
        {
          answer: 'moeder',
          correct: false
        },
        {
          answer: 'tantes',
          correct: false
        },
        {
          answer: 'oudere broers en zussen',
          correct: true
        }
      ]
    },
    {
      category: {
        title: 'PARK',
      },
      question: "Mannelijke moeraswallaby's hebben geen buidel.",
      image: 'assets/img/wallaby.jpg',
      type: 'text',
      ecodisplay: Ecodisplays.Park,
      answers: [
        {
          answer: 'Waar',
          correct: true
        },
        {
          answer: 'Niet waar',
          correct: false
        }
      ]
    },
    {
      category: {
        title: 'PARK',
      },
      question: 'De huid van een Zwartvoetpinguïns wordt tijdens een duik nauwelijk nat omdat..',
      image: 'assets/img/pinguin.jpg',
      type: 'text',
      ecodisplay: Ecodisplays.Park,
      answers: [
        {
          answer: '..er een olie-achtige substantie in de veren wordt gesmeerd wat water weert.',
          correct: false
        },
        {
          answer: '..de veren als een dakpan over elkaar liggen en hieronder een isolerend laagje lucht vast gehouden wordt.',
          correct: true
        },
        {
          answer: '..dit is niet waar. De huid van pinguins wordt gewoon nat. Het water in Zuid-Afrika is lekker warm.',
          correct: false
        }
      ]
    },
    {
      category: {
        title: 'PARK',
      },
      question: "Alleen mannelijke gorilla's slaan zichzelf op de borst.",
      image: 'assets/img/gorilla.jpg',
      type: 'text',
      ecodisplay: Ecodisplays.Park,
      answers: [
        {
          answer: 'Waar',
          correct: false
        },
        {
          answer: 'Niet waar',
          correct: true
        }
      ]
    },
    {
      category: {
        title: 'PARK',
      },
      question: "Aziatische olifanten zijn zogenoemde 'Ecosystem engineers', dit doen ze door..",
      image: 'assets/img/olifant.jpg',
      type: 'text',
      ecodisplay: Ecodisplays.Park,
      answers: [
        {
          answer: '..zaden te verspreiden via hun ontlasting en bomen om te duwen.',
          correct: true
        },
        {
          answer: '..tijgers in hun gebied weg te jagen.',
          correct: false
        },
        {
          answer: '..veel eten te laten valen, waarmee ze veel zaden verspreiden en eten voor andere dieren beschikbaar maken.',
          correct: false
        }
      ]
    },
    {
      category: {
        title: 'PARK',
      },
      question: 'Leuk om op deze anonieme manier mijn kennis te testen!',
      image: 'assets/img/doodshoofdaapje.jpg',
      type: 'text',
      ecodisplay: Ecodisplays.Park,
      answers: [
        {
          answer: 'Oneens',
          correct: false
        },
        {
          answer: 'Geen mening',
          correct: false
        },
        {
          answer: 'Eens',
          correct: false
        }
      ]
    },
    {
      category: {
        title: 'PARK',
      },
      question: '10 seconden is echt te weinig tijd om de vragen te beantwoorden.',
      image: 'assets/img/panter.jpg',
      type: 'text',
      ecodisplay: Ecodisplays.Park,
      answers: [
        {
          answer: 'Oneens',
          correct: false
        },
        {
          answer: 'Geen mening',
          correct: false
        },
        {
          answer: 'Eens',
          correct: false
        }
      ]
    }
  ]
};
