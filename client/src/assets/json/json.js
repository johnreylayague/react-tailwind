const navLinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About Us", link: "/about-us" },
  { id: 3, name: "Legal", link: "/legal" },
  { id: 4, name: "Login", link: "/login" },
  { id: 5, name: "Sign Up", link: "/sign-up" },
  { id: 6, name: "Shop", link: "/shop" },
  { id: 7, name: "Contact Us", link: "/contact-us" },
];

const featuredProductList = [
  {
    id: 1,
    discount: "20% Off",
    image: "lemon.png",
    name: "Vita and Jell Lemon",
    currentPrice: "8$",
    previousPrice: "14$",
    stars: [true, true, true, true, false],
  },
  {
    id: 2,
    image: "mango.png",
    name: "Mango",
    currentPrice: "20$",
    previousPrice: "24$",
    stars: [true, true, true, true, false],
  },
  {
    id: 3,
    image: "mandarin.png",
    name: "Mandarin",
    currentPrice: "3$",
    previousPrice: "7$",
    stars: [true, true, true, true, false],
  },
  {
    id: 4,
    image: "grape-fruit.png",
    name: "Grape Fruit",
    currentPrice: "14$",
    previousPrice: "18$",
    stars: [true, true, true, true, false],
  },
  {
    id: 5,
    image: "grape-fruit-2-boxes.png",
    name: "Grape Fruit",
    currentPrice: "15$",
    previousPrice: "20$",
    stars: [true, true, true, true, false],
  },
  {
    id: 6,
    image: "grape-fruit-2-boxes.png",
    name: "Grape Fruit",
    currentPrice: "15$",
    previousPrice: "20$",
    stars: [true, true, true, true, false],
  },
];

const dailyDealsList = [
  {
    id: 1,
    discount: "20% Off",
    imageAlt: "lemon product",
    image: "lemon.png",
    name: "Vita and Jell Lemon",
    description:
      "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    currentPrice: "8$",
    previousPrice: "14$",
    stars: [true, true, true, false, false],
  },
  {
    id: 2,
    discount: "40% Off",
    image: "mandarin-box.png",
    name: "Fruit and Jell Mandarin",
    description:
      "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    stars: [true, true, true, false, false],
    currentPrice: "12$",
    previousPrice: "20$",
  },
];

const freshArrivalsList = [
  {
    id: 1,
    discount: "20% Off",
    imageAlt: "lemon product",
    image: "lemon.png",
    name: "Vita and Jell Lemon",
    description:
      "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    currentPrice: "8$",
    previousPrice: "14$",
    stars: [true, true, true, false, false],
  },
  {
    id: 2,
    discount: "40% Off",
    image: "mandarin-box.png",
    name: "Fruit and Jell Mandarin",
    description:
      "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    stars: [true, true, true, false, false],
    currentPrice: "12$",
    previousPrice: "20$",
  },
  {
    id: 3,
    discount: "40% Off",
    image: "mandarin-box.png",
    name: "Fruit and Jell Mandarin",
    description:
      "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    stars: [true, true, true, false, false],
    currentPrice: "12$",
    previousPrice: "20$",
  },
];

const salesProductList = [
  {
    id: 1,
    discountCode: "COFFEE223",
    image: "lemon.png",
    percentageSale: "40%",
    description:
      "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Vestibulum ac diam sit",
  },
  {
    id: 2,
    discountCode: "COFFEE223",
    image: "mandarin-box.png",
    percentageSale: "20%",
    description:
      "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Vestibulum ac diam sit",
  },
  {
    id: 3,
    discountCode: "COFFEE223",
    image: "mango-box-side.png",
    percentageSale: "20%",
    description:
      "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Vestibulum ac diam sit",
  },
];

const topPicksList = [
  {
    id: 1,
    image: "mandarin-box.png",
    name: "Vita and Jell Lemon",
    description:
      "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    currentPrice: "8$",
    previousPrice: "14$",
    stars: [true, true, true, false, false],
  },
  {
    id: 2,
    image: "lemon.png",
    name: "Vita and Jell Lemon",
    description:
      "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    currentPrice: "8$",
    previousPrice: "14$",
    stars: [true, true, true, true, false],
  },
  {
    id: 3,
    image: "mango-box-side.png",
    name: "Vita and Jell Lemon",
    description:
      "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    currentPrice: "8$",
    previousPrice: "14$",
    stars: [true, true, true, true, false],
  },
  {
    id: 4,
    image: "lemon.png",
    name: "Vita and Jell Lemon",
    description:
      "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    currentPrice: "8$",
    previousPrice: "14$",
    stars: [true, true, true, true, false],
  },
];

const informationList = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About Us",
    link: "/about-us",
  },
  {
    id: 3,
    name: "Contact Us",
    link: "/contact-us",
  },
  {
    id: 4,
    name: "Shop",
    link: "/shop",
  },
];

const topCategoryList = [
  {
    id: 1,
    name: "Cafe latte",
    link: "/shop",
  },
  {
    id: 2,
    name: "Ice Coffee",
    link: "/shop",
  },
  {
    id: 3,
    name: "Mocha",
    link: "/shop",
  },
  {
    id: 4,
    name: "Cappucino",
    link: "/shop",
  },
  {
    id: 5,
    name: "Espresso",
    link: "/shop",
  },
];

const otherList = [
  {
    id: 1,
    name: "Checkout",
    link: "/shop/checkout",
  },
  {
    id: 2,
    name: "Cart",
    link: "/shop/cart",
  },
  {
    id: 3,
    name: "Product",
    link: "/shop/product/1",
  },
  {
    id: 4,
    name: "Shop",
    link: "/shop",
  },
  {
    id: 5,
    name: "Legal",
    link: "/legal",
  },
];

const mobileHeaderList = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About Us",
    link: "/about-us",
  },
  {
    id: 3,
    name: "Legal",
    link: "/legal",
  },
  {
    id: 4,
    name: "Login",
    link: "/login",
  },
  {
    id: 5,
    name: "Sign Up",
    link: "/sign-up",
  },
  {
    id: 6,
    name: "Shop",
    link: "/shop",
    subCategory: [
      {
        id: 1,
        name: "Shop 1",
        link: "/shop-1",
      },
      {
        id: 2,
        name: "Shop 2",
        link: "/shop-2",
      },
    ],
  },
  {
    id: 7,
    name: "Contact Us",
    link: "/contact-us",
  },
];

const countryList = [
  { id: 1, name: "Afghanistan" },
  { id: 2, name: "Allan Island" },
  { id: 3, name: "Albania" },
  { id: 4, name: "Algeria" },
  { id: 5, name: "American Samoa" },
];

const productTableList = [
  {
    name: "Italian Coffee",
    details: "1 Piece",
    quantity: "x1",
    total: "23.99$",
    link: "/",
  },
  {
    name: "Hybrid",
    details: "Packets",
    quantity: "x1",
    total: "9.99$",
    link: "/",
  },
  {
    name: "Mocha",
    details: "3 Packets",
    quantity: "x2",
    total: "13.99$",
    link: "/",
  },
];

const wishList = [
  {
    id: 1,
    productName: "Lemon",
    price: "9.00$",
    availability: true,
    image: "lemon.png",
    total: "15.00$",
  },
  {
    id: 2,
    productName: "Grape Fruit",
    price: "12.00$",
    availability: true,
    image: "grape-fruit.png",
    total: "15.00$",
  },
  {
    id: 3,
    productName: "Mandarin",
    price: "5.00$",
    availability: true,
    image: "mandarin.png",
    total: "9.00$",
  },
];

const categoriesList = [
  { id: 1, name: "Cafe Latte" },
  { id: 2, name: "Espresso" },
  { id: 3, name: "Cappucino" },
  { id: 4, name: "Ice Coffee" },
  { id: 5, name: "Mocha" },
  { id: 6, name: "Arabica Roasted" },
  { id: 7, name: "Mixed Sorts" },
];
const categoriesList2 = [
  { id: 1, name: "Espresso and milk" },
  { id: 2, name: "Pumpkin Pottage" },
  { id: 3, name: "Arabica Roasted" },
  { id: 4, name: "Cafe Latte" },
  { id: 5, name: "Cappucino" },
  { id: 6, name: "Espresso" },
  { id: 7, name: "Italian Coffee" },
  { id: 8, name: "Arabica" },
];

const topSellerList = [
  { id: 1, name: "Cafe Latte", link: "/shop/product/1" },
  { id: 2, name: "Espresso", link: "/shop/product/1" },
  { id: 3, name: "Cappucino", link: "/shop/product/1" },
];

const popularItemsData = [
  {
    id: 1,
    title: "Cafe Latte",
    total: 32,
    subList: [
      { id: 1, title: "Espresso and milk", total: 14, subList: "", link: "/shop" },
      { id: 2, title: "Espresso and milk", total: 39, subList: "", link: "/shop" },
      { id: 3, title: "Seed", total: 54, subList: "", link: "/shop" },
    ],
    link: "/shop",
  },
  { id: 2, title: "Cappucino", total: 24, subList: "", link: "/shop" },
  { id: 3, title: "Rich espresso", total: 44, subList: "", link: "/shop" },
  { id: 4, title: "Strong", total: 15, subList: "", link: "/shop" },
  { id: 5, title: "Europian Coffee", total: 43, subList: "", link: "/shop" },
  { id: 6, title: "Mocha", total: 75, subList: "", link: "/shop" },
];

const topList = [
  { id: 1, title: "Daily Deals", subList: "", link: "/shop" },
  {
    id: 2,
    title: "Top Sellers",
    subList: [
      { id: 1, name: "Cafe Latte", link: "/shop" },
      { id: 2, name: "Espresso", link: "/shop" },
      { id: 3, name: "Cappucino", link: "/shop" },
    ],
  },
  { id: 3, title: "Fresh Arrivals", subList: "", link: "/shop" },
  { id: 4, title: "Gift Carts", subList: "", link: "/shop" },
  { id: 5, title: "Wish List", subList: "", link: "/shop" },
];

const categoriesList3 = [
  {
    id: 1,
    title: "Cafe Latte",
    subCategories: {
      title: "Cafe Latte",
      subTitle: "Experience fresh coffee like never before",
      bannerImage: "1.jpg",
      bannerAlt: "making coffee",
      categories: [
        [
          { id: 1, title: "Espresso and milk", link: "/shop/product/1" },
          { id: 2, title: "Pumpkin Pottage", link: "/shop/product/1" },
          { id: 3, title: "Arabica Roasted", link: "/shop/product/1" },
          { id: 4, title: "Cafe Latte", link: "/shop/product/1" },
          { id: 5, title: "Cappucino", link: "/shop/product/1" },
          { id: 6, title: "Espresso", link: "/shop/product/1" },
          { id: 7, title: "Italian Coffee", link: "/shop/product/1" },
          { id: 8, title: "Arabica", link: "/shop/product/1" },
        ],
        [
          { id: 9, title: "Cappucino", link: "/shop/product/1" },
          { id: 10, title: "Mocha", link: "/shop/product/1" },
          { id: 11, title: "Mixed Sorts", link: "/shop/product/1" },
          { id: 12, title: "Robusta Roasted", link: "/shop/product/1" },
          { id: 13, title: "Cappucino", link: "/shop/product/1" },
          { id: 14, title: "Creamy", link: "/shop/product/1" },
          { id: 15, title: "Marijuana Extract", link: "/shop/product/1" },
          { id: 16, title: "Strong", link: "/shop/product/1" },
        ],
      ],
    },
    link: "/shop/product/1",
  },
  { id: 2, title: "Cappucino", link: "/shop/product/1", subCategories: "" },
  {
    id: 3,
    title: "Rich espresso",
    link: "/shop/product/1",
    subCategories: "",
  },
  {
    id: 4,
    title: "Arabica Roasted",
    link: "/shop/product/1",
    subCategories: "",
  },
  { id: 5, title: "Espresso", link: "/shop/product/1", subCategories: "" },
  { id: 6, title: "Mocha", link: "/shop/product/1", subCategories: "" },
  {
    id: 7,
    title: "Risotto",
    subCategories: {
      title: "Risotto",
      subTitle: "Experience fresh coffee like never before",
      bannerImage: "8.jpg",
      bannerAlt: "serving coffee",
      categories: [
        [
          { id: 1, title: "Espresso and milk", link: "/shop/product/1" },
          { id: 2, title: "Pumpkin Pottage", link: "/shop/product/1" },
          { id: 3, title: "Arabica Roasted", link: "/shop/product/1" },
          { id: 4, title: "Cafe Latte", link: "/shop/product/1" },
          { id: 5, title: "Cappucino", link: "/shop/product/1" },
          { id: 6, title: "Espresso", link: "/shop/product/1" },
          { id: 7, title: "Italian Coffee", link: "/shop/product/1" },
          { id: 8, title: "Arabica", link: "/shop/product/1" },
        ],
        [
          { id: 9, title: "Cappucino", link: "/shop/product/1" },
          { id: 10, title: "Mocha", link: "/shop/product/1" },
          { id: 11, title: "Mixed Sorts", link: "/shop/product/1" },
          { id: 12, title: "Robusta Roasted", link: "/shop/product/1" },
          { id: 13, title: "Cappucino", link: "/shop/product/1" },
          { id: 14, title: "Creamy", link: "/shop/product/1" },
          { id: 15, title: "Marijuana Extract", link: "/shop/product/1" },
          { id: 16, title: "Strong", link: "/shop/product/1" },
        ],
      ],
    },
    link: "/shop/product/1",
  },
  {
    id: 8,
    title: "More Categories",
    subCategories: {
      title: "More Categories",
      subTitle: "Explore more categories that we offer",
      bannerImage: "9.jpg",
      bannerAlt: "grain of coffee",
      categories: [
        [
          { id: 1, title: "Espresso and milk", link: "/shop/product/1" },
          { id: 2, title: "Pumpkin Pottage", link: "/shop/product/1" },
          { id: 3, title: "Arabica Roasted", link: "/shop/product/1" },
          { id: 4, title: "Cafe Latte", link: "/shop/product/1" },
          { id: 5, title: "Cappucino", link: "/shop/product/1" },
        ],
        [
          { id: 6, title: "Cappucino", link: "/shop/product/1" },
          { id: 7, title: "Mocha", link: "/shop/product/1" },
          { id: 8, title: "Mixed Sorts", link: "/shop/product/1" },
          { id: 9, title: "Robusta Roasted", link: "/shop/product/1" },
        ],
      ],
    },
    link: "/shop/product/1",
  },
];

const bannerList = [
  { id: 1, image: "7.jpg", alt: "women drinking coffee" },
  { id: 2, image: "2.jpg", alt: "a cup of coffee" },
  { id: 3, image: "3.jpg", alt: "a cup of coffee" },
  {
    id: 4,
    image: "4.jpg",
    alt: "people drinking and serving their coffee",
  },
  { id: 5, image: "5.jpg", alt: "2 cup of coffee" },
  {
    id: 6,
    image: "6.jpg",
    alt: "showcasing different kinds of coffee blenders",
  },
];

const categoryList = [
  { id: "Cafe Latte", name: "Cafe Latte" },
  { id: "Cappucino", name: "Cappucino" },
  { id: "Ice Coffee", name: "Ice Coffee" },
  { id: "Arabica Roasted", name: "Arabica Roasted" },
  { id: "Espresso", name: "Espresso" },
  { id: "Mocha", name: "Mocha" },
];

const conditionList = [
  { id: "Daily Deal", name: "Daily Deal" },
  { id: "On Sale", name: "On Sale" },
];

const brandList = [
  { id: "Green Life", name: "Green Life" },
  { id: "Whole Cafe Lattes", name: "Whole Cafe Lattes" },
  { id: "Shrubbery co.", name: "Shrubbery co." },
  { id: "Better Life", name: "Better Life" },
  { id: "Coffeea", name: "Coffeea" },
];

const popularTagsList = [
  { id: "Creamy", name: "Creamy" },
  { id: "Cafe Latte", name: "Cafe Latte" },
  { id: "Darker", name: "Darker" },
  { id: "Coffee", name: "Coffee" },
  { id: "Nescafes", name: "Nescafes" },
  { id: "Green", name: "Green" },
  { id: "Robusta Roasted", name: "Robusta Roasted" },
  { id: "Mocha", name: "Mocha" },
];

const productSortingList = [
  { id: 0, label: "Latest release" },
  { id: 1, label: "Price: High - Low" },
  { id: 2, label: "Price: Low - High" },
  { id: 3, label: "Popularity Sorting" },
];

const productDetail = {
  productName: "Cold brewed",
  productImage: "necafew.png",
  stars: [true, true, true, false, false],
  currentPrice: "1",
  previousPrice: "2",
  reviews: "25",
  quantity: 1,
  description:
    "Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl te mpus convallis quis ac lectus.",
  longDescription:
    "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Cafe Latte truck quinoa nesciunt laborum eiusmod.",
  productAttribute: [
    { id: 1, label: "Categories", value: "Cafe Latte" },
    { id: 2, label: "Tags", value: "Creamyy, Coffee, Nescafe" },
    { id: 3, label: "SKU", value: "N/A" },
  ],
  productRecommendation: [
    {
      id: 1,
      imageSrc: "lemon.png",
      imageAlt: "lemon",
      title: "Lemon Fruit",
    },
    {
      id: 2,
      imageSrc: "mandarin.png",
      imageAlt: "mandarin",
      title: "Mandarin Fruit",
    },
  ],
  reviewsData: [
    {
      id: 1,
      image: "2.jpg",
      name: "John Doe",
      date: "January 13 2020",
      stars: [true, true, true, true, false],
      comment:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
    },
    {
      id: 2,
      image: "1.jpg",
      name: "Jane Smith",
      date: "January 10 2023",
      stars: [true, true, true, false, false],
      comment:
        "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches.",
    },
  ],
  informationData: [
    { id: 1, attribute: "Color", value: "blue, red, yellow, green" },
    { id: 2, attribute: "Material", value: "wood, plastic, stainless steel" },
  ],
};

const selectAmountList = [
  { id: 1, label: "1 Packet" },
  { id: 2, label: "2 Packet" },
  { id: 3, label: "3 Packet" },
];

const selectBreedList = [
  { id: 1, label: "1 Packet" },
  { id: 2, label: "2 Packet" },
  { id: 3, label: "3 Packet" },
];

const json = {
  selectAmountList,
  selectBreedList,
  countryList,
  popularTagsList,
  categoryList,
  conditionList,
  brandList,
  bannerList,
  categoriesList3,
  topList,
  popularItemsData,
  featuredProductList,
  dailyDealsList,
  freshArrivalsList,
  salesProductList,
  topPicksList,
  informationList,
  otherList,
  topCategoryList,
  wishList,
  mobileHeaderList,
  categoriesList,
  categoriesList2,
  topSellerList,
  navLinks,
  productSortingList,
  productTableList,
  productDetail,
};

export default json;
