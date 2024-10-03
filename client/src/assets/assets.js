import greece from "./image/1.jpg";
import newYork from "./image/2.jpg";
import map from "./icons/map.png";
import messageAlert from "./icons/message-alert.png";
import plus from "./icons/plus.png";
import about2 from "./image/about2.png";
import bg from "./image/banner/bg.png";
import about from "./image/banner/about.jpg";
import plusCircle from "./icons/plus-circle.png";
import quotation from "./icons/quotation.png";
import star from "./icons/star.png";
import check from "./icons/check.svg";
import star2 from "./icons/star2.png";
import star3 from "./icons/star3.png";
import ceo1 from "./image/photos/1.jpg";
import ceo2 from "./image/photos/2.jpg";
import ceo3 from "./image/photos/3.jpg";
import auth from "./image/banner/auth.jpg";
import coffeeCup from "./icons/coffee-cup.png";
import coffeeCupWhite from "./icons/coffee-cup-white.png";
import notFound from "./image/banner/404.jpg";
import grapeFruit from "./image/products/grape-fruit.png";
import necafew from "./image/products/necafew.png";
import coffeeCup2 from "./icons/coffee-cup-2.png";
import priceTag from "./icons/price-tag.png";
import arrowLeft from "./icons/arrow-left.png";
import arrowRight from "./icons/arrow-right.png";
import plusSymbol from "./icons/plus-symbol-button.png";
import banner1 from "./image/banner/1.jpg";
import banner2 from "./image/banner/2.jpg";
import banner3 from "./image/banner/3.jpg";
import banner4 from "./image/banner/4.jpg";
import banner5 from "./image/banner/5.jpg";
import banner6 from "./image/banner/6.jpg";
import banner7 from "./image/banner/7.jpg";
import mp3Logo from "./image/logo/mp3-logo.png";
import json from "./json/json.js";

const image = { greece, newYork, about2, ceo1, ceo2, ceo3, mp3Logo };
const products = { grapeFruit, necafew };
const banner = {
  bg,
  about,
  auth,
  notFound,
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
};
const icons = {
  coffeeCup,
  check,
  coffeeCup2,
  coffeeCupWhite,
  priceTag,
  star,
  star2,
  star3,
  map,
  messageAlert,
  plus,
  plusCircle,
  quotation,
  arrowLeft,
  arrowRight,
  plusSymbol,
};

const jsonData = {
  header: { navLinks: json.navLinks },
  categoriesList: json.categoriesList,
  categoriesList2: json.categoriesList2,
  mobileHeaderList: json.mobileHeaderList,
  salesProductList: json.salesProductList,
  freshArrivalsList: json.freshArrivalsList,
  informationList: json.informationList,
  topCategoryList: json.topCategoryList,
  otherList: json.otherList,
  categoriesList3: json.categoriesList3,
  topList: json.topList,
  popularItemsList: json.popularItemsData,
  featuredProductList: json.featuredProductList,
  dailyDealsList: json.dailyDealsList,
  topPicksList: json.topPicksList,
  bannerList: json.bannerList,
  categoryList: json.categoryList,
  conditionList: json.conditionList,
  brandList: json.brandList,
  popularTagsList: json.popularTagsList,
  productSortingList: json.productSortingList,
  wishList: json.wishList,
  countryList: json.countryList,
  productTableList: json.productTableList,
  productDetail: json.productDetail,
  selectAmountList: json.selectAmountList,
  selectBreedList: json.selectBreedList,
};

const assets = { image, icons, banner, products, jsonData };

export default assets;
