"use client";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardGroup,
  Button,
  Row,
  Col,
  CardLink,
  CardHeader,
  CardFooter,
  CardImgOverlay,
} from "reactstrap";
import BreadCrumbs from "@/app/(DashboardLayout)/layouts/breadcrumbs/BreadCrumbs";

import bg1 from "public/images/bg/bg1.jpg";
import bg2 from "public/images/bg/bg2.jpg";
import bg3 from "public/images/bg/bg3.jpg";
import bg4 from "public/images/bg/bg4.jpg";
import Image from "next/image";

const BlogData = [
  {
    image: bg1,
    title: "This is simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg2,
    title: "Lets be simple blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg3,
    title: "Don't Lamp blog",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
  {
    image: bg4,
    title: "Simple is beautiful",
    subtitle: "2 comments, 1 Like",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    btnbg: "primary",
  },
];

const Cards = () => {
  return (
    <div>
      <BreadCrumbs />
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <h5 className="mb-3">Basic Card</h5>
      <Row>
        {BlogData.map((blg) => (
         <Col lg="3" key={blg.title}>
         <Card>
           <Image src={blg.image} alt={blg.image} className="w-100" height={200} />
           <CardBody>
             <CardTitle className="mt-2 fw-bold" tag="h4">
               {blg.title}
             </CardTitle>
             <CardSubtitle className="text-muted mt-1">
               {blg.subtitle}
             </CardSubtitle>
             <Button color="primary" className="mt-3">
               Read More
             </Button>
           </CardBody>
         </Card>
       </Col>
        ))}
      </Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-2*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
        <h5 className="mb-3 mt-3">Alignment Text</h5>
        <Col md="6" lg="4">
          <Card body>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button color="light-warning">Go somewhere</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card body className="text-center">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button color="light-danger">Go somewhere</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card body className="text-end">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button color="light-success">Go somewhere</Button>
            </div>
          </Card>
        </Col>
      </Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-2*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
        <h5 className="mb-3 mt-3">Colored Card</h5>
        <Col md="6" lg="3">
          <Card body color="primary" inverse>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="info" inverse>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="success" inverse>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="danger" inverse>
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="light-warning">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="light-info">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="light-success">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="light-danger">
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
      </Row>
       {/* --------------------------------------------------------------------------------*/}
      {/* Card-Outline*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
        <h5 className="mb-3 mt-3">Outline Card</h5>
        <Col md="6" lg="3">
          <Card body color="primary" className='border' outline >
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="info" className='border' outline >
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <div>
              <Button >Button</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="success" className='border' outline >
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card body color="danger" className='border' outline >
            <CardTitle tag="h5">Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional content.
            </CardText>
            <div>
              <Button>Button</Button>
            </div>
          </Card>
        </Col>
      </Row>
       {/* --------------------------------------------------------------------------------*/}
      {/* Card-Content Type*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
        <h5 className="mb-3 mt-3">Content Types Cards</h5>
        <Col md="6" lg="3">
          <Card>
            <CardBody>
              <CardTitle tag="h5">
                Card title
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Card subtitle
              </CardSubtitle>
            </CardBody>
            <Image src={bg4} alt={bg4 } className="w-100" height={200} />
            <CardBody>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card‘s content.
              </CardText>
              <CardLink href="#">
                Card Link
              </CardLink>
              <CardLink href="#">
                Another Link
              </CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card>
            <CardBody>
              <CardTitle tag="h5">
                Card title
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Card subtitle
              </CardSubtitle>
            </CardBody>
            <Image src={bg3} alt={bg3} className="w-100" height={200} />
            <CardBody>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card‘s content.
              </CardText>
              <CardLink href="#">
                Card Link
              </CardLink>
              <CardLink href="#">
                Another Link
              </CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card>
            <CardBody>
              <CardTitle tag="h5">
                Card title
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Card subtitle
              </CardSubtitle>
            </CardBody>
            <Image src={bg2} alt={bg2 } className="w-100" height={200} />
            <CardBody>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card‘s content.
              </CardText>
              <CardLink href="#">
                Card Link
              </CardLink>
              <CardLink href="#">
                Another Link
              </CardLink>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="3">
          <Card>
            <CardBody>
              <CardTitle tag="h5">
                Card title
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                Card subtitle
              </CardSubtitle>
            </CardBody>
            <Image src={bg1} alt={bg1 } className="w-100" height={200} />
            <CardBody>
              <CardText>
                Some quick example text to build on the card title and make up the bulk of the card‘s content.
              </CardText>
              <CardLink href="#">
                Card Link
              </CardLink>
              <CardLink href="#">
                Another Link
              </CardLink>
            </CardBody>
          </Card>
        </Col>

      </Row>

      {/* --------------------------------------------------------------------------------*/}
      {/* Card-Header-Footer*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
        <h5 className="mb-3 mt-3">Headers And Footers</h5>
        <Col md="6" lg="4">
          <Card
            className='border'
          >
            <CardHeader className='border-bottom'>
              Header
            </CardHeader>
            <CardBody>
              <CardTitle tag="h5">
                Special Title Treatment
              </CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional content.
              </CardText>
              <Button color='primary'>
                Go somewhere
              </Button>
            </CardBody>
            <CardFooter className='border-top'>
              Footer
            </CardFooter>
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card
            className='border'
          >
            <CardHeader className='border-bottom'>
              Header
            </CardHeader>
            <CardBody>
              <CardTitle tag="h5">
                Special Title Treatment
              </CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional content.
              </CardText>
              <Button color='secondary'>
                Go somewhere
              </Button>
            </CardBody>
            <CardFooter className='border-top'>
              Footer
            </CardFooter>
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card
            className='border'
          >
            <CardHeader className='border-bottom'>
              Header
            </CardHeader>
            <CardBody>
              <CardTitle tag="h5">
                Special Title Treatment
              </CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional content.
              </CardText>
              <Button color='info'>
                Go somewhere
              </Button>
            </CardBody>
            <CardFooter className='border-top'>
              Footer
            </CardFooter>
          </Card>
        </Col>
      </Row>


      {/* --------------------------------------------------------------------------------*/}
      {/* Card-Image Caps*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
        <h5 className="mb-3 mt-3">Image Caps</h5>
        <Col md="6" lg="4">
          <Card>
          <Image src={bg3} alt={bg3 } className="w-100" height={250} />
            <CardBody>
              <CardTitle tag="h5">
                Card Title
              </CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </CardText>
              <CardText>
                <small className="text-muted">
                  Last updated 3 mins ago
                </small>
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card>

            <CardBody>
              <CardTitle tag="h5">
                Card Title
              </CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </CardText>
              <CardText>
                <small className="text-muted">
                  Last updated 3 mins ago
                </small>
              </CardText>
            </CardBody>
            <Image src={bg2} alt={bg2 } className="w-100" height={250} />
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card>
          <Image src={bg1} alt={bg1} className="w-100" height={250} />
            <CardBody>
              <CardTitle tag="h5">
                Card Title
              </CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </CardText>
              <CardText>
                <small className="text-muted">
                  Last updated 3 mins ago
                </small>
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>


      {/* --------------------------------------------------------------------------------*/}
      {/* Card-Image Overlays*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
        <h5 className="mb-3 mt-3">Image Overlay</h5>
        <Col md="6" lg="4">
          <Card inverse>
          <Image src={bg2} alt={bg1} className="w-100" height={250} />
            <CardImgOverlay>
              <CardTitle className='text-dark' tag="h5">
                Card Title
              </CardTitle>
              <CardText className='text-dark'>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </CardText>
              <CardText >
                <small className="text-muted">
                  Last updated 3 mins ago
                </small>
              </CardText>
            </CardImgOverlay>
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card inverse>
          <Image src={bg4} alt={bg4} className="w-100" height={250} />
            <CardImgOverlay>
              <CardTitle className='text-dark' tag="h5">
                Card Title
              </CardTitle>
              <CardText className='text-dark'>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </CardText>
              <CardText >
                <small className="text-muted">
                  Last updated 3 mins ago
                </small>
              </CardText>
            </CardImgOverlay>
          </Card>
        </Col>
        <Col md="6" lg="4">
          <Card inverse>
          <Image src={bg1} alt={bg1} className="w-100" height={250} />
            <CardImgOverlay>
              <CardTitle className='text-dark' tag="h5">
                Card Title
              </CardTitle>
              <CardText className='text-dark'>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </CardText>
              <CardText>
                <small className="text-muted">
                  Last updated 3 mins ago
                </small>
              </CardText>
            </CardImgOverlay>
          </Card>
        </Col>
      </Row>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-Group*/}
      {/* --------------------------------------------------------------------------------*/}
      <Row>
        <h5 className="mb-3 mt-3">Card Group</h5>
        <Col>
          <CardGroup>
            <Card>
              <Image
                alt="Card image cap"
                src={bg1}
                top="true"
                className="w-100"
                height="210"
              />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <Image
                alt="Card image cap"
                src={bg2}
                top="true"
                className="w-100"
                height="210"
              />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <Image
                alt="Card image cap"
                src={bg3}
                top="true"
                className="w-100"
                height="210"
              />
              <CardBody>
                <CardTitle tag="h5">Card title</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Card subtitle
                </CardSubtitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </div>
  );
};

export default Cards;
