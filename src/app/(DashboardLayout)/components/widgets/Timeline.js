import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Progress,
  Form,
  FormGroup,
  Label,
  Input,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";
import Image from "next/image";

import img1 from "public/images/users/user1.jpg";
import img2 from "public/images/users/user2.jpg";
import img3 from "public/images/users/user3.jpg";
import img4 from "public/images/users/user4.jpg";
import img5 from "public/images/users/user5.jpg";

import time1 from "public/images/bg/bg1.jpg";
import time2 from "public/images/bg/bg2.jpg";
import time3 from "public/images/bg/bg3.jpg";
import time4 from "public/images/bg/bg4.jpg";

const Timeline = () => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  const activityData = [
    {
      title: "Meeting today",
      subtitle: "you can write anything",
      avatar: img1,
      time: "5 min ago",
      htmlp: (
        <>
          <Image
            src={time1}
            width="140"
            height="70"
            className="rounded"
            alt="images"
          />{" "}
          <Image
            src={time2}
            width="140"
            height="70"
            className="rounded"
            alt="images"
          />{" "}
          <Image
            src={time3}
            width="140"
            height="70"
            className="rounded"
            alt="images"
          />{" "}
          <Image
            src={time4}
            width="140"
            height="70"
            className="rounded"
            alt="images"
          />
        </>
      ),
    },
    {
      title: "Send documents",
      subtitle: "Lorem Ipsum is simply",
      avatar: img2,
      time: "5 min ago",
      htmlp: (
        <>
          <div className="d-flex align-items-center">
            <div className=" flex-shrink-0">
              <Image
                src={time1}
                width="140"
                height="80"
                className="rounded"
                alt="images"
              />
            </div>
            <div className="p-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam.
              <br />
              <Button color="danger" size="sm" className="mt-2">
                Design
              </Button>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Gohn Deo ",
      subtitle: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Integer nec odio. Praesent libero. Sed cursus ante dapibus 
        diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. 
        Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper`,
      avatar: img3,
      time: "5 min ago",
      htmlp: "",
    },
    {
      title: "Go to the Doctor",
      subtitle: "Contrary to popular belief",
      avatar: img4,
      time: "5 min ago",
      htmlp: "",
    },
    {
      title: "Meet TigerSroff",
      subtitle: "Approve meeting with tiger Contrary to popular belief",
      avatar: img5,
      time: "5 min ago",
      htmlp: (
        <>
          <Button size="sm" color="primary">
            Accept
          </Button>{" "}
          <Button color="danger" size="sm">
            Refuse
          </Button>
        </>
      ),
    },
  ];

  return (
    <>
      <Card>
        <Nav tabs className="profile-tab">
          <NavItem>
            <NavLink
              className={
                activeTab === "1"
                  ? "active bg-transparent"
                  : "cursor-pointer text-muted"
              }
              onClick={() => {
                toggle("1");
              }}
            >
              Timeline
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={
                activeTab === "2"
                  ? "active bg-transparent"
                  : "cursor-pointer text-muted"
              }
              onClick={() => {
                toggle("2");
              }}
            >
              Profile
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={
                activeTab === "3"
                  ? "active bg-transparent"
                  : "cursor-pointer text-muted"
              }
              onClick={() => {
                toggle("3");
              }}
            >
              Setting
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <ListGroup className="border-0 ps-5 my-4">
                  {activityData.map((adata) => (
                    <ListGroupItem
                      key={adata.title}
                      className="d-flex ps-0 pe-3 py-4 border-top-0 border-end-0 w-100"
                    >
                      <div style={{ marginLeft: "-22px" }}>
                        <Image
                          src={adata.avatar}
                          alt="user"
                          width="50"
                          height="50"
                          className="rounded-circle"
                        />
                      </div>
                      <div className="w-100 ms-3">
                        <ListGroupItemHeading className="fw-bold mb-0">
                          {adata.title}{" "}
                          <small className="ms-auto fw-light">
                            {adata.time}
                          </small>
                        </ListGroupItemHeading>
                        <ListGroupItemText className="my-1 text-muted">
                          {adata.subtitle}
                        </ListGroupItemText>
                        {adata.htmlp}
                      </div>
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <div className="p-4">
                  <Row>
                    <Col md="3" xs="6" className="border-end">
                      <strong>Full Name</strong>
                      <br />
                      <p className="text-muted">Johnathan Deo</p>
                    </Col>
                    <Col md="3" xs="6" className="border-end">
                      <strong>Mobile</strong>
                      <br />
                      <p className="text-muted">(123) 456 7890</p>
                    </Col>
                    <Col md="3" xs="6" className="border-end">
                      <strong>Email</strong>
                      <br />
                      <p className="text-muted">johnathan@admin.com</p>
                    </Col>
                    <Col md="3" xs="6" className="border-end">
                      <strong>Location</strong>
                      <br />
                      <p className="text-muted">London</p>
                    </Col>
                  </Row>
                  <p className="mt-4">
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis
                    pretium. Integer tincidunt.Cras dapibus. Vivamus elementum
                    semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                    ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                  </p>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled
                    it to make a type specimen book. It has survived not only
                    five centuries
                  </p>
                  <p>
                    It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently
                    with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                  </p>
                  <h4 className="font-medium mt-4">Skill Set</h4>
                  <hr />
                  <h5 className="mt-4">
                    Wordpress <span className="float-end">80%</span>
                  </h5>
                  <Progress value={2 * 5} />
                  <h5 className="mt-4">
                    HTML 5 <span className="float-end">90%</span>
                  </h5>
                  <Progress color="success" value="25" />
                  <h5 className="mt-4">
                    jQuery <span className="float-end">50%</span>
                  </h5>
                  <Progress color="info" value={50} />
                  <h5 className="mt-4">
                    Photoshop <span className="float-end">70%</span>
                  </h5>
                  <Progress color="warning" value={75} />
                </div>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="12">
                <div className="p-4">
                  <Form>
                    <FormGroup>
                      <Label>Full Name</Label>
                      <Input type="text" placeholder="Shaina Agrawal" />
                    </FormGroup>
                    <FormGroup>
                      <Label>Email</Label>
                      <Input type="email" placeholder="Jognsmith@cool.com" />
                    </FormGroup>
                    <FormGroup>
                      <Label>Password</Label>
                      <Input type="password" placeholder="Password" />
                    </FormGroup>
                    <FormGroup>
                      <Label>Phone No</Label>
                      <Input type="text" placeholder="123 456 1020" />
                    </FormGroup>
                    <FormGroup>
                      <Label>Message</Label>
                      <Input type="textarea" />
                    </FormGroup>
                    <FormGroup>
                      <Label>Select Country</Label>
                      <Input type="select">
                        <option>USA</option>
                        <option>India</option>
                        <option>America</option>
                      </Input>
                    </FormGroup>
                    <Button color="primary">Update Profile</Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </Card>
    </>
  );
};

export default Timeline;
