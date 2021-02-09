const fs = require("fs");
const AWS = require("aws-sdk");

const uploadFile = (fileName) => {
  const fileContent = fs.readFileSync(fileName);

  const params = {
    Bucket: "earthspace-post-images",
    Key: uploadFile("recycle-image.png"),
    Body: fileContent
  };

  s3.upload(params, function (err, data) {
    if (err) {
      throw err;
    }
    console.log(`File uploaded successfully. ${data.Location}`);
  });
};
