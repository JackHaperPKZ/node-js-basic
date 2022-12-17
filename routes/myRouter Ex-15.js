//จัดการ Routing
const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  //ระบุ path เริ่มต้น
  res.status(200);
  res.type("text/html");
  res.sendFile(path.join(__dirname, "../templates/index.html"));
});

// router parameter
router.get("/product/:id", (req, res) => {
  //ระบุ path เริ่มต้น
  //   res.status(200);
  //   res.type("text/html");
  const productId = req.params.id;
  try {
    if (productId === "1" || productId === "2" || productId === "3") {
      res.sendFile(
        path.join(__dirname, `../templates/product${productId}.html`)
      );
    } else {
      /** เปลี่ยนเส้นทาง path */
      res.redirect("/");
      //   res.status(404);
      //   res.send(`<h1>404 Pages Not Found</h1>`);
    }
  } catch (error) {
    res.redirect("/");
    // res.status(404);
    // res.send(`<h1>404 Pages Not Found</h1>`);
  }
  //   const myhtml = `<h1>Product ${productId}</h1>`;
  //   res.send(myhtml);
});

module.exports = router;
