"use client";
import React from "react";
import { Row, Col } from "reactstrap";
import BreadCrumbs from "@/app/(DashboardLayout)/layouts/breadcrumbs/BreadCrumbs";
import ficons from "@/app/api/icons/Ficons";
import ComponentCard from "@/app/(DashboardLayout)/components/ComponentCard";

const FeatherIcons = () => {
  return (
    <div>
      <BreadCrumbs />
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <ComponentCard title="Feather">
        <Row>
          {ficons.map((item) => (
            <Col xs="12" md="6" lg="3" key={item.title}>
              <div className="hstack gap-3 py-3">
                {item.name}
                <span>{item.title}</span>
              </div>
            </Col>
          ))}
        </Row>
      </ComponentCard>
      {/* --------------------------------------------------------------------------------*/}
      {/* End Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
    </div>
  );
};

export default FeatherIcons;

