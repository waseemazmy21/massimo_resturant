type Slide = {
  id: number;
  title: string;
  imageURL: string;
};

export const slides: Slide[] = [
  {
    id: 1,
    title: 'always fresh & always crispy & always hot',
    imageURL: '/slide1.png',
  },
  {
    id: 2,
    title: 'we deliver your order wherever you are in NY',
    imageURL: '/slide2.png',
  },
  {
    id: 3,
    title: 'the best pizza to share with your family',
    imageURL: '/slide3.jpg',
  },
];

type MenuItem = {
  id: number;
  slug: string;
  title: string;
  desc?: string;
  img?: string;
  color: string;
};

export const menu: MenuItem[] = [
  {
    id: 1,
    slug: 'pastas',
    title: 'Italian Pastas',
    desc: 'Savor the taste of perfection with our exquisite Italian handmade pasta menu.',
    img: '/products/m1.png',
    color: 'white',
  },
  {
    id: 2,
    slug: 'burgers',
    title: 'Juicy Burgers',
    desc: 'Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.',
    img: '/products/m2.png',
    color: 'black',
  },
  {
    id: 3,
    slug: 'pizzas',
    title: 'Cheesy Pizzas',
    desc: 'Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.',
    img: '/products/m3.png',
    color: 'white',
  },
];
