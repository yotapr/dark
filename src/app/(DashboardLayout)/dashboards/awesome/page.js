"use client"
import { Col, Row } from "reactstrap";
import BreadCrumbs from "@/app/(DashboardLayout)/layouts/breadcrumbs/BreadCrumbs";

import TopCards from "@/app/(DashboardLayout)/components/dashboards/awesome/TopCards";
import ProductCalculation from "@/app/(DashboardLayout)/components/dashboards/awesome/ProductCalculation";
import MembersActivity from "@/app/(DashboardLayout)/components/dashboards/awesome/MembersActivity";
import CustomerSupport from "@/app/(DashboardLayout)/components/dashboards/awesome/CustomerSupport";
import TodaySchedule from "@/app/(DashboardLayout)/components/dashboards/awesome/TodaySchedule";
import SalesOverview from "@/app/(DashboardLayout)/components/dashboards/awesome/SalesOverview";
import TotalEarnings from "@/app/(DashboardLayout)/components/dashboards/awesome/TotalEarnings";
import Feeds from "@/app/(DashboardLayout)/components/dashboards/awesome/Feeds";

const awesome = () => {
  return (
    <>
      <BreadCrumbs />
      <TopCards />
      <ProductCalculation />
      <Row>
        <Col lg="6">
          <MembersActivity />
        </Col>
        <Col lg="6">
          <CustomerSupport />
        </Col>
      </Row>
      <Row>
        <Col lg="4">
          <TodaySchedule />
        </Col>
        <Col lg="8">
          <SalesOverview />
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <TotalEarnings />
        </Col>
        <Col lg="6">
          <Feeds />
        </Col>
      </Row>
    </>
  );
};

export default awesome;
