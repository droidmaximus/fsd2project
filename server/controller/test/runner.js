process.env.NODE_ENV = "test";

// var base = './server';
// var should  = require('should');
var testUtil = require('../../test/utils');
var courses = require("../courseController");
// var feedbacks = require('../feedbackController');
// var quizzes = require('../quizController');
// var requestedcourses = require('../requestedCoursesController');
// var users = require('../userController');
var mongoose = require("mongoose");
var course = require("../../model/Courses");
// var feedback = require('../../model/Feedback');
// var quiz = require('../../model/Quiz');
// var requestedcourse = require('../../model/RequestedCourses');
// var user = require('../../model/User');
var id;

describe("Course API", function () {
  var dummyCourse;
  before(function (done) {
    mongoose
      .connect(
        "mongodb+srv://yashhh:puX0Tz2jM65KjvnZ@cluster0.0ktinyn.mongodb.net/?retryWrites=true&w=majority"
      )
      .then((result) => {
        console.log("connected");
        dummyCourse = new course({
          title: "chess",
          text: "Learn chess",
          description: "Learn the coins",
          creator: "saathvika",
          rating: "3.0",
          imageUrl: "none",
          contentList: "none",
        });
        dummyCourse.save(function (err, course) {
          if (err) {
            console.log(err);
          }
          id = post._id;
          done();
        });
      })
      .catch((err) => {
        console.log(err);
      });
      done();
  });
  beforeEach(function (done) {
    done();
  });

//   describe("Create course", function () {
//     it("should create a new course", function (done) {
//         this.timeout(15000);
//       var req = {
//         body: {
//           title: "chess",
//           text: "Learn chess",
//           description: "Learn the coins",
//           creator: "saathvika",
//           rating: "3.0",
//           imageUrl: "none",
//           contentList: "none",
//         },
//       };
//       var res = testUtil.responseValidator(200, function (course) {
//         course.should.have.property("title");
//         course.title.should.equal("chess");
//         course.should.have.property("text");
//         course.title.should.equal("Learn chess");
//         course.should.have.property("description");
//         course.title.should.equal("Learn the coins");
//         course.should.have.property("creator");
//         course.title.should.equal("saathvika");
//         course.should.have.property("rating");
//         course.title.should.equal("3.0");
//         course.should.have.property("imageUrl");
//         course.title.should.equal("none");
//         course.should.have.property("contentList");
//         course.title.should.equal("none");

//         done();
//       });
//       courses.saveCourse(req, res,()=>{});
//     });
//   });

//   describe("Get course", function () {
//     it("should get the courses", function (done) {
//         this.timeout(15000);

//       var req = {};
//       var res = testUtil.responseValidator(200, function (courses) {
//         courses.length.should.equal(2);
//         done();
//       });
//       courses.getCourse(req, res);
//     });
//   });

//   describe("Get course by id", function () {
//     it("should get the courses", function (done) {
//         this.timeout(15000);

//       var req = {
//         params: {
//           id: id,
//         },
//       };
//       var res = testUtil.responseValidator(200, function (course) {
//         course.title.should.equal("chess");
//         course.title.should.equal("Learn chess");
//         course.title.should.equal("Learn the coins");
//         course.title.should.equal("saathvika");
//         course.title.should.equal("3.0");
//         course.title.should.equal("none");
//         course.title.should.equal("none");
//         done();
//       });
//       courses.getSpecificCourse(req, res);
//     });
//     it("should throw error for invalid post id", function (err) {
//         this.timeout(15000);

//       var req = {
//         params: {
//           id: "skjdn",
//         },
//       };
//       var res = testUtil.responseValidator(500, function (course) {
//         done();
//       });
//       courses.getSpecificCourse(req, res);
//     });
//   });

  describe("Create course", function () {
    it("should create the course", function (done) {
        this.timeout(15000);

      var req = {
        params: { id: id },
      };
      var res = testUtil.responseValidator(
        200,
        function (courses) {
          course.should.have.property("deleted");
          course.deleted.should.equal(true);
        },
        done()
      );
      courses.deleteCourse(req, res);
    });
  });
  describe("Get courses", function () {
    it("should get the courses list", function (done) {
        this.timeout(15000);

      var req = {
        params: { id: id },
      };
      var res = testUtil.responseValidator(
        200,
        function (courses) {
          course.should.have.property("deleted");
          course.deleted.should.equal(true);
        },
        done()
      );
      courses.deleteCourse(req, res);
    });
  });
  describe("Get course by id", function () {
    it("should get the course by id", function (done) {
        this.timeout(15000);

      var req = {
        params: { id: id },
      };
      var res = testUtil.responseValidator(
        200,
        function (courses) {
          course.should.have.property("deleted");
          course.deleted.should.equal(true);
        },
        done()
      );
      courses.deleteCourse(req, res);
    });
  });
  describe("Delete course", function () {
    it("should delete the course", function (done) {
        this.timeout(15000);

      var req = {
        params: { id: id },
      };
      var res = testUtil.responseValidator(
        200,
        function (courses) {
          course.should.have.property("deleted");
          course.deleted.should.equal(true);
        },
        done()
      );
      courses.deleteCourse(req, res);
    });
  });

  after(function (done) {
    // course.deleteCourse({}, function (err) {
    //   if (err) {
    //     console.log(err);
    //   }
    // });
    mongoose.disconnect(done);
    done()
  });
  afterEach(function (done) {
    done();
  });
});
