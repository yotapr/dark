"use client";
import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Modal,
  ModalHeader,
} from "reactstrap";
import BreadCrumbs from "@/app/(DashboardLayout)/layouts/breadcrumbs/BreadCrumbs";
import Image from "next/image";
import img1 from "public/images/bg/bg1.jpg";
import img2 from "public/images/bg/bg2.jpg";
import img3 from "public/images/bg/bg3.jpg";
import img4 from "public/images/bg/bg4.jpg";

const Gallery = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);
  const [modal6, setModal6] = useState(false);
  const [modal7, setModal7] = useState(false);
  const [modal8, setModal8] = useState(false);
  const [modal11, setModal11] = useState(false);
  const [modal12, setModal12] = useState(false);
  const [modal13, setModal13] = useState(false);
  const [modal14, setModal14] = useState(false);
  const [modal15, setModal15] = useState(false);
  const [modal16, setModal16] = useState(false);
  const [modal17, setModal17] = useState(false);

  const toggle1 = () => {
    setModal1(!modal1);
  };

  const toggle2 = () => {
    setModal2(!modal2);
  };

  const toggle3 = () => {
    setModal3(!modal3);
  };

  const toggle4 = () => {
    setModal4(!modal4);
  };

  const toggle5 = () => {
    setModal5(!modal5);
  };

  const toggle6 = () => {
    setModal6(!modal6);
  };

  const toggle7 = () => {
    setModal7(!modal7);
  };

  const toggle8 = () => {
    setModal8(!modal8);
  };

  const toggle11 = () => {
    setModal11(!modal11);
  };
  const toggle12 = () => {
    setModal12(!modal12);
  };
  const toggle13 = () => {
    setModal13(!modal13);
  };
  const toggle14 = () => {
    setModal14(!modal14);
  };
  const toggle15 = () => {
    setModal15(!modal15);
  };
  const toggle16 = () => {
    setModal16(!modal16);
  };
  const toggle17 = () => {
    setModal17(!modal17);
  };

  return (
    <>
      <BreadCrumbs />
      <Row>
        <Col xs="12" lg="3">
          <Card>
            <Image
              src={img1}
              alt="Card image cap"
              className="cursor-pointer w-100" height="180"
              onClick={toggle1.bind(null)} 
            />
            <Modal isOpen={modal1} toggle={toggle1.bind(null)}>
              <ModalHeader toggle={toggle1.bind(null)}>Image 1</ModalHeader>
              <Image src={img1} alt="" />
              <div className="p-3"></div>
            </Modal>
            <CardBody className="text-center">
              <CardTitle tag="h4" className="mb-1">
                Project title
              </CardTitle>
              <CardSubtitle className="text-muted mb-0">
                subtitle of project
              </CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" lg="3">
          <Card>
            <Image
              src={img2}
              alt="Card image cap"
              className="cursor-pointer w-100" height="180"
              onClick={toggle2.bind(null)}
            />
            <Modal isOpen={modal2} toggle={toggle2.bind(null)}>
              <ModalHeader toggle={toggle2.bind(null)}>Image 2</ModalHeader>
              <Image src={img2} alt="" />
              <div className="p-3"></div>
            </Modal>
            <CardBody className="text-center">
              <CardTitle tag="h4" className="mb-1">
                Project title
              </CardTitle>
              <CardSubtitle className="text-muted mb-0">
                subtitle of project
              </CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" lg="3">
          <Card>
            <Image
              src={img3}
              alt="Card image cap"
              className="cursor-pointer w-100" height="180"
              onClick={toggle3.bind(null)}
            />
            <Modal isOpen={modal3} toggle={toggle3.bind(null)}>
              <ModalHeader toggle={toggle3.bind(null)}>Image 3</ModalHeader>
              <Image src={img3} alt="" />
              <div className="p-3"></div>
            </Modal>
            <CardBody className="text-center">
              <CardTitle tag="h4" className="mb-1">
                Project title
              </CardTitle>
              <CardSubtitle className="text-muted mb-0">
                subtitle of project
              </CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" lg="3">
          <Card>
            <Image
              src={img4}
              alt="Card image cap"
              className="cursor-pointer w-100" height="180"
              onClick={toggle4.bind(null)}
            />
            <Modal isOpen={modal4} toggle={toggle4.bind(null)}>
              <ModalHeader toggle={toggle4.bind(null)}>Image 4</ModalHeader>
              <Image src={img4} alt="" />
              <div className="p-3"></div>
            </Modal>
            <CardBody className="text-center">
              <CardTitle tag="h4" className="mb-1">
                Project title
              </CardTitle>
              <CardSubtitle className="text-muted mb-0">
                subtitle of project
              </CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" lg="3">
          <Card>
            <Image
              src={img1}
              alt="Card image cap"
              className="cursor-pointer w-100" height="180"
              onClick={toggle5.bind(null)}
            />
            <Modal isOpen={modal5} toggle={toggle5.bind(null)}>
              <ModalHeader toggle={toggle5.bind(null)}>Image 5</ModalHeader>
              <Image src={img1} alt="" />
              <div className="p-3"></div>
            </Modal>
            <CardBody className="text-center">
              <CardTitle tag="h4" className="mb-1">
                Project title
              </CardTitle>
              <CardSubtitle className="text-muted mb-0">
                subtitle of project
              </CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" lg="3">
          <Card>
            <Image
              src={img2}
              alt="Card image cap"
              className="cursor-pointer w-100" height="180"
              onClick={toggle6.bind(null)}
            />
            <Modal isOpen={modal6} toggle={toggle6.bind(null)}>
              <ModalHeader toggle={toggle6.bind(null)}>Image 6</ModalHeader>
              <Image src={img2} alt="" />
              <div className="p-3"></div>
            </Modal>
            <CardBody className="text-center">
              <CardTitle tag="h4" className="mb-1">
                Project title
              </CardTitle>
              <CardSubtitle className="text-muted mb-0">
                subtitle of project
              </CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" lg="3">
          <Card>
            <Image
              src={img4}
              alt="Card image cap"
              className="cursor-pointer w-100" height="180"
              onClick={toggle7.bind(null)}
            />
            <Modal isOpen={modal7} toggle={toggle7.bind(null)}>
              <ModalHeader toggle={toggle7.bind(null)}>Image 7</ModalHeader>
              <Image src={img4} alt="" />
              <div className="p-3"></div>
            </Modal>
            <CardBody className="text-center">
              <CardTitle tag="h4" className="mb-1">
                Project title
              </CardTitle>
              <CardSubtitle className="text-muted mb-0">
                subtitle of project
              </CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col xs="12" lg="3">
          <Card>
            <Image
              src={img1}
              alt="Card image cap"
              className="cursor-pointer w-100" height="180"
              onClick={toggle8.bind(null)}
            />
            <Modal isOpen={modal8} toggle={toggle8.bind(null)}>
              <ModalHeader toggle={toggle8.bind(null)}>Image 8</ModalHeader>
              <Image src={img1} alt="" />
              <div className="p-3"></div>
            </Modal>
            <CardBody className="text-center">
              <CardTitle tag="h4" className="mb-1">
                Project title
              </CardTitle>
              <CardSubtitle className="text-muted mb-0">
                subtitle of project
              </CardSubtitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <h4 className="mb-5 mt-4">Other Gallery</h4>
      <Row>
        <Col md="6" lg="4">
          <Card>
            <Image
              src={img1}
              alt="Card image cap"
              className="cursor-pointer w-100" height="180"
              onClick={toggle11.bind(null)}
            />
            <Modal isOpen={modal11} toggle={toggle11.bind(null)}>
              <ModalHeader toggle={toggle11.bind(null)}>Image 7</ModalHeader>
              <Image src={img1} alt="" />
              <div className="p-3"></div>
            </Modal>
            <CardBody className="text-center">
              <CardTitle tag="h4" className="mb-1">
                Project title
              </CardTitle>
              <CardSubtitle className="text-muted mb-0">
                subtitle of project
              </CardSubtitle>
            </CardBody>
          </Card>
          <Card>
            <Image
              src={img3}
              alt="Card image cap"
              className="cursor-pointer w-100" height="180"
              onClick={toggle14.bind(null)}
            />
            <Modal isOpen={modal14} toggle={toggle14.bind(null)}>
              <ModalHeader toggle={toggle14.bind(null)}>Image 3</ModalHeader>
              <Image src={img3} alt="" />
              <div className="p-3"></div>
            </Modal>
            <CardBody className="text-center">
              <CardTitle tag="h4" className="mb-1">
                Project title
              </CardTitle>
              <CardSubtitle className="text-muted mb-0">
                subtitle of project
              </CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card>
            <Image
              src={img2}
              alt="Card image cap"
              className="cursor-pointer w-100" height="180"
              onClick={toggle12.bind(null)}
            />
            <Modal isOpen={modal12} toggle={toggle12.bind(null)}>
              <ModalHeader toggle={toggle12.bind(null)}>Image 9</ModalHeader>
              <Image src={img2} alt="" />
              <div className="p-3"></div>
            </Modal>
            <CardBody className="text-center">
              <CardTitle tag="h4" className="mb-1">
                Project title
              </CardTitle>
              <CardSubtitle className="text-muted mb-0">
                subtitle of project
              </CardSubtitle>
            </CardBody>
          </Card>
          <Card>
            <Image
              src={img4}
              alt="Card image cap"
              className="cursor-pointer w-100" height="180"
              onClick={toggle15.bind(null)}
            />
            <Modal isOpen={modal15} toggle={toggle15.bind(null)}>
              <ModalHeader toggle={toggle15.bind(null)}>Image 4</ModalHeader>
              <Image src={img4} alt="" />
              <div className="p-3"></div>
            </Modal>
            <CardBody className="text-center">
              <CardTitle tag="h4" className="mb-1">
                Project title
              </CardTitle>
              <CardSubtitle className="text-muted mb-0">
                subtitle of project
              </CardSubtitle>
            </CardBody>
          </Card>
          <Card>
            <Image
              src={img2}
              alt="Card image cap"
              className="cursor-pointer w-100" height="180"
              onClick={toggle17.bind(null)}
            />
            <Modal isOpen={modal17} toggle={toggle17.bind(null)}>
              <ModalHeader toggle={toggle17.bind(null)}>Image 9</ModalHeader>
              <Image src={img2} alt="" />
              <div className="p-3"></div>
            </Modal>
            <CardBody className="text-center">
              <CardTitle tag="h4" className="mb-1">
                Project title
              </CardTitle>
              <CardSubtitle className="text-muted mb-0">
                subtitle of project
              </CardSubtitle>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card>
            <Image
              src={img4}
              alt="Card image cap"
              className="cursor-pointer w-100" height="180"
              onClick={toggle13.bind(null)}
            />
            <Modal isOpen={modal13} toggle={toggle13.bind(null)}>
              <ModalHeader toggle={toggle13.bind(null)}>Image 8</ModalHeader>
              <Image src={img4} alt="" />
              <div className="p-3"></div>
            </Modal>
            <CardBody className="text-center">
              <CardTitle tag="h4" className="mb-1">
                Project title
              </CardTitle>
              <CardSubtitle className="text-muted mb-0">
                subtitle of project
              </CardSubtitle>
            </CardBody>
          </Card>
          <Card>
            <Image
              src={img3}
              alt="Card image cap"
              className="cursor-pointer w-100" height="180"
              onClick={toggle16.bind(null)}
            />
            <Modal isOpen={modal16} toggle={toggle16.bind(null)}>
              <ModalHeader toggle={toggle16.bind(null)}>Image 6</ModalHeader>
              <Image src={img3} alt="" />
              <div className="p-3"></div>
            </Modal>
            <CardBody className="text-center">
              <CardTitle tag="h4" className="mb-1">
                Project title
              </CardTitle>
              <CardSubtitle className="text-muted mb-0">
                subtitle of project
              </CardSubtitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Gallery;
