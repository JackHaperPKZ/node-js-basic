/**
 * Views & Template Engin
 *
 * Dynamic File
 * ไฟล์ที่มีความยืดหยุ่นไม่มีเนื้อหาตายตัว และ ทำงานตามเงื่อนไขที่กำหนดขึ้น
 * เช่น ให้แสดงผลเนื้อหาอ้างอิงตามข้อมูลที่อยู่ในฐานข้อมูล
 *
 * View คือ ส่วนที่ใช้แสดงเนื้อหาใน Web Browser
 * ในรูปแบบของ Dynamic Web Page โดยเนื้อหาที่แสดงผลจะสามารถเปลี่ยนแปลง
 * ได้ เช่น ทําการดึงข้อมูลจากที่อื่นมาแสดงผล แล้วแทรกลงไปในส่วนที่ต้องการจะเรียกรูป
 * แบบนี้ว่า Template
 *
 * Template คือ หน้าตาแอพพลิเคชั่นเป็นส่วนที่ไว้ใช้
 * แสดงผลข้อมูลผลลัพธ์จากการประมวลผลข้อมูลในหน้า เว็บร่วมกับ HTML, CSS, JavaScript
 * ไฟล์ของ Template จะเก็บไว้ในโฟลเดอร์ที่มีชื่อว่า
 * Views เท่านั้น (หรือโฟลเดอร์อื่นต้องไปตั้งค่าเพิ่มเติม)
 *
 * เนื่องจากการใช้งาน Node.js และ Express.js ยังไม่ รองรับการใช้งาน Template
 * โดยตรง จะต้องมีการ ติดตั้งส่วนที่จัดการกับ Template เรียกว่า
 * “Template Engine” ซึ่งมีอยู่หลายโมดูลด้วยกัน เช่น EJS, Pug, Jade เป็นต้น
 *
 * EJS เป็น Template Engine ที่มีรูปแบบโครงสร้างการเขียนคล้าสยกับ HTML
 * เพียงแต่สามารถเขียนคำสั่ง JavaScript เข้าไปใน HTML ได้โดยที่ไฟล์นั้นมีนานสกุล .ejs และสามารถติดตั้งโดยใช้คำสั่ง
 * npm install ejs
 */

const express = require("express");
const path = require("path");
const router = require("./routes/myRouter");
const app = express(); // เรียกใช้งาน express และ เก็บลงในตัวแปร app

app.set("views", path.join(__dirname, "views"));
app.set("views engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.use(express.static(path.join(__dirname, "public")));

app.listen(8088, "localhost", () => {
  console.log("start server in port 8088");
});
