"use client";
import Link from "next/link";
import { Container, Button } from "reactstrap";

const NotFound = () => {
  return (
    <div className="loginBox errorBg">
      <Container>
        <div className="d-flex align-items-center justify-content-center h-100vh">
          <div className="text-center">
            <h1 className="error-title">404</h1>
            <div className="my-3">
              <h4>PAGE NOT FOUND !</h4>
              <span className="text-muted d-block fs-5">
                You seem to be trying to find his way home{" "}
              </span>
            </div>
            <Link href="/">
              <Button color="primary">Back to home</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

NotFound.layout = "Blank";
export default NotFound;
