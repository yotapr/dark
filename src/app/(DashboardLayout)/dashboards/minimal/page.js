"use client"
import { Row, Col } from "reactstrap";
import BreadCrumbs from "@/app/(DashboardLayout)/layouts/breadcrumbs/BreadCrumbs";

import ProjectTable from "@/app/(DashboardLayout)/components/dashboards/modern/ProjectTable";
import WeatherReport from "@/app/(DashboardLayout)/components/dashboards/modern/WeatherReport";
import RecentMessages from "@/app/(DashboardLayout)/components/dashboards/modern/RecentMessages";
import TaskList from "@/app/(DashboardLayout)/components/dashboards/minimal/TaskList";
import TotalRevenue from "@/app/(DashboardLayout)/components/dashboards/minimal/TotalRevenue";
import PieCards from "@/app/(DashboardLayout)/components/dashboards/minimal/PieCards";
import EarningsMonth from "@/app/(DashboardLayout)/components/dashboards/minimal/EarningsMonth";
import IncomeYear from "@/app/(DashboardLayout)/components/dashboards/minimal/IncomeYear";

const Minimal = () => {
  return (
    <>
      <BreadCrumbs />
      <Row>
        <Col lg="6">
          <TotalRevenue />
        </Col>
        <Col lg="6">
          <PieCards />
        </Col>
      </Row>
      <Row>
        <Col lg="6">
          <EarningsMonth />
        </Col>
        <Col lg="6">
          <IncomeYear />
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
      <Row>
        <Col lg="6">
          <RecentMessages />
        </Col>
        <Col lg="6">
          <TaskList />
        </Col>
      </Row>
    </>
  );
};

export default Minimal;
