"use client"
import { Row, Col } from "reactstrap";
import BreadCrumbs from "@/app/(DashboardLayout)/layouts/breadcrumbs/BreadCrumbs";

import ProfileCard from "@/app/(DashboardLayout)/components/dashboards/modern/ProfileCard";

import UserProfile from "@/app/(DashboardLayout)/components/dashboards/classy/UserProfile";
import Reviews from "@/app/(DashboardLayout)/components/dashboards/classy/Reviews";
import DownloadCount from "@/app/(DashboardLayout)/components/dashboards/classy/DownloadCount";
import ProductsAvailability from "@/app/(DashboardLayout)/components/dashboards/classy/ProductsAvailability";
import VisitSource from "@/app/(DashboardLayout)/components/dashboards/classy/VisitSource";
import Notifications from "@/app/(DashboardLayout)/components/dashboards/classy/Notifications";
import InstaFace from "@/app/(DashboardLayout)/components/dashboards/classy/InstaFace";
import BandwidthUsage from "@/app/(DashboardLayout)/components/dashboards/classy/BandwidthUsage";
import Downloads from "@/app/(DashboardLayout)/components/dashboards/classy/Downloads";
import Experiances from "@/app/(DashboardLayout)/components/dashboards/classy/Experiances";
import Timeline from "@/app/(DashboardLayout)/components/dashboards/classy/Timeline";

const Classy = () => {
  return (
    <>
      <BreadCrumbs />
      <InstaFace />
      <Row>
        <Col lg="6">
          <BandwidthUsage />
        </Col>
        <Col lg="6">
          <Downloads />
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <Notifications />
        </Col>
        <Col lg="6">
          <VisitSource />
        </Col>
      </Row>
      <DownloadCount />
      <Reviews />
      <ProductsAvailability />

      <Row>
        <Col lg="4">
          <ProfileCard />
        </Col>
        <Col lg="8">
          <Experiances />
        </Col>
      </Row>

      <Row>
        <Col lg="4">
          <UserProfile />
        </Col>
        <Col lg="8">
          <Timeline />
        </Col>
      </Row>
    </>
  );
};

export default Classy;
