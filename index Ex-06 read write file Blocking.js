//Blocking
const fs = require("fs");

//อ่านๆฟล์ input.txt
const data = fs.readFileSync("myfile/input.txt", "utf-8");
console.log(data);
console.log("จบงานทำงาน");

//เขียนไฟล์
const outPutText = `Hello Node.js\n${data}\nไฟล์ถูกเขียนเมื่อ ${new Date()}`;
fs.writeFileSync("myfile/input.txt", outPutText);
console.log(
  "================================ เขียนไฟล์เรียบร้อย! ================================"
);
const dataNew = fs.readFileSync("myfile/input.txt", "utf-8");

console.log(dataNew);
