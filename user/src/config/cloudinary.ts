import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

// Debug environment variables
console.log("Cloudinary Config Check:");
console.log("Cloud_Name:", process.env.Cloud_Name ? "Set" : "Not set");
console.log("Api_Key:", process.env.Api_Key ? "Set" : "Not set");
console.log("Api_Secret:", process.env.Api_Secret ? "Set" : "Not set");

cloudinary.config({
  cloud_name: process.env.Cloud_Name,
  api_key: process.env.Api_Key,
  api_secret: process.env.Api_Secret,
});

export default cloudinary;