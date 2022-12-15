/** Routing
 *
 * กำหนดเส้นทาง หรือ URL ในการอนุญาตให้เข้าถึงข้อมูล
 * รวมไปถึงตรวจสอบ URL Request เพื่อจะได้กำหนดรูปแบบการทำงาน
 */

/** HTTP Status Code
 *
 * เป็นรหัสที่บ่งบอกสถานะของ Request ตัวอย่งเช่น
 * 200 ok (ดำเนินการเสร็จสมบูรณ์)
 * 201 create (สร้างข้อมูลใหม่เรียบร้อย)
 * 400 Bad Request (Server ไม่เข้าใจว่า Request นี้เกี่ยวกับอะไร)
 * 404 Not Found (หาข้อมูลที่เรียกไม่เจอหรือไม่สามารถใช้งานได้)
 * 500 Internal Server Error (ถูกต้องแต่มีข้อผิดพลาดที่ฝั่ง Server)
 */
const http = require("http");
const fs = require("fs");

const indexPage = fs.readFileSync(`${__dirname}/templates/index.html`, "utf-8");
const productPage1 = fs.readFileSync(
  `${__dirname}/templates/product1.html`,
  "utf-8"
);

const server = http.createServer((req, res) => {
  const pathName = req.url;
  console.log("url = ", pathName);

  switch (pathName) {
    case "/" || "/home":
      res.write(indexPage);
      res.end();
      break;

    case "/product":
      res.end(`${productPage1}`);
      break;

    default:
      res.writeHead(404);
      res.end(`<h1>Not Found</h1>`);
      break;
  }
  //   if (pathName === "/" || pathName === "/home") {
  //     const myhtml = `
  //     <h1>Hello Pokz Haper</h1>
  //     <p style="background:red">porntep studio | 2022</p>
  //     `;
  //     res.write(indexPage);
  //     res.end();
  //   } else if (pathName === "/product") {
  //     res.end(`${productPages}`);
  //   } else {
  //     res.writeHead(404);
  //     res.end(`<h1>Not Found</h1>`);
  //   }
});
server.listen(8080, "localhost", () => {
  console.log("start server in port 8080");
});
