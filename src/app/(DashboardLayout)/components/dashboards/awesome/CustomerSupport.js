import {
  Badge,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";
import SimpleBar from "simplebar-react";

import Image from "next/image";
import user1 from "public/images/users/user1.jpg";
import user2 from "public/images/users/user2.jpg";
import user3 from "public/images/users/user3.jpg";
import user4 from "public/images/users/user4.jpg";
import user5 from "public/images/users/user5.jpg";

const commentsData = [
  {
    image: user1,
    name: "James Anderson",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    status: "Pending",
    date: "April 14, 2021",
  },
  {
    image: user2,
    name: "Michael Jorden",
    comment:
      "Rpsum is simply dummy text of the printing and type setting industry.",
    status: "Approved",
    date: "May 14, 2021",
  },
  {
    image: user3,
    name: "Johnathan Doeting",
    comment:
      "Frem Ipsum is simply dummy text of the printing and type setting industry.",
    status: "Approved",
    date: "June 14, 2021",
  },
  {
    image: user4,
    name: "Daniel Kristeen",
    comment:
      "LorTsum is simply dummy text of the printing and type setting industry.",
    status: "Pending",
    date: "July 14, 2021",
  },
  {
    image: user5,
    name: "Jan Petrovic",
    comment:
      "Mem Ipsum is simply dummy text of the printing and type setting industry.",
    status: "Rejected",
    date: "Aug 14, 2021",
  },
  {
    image: user1,
    name: "Hanna Gover",
    comment:
      "Lorem Ipsum is simply dummy text of the printing and type setting industry.",
    status: "Pending",
    date: "April 14, 2021",
  },
];

const CustomerSupport = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h4">Customer Support</CardTitle>
        <CardSubtitle className="text-muted">
          24 new support ticket request generate
        </CardSubtitle>
      </CardBody>
      <SimpleBar style={{ height: "452px" }}>
        <ListGroup className="border-0">
          {commentsData.map((icomment) => (
            <ListGroupItem
              action
              href="#"
              tag="a"
              key={icomment.name}
              className="d-flex py-3 px-4 w-100 "
            >
              <div>
                <Image
                  src={icomment.image}
                  alt="user"
                  width="50"
                  height="50"
                  className="rounded-circle"
                />
              </div>
              <div className="w-100  ms-3">
                <ListGroupItemHeading className="fw-bold mb-0">
                  {icomment.name}
                </ListGroupItemHeading>
                <ListGroupItemText className="my-1 text-muted">
                  {icomment.comment}
                </ListGroupItemText>
                <div className="d-flex">
                  <div>
                    {icomment.status === "Pending" ? (
                      <Badge className="text-dark-white" color="primary">
                        Pending
                      </Badge>
                    ) : icomment.status === "Rejected" ? (
                      <Badge className="text-dark-white" color="danger">
                        Rejected
                      </Badge>
                    ) : (
                      <Badge className="text-dark-white" color="success">
                        Approved
                      </Badge>
                    )}
                  </div>
                  <small className="ms-auto">{icomment.date}</small>
                </div>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
      </SimpleBar>
    </Card>
  );
};

export default CustomerSupport;
