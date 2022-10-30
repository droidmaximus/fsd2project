import CourseCards from "./CourseCards";
import SimpleCarousel from "./UI/SimpleCarousel";
import { useLocation } from "react-router-dom";
import { useState,useContext } from "react";
import { CoursesContext } from "./Courses";
import Card from "./UI/Card";
import classes from "./RequestForm.module.css"
import Footer from "./UI/Footer";
const Home = (props) => {
  const port = useContext(CoursesContext);
  // console.log(port.courses);
  const location = useLocation();
  const [courses, setCourses] = useState(port.courses);

  const registerCourseHandler = (title) => {
    setCourses(
      courses.map((course) => {
        if (course.title === title) {
          course.progress = 0;
        }
        return course;
      })
    );
  };

  if (location.state) {
    courses.push(location.state);
  }
  let myCourses = courses.filter((course) => {
    return course.progress !== undefined;
  });
  let restCourses = courses.filter((course) => {
    return course.progress === undefined;
  });
  // console.log(courses);
  return (
    <div className={classes.Home}>
      <SimpleCarousel></SimpleCarousel>
      <div style={{ padding: "1%" }}>
        <Card>
          <h1
            style={{
              textAlign: "center",
              fontWeight: "bold",
              padding: "1%",
            }}
          >
            My Courses
          </h1>
        </Card>
        {myCourses.length > 0 && (
          <CourseCards
            items={myCourses}
            setc={registerCourseHandler}
          ></CourseCards>
        )}
        {myCourses.length === 0 && (
          <h3 style={{ color: "black", textAlign: "center", padding: "1%" }}>
            No Registered Courses{" "}
          </h3>
        )}
      </div>
      <div style={{ padding: "1%" }}>
        <Card>
          <h1
            style={{
              textAlign: "center",
              fontWeight: "bold",
              padding: "1%",
            }}
          >
            All Courses
          </h1>
        </Card>
        {restCourses.length > 0 && (
          <CourseCards
            items={restCourses}
            setc={registerCourseHandler}
          ></CourseCards>
        )}
        {restCourses.length === 0 && (
          <h3 style={{ color: "black", textAlign: "center", padding: "1%" }}>
            No Registered Courses{" "}
          </h3>
        )}
      </div>
      {/* <div>
        <h1>All Courses</h1>
        <CourseCards items={restCourses}></CourseCards>
      </div> */}
    </div>
  );
};
export default Home;
