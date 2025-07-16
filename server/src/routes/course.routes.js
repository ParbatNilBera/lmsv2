import express from "express";
import moduleRoutes from "./module.routes.js";
import {
  getAllCourses,
  createCourse,
  getCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/course.controller.js";
const router = express.Router();

router.route("/").get(getAllCourses).post(createCourse);
router
  .route("/:courseName")
  .get(getCourse)
  .put(updateCourse)
  .delete(deleteCourse);
router.use("/:courseid/modules", moduleRoutes);
export default router;
