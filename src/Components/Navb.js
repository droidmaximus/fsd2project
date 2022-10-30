import React, {useContext} from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import AuthContext from "../store/auth-context";
import classes from "./Navb.module.css";
import ProfilePic from "./assets/ProfilePic.jpg";
import {Link} from "react-router-dom"

function Navb() {
  const ctx = useContext(AuthContext);
  return (
    <>
      <Navbar className={classes.NavbarMain}>
        <Container>
          <Navbar.Brand> 
            <Link to="/" style={{textDecoration: 'none'}} className={classes.heading}>
            <img
              alt=""
              src="https://images-platform.99static.com//07LvaO3g4kyq6fDJNuXL2Tz6mCQ=/162x151:2074x2063/fit-in/500x500/projects-files/127/12734/1273474/3ce6ead9-abd5-499e-ab2d-64c7190c912e.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {"      "}
            HowToBasic
            </Link>
          </Navbar.Brand>
          <Nav>
            <Link to="/Course" className={classes.headings1}>Courses</Link>
            <Link to="/RequestForm" className={classes.headings1}>Request a Course</Link>
            {ctx.isLoggedInAd && (
            <Link to="/AddCourse" className={classes.headings1}>Add a Course</Link>
            )}
          </Nav>
          <Nav>
            <Button variant="info" onClick={ctx.onLogout} className={classes.Button}>
              Logout
            </Button>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navb;
