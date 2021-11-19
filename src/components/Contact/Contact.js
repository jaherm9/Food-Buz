import React from "react";
import { Col, Container, Form, Row } from 'react-bootstrap';
import "./Contact.css";

const Contact = () => {
  return (
    <div>
        <Container>
        <div className="about-us">
            <div className="single-about">
                <div>
                <i class="fas fa-phone-square-alt"></i>
                </div>
                <div>
                    <h3>+02434343411</h3>
                    <p>We Available 24/7</p>
                </div>
            </div>
            <div className="single-about">
                <div>
                <i className="fas fa-envelope"></i>
                </div>
                <div>
                    <h3>foodbuz@info.com</h3>
                    <p>We will respond to your mail within short time </p>
                </div>
            </div>
            <div className="single-about">
                <div>
                <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                    <h3>Los Angeles, U.S</h3>
                    <p>We are open 24/7</p>
                </div>
            </div>
            
        </div>
            </Container>
        <Row>

        <Col sm={12} lg={6}>
           <div className="mt-5">
               <h2 className="display-4 ">Managing Director</h2>
               <ul>
                   <li className="fw-bold fs-5">Afrahim Laabe Eshaal</li>
                   <li><i class="fas fa-phone-alt text-warning"></i>+1 954-900-0000</li>
                   <li></li>
                   
               </ul>
           </div>

           <div className="mt-5">
               <h2 className="display-4">California Area</h2>
               <ul>
                   <li className="fs-5 fw-bold"><i class="fas fa-map-marker-alt text-warning"></i> California, U.S</li>
                   <li><i class="fas fa-phone-alt text-warning"></i>+1 909-493-5119</li>
                   <li></li>
               </ul>
           </div>
        </Col>
        <Col sm={12} lg={5} className="pt-5">
         <Form  className="form mx-auto py-3 text-center">
             <h2 className="display-3 text-warning pt-5">Contact Us</h2>  
            <input className="inp p-2 my-4" type="text" lg placeholder="Enter Your First Name"/>
             <br />
             <input className="inp p-2 my-4" type="text" placeholder="Enter Your Last Name" />

             <input className="inp p-2 mt-4" type="password" name="" id="" placeholder="Password" />
            <br />
            <input className="inp p-2 my-4" type="text" lg placeholder="Enter Your Text"/>
            <br />
            <div class="d-grid gap-2 col-8 mx-auto py-3">
  <button class="btn btn-primary" type="button">Submit</button>
  
</div>

         </Form>
        </Col>
        </Row>
        </div>
  );
};

export default Contact;
