import express from "express";
import isAuth from "../middlewares/isAuth.js";
import {
  createNewChat,
  getAllChats,
  getMessagesByChat,
  sendMessage,
  replyToMessage,
  pinMessage,
  addReaction,
  getPinnedMessages,
} from "../controllers/chat.js";
import { upload } from "../middlewares/multer.js";

const router = express.Router();

router.post("/chat/new", isAuth, createNewChat);
router.get("/chat/all", isAuth, getAllChats);
router.post("/message", isAuth, upload.single("image"), sendMessage);
router.get("/message/:chatId", isAuth, getMessagesByChat);

// New routes for enhanced features
router.post("/message/reply", isAuth, upload.single("image"), replyToMessage);
router.patch("/message/:messageId/pin", isAuth, pinMessage);
router.post("/message/:messageId/reaction", isAuth, addReaction);
router.get("/chat/:chatId/pinned", isAuth, getPinnedMessages);

export default router;
