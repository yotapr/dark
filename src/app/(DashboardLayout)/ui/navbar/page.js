"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import BreadCrumbs from "@/app/(DashboardLayout)/layouts/breadcrumbs/BreadCrumbs";

import ComponentCard from "@/app/(DashboardLayout)/components/ComponentCard";


import LogoDarkIcon from "public/images/logos/dark-logo-icon.svg";
import LogoDarkText from "public/images/logos/dark-logo-text.svg";
import LogoWhiteIcon from "public/images/logos/white-logo-icon.svg";
import LogoWhiteText from "public/images/logos/white-logo-text.svg";

const NavbarComponent = () => {
  const isDarkMode = useSelector((state) => state.customizer.isDark);
  const activeSidebarBg = useSelector((state) => state.customizer.sidebarBg);
  const [isOpen, setIsOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <BreadCrumbs />
      {/* --------------------------------------------------------------------------------*/}
      {/* Start Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
      <ComponentCard title="Header">
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggle.bind(null)} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </ComponentCard>
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}

      <ComponentCard title='Brand'>
        <Navbar
          className="my-2"
          color="light"
          dark
        >
          <NavbarBrand href="/">
            {isDarkMode || activeSidebarBg !== "white" ? (
              <>
                <Image src={LogoWhiteIcon} alt="logo" />

              </>
            ) : (
              <>
                <Image src={LogoDarkIcon} alt="logo" />

              </>
            )}
          </NavbarBrand>
        </Navbar>

        <Navbar
          className="my-2"
          color="light"
          dark
        >

          <NavbarBrand href="/">

            {isDarkMode || activeSidebarBg !== "white" ? (
              <>
                <Image src={LogoWhiteIcon} alt="logo" />
                <Image src={LogoWhiteText} alt="logo" height={20}
                  width={140}
                  className="ms-2" />

              </>
            ) : (
              <>
                <Image src={LogoDarkIcon} alt="logo" />
                <Image src={LogoDarkText} alt="logo" height={20}
                  width={140}
                  className="ms-2" />
              </>
            )}
          </NavbarBrand>

        </Navbar>

      </ComponentCard>
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}
      <ComponentCard title="NavbarToggler">
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">
            reactstrap
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar.bind(null)} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </ComponentCard>
      {/* --------------------------------------------------------------------------------*/}
      {/* Row*/}
      {/* --------------------------------------------------------------------------------*/}

      {/* --------------------------------------------------------------------------------*/}
      {/* End Inner Div*/}
      {/* --------------------------------------------------------------------------------*/}
    </div>
  );
};

export default NavbarComponent;
