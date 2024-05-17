import React from "react";
import Link from "next/link";
import {
  Navbar,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Container,
  Input,
} from "reactstrap";

import { Bell, MessageSquare, Grid } from "react-feather";
import { useSelector, useDispatch } from "react-redux";
import SimpleBar from "simplebar-react";
import MessageDD from "./MessageDD";
import NotificationDD from "./NotificationDD";
import MegaDD from "./MegaDD";
import user1 from "public/images/users/user1.jpg";
import Image from "next/image";
import { ToggleMobileSidebar } from "@/store/customizer/CustomizerSlice";
import ProfileDD from "./ProfileDD";
import HorizontalLogo from "../logo/HorizontalLogo";

const HorizontalHeader = () => {
  const isDarkMode = useSelector((state) => state.customizer.isDark);
  const topbarColor = useSelector((state) => state.customizer.topbarBg);
  const isMobileSidebar = useSelector(
    (state) => state.customizer.isMobileSidebar
  );
  const dispatch = useDispatch();

  return (
    <Navbar
      color={topbarColor}
      dark={!isDarkMode}
      light={isDarkMode}
      expand="lg"
      className="shadow HorizontalTopbar p-0"
    >
      <Container className="d-flex align-items-center">
        {/******************************/}
        {/**********Logo**********/}
        {/******************************/}
        <div className="pe-4 py-3 ">
          <HorizontalLogo />
        </div>
        {/******************************/}
        {/**********Toggle Buttons**********/}
        {/******************************/}

        <Nav className="me-auto flex-row" navbar>
          <Button
            color={topbarColor}
            className="d-sm-block d-lg-none"
            onClick={() => dispatch(ToggleMobileSidebar())}
          >
            <i className={`bi ${isMobileSidebar ? "bi-x" : "bi-list"}`} />
          </Button>

          {/******************************/}
          {/**********Notification DD**********/}
          {/******************************/}
          <UncontrolledDropdown>
            <DropdownToggle className=" hov-dd border-0" color={topbarColor}>
              <Bell size={18} />
            </DropdownToggle>
            <DropdownMenu className="ddWidth" start="true">
              <DropdownItem header>
                <span className="mb-0 fs-5">Notifications</span>
              </DropdownItem>
              <DropdownItem divider />
              <SimpleBar style={{ maxHeight: "350px" }}>
                <NotificationDD />
              </SimpleBar>
              <DropdownItem divider />
              <div className="p-2 px-3">
                <Button color="primary" size="sm" block>
                  Check All
                </Button>
              </div>
            </DropdownMenu>
          </UncontrolledDropdown>
          {/******************************/}
          {/**********Message DD**********/}
          {/******************************/}
          <UncontrolledDropdown className="mx-1">
            <DropdownToggle className=" hov-dd border-0" color={topbarColor}>
              <MessageSquare size={18} />
            </DropdownToggle>
            <DropdownMenu className="ddWidth" start="true">
              <DropdownItem header>
                <span className="mb-0 fs-5">Messages</span>
              </DropdownItem>
              <DropdownItem divider />
              <SimpleBar style={{ maxHeight: "350px" }}>
                <MessageDD />
              </SimpleBar>
              <DropdownItem divider />
              <div className="p-2 px-3">
                <Button color="primary" size="sm" block>
                  Check All
                </Button>
              </div>
            </DropdownMenu>
          </UncontrolledDropdown>
          {/******************************/}
          {/**********Mega DD**********/}
          {/******************************/}
          <UncontrolledDropdown className="mega-dropdown mx-1">
            <DropdownToggle className=" hov-dd border-0" color={topbarColor}>
              <Grid size={18} />
            </DropdownToggle>
            <DropdownMenu>
              <MegaDD />
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
        <div className="d-flex align-items-center">
          <Input
            type="search"
            placeholder="Search"
            className="rounded-pill d-md-block d-none mx-1 my-1 border-0"
          />
          {/******************************/}
          {/**********Profile DD**********/}
          {/******************************/}
          <UncontrolledDropdown className=" hov-dd">
            <DropdownToggle color="transparent" style={{ lineHeight: "0px" }}>
              <Image
                src={user1}
                alt="profile"
                className="rounded-circle"
                width="30"
                height="30"
              />
            </DropdownToggle>
            <DropdownMenu className="ddWidth" end>
              <ProfileDD />

              <div className="p-2 px-3">
                <Button color="danger" size="sm">
                  Logout
                </Button>
              </div>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </Container>
    </Navbar>
  );
};

export default HorizontalHeader;
