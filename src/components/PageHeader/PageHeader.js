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
    
    <div style={{ paddingTop: '150px' , paddingBottom: '150px',minHeight:"350px"}} className="text-center page-header-filter content-center">
    {
      // <div className="squares square1" />
      // <div className="squares square2" />
      // <div className="squares square3" />
      // <div className="squares square4" />
      // <div className="squares square5" />
      // <div className="squares square6" />
      // <div className="squares square7" />
    }
      <Container  >
        <div className="content-center brand">
        <img
                alt="..."
                // className="img-raised"
                className="itemTransform itemTransformation img-fluid rounded-circle shadow-lg"
                // src={require("assets/img/ryan.jpg").default}
                style={{ width: "200px", height:"100%" }}
                src={require("assets/img/astro.png").default}
              />
          <h1 style={{fontWeight:"bold"}} className="h1-seo">ASTRO</h1>
          <h1 style={{fontWeight:"bold"}} className="d-none d-sm-block">
            The Most Complete Bot In Its Category
          </h1>
          
          
          <div>

          <Button href="/inv" target="_blank" className="" color="success" type="button">
        
              <p style={{fontWeight:"bold"}}><i class="fas fa-external-link-alt"></i> Invite Astro</p>
            </Button>
            <Button href="/commands" className="" color="default" type="button">
        
              <p style={{fontWeight:"bold"}}><i class="fas fa-list"></i> Commands</p>
            </Button>
            <Button href="/oauth/discord" className="" color="danger" type="button">
        
              <p style={{fontWeight:"bold"}}><i class="fas fa-cogs"></i> Dashboard</p>
            </Button>
            
            {
            // <Button href="/docs"className="" color="info" type="button">
        
            //  <p style={{fontWeight:"bold"}}>Docs</p>
            // </Button>
            }
          </div>
        </div>
      </Container>
    </div>
    </>
  );
}
