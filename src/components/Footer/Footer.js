/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="3">
            <h1 style={{fontWeight:"bold"}} className="title">Astro</h1>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink to="/" tag={Link}>
                  <p style={{fontWeight:"bold"}}>Home</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/commands" tag={Link}>
                  <p style={{fontWeight:"bold"}}>Commands</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/oauth/discord" tag={Link}>
                  <p style={{fontWeight:"bold"}}>Dashboard</p>
                </NavLink>
              </NavItem>

            </Nav>
          </Col>
          <Col md="3">
            <Nav>
              <NavItem>
                <NavLink href="https://aryah.ml/">
                  <p style={{fontWeight:"bold"}}>Aryah Oztanir</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/discord">
                  <p style={{fontWeight:"bold"}}>Support</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/inv">
                  <p style={{fontWeight:"bold"}}>Invite Astro</p>
                </NavLink>
              </NavItem>

            </Nav>
          </Col>
          <Col md="3">
            <h3  style={{fontWeight:"bold"}} className="title"> Need Help?</h3>
            <div className="btn-wrapper profile">
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="/discord"
                id="tooltip622135962"
                target="_blank"
              >
                <i className="fab fa-discord" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip622135962">
                Join The Astro Server
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="/twitter"
                id="tooltip230450801"
                target="_blank"
              >
                <i className="fab fa-twitter-square" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip230450801">
                Follow Us On Twitter
              </UncontrolledTooltip>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="/mail"
                id="tooltip318450378"
                target="_blank"
              >
                <i className="fab fa-google" />
              </Button>
              <UncontrolledTooltip delay={0} target="tooltip318450378">
                Email Us
              </UncontrolledTooltip>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
