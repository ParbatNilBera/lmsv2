import express from "express";
import {
  registerInstructor,
  getInstructorDetails,
  updateDetails,
} from "../controllers/instructor.controller.js";
import { validateUser } from "../middlewares/validate.middleware.js";
import { registerSchema } from "../validators/auth.validator.js";

import { instructorApply } from "../controllers/instructor.controller.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "hello from instructor" });
});

// router.post('/register',validateUser(registerSchema),registerInstructor);

router.post("/instructor-apply", instructorApply);
router.get("/get-my-profile/:instructorId", getInstructorDetails);
router.post("/update-profile", updateDetails);
export default router;
