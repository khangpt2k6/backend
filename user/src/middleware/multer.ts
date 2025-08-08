import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "user-avatars",
    allowed_formats: ["jpg", "jpeg", "png", "gif", "webp"],
    transformation: [
      { width: 400, height: 400, crop: "fill", gravity: "face" },
      { quality: "auto" },
    ],
  } as any,
});

// Add debugging for Cloudinary uploads
console.log("📁 Multer storage configured for Cloudinary");
console.log("📂 Upload folder: user-avatars");
console.log("🖼️  Supported formats: jpg, jpeg, png, gif, webp");
console.log("📏 Max file size: 5MB");

export const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  },
  fileFilter: (req, file, cb) => {
    console.log("File upload attempt:", {
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: file.size
    });
    
    if (file.mimetype.startsWith("image/")) {
      console.log("✅ File accepted:", file.originalname);
      cb(null, true);
    } else {
      console.log("❌ File rejected:", file.originalname, "- Not an image");
      cb(new Error("Only image files are allowed"));
    }
  },
});
