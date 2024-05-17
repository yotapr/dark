import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BandwidthUsage = () => {
  const options1 = {
    chart: {
      toolbar: {
        show: false,
      },
      fontFamily: "'Rubik', sans-serif",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    colors: ["#fff"],
    xaxis: {
      categories: ["0", "4", "8", "12", "16", "20", "24", "30"],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    grid: {
      show: false,
    },
    tooltip: {
      theme: "dark",
    },
  };

  const series1 = [
    {
      name: "Bandwidth usage",
      data: [5, 0, 12, 1, 8, 3, 12, 15],
    },
  ];

  return (
    <Card className="bg-info text-dark-white">
      <CardBody>
        <div className="d-flex">
          <div className="me-3 align-self-center">
            <h1>
              <i className="bi bi-pie-chart"></i>
            </h1>
          </div>
          <div>
            <h3>Bandwidth usage</h3>
            <h6>March 2022</h6>
          </div>
        </div>
        <Row>
          <Col xs={5} className="align-self-center">
            <h4 className="display-6  text-truncate">50 GB</h4>
          </Col>
          <Col xs={7} className="align-self-center">
            <div className="usage" style={{ height: "120px" }}>
              <Chart
                options={options1}
                series={series1}
                type="line"
                height={120}
                width={"100%"}
              />
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default BandwidthUsage;
