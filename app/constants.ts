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
