import React from "react";
import BreadcrumbHeader from "../../components/common/elements/Breadcrumb/BreadcrumbHeader.js";
import ContainerWrapper from "../../components/common/elements/Wrapper/ContainerWrapper.js";
import WishlistShareSection from "./components/WishlistShareSection/WishlistShareSection.js";
import assets from "../../assets/assets.js";
import TableRow from "./components/Table/TableRow.js";
import TableHeader from "./components/Table/TableHeader.js";
import TableTheadRow from "./components/Table/TableTheadRow.js";
import Table from "./components/Table/Table.js";
import TableBody from "./components/Table/TableBody.js";

function WishList() {
  const noAction = (event) => {
    event.preventDefault();
  };

  return (
    <>
      {/* Menu */}
      <BreadcrumbHeader
        label={"Wishlist"}
        breadcrumbData={[
          { id: 1, name: "Home", link: "/" },
          { id: 2, name: "Shop", link: "/shop" },
          { id: 3, name: "Wishlist", link: "/Wishlist" },
        ]}
      />

      {/* Table */}
      <ContainerWrapper className={"pt-[50px]"}>
        <Table>
          <TableTheadRow>
            <TableHeader></TableHeader>
            <TableHeader className={"text-left w-[32%]"}>Product</TableHeader>
            <TableHeader className={"text-left"}>Price</TableHeader>
            <TableHeader className={"text-left"}>Availability</TableHeader>
            <TableHeader className={"text-left"}>Total</TableHeader>
            <TableHeader className={"text-left"}>Actions</TableHeader>
          </TableTheadRow>
          <TableBody>
            {assets.jsonData.wishList.map((wish) => {
              return <TableRow key={wish.id} wishData={wish} noAction={noAction} />;
            })}
          </TableBody>
        </Table>
      </ContainerWrapper>

      {/* Social Media */}
      <ContainerWrapper className="pt-[30px]">
        <WishlistShareSection
          noAction={noAction}
          title={"Share Your Wishlist"}
          platforms={["facebook", "twitter", "instagram"]}
        />
      </ContainerWrapper>
    </>
  );
}

export default WishList;
