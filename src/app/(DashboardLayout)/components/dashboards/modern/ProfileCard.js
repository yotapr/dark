import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardTitle,
  Col,
  Row,
} from "reactstrap";
import Image from "next/image";
import img1 from "public/images/users/user4.jpg";

const ProfileCard = () => {
  return (
    <Card>
      <CardBody className="text-center">
        <Image
          src={img1}
          className="rounded-circle border-2 border-light shadow border p-1"
          width="90"
          height="90"
          alt="avatar"
        />
        <CardTitle className="mb-1 mt-3" tag="h4">
          Milan Cooper
        </CardTitle>

        <CardSubtitle className="text-muted mb-1">Ui/Ux Designer</CardSubtitle>
        <CardSubtitle className="mb-3 pb-1">
          Design is intelligence made visible <span></span>😎.
        </CardSubtitle>
        <Button color="outline-primary" className="rounded-pill">
          <i className="bi bi-plus-lg me-1"></i>Follow
        </Button>
        <Row className="mt-4">
          <Col xs="4">
            <h5 className="fw-bold">1M</h5>
            <span className="text-muted">Followers</span>
          </Col>
          <Col xs="4" className="border-start border-end">
            <h5 className="fw-bold">0</h5>
            <span className="text-muted">Following</span>
          </Col>
          <Col xs="4">
            <h5 className="fw-bold">1,000</h5>
            <span className="text-muted">Posts</span>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Button block color="primary">
              Message
            </Button>
          </Col>
          <Col>
            <Button block color="outline-primary">
              Share Profile
            </Button>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default ProfileCard;
