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
  category: string;
  title: string;
  desc: string;
  imageURL: string;
  color: string;
};

export const menu: MenuItem[] = [
  {
    id: 1,
    category: 'pastas',
    title: 'Italian Pastas',
    desc: 'Savor the taste of perfection with our exquisite Italian handmade pasta menu.',
    imageURL: '/products/m1.png',
    color: 'white',
  },
  {
    id: 2,
    category: 'burgers',
    title: 'Juicy Burgers',
    desc: 'Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.',
    imageURL: '/products/m2.png',
    color: 'black',
  },
  {
    id: 3,
    category: 'pizzas',
    title: 'Cheesy Pizzas',
    desc: 'Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.',
    imageURL: '/products/m3.png',
    color: 'white',
  },
];

type Product = {
  id: string;
  category: string;
  title: string;
  desc: string;
  imageURL: string;
  price: number;
  options: { title: string; additionalPrice: number }[];
};

export const products: Product[] = [
  {
    id: '1',
    category: 'pizzas',
    title: 'Sicilian',
    desc: 'Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.',
    imageURL: '/products/p1.png',
    price: 24.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: '2',
    category: 'burgers',
    title: 'Bacon Deluxe',
    desc: 'Indulge in smoky goodness with a flame-grilled beef patty, topped with crispy bacon, melted cheddar cheese, caramelized onions, and a smattering of tangy BBQ sauce.',
    imageURL: '/products/p2.png',
    price: 29.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: '3',
    category: 'pizzas',
    title: 'Bella Napoli',
    desc: 'A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.',
    imageURL: '/products/p3.png',
    price: 24.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: '4',
    category: 'pastas',
    title: 'Spicy Arrabbiata',
    desc: 'Ignite your taste buds with this fiery pasta creation, combining penne in a spicy tomato sauce infused with garlic, red chili flakes, and fresh basil for the ultimate comfort food experience.',
    imageURL: '/products/p4.png',
    price: 26.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: '5',
    category: 'burgers',
    title: 'Jalapeño Fiesta',
    desc: 'Ignite your taste buds with a fiery kick! This burger features a succulent beef patty, fiery jalapeños, pepper jack cheese, and a zesty chipotle mayo sauce , and all the classic fixings on a toasted bun.',
    imageURL: '/products/p5.png',
    price: 29.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: '6',
    category: 'pizzas',

    title: 'Margherita Magic',
    desc: 'A timeless favorite with a twist, showcasing a thin crust topped with sweet tomatoes, fresh basil, creamy mozzarella, and a drizzle of extra virgin olive oil, fresh arugula, and a drizzle of balsamic glaze.',
    imageURL: '/products/p6.png',
    price: 24.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: '7',
    category: 'pastas',

    title: 'Garlic Parmesan Linguine',
    desc: "A garlic lover's delight, featuring linguine smothered in a creamy Parmesan sauce, infused with garlic and garnished with chopped parsley, bell peppers, and cherry tomatoes.",
    imageURL: '/products/p7.png',
    price: 28.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: '8',
    category: 'pizzas',
    title: 'Mediterranean Delight',
    desc: 'Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.',
    imageURL: '/products/p8.png',
    price: 32.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: '9',
    category: 'burgers',
    title: 'Hawaiian Teriyaki',
    desc: 'Experience a taste of the tropics with a juicy beef patty glazed in tangy teriyaki sauce, topped with grilled pineapple, crispy bacon, and fresh lettuce, and all the classic fixings on a toasted bun.',
    imageURL: '/products/p9.png',
    price: 29.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: '10',
    category: 'pizzas',
    title: 'Pesto Primavera',
    desc: 'A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.',
    imageURL: '/products/p10.png',
    price: 28.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: '11',
    category: 'pizzas',
    title: 'Veggie Supreme',
    desc: 'A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.',
    imageURL: '/products/p11.png',
    price: 24.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
  {
    id: '12',
    category: 'pizzas',
    title: 'Four Cheese Fantasy',
    desc: 'Experience pure cheesy bliss with a melty blend of mozzarella, cheddar, provolone, and Parmesan cheeses, creating a rich and indulgent pizza experience.',
    imageURL: '/products/p12.png',
    price: 22.9,
    options: [
      {
        title: 'Small',
        additionalPrice: 0,
      },
      {
        title: 'Medium',
        additionalPrice: 4,
      },
      {
        title: 'Large',
        additionalPrice: 6,
      },
    ],
  },
];

export const getProductById = (productId: string): Product | undefined => {
  return products.find((product) => product.id === productId);
};
