/** โมดูล URL */

const http = require("http");
const fs = require("fs");
const url = require("url");

const indexPage = fs.readFileSync(`${__dirname}/templates/index.html`, "utf-8");
const productPage1 = fs.readFileSync(
  `${__dirname}/templates/product1.html`,
  "utf-8"
);
const productPage2 = fs.readFileSync(
  `${__dirname}/templates/product2.html`,
  "utf-8"
);
const productPage3 = fs.readFileSync(
  `${__dirname}/templates/product3.html`,
  "utf-8"
);

const server = http.createServer((req, res) => {
  // console.log(url.parse(req.url, true));

  const { pathname, query } = url.parse(req.url, true);

  // const pathName = req.url;
  console.log("url = ", pathname);

  switch (pathname) {
    case "/" || "/home":
      res.write(indexPage);
      res.end();
      break;

    case "/product":
      console.log(query.id);
      if (query.id === "1") {
        res.end(`${productPage1}`);
      } else if (query.id === "2") {
        res.end(`${productPage2}`);
      } else if (query.id === "3") {
        res.end(`${productPage3}`);
      } else {
        res.writeHead(404);
        res.end(`<h1>Not Found</h1>`);
      }
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
