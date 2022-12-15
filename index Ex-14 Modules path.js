/** โมดูล path
 * Express.js เป็น Framework ของ JavaScript ที่ใช้งานร่วมกับ Node.js
 * เพื่อสนับสนุนการทํางานของ Web Server ให้มีความง่ายและ สะดวกสบายมากยิ่งขึ้น
 * เนื่องจากมี Feature หลายๆอย่างที่น่าสนใจ เช่น Routing การจัดการ Request, Response และ Middleware เป็นต้น
 * ในปัจจุบันนิยมนํา Express.js มาสร้าง Web Server มากกว่าที่จะ ทําผ่าน Node.js โดยตรงแล้ว
 */
const express = require("express"); //นำ express.js มาใช้
const path = require("path");
const app = express(); // เรียกใช้งาน express และ เก็บลงในตัวแปร app

//อ้างอิงตำแหน่งไฟล์
// const indesPages = path.join(__dirname, "templates/index.html");

app.get("/", (req, res) => {
  //ระบุ path เริ่มต้น
  res.status(200);
  res.type("text/html");
  res.sendFile(path.join(__dirname, "templates/index.html"));
});

app.get("/product", (req, res) => {
  //ระบุ path เริ่มต้น
  res.status(200);
  res.type("text/html");
  res.sendFile(path.join(__dirname, "templates/product1.html"));
});

app.listen(8080, "localhost", () => {
  console.log("start server in port 8080");
});
