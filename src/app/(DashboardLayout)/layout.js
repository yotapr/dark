"use client";
import { useSelector } from "react-redux";
import { Container } from "reactstrap";
import Header from "./layouts/header/Header";
import Customizer from "./layouts/customizer/Customizer";
import Sidebar from "./layouts/sidebars/vertical/Sidebar";
import HorizontalHeader from "./layouts/header/HorizontalHeader";
import HorizontalSidebar from "./layouts/sidebars/horizontal/HorizontalSidebar";

export default function RootLayout({ children }) {
  const customizerToggle = useSelector(
    (state) => state.customizer.customizerSidebar
  );
  const toggleMiniSidebar = useSelector(
    (state) => state.customizer.isMiniSidebar
  );
  const showMobileSidebar = useSelector(
    (state) => state.customizer.isMobileSidebar
  );
  const topbarFixed = useSelector((state) => state.customizer.isTopbarFixed);
  const LayoutHorizontal = useSelector(
    (state) => state.customizer.isLayoutHorizontal
  );
  const isFixedSidebar = useSelector(
    (state) => state.customizer.isSidebarFixed
  );
  const direction = useSelector((state) => state.customizer.isRTL);
  return (
    <main>
       <title>Monster NextJs 14.0.3</title>
      <div
        className={direction ? "rtl" : "ltr"}
        dir={direction ? "rtl" : "ltr"}
      >
        <div
          className={`pageWrapper d-md-block d-lg-flex ${
            toggleMiniSidebar ? "isMiniSidebar" : ""
          }`}
        >
          {/******** Sidebar **********/}
          {LayoutHorizontal ? (
            ""
          ) : (
            <aside
              className={`sidebarArea ${
                showMobileSidebar ? "showSidebar" : ""
              }`}
            >
              <Sidebar />
            </aside>
          )}
          {/********Content Area**********/}

          <div className={`contentArea ${topbarFixed ? "fixedTopbar" : ""}`}>
            {/********header**********/}
            {LayoutHorizontal ? <HorizontalHeader /> : <Header />}
            {LayoutHorizontal ? <HorizontalSidebar /> : ""}
            {/********Middle Content**********/}
            <Container className="p-3 m-3" style={{maxWidth: "100%"}}>
              <div
                className={
                  isFixedSidebar && LayoutHorizontal ? "HsidebarFixed" : ""
                }
              >
                {children}
              </div>
              <Customizer
                className={customizerToggle ? "showCustomizer" : ""}
              />
              {showMobileSidebar || customizerToggle ? (
                <div className="sidebarOverlay" />
              ) : (
                ""
              )}
            </Container>
          </div>
        </div>
      </div>
    </main>
  );
}
