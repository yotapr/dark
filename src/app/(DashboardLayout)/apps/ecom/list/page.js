"use client";
import { Card, CardBody } from "reactstrap";
import TwoColumn from "@/app/(DashboardLayout)/components/twoColumn/TwoColumn";
import ShopListing from "@/app/(DashboardLayout)/components/apps/ecommerce/ShopListing";
import EcoSidebar from "@/app/(DashboardLayout)/components/apps/ecommerce/EcoSidebar";

const Shop = () => {
  return (
    <Card>
      <CardBody>
        <TwoColumn
          rightContent={<ShopListing />}
          leftContent={<EcoSidebar />}
        />
      </CardBody>
    </Card>
  );
};

export default Shop;
