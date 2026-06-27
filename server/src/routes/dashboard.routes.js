import { Router } from "express";
import Project from "../models/Project.js";
import ContactLead from "../models/ContactLead.js";
import EnrollmentLead from "../models/EnrollmentLead.js";
import Admin from "../models/Admin.js";
import { requireAuth } from "../middleware/auth.js";

const router = Router();

router.use(requireAuth);

router.get("/", async (req, res) => {
  const [projectCount, contactCount, newContactCount, enrollmentCount, newEnrollmentCount, adminCount] =
    await Promise.all([
      Project.countDocuments(),
      ContactLead.countDocuments(),
      ContactLead.countDocuments({ status: "new" }),
      EnrollmentLead.countDocuments(),
      EnrollmentLead.countDocuments({ status: "new" }),
      Admin.countDocuments()
    ]);

  res.json({
    projects: projectCount,
    contacts: { total: contactCount, new: newContactCount },
    enrollments: { total: enrollmentCount, new: newEnrollmentCount },
    admins: adminCount
  });
});

export default router;
