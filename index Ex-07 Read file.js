//Non-Blocking
const fs = require("fs");

//อ่านๆฟล์ input.txt
fs.readFile("myfile/input.txt", "utf-8", (err, data) => {
  if (err) return console.log("เกิดข้อผิดพลาด", err);
  //   console.log("data => ", data);
  const outPutText = `Hello Node.js\n${data}\nไฟล์ถูกเขียนเมื่อ ${new Date()}`;
  fs.writeFile("myfile/input.txt", outPutText, (err, data) => {
    if (err) return console.log("เขียนไฟล์ผิดพลาด", err);
    console.log("เขียนไฟล์เรียบร้อย");
  });
});

//เขียนไฟล์
// const outPutText = `Hello Node.js\n${data}\nไฟล์ถูกเขียนเมื่อ ${new Date()}`;
// fs.writeFileSync("myfile/input.txt", outPutText);
// console.log(
//   "================================ เขียนไฟล์เรียบร้อย! ================================"
// );
// const dataNew = fs.readFileSync("myfile/input.txt", "utf-8");

// console.log(dataNew);
