"use client";
import { Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import BreadCrumbs from "@/app/(DashboardLayout)/layouts/breadcrumbs/BreadCrumbs";
import ComponentCard from "@/app/(DashboardLayout)/components/ComponentCard";

const Breadcrumbs = () => {
  return (
    <>
      <BreadCrumbs />
      <Row>
        <Col>
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <ComponentCard title="Basic Breadcrumbs">
            <Breadcrumb>
              <BreadcrumbItem active>Home</BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb>
              <BreadcrumbItem>
                <a>Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>Library</BreadcrumbItem>
            </Breadcrumb>
            <Breadcrumb>
              <BreadcrumbItem>
                <a>Home</a>
              </BreadcrumbItem>
              <BreadcrumbItem>
                <a>Library</a>
              </BreadcrumbItem>
              <BreadcrumbItem active>Data</BreadcrumbItem>
            </Breadcrumb>
          </ComponentCard>
        </Col>
      </Row>
    </>
  );
};

export default Breadcrumbs;
