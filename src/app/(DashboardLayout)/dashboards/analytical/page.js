"use client"
import { Row, Col } from "reactstrap";
import BreadCrumbs from "@/app/(DashboardLayout)/layouts/breadcrumbs/BreadCrumbs";
import ChartCards from "@/app/(DashboardLayout)/components/dashboards/analytical/ChartCards";
import TotalRevenue from "@/app/(DashboardLayout)/components/dashboards/analytical/TotalRevenue";
import BrowseStats from "@/app/(DashboardLayout)/components/dashboards/analytical/BrowseStats";
import RecentMessages from "@/app/(DashboardLayout)/components/dashboards/modern/RecentMessages";
import Chat from "@/app/(DashboardLayout)/components/dashboards/modern/Chat";
import ProfileCard from "@/app/(DashboardLayout)/components/dashboards/modern/ProfileCard";
import VisitSource from "@/app/(DashboardLayout)/components/dashboards/classy/VisitSource";
import SalesPrediction from "@/app/(DashboardLayout)/components/dashboards/modern/SalesPrediction";
import SalesDifference from "@/app/(DashboardLayout)/components/dashboards/modern/SalesDifference";
import Experiances from "@/app/(DashboardLayout)/components/dashboards/classy/Experiances";

const Analytical = () => {
  return (
    <>
      <BreadCrumbs />
      <ChartCards />
      <Row>
        <Col lg="8">
          <TotalRevenue />
        </Col>
        <Col lg="4">
          <SalesPrediction />
          <SalesDifference />
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <VisitSource />
        </Col>
        <Col lg="6">
          <BrowseStats />
        </Col>
      </Row>
      <Row>
        <Col lg="8">
          <Experiances />
        </Col>
        <Col lg="4">
          <ProfileCard />
        </Col>
      </Row>
      {/*********************Chat & comment ************************/}
      <Row>
        <Col lg="6" sm="12">
          <Chat />
        </Col>
        <Col lg="6" sm="12">
          <RecentMessages />
        </Col>
      </Row>
    </>
  );
};

export default Analytical;
