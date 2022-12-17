const express = require("express");
const path = require("path");

const app = express(); // เรียกใช้งาน express และ เก็บลงในตัวแปร app

/**
 * static file
 * การทำงาน->public->อ้างอิงไฟล์.html(static)
 * เรียกทำงานไฟล์โดยไม่ต้องผ่าน router
 */
app.use(express.static(path.join(__dirname, "public")));

app.listen(8080, "localhost", () => {
  console.log("start server in port 8080");
});
