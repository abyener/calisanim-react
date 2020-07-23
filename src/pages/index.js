import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom"
import { Route } from "react-router-dom/Route"
import {
  Row,
  Col,
  Container,
  Dropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu
} from "reactstrap";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import Footer from "../components/footer";
import MainForm from "../components/MainForm";

const Layout = ({ children }) => {
  return (
    <div>
      {/* {<Header siteTitle={data.site.siteMetadata.title} />} */}
      <div>
        <div className="app-content">{children}</div>
      </div>

      {<Footer />}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

const Index = () => {
  const [dropDownOpen, setDropdownOpen] = useState(false);
  const toggleDropdownOpen = () => setDropdownOpen(!dropDownOpen);
  return (
    <Layout>
      <Row>
        <Container fluid className="landing-ct">
          <section className="landing-header">
          <Row className="transparan-header">
              <Col sm={12} className="text-right">
                <Link className="btn-uyeol butn-red" to="/uyeol">
                  <span>Üye Ol</span>
                </Link>
                <Link className="btn-uyegiris" to="/uyegiris">
                  <span>Giriş Yap</span>
                </Link>
                <Dropdown
                  tag="span"
                  isOpen={dropDownOpen}
                  toggle={toggleDropdownOpen}
                >
                  <DropdownToggle>
                    <button className="btn-lang main-lang">
                      <span>
                        <img
                          src={require("../dist/images/flags/tr.png")}
                          alt="tr"
                        />{" "}
                      </span>
                    </button>
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>
                      <button className="btn-lang">
                        <span>
                          <img
                            src={require("../dist/images/flags/en.png")}
                            alt="en"
                          />
                        </span>
                        <span className="lng">English</span>
                      </button>
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <div className="logo text-center">
                  <img
                    src={require("../dist/images/logo.png")}
                    alt="calisanim logo"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={{ size: 8, offset: 2 }}>
                <div className="landing-form" style={{width: "80%", margin: "auto"}}>
                  <MainForm />
                </div>
              </Col>
            </Row>
          </section>
          <section className="cls-nav-sticky condensed">
            <Row>
              <Col md="12">
                <Link
                  className="btn btn-primary-2 btn-sm btn-blue"
                  to="/uyelikformu?serviceId=COCUKBAKIM"
                >
                  {" "}
                  Çocuk Bakım{" "}
                </Link>
                <Link
                  className="btn btn-primary-2 btn-sm btn-blue"
                  to="/uyelikformu?serviceId=COCUKBAKIM"
                >
                  {" "}
                  Yaşlı Bakım{" "}
                </Link>
                <Link
                  className="btn btn-primary-2 btn-sm btn-blue"
                  to="/uyelikformu?serviceId=COCUKBAKIM"
                >
                  {" "}
                  Özel Ders{" "}
                </Link>
                <Link
                  className="btn btn-primary-2 btn-sm btn-blue"
                  to="/uyelikformu?serviceId=COCUKBAKIM"
                >
                  {" "}
                  Hasta Bakım
                </Link>
                <Link
                  className="btn btn-primary-2 btn-sm btn-blue"
                  to="/uyelikformu?serviceId=COCUKBAKIM"
                >
                  Temizlik
                </Link>
                <Link
                  className="btn btn-primary-2 btn-sm btn-blue"
                  to="/uyelikformu?serviceId=COCUKBAKIM"
                >
                  {" "}
                  Oyun Ablası / Abisi
                </Link>
              </Col>
            </Row>
          </section>
        </Container>
      </Row>
    </Layout>
  );
};

export default Index;
