import Footer from "../UI/Footer";
import Navb from "../UI/Navb";
import React from 'react';
import bootstrap from 'bootstrap';
import classes from "./SingleCourse.module.css";
import { useState,useContext,useEffect } from 'react';
import Feedback from "../Feedback/Feedback.js";
import GetFeedback from "../Feedback/GetFeedback";
import { useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';


// import { Player } from 'video-react';

const SingleCourse = (props) => {
  const [update, setUpdate] = useState(false);
    const {id}= useParams();
    // console.log(id);
    let k  = 1;

    const [courseToShow,setCourseToShow] = useState([]); 
    useEffect(() => {
      const fetchitems = () => {
        // console.log(id);
        fetch("http://localhost:3001/courses/" + id)
          .then((response) => response.json())
          .then((data) => {
            setCourseToShow(data.course);
            // console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
        // const data = response.json();
      };
      fetchitems();
    }, []);
    const [reCourses, setReCourses] = useState([]);
    // console.log("courseid: ",courseid)
    useEffect(() => {
      const fetchitems = () => {
        // fetch("http://localhost:3001/feedbacks")
        fetch(`http://localhost:3001/feedbacks?courseid=${id}`)
          .then((response) => response.json())
          .then((data) => {
            setReCourses(data.feedback);
            // console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
        // const data = response.json();
      };
      fetchitems();
    }, [update]);
    console.log(courseToShow.contentLinks)

    // console.log("course to show", courseToShow);
  // console.log(id);
    // const {image , title , creator,description, contentList} = props.course;
    const [show , setShow] = useState(false);
    const handleShow = () => {
        setShow(!show);
    }
    // console.log(update);
    const feedbackHandler = (feedback) => {
      setUpdate(!update);
    }
    // console.log(courseToShow);
    return (
      <>
        <Navb />

        <div className={classes.main}>
          <div className={classes.course}>
            <div className={classes.description}>
              <p className={classes.title}>{courseToShow.title}</p>
              <p className={classes.te}>{courseToShow.text}</p>
              <p className={classes.desc}>{courseToShow.description}</p>
              <p className={classes.creator}>
                Content Creator : {courseToShow.creator}
              </p>
            </div>
            <div className={classes.course__image}>
              <img src={courseToShow.imageURL} alt="course" height="200" />
            </div>
          </div>
          <div className={classes.course__content}>
            {/* <source src="/Videos/video1.mp4" type="video/mp4"/> */}
            {courseToShow.contentList > 0 && (
              <button onClick={handleShow} className={classes.button}>
                Show Content
              </button>
            )}
            {!(courseToShow.contentList > 0) && (
              <h3
                style={{ color: "black", textAlign: "center", padding: "4%" }}
              >
                No Content Available, It will be available soon.{" "}
              </h3>
            )}

            {show && (
              <div>
                <iframe
                  width="560"
                  height="315"
                  src={courseToShow.contentLinks}
                  title="Youtube Player"
                  frameborder="0"
                  allowFullScreen
                />
              </div>
            )}

            {show && (
              <Table striped bordered hover style={{ marginTop: "3em" }}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Content</th>
                  </tr>
                </thead>
                <tbody>
                  {courseToShow.contentList.map((content) => {
                    return (
                      <tr>
                        <td>{k++}</td>
                        <th>{content}</th>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            )}
          </div>
            {(courseToShow.contentList > 0) && (

          <div className={classes.reviews}>
            <Feedback courseid={id} reCourses={reCourses} />
            <GetFeedback id={id} setc={feedbackHandler} />
          </div>)}
        </div>
        <Footer />
      </>
    );
}
export default SingleCourse;