import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "@/store/hooks";
import { Button } from "reactstrap";
import SimpleBar from "simplebar-react";
import { ToggleInnerRightPart } from "@/store/customizer/CustomizerSlice";

const ThreeColumn = ({ leftContent, middleContent, rightContent }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    setIsOpen(!isOpen);
  };
  const isRightOpen = useSelector((state) => state.customizer.isInnerRightPart);

  return (
    <div className="d-lg-flex d-md-block border position-relative leftRightBox threeColumn">
      <div
        className={`leftPart bg-white border-end ${
          isOpen ? "showLeftPart" : ""
        }`}
      >
        <Button className="d-xl-none openCloseBtn" color="danger">
          <i
            className={`bi ${isOpen ? "bi-x" : "bi-list"}`}
            onClick={handleSubmit}
          />
        </Button>
        <SimpleBar style={{ height: "calc(100vh - 200px)" }}>
          {leftContent}
        </SimpleBar>
      </div>
      <div className="middlePart flex-shrink-0">
        <SimpleBar style={{ height: "calc(100vh - 200px)" }}>
          {middleContent}
        </SimpleBar>
      </div>
      
    </div>
  );
};

ThreeColumn.propTypes = {
  leftContent: PropTypes.node,
  middleContent: PropTypes.node,
  rightContent: PropTypes.node,
};

export default ThreeColumn;
