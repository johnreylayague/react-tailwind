import React, { useContext } from "react";
import assets from "../../assets/assets.js";
import PromoBanner from "../../components/common/elements/Banner/PromoBanner.js";
import ContainerWrapper from "../../components/common/elements/Wrapper/ContainerWrapper.js";
import TopMenuList from "./components/TopMenuList/TopMenuList.js";
import CategorySidebar from "./components/CategorySidebar/CategorySidebar.js";
import FeatureCard from "./components/FeaturedCard/FeaturedCard.js";
import SectionHeader from "../../components/common/elements/Section/SectionHeader.js";
import SectionTitle from "../../components/common/elements/Section/SectionTitle.js";
import PopularItemsList from "./components/PopularItemsList/PopularItemsList.js";
import NewsletterSignup from "../../components/common/elements/NewsletterSignup/NewsletterSignup.js";
import UserContext from "../../contexts/UserContext.js";
import TopPickList from "./components/TopPickList/TopPickList.js";
import DailyDealsList from "./components/DailyDealsList/DailyDealsList.js";
import FeaturedList from "./components/FeaturedList/FeaturedList.js";
import FreshArrivalsList from "./components/FreshArrivalsList/FreshArrivalsList.js";
import SpecialOfferBannerList from "./components/SpecialOfferBannerList/SpecialOfferBannerList.js";
import GridWrapper from "../../components/common/elements/Wrapper/GridWrapper.js";
import {
  dailyDealsSettings,
  freshArrivalsSettings,
  onSaleSettings,
} from "../../utils/sliderSettings.js";

function Homepage() {
  const { handleProductModal } = useContext(UserContext);

  return (
    <>
      {/* Banner */}
      <ContainerWrapper className="lg:pt-[50px] pt-[40px]">
        <GridWrapper>
          <div className="col-span-12 lg:col-span-3 px-[15px]">
            <CategorySidebar dataCategories={assets.jsonData.categoriesList3} />
          </div>
          <div className="col-span-12 lg:col-span-9 px-[15px]">
            <TopMenuList dataTopList={assets.jsonData.topList} />
            <SpecialOfferBannerList
              dataSalesProductList={assets.jsonData.salesProductList}
              sliderSettings={onSaleSettings}
            />
          </div>
        </GridWrapper>
      </ContainerWrapper>

      {/* Feature Card */}
      <ContainerWrapper className={"pt-[46px]"}>
        <GridWrapper>
          <FeatureCard
            imgSrc={assets.icons.coffeeCup}
            imgAlt="flaticon coffeCup"
            title="Guaranteed Coffee"
            description="At Guaranteed Coffee, we pride ourselves on delivering a consistently excellent cup of coffee every time."
          />
          <FeatureCard
            imgSrc={assets.icons.coffeeCup2}
            imgAlt="flaticon coffeCup2"
            title="Daily Robustaing"
            description="At our cafe, the art of Daily Robustaing is taken very seriously. Every day, we roast robusta beans to achieve a perfect balance."
          />
          <FeatureCard
            imgSrc={assets.icons.priceTag}
            imgAlt="flaticon pricetag"
            title="Cheap & Creamyy"
            description="For those who love a touch of indulgence without breaking the bank, our Cheap & Creamyy options are the perfect choice."
          />
        </GridWrapper>
      </ContainerWrapper>

      {/* Fresh Arrivals */}
      <ContainerWrapper className={"mt-[49px]"}>
        <SectionHeader title={"Fresh Arrivals"} />
        <FreshArrivalsList
          dataFreshArrivalsList={assets.jsonData.freshArrivalsList}
          openModal={handleProductModal}
          sliderSettings={freshArrivalsSettings}
        />
      </ContainerWrapper>

      {/* Featured Products, Popular Categories and Daily Deals */}
      <ContainerWrapper className="pt-[49px]">
        <GridWrapper>
          <div className="col-span-12 lg:col-span-8 px-[15px]">
            <SectionTitle title={"Featured Products"} />
            <FeaturedList
              dataFeaturedProductList={assets.jsonData.featuredProductList}
              openModal={handleProductModal}
            />
          </div>
          <div className="col-span-12 lg:col-span-4 px-[15px]">
            <SectionTitle title={"Popular Categories"} />
            <PopularItemsList dataPopularItems={assets.jsonData.popularItemsList} />

            <SectionTitle title={"Daily Deals"} />
            <DailyDealsList
              sliderSettings={dailyDealsSettings}
              dataDailyDealsList={assets.jsonData.dailyDealsList}
            />

            <NewsletterSignup
              className={"mt-[62px]"}
              title={"Join our news letter"}
              description={"Get exclusive weekly deals with our newsletter subscription"}
              buttonLabel={"JOIN NEWS LETTER"}
              inputPlaceholder={"Email Address"}
            />
          </div>
        </GridWrapper>
      </ContainerWrapper>

      {/* Promo Banner */}
      <ContainerWrapper className="pt-[30px]">
        <PromoBanner
          title={"Buy Today and Get 20% Off"}
          pharagraph={
            "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, con."
          }
          buttonLabel={"SHOP NOW"}
          buttonLink={"/shop"}
          backgroundSrc={assets.banner.bg}
          backgroundAlt={"group of coffee"}
        />
      </ContainerWrapper>

      {/* Top Picks */}
      <ContainerWrapper className="pt-[50px]">
        <SectionTitle title={"Top Picks"} />
        <TopPickList
          dataTopPicksList={assets.jsonData.topPicksList}
          openModal={handleProductModal}
        />
      </ContainerWrapper>
    </>
  );
}

export default Homepage;
