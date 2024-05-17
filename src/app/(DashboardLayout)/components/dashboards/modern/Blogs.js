import React from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import Image from "next/image";
import blog1 from "public/images/bg/bg1.jpg";
import blog2 from "public/images/bg/bg2.jpg";
import blog3 from "public/images/bg/bg3.jpg";

const blogData = [
  {
    img: blog1,
    id: 1,
    date: "March 1, 2022",
    title: "Featured Hydroflora Pots Garden & Outdoors",
    subtitle:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
  },
  {
    img: blog2,
    id: 2,
    date: "March 1, 2022",
    title: "Featured Hydroflora Pots Garden & Outdoors",
    subtitle:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
  },
  {
    img: blog3,
    id: 3,
    date: "March 1, 2022",
    title: "Featured Hydroflora Pots Garden & Outdoors",
    subtitle:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
  },
];

const Blogs = () => {
  return (
    /*--------------------------------------------------------------------------------*/
    /* Blogs                                                 */
    /*--------------------------------------------------------------------------------*/
    <Row>
      {blogData.map((bdata) => (
        <Col lg="4" key={bdata.id}>
          <Card>
            <Image src={bdata.img} alt={bdata.img} className="w-100" height={200} />
            <CardBody>
              <span className="fs-6 text-muted">{bdata.date}</span>
              <CardTitle className="mt-2 fw-bold" tag="h4">
                {bdata.title}
              </CardTitle>
              <CardSubtitle className="text-muted mt-1">
                {bdata.subtitle}
              </CardSubtitle>
              <Button color="primary" className="mt-3">
                Read More
              </Button>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Blogs;
