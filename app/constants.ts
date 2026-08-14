import { Dumbbell, Salad, Pill, Target, Clock, Award, Check } from 'lucide-react';
import { getImageUrl } from "@/lib/imagekit";


 export const navigation = [
        {name: "POČETNA", href: "/",},
        {name: "O NAMA", href: "/o-nama",},
        {name: "BLOG", href: "/blog",},
        {name: "GALERIJA", href: "/galerija",},
        {name: "KONTAKT", href: "/kontakt",},
    ];

export const features = [
  {
    icon: Target,
    title: 'Fokus na Cilj',
    description: 'Precizno definiši svoje ciljeve i prati napredak bez nagađanja',
  },
  {
    icon: Clock,
    title: 'Bez Ograničenja',
    description: 'Trenirajte u svoje vrjeme sa 24/7 pristupom',
  },
  {
    icon: Award,
    title: 'Dokazana Transformacija',
    description: 'Dokazane metode koje donose stvarne i mjerljive rezultate',
  },
];

export const categories = [
    {
      icon: Dumbbell,
      title: 'Trening',
      slug: "trening",
      description: 'Stručno vođenje za izgradnju mišića i povećanje snage',
      image: getImageUrl("fitness-maximus/home-categry/kategorija-trening.jpg"),
    },
    {
      icon: Salad,
      title: 'Ishrana',
      slug: "ishrana",
      description: 'Zdravi planovi ishrane i savjeti za optimalne rezultate',
      image: getImageUrl("fitness-maximus/home-categry/kategorija-ishrana.jpg"),
    },
    {
      icon: Pill,
      title: 'Suplementacija',
      slug: "suplementacija",
      description: 'Kvalitetna suplementacija za podršku snazi, oporavku i napretku u treningu',
      image: getImageUrl("fitness-maximus/home-categry/kategorija-suplementacija.jpg"),
    },
];

export const pricingPlans = [
  {
    name: "Basic",
    price: "40",
    period: "Mjesec",
    description: "Idealno za srednjoškolce",
    features: [
      "Pristup teretani od 08:00 do 16:00 (Pon–Sub)",
      "Svlačionice i tuševi",
      "Wi-Fi pristup",
      "Samostalni slobodni treninzi"
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "60",
    period: "Mjesec",
    description: "Potpuna sloboda treninga bez ograničenja",
    features: [
      "Pristup teretani 24/7",
      "Svlačionice i tuševi",
      "Wi-Fi pristup",
      "Samostalni slobodni treninzi"
    ],
    popular: true,
  },
  {
    name: "Standard",
    price: "50",
    period: "Mjesec",
    description: "Najbolji izbor za redovne treninge",
    features: [
      "Pristup teretani od 08:00 do 22:00 (Pon–Sub)",
      "Svlačionice i tuševi",
      "Wi-Fi pristup",
      "Samostalni slobodni treninzi"
    ],
    popular: false,
  },
]



export const galleryImages = [
  {
    id: "gallery-001",
    url: getImageUrl("gallery/gym-01.jpg"),
    title: "Naša teretana",
  },
  {
    id: "gallery-002",
    url: getImageUrl("gallery/gym-02.jpg"),
    title: "Kardio zona",
  },
  {
    id: "gallery-003",
    url: getImageUrl("gallery/gym-03.jpg"),
    title: "Zona za trening snage",
  },
  {
    id: "gallery-004",
    url: getImageUrl("gallery/gym-04.jpg"),
    title: "Slobodni tegovi",
  },
  {
    id: "gallery-005",
    url: getImageUrl("gallery/gym-05.jpg"),
    title: "Bench zona",
  },
  {
    id: "gallery-006",
    url: getImageUrl("gallery/gym-06.jpg"),
    title: "Funkcionalna zona",
  },
  {
    id: "gallery-007",
    url: getImageUrl("gallery/gym-07.jpg"),
    title: "Fitness oprema",
  },
  {
    id: "gallery-008",
    url: getImageUrl("gallery/gym-08.jpg"),
    title: "Prostor za trening",
  },
  {
    id: "gallery-009",
    url: getImageUrl("gallery/gym-09.jpg"),
    title: "Profesionalne sprave",
  },
  {
    id: "gallery-010",
    url: getImageUrl("gallery/gym-10.jpg"),
    title: "Trening zona",
  },
  {
    id: "gallery-011",
    url: getImageUrl("gallery/gym-11.jpg"),
    title: "Oprema za teretanu",
  },
  {
    id: "gallery-012",
    url: getImageUrl("gallery/gym-12.jpg"),
    title: "Maximus Gym",
  },
]