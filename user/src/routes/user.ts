import express from "express";
import {
  getAllUsers,
  getAUser,
  loginUser,
  myProfile,
  updateName,
  updateAvatar,
  verifyUser,
  testUpload,
} from "../controllers/user.js";
import { isAuth } from "../middleware/isAuth.js";
import { upload } from "../middleware/multer.js";

const router = express.Router();

router.post("/login", loginUser);
router.post("/verify", verifyUser);
router.get("/me", isAuth, myProfile);
router.get("/user/all", isAuth, getAllUsers);
router.get("/user/:id", getAUser);
router.post("/update/user", isAuth, updateName);
router.post("/update/avatar", isAuth, upload.single("avatar"), updateAvatar);
router.get("/test-upload", isAuth, testUpload);

export default router;
