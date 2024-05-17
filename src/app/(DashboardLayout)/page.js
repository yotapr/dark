'use client'
import { Row, Col } from "reactstrap";

import BreadCrumbs from "@/app/(DashboardLayout)/layouts/breadcrumbs/BreadCrumbs";

import ProgressCards from "@/app/(DashboardLayout)/components/dashboards/modern/ProgressCards";
import RevenueStatistics from "@/app/(DashboardLayout)/components/dashboards/modern/RevenueStatistics";
import SalesMonth from "@/app/(DashboardLayout)/components/dashboards/modern/SalesMonth";
import SalesPrediction from "@/app/(DashboardLayout)/components/dashboards/modern/SalesPrediction";
import SalesDifference from "@/app/(DashboardLayout)/components/dashboards/modern/SalesDifference";
import ProfileCard from "@/app/(DashboardLayout)/components/dashboards/modern/ProfileCard";
import ProjectTable from "@/app/(DashboardLayout)/components/dashboards/modern/ProjectTable";
import RecentMessages from "@/app/(DashboardLayout)/components/dashboards/modern/RecentMessages";
import Chat from "@/app/(DashboardLayout)/components/dashboards/modern/Chat";
import WeatherReport from "@/app/(DashboardLayout)/components/dashboards/modern/WeatherReport";
import Blogs from "@/app/(DashboardLayout)/components/dashboards/modern/Blogs";

export default function Home (){

  return (
    <>
      <BreadCrumbs />
      <ProgressCards />
      <RevenueStatistics />
      <Row>
        <Col lg="4">
          <SalesMonth />
        </Col>
        <Col lg="4">
          <SalesPrediction />
          <SalesDifference />
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
      {/*********************Project Table ************************/}
      <Row>
        <Col lg="8">
          <ProjectTable />
        </Col>
        <Col lg="4">
          <WeatherReport /> 
        </Col>
      </Row>
      <Blogs />
    </>
  )
}

