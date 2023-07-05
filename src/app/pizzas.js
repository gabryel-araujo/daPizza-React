const pizza_premium = [
  {
    id: "pizza-queijo",
    category: "premium",
    image: "/Queijo Especial.jpeg",
    name: "Queijo Especial",
    description:
      "Farinha italiana, molho à base de creme de parmesão, mussarela,DorBlu, parmesão,noz e cranberry.",
    value: 40.0,
  },
  {
    id: "pizza-pepperoni",
    category: "premium",
    image: "/pepperoni.jpeg",
    name: "Pepperoni",
    description:
      "Farinha italiana, mussarela, molho de tomate integral, pepperoni premium, orégano.",
    value: 40.0,
  },
  {
    id: "pizza-amoda",
    category: "premium",
    image: "/à moda da casa.jpeg",
    name: "À Moda da Casa",
    description:
      "Farinha italiana, molho de tomate integral, mussarela, carne bovina,calabresa, linguiça de caça, pimentão, cebola roxa,molho barbecue e orégano.  ",
    value: 40.0,
  },
  {
    id: "pizza-bacon",
    category: "premium",
    image: "/bacon.jpeg",
    name: "Bacon",
    description:
      "Farinha italiana, molho detomate integral, mussarela,dorblu, bacon fatiado,pimenta, orégano. ",
    value: 40.0,
  },
  {
    id: "pizza-marguerita",
    category: "premium",
    image: "/marguerita.jpeg",
    name: "Marguerita",
    description:
      "Farinha italiana, molhode tomate integral, mussarela, tomate, molhopesto, orégano.",
    value: 40.0,
  },
  {
    id: "pizza-salmao",
    category: "premium",
    image: "/Salmão.jpeg",
    name: "Salmão",
    description:
      "Farinha italiana, molhode tomate integral, mussarela, salmão, tomate, espinafre, Dorblu, alho, limão, azeitonas, orégano.",
    value: 40.0,
  },
];

const pizza_tradicional = [
  {
    id: "pizza-calabresa",
    category: "tradicional",
    image: "/calabresa.png",
    name: "Calabresa",
    description:
      "Queijo mussarela, fatias finasde cebola, rodelas de calabresa,azeitona preta e orégano.",
    value: 30.0,
  },
  {
    id: "pizza-portuguesa",
    category: "tradicional",
    image: "/portuguesa.webp",
    name: "Portuguesa",
    description:
      "Queijo mussarela, presunto fatiado, ovos fatiados, cebola roxa, pimentões vermelhos e amarelos, azeitona preta e orégano. ",
    value: 30.0,
  },
  {
    id: "pizza-4queijos",
    category: "tradicional",
    image: "/4-queijos.jpg",
    name: "4 Quejjos<",
    description:
      "Queijo mussarela, gorgonzola, provolone, requeijão, azeitona preta e orégano.",
    value: 30.0,
  },
  {
    id: "pizza-brocolis",
    category: "tradicional",
    image: "/brocolis.png",
    name: "Brócolis",
    description:
      "Queijo mussarela fresco, brócolis, alho frito,orégano, molho especialde parmesão e queijo parmesão.",
    value: 30.0,
  },
  {
    id: 'pizza-franpiry"',
    category: "tradicional",
    image: "/frango-catupiry.png",
    name: "Frango Com Catupiry&reg;",
    description:
      "Queijo mussarela, frango assado em cubos, com catupirry, milho, bacon, azeitona preta e orégano.",
    value: 30.0,
  },
  {
    id: "pizza-carnesol",
    category: "tradicional",
    image: "/carne-de-sol.png",
    name: "Carne de Sol",
    description:
      "Queijo mussarela, carne de soldesfiada, finas fatias de cebola, Requeijão cremoso, azeitona preta e orégano. ",
    value: 30.0,
  },
  {
    id: "pizza-franbarbecue",
    category: "tradicional",
    image: "/frango-ao-barbecue.png",
    name: "Frango com Barbecue",
    description:
      "Queijo mussarela, frangoassado desfiado, finasfatias de bacon, molho barbecue,azeitona preta e orégano.",
    value: 30.0,
  },
  {
    id: "pizza-francheddar",
    category: "tradicional",
    image: "/frango-cheddar.png",
    name: "Frango com Cheddar",
    description:
      "Queijo mussarela fresco, frango desfiado temperado com ervas finas ecobertura de Cheddar.",
    value: 30.0,
  },
  {
    id: 'pizza-picanha"',
    category: "tradicional",
    image: "/picanha.png",
    name: "Picanha",
    description:
      "Queijo mussarela fresco, fatias de picanha temperadacom ervas finas, sal, creme de alho e manjericão.",
    value: 30.0,
  },
];

const pizza_doce = [
  {
    id: "pizza-chocolateP",
    category: "doce",
    image: "/chocolate.png",
    name: "Chocolate ao Leite",
    description: "Chocolate ao leite gratinado.",
    value: 35.0,
  },
  {
    id: "pizza-chocolateB",
    category: "doce",
    image: "/chocolate-branco.png",
    name: "Chocolate Branco",
    description: "Chocolate branco gratinado.",
    value: 35.0,
  },
  {
    id: "pizza-dois-amores",
    category: "doce",
    image: "/dois-amores.png",
    name: "Dois Amores",
    description: "Chocolate ao leite e  chocolate branco.",
    value: 35.0,
  },
];

export { pizza_premium, pizza_tradicional, pizza_doce };
