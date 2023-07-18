const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const FormData = require("form-data");
const fs = require("fs");
const { cloudinary } = require("../../db/cloudinary");

const getImages = async (req, res) => {
  console.log(req.file)
  const file = req.file.path;
  const formData = new FormData();

  formData.append("file", fs.createReadStream(file));
  formData.append("upload_preset", "rcesppfp");

  try {
    const response = await cloudinary.post(
      "v1_1/ayoze/image/upload",
      formData,
      {
        headers: formData.getHeaders(),
      }
    );
    console.log(response)
    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error uploading image:", error);
    res.status(500).json({ error: "Error uploading image" });
  }
};

module.exports = { getImages };
