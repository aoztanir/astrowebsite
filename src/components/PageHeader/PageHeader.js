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


// reactstrap components
import { Container, Row, Col, Button } from "reactstrap";

export default function PageHeader() {
  return (
    <>
    
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center brand">
        <img
                alt="..."
                // className="img-raised"
                className="itemTransform itemTransformation img-fluid rounded-circle shadow-lg"
                // src={require("assets/img/ryan.jpg").default}
                style={{ width: "200px", height:"100%" }}
                src={require("assets/img/astro.png").default}
              />
          <h1 className="h1-seo">ASTRO</h1>
          <h3 className="d-none d-sm-block">
            All That You Will Need In A Discord Bot!
          </h3>
          <div>
          <Button href="/inv" target="_blank" className="btn-simple" color="success" type="button">
        
              Invite Astro
            </Button>
            <Button href="/oauth/discord" className="btn-simple" color="danger" type="button">
        
              Dashboard
            </Button>
            <Button href="/docs"className="btn-simple" color="info" type="button">
        
              Docs
            </Button>
          </div>
        </div>
      </Container>
    </div>
    </>
  );
}
