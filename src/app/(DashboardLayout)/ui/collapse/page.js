"use client";
import React, { useState } from "react";
import {
  Collapse,
  Button,
  Card,
  CardBody,
  CardTitle,
  UncontrolledCollapse,
  Fade,
  Row,
  Col,
} from "reactstrap";
import BreadCrumbs from "@/app/(DashboardLayout)/layouts/breadcrumbs/BreadCrumbs";
import ComponentCard from "@/app/(DashboardLayout)/components/ComponentCard";

const CollapseComponent = () => {
  const [collapse, setCollapse] = useState(false);
  const [collapse2, setCollapse2] = useState(false);
  const [collapse3, setCollapse3] = useState(false);
  const [status, setStatus] = useState('Closed');
  // const [fadeIn, setFadeIn] = useState(true);

  const onEntering = () => setStatus('Opening...');

  const onEntered = () => setStatus('Opened');

  const onExiting = () => setStatus('Closing...');

  const onExited = () => setStatus('Closed');

  const toggle = () => setCollapse(!collapse);

  const toggle2 = () => setCollapse2(!collapse2);

  const toggle3 = () => setCollapse3(!collapse3);

  // const toggle3 = () => setFadeIn(!fadeIn);

  return (
    <div>
      <BreadCrumbs />
      {/* --------------------------------------------------------------------------------*/}
      {/* Start Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
        <Col xs="12" md="4">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-3*/}
          {/* --------------------------------------------------------------------------------*/}
          <ComponentCard title="Collapse">
            <Button color="primary" onClick={toggle.bind(null)} style={{ marginBottom: '1rem' }}>
              Toggle
            </Button>
            <Collapse isOpen={collapse}>
              <Card className="border">
                <CardBody>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                  cred nesciunt sapiente ea proident.
                </CardBody>
              </Card>
            </Collapse>
          </ComponentCard>
        </Col>
        <Col xs="12" md="4">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-3*/}
          {/* --------------------------------------------------------------------------------*/}
          <ComponentCard title="Collapse with Events">
            <Button color="primary" onClick={toggle2.bind(null)} style={{ marginBottom: '1rem' }}>
              Toggle
            </Button>
            <CardTitle tag="h4">Current state: {status}</CardTitle>
            <Collapse
              isOpen={collapse2}
              onEntering={onEntering.bind(null)}
              onEntered={onEntered.bind(null)}
              onExiting={onExiting.bind(null)}
              onExited={onExited.bind(null)}
            >
              <Card className="border">
                <CardBody>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                  cred nesciunt sapiente ea proident.
                </CardBody>
              </Card>
            </Collapse>
          </ComponentCard>
        </Col>
        <Col xs="12" md="4">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-3*/}
          {/* --------------------------------------------------------------------------------*/}
          <ComponentCard title="Uncontrolled Collapse">
            <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
              Toggle
            </Button>
            <UncontrolledCollapse toggler="#toggler">
              <Card className="border">
                <CardBody>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas
                  debitis similique porro a molestias consequuntur earum odio officiis natus, amet
                  hic, iste sed dignissimos esse fuga! Minus, alias.
                </CardBody>
              </Card>
            </UncontrolledCollapse>
          </ComponentCard>
        </Col>
        <Col xs="12" md="4">
          {/* --------------------------------------------------------------------------------*/}
          {/* Card-3*/}
          {/* --------------------------------------------------------------------------------*/}

          <ComponentCard title="Collapse Horizontal">
            <Button color="primary" onClick={toggle3.bind(null)} style={{ marginBottom: '1rem' }}>
              Toggle
            </Button>
            <Collapse isOpen={collapse3} horizontal>
              <Card className="border" style={{
        height: '200px'
      }}>
                <CardBody>
                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                  richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                  cred nesciunt sapiente ea proident.
                </CardBody>
              </Card>
            </Collapse>
          </ComponentCard>
        </Col>
      </Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* End Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
    </div>
  );
};


export default CollapseComponent;
