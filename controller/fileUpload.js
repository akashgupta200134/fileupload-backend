const path = require("path");
const FileModel = require("../model/fileschema");

exports.fileUpload = async (req, res) => {
  try {
   
    const uploadedFile = req.files.file;
    console.log(uploadedFile);

    const fileName = `${Date.now()}.${uploadedFile.name.split(".").pop()}`;
    const filePath = path.join(__dirname, "/files/", fileName);



    uploadedFile.mv(filePath, async (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ success: false, message: "File upload failed" });
      }

      res.json({
        success: true,
        message: "File uploaded successfully",
        filePath: `/files/${fileName}`,
      });
    });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
