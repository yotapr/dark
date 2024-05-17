"use client";
import React from "react";
import { Row, Col } from "reactstrap";
import BreadCrumbs from "@/app/(DashboardLayout)/layouts/breadcrumbs/BreadCrumbs";
import Chat from "@/app/(DashboardLayout)/components/widgets/Chat";
import Feeds from "@/app/(DashboardLayout)/components/widgets/Feeds";

import ProfileCard from "@/app/(DashboardLayout)/components/widgets/ProfileCard";
import WeatherReport from "@/app/(DashboardLayout)/components/widgets/WeatherReport";
import CustomerSupport from "@/app/(DashboardLayout)/components/widgets/CustomerSupport";
import TaskList from "@/app/(DashboardLayout)/components/widgets/TaskList";
import BrowseStats from "@/app/(DashboardLayout)/components/widgets/BrowseStats";
import Notifications from "@/app/(DashboardLayout)/components/widgets/Notifications";

const Widgets = () => {
  return (
    <>
      <BreadCrumbs />
      <Row>
        <Col xs="12" lg="4">
          <BrowseStats />
          <ProfileCard />
          <TaskList />
        </Col>
        <Col xs="12" lg="4">
          <Chat />
          <CustomerSupport />
        </Col>
        <Col xs="12" lg="4">
          <Notifications />
          <WeatherReport />
          <Feeds />
        </Col>
      </Row>
    </>
  );
};

export default Widgets;
