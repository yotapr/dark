import { Card, CardBody } from "reactstrap";
import PropTypes from "prop-types";

const TopCardsData = ({ bg, title, subtitle }) => {
  return (
    <Card className={`bg-${bg} text-white`}>
      <CardBody className="text-center">
        <h2 className="fs-1 mb-0 fw-light text-dark-white">{title}</h2>
        <h6 className="text-dark-white">{subtitle}</h6>
      </CardBody>
    </Card>
  );
};

TopCardsData.propTypes = {
  bg: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
export default TopCardsData;
