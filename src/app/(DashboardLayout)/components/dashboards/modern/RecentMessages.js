import { ListGroup, ListGroupItem, ListGroupItemHeading } from "reactstrap";
import SimpleBar from "simplebar-react";
import DashCard from "../../dashboardCards/DashCard";
import user1 from "public/images/users/user1.jpg";
import user2 from "public/images/users/user2.jpg";
import user3 from "public/images/users/user3.jpg";
import user4 from "public/images/users/user4.jpg";
import user5 from "public/images/users/user5.jpg";
import Image from "next/image";

const msgsData = [
  {
    image: user1,
    name: "James Anderson",
    comment:
      "Lorem Ipsum is simply dummy text of the printing. simply dummy text",
    date: "10:20 AM",
  },
  {
    image: user2,
    name: "Mihael Jorden",
    comment: "Lorem Ipsum is simply dummy text of the printing",
    date: "11:32 PM",
  },
  {
    image: user3,
    name: "Johnathan Doeting",
    comment: "Lorem Ipsum is simply dummy text of the printing",
    date: "01:00 AM",
  },
  {
    image: user4,
    name: "Daniel Kristeen",
    comment: "Lorem Ipsum is simply dummy text of the printing",
    date: "02:45 PM",
  },
  {
    image: user5,
    name: "Jan Petrovic",
    comment: "Lorem Ipsum is simply dummy text of the printing",
    date: "06:00 AM",
  },
  {
    image: user1,
    name: "Hanna Gover",
    comment: "Lorem Ipsum is simply dummy text of the printing",
    date: "08:11 PM",
  },
  {
    image: user2,
    name: "Michael Jorden",
    comment: "Lorem Ipsum is simply dummy text of the printing",
    date: "11:32 PM",
  },
  {
    image: user3,
    name: "Jonathan Doeting",
    comment: "Lorem Ipsum is simply dummy text of the printing",
    date: "04:30 AM",
  },
];

const RecentMessages = () => {
  return (
    <DashCard title="Recent Messages" subtitle="Messages that needs to read">
      <SimpleBar style={{ height: "620px" }}>
        <ListGroup flush>
          {msgsData.map((icomment) => (
            <ListGroupItem
              action
              href="#"
              tag="a"
              key={icomment.name}
              className="border-0 p-3 w-100 rounded"
            >
              <div className="d-flex align-items-center">
                <Image
                  src={icomment.image}
                  alt="user"
                  width="50"
                  height="50"
                  className="rounded-circle"
                />
                <div className="ms-3 col-10">
                  <ListGroupItemHeading className="fw-bold mb-0 text-truncate">
                    {icomment.name}
                  </ListGroupItemHeading>
                  <span className="d-block text-truncate text-muted">
                    {icomment.comment}
                  </span>
                  <small className="text-muted">{icomment.date}</small>
                </div>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
      </SimpleBar>
    </DashCard>
  );
};

export default RecentMessages;
