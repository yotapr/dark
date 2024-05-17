import {
  Button,
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText,
} from "reactstrap";
import DashCard from "../../dashboardCards/DashCard";
import Image from "next/image";

import img1 from "public/images/users/user1.jpg";
import img2 from "public/images/users/user2.jpg";
import img3 from "public/images/users/user3.jpg";
import img4 from "public/images/users/user4.jpg";
import img5 from "public/images/users/user5.jpg";

const activityData = [
  {
    title: "Meeting today",
    subtitle: "you can write anything",
    avatar: img1,
    time: "5 min ago",
    htmlp: "",
  },
  {
    title: "Send documents",
    subtitle: "Lorem Ipsum is simply",
    avatar: img2,
    time: "5 min ago",
    htmlp: "",
  },
  {
    title: "Gohn Deo ",
    subtitle: "you can write anything",
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

const TodaySchedule = () => {
  return (
    <DashCard
      title="Today 's Schedule"
      subtitle="check out your daily schedule"
    >
      <ListGroup className="border-0 ps-3">
        {activityData.map((adata) => (
          <ListGroupItem
            key={adata.title}
            className="d-flex ps-0 pe-3 py-3 border-top-0 border-end-0 w-100"
          >
            <div className="ms-n4">
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
                <small className="ms-auto fw-light">{adata.time}</small>
              </ListGroupItemHeading>
              <ListGroupItemText className="my-1 text-muted">
                {adata.subtitle}
              </ListGroupItemText>
              {adata.htmlp}
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
    </DashCard>
  );
};

export default TodaySchedule;
