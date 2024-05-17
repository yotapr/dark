"use client";
import { Badge, Button, Row, Col } from "reactstrap";
import BreadCrumbs from "@/app/(DashboardLayout)/layouts/breadcrumbs/BreadCrumbs";

import ComponentCard from "@/app/(DashboardLayout)/components/ComponentCard";
const Badges = () => {
  return (
    <div>
      <BreadCrumbs />
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
        <Col xs="12" md="12" sm="12">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-1*/}
          {/* --------------------------------------------------------------------------------*/}
          <ComponentCard title="Badges">
            <h1>
              Heading <Badge color="primary">New</Badge>
            </h1>
            <h2>
              Heading <Badge color="primary">New</Badge>
            </h2>
            <h3>
              Heading <Badge color="primary">New</Badge>
            </h3>
            <h4>
              Heading <Badge color="primary">New</Badge>
            </h4>
            <h5>
              Heading <Badge color="primary">New</Badge>
            </h5>
            <h6>
              Heading <Badge color="primary">New</Badge>
            </h6>
          </ComponentCard>
        </Col>
        <Col xs="12" md="12" sm="12">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-2*/}
          {/* --------------------------------------------------------------------------------*/}
          <ComponentCard title="Badges with Button">
            <Button color="primary" outline>
              Notifications <Badge color="primary">1</Badge>
            </Button>
            <Button color="secondary" className="ms-2" outline>
              Notifications <Badge color="secondary">2</Badge>
            </Button>
            <Button color="info" className="ms-2" outline>
              Notifications <Badge color="info">3</Badge>
            </Button>
            <Button color="warning" className="ms-2" outline>
              Notifications <Badge color="warning">4</Badge>
            </Button>
            <Button color="danger" className="ms-2" outline>
              Notifications <Badge color="danger">5</Badge>
            </Button>
          </ComponentCard>
        </Col>
        <Col xs="12" md="6">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-3*/}
          {/* --------------------------------------------------------------------------------*/}
          <ComponentCard title="Badges with Contextual variations">
            <Badge color="primary">Primary</Badge>
            <Badge color="secondary" className="ms-2">
              Secondary
            </Badge>
            <Badge color="success" className="ms-2">
              Success
            </Badge>
            <Badge color="danger" className="ms-2">
              Danger
            </Badge>
            <Badge color="warning" className="ms-2">
              Warning
            </Badge>
            <Badge color="info" className="ms-2">
              Info
            </Badge>
            <Badge color="light" className="ms-2">
              Light
            </Badge>
            <Badge color="dark" className="ms-2">
              Dark
            </Badge>
          </ComponentCard>
        </Col>
        <Col xs="12" md="6">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-4*/}
          {/* --------------------------------------------------------------------------------*/}
          <ComponentCard title="Badges with Pills">
            <Badge color="primary" pill>
              Primary
            </Badge>
            <Badge color="secondary" className="ms-2" pill>
              Secondary
            </Badge>
            <Badge color="success" className="ms-2" pill>
              Success
            </Badge>
            <Badge color="danger" className="ms-2" pill>
              Danger
            </Badge>
            <Badge color="warning" className="ms-2" pill>
              Warning
            </Badge>
            <Badge color="info" className="ms-2" pill>
              Info
            </Badge>
            <Badge color="light" className="ms-2" pill>
              Light
            </Badge>
            <Badge color="dark" className="ms-2" pill>
              Dark
            </Badge>
          </ComponentCard>
        </Col>
        <Col xs="12" md="6">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-5*/}
          {/* --------------------------------------------------------------------------------*/}
          <ComponentCard title="Badges with Links">
            <Badge href="" color="primary">
              Primary
            </Badge>
            <Badge href="" color="secondary" className="ms-2">
              Secondary
            </Badge>
            <Badge href="" color="success" className="ms-2">
              Success
            </Badge>
            <Badge href="" color="danger" className="ms-2">
              Danger
            </Badge>
            <Badge href="" color="warning" className="ms-2">
              Warning
            </Badge>
            <Badge href="" color="info" className="ms-2">
              Info
            </Badge>
            <Badge href="" color="light" className="ms-2">
              Light
            </Badge>
            <Badge href="" color="dark" className="ms-2">
              Dark
            </Badge>
          </ComponentCard>
        </Col>
      </Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
    </div>
  );
};

export default Badges;
