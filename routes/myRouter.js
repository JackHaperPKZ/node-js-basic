//จัดการ Routing
const express = require("express");
const router = express.Router();
//เรียกใช้งานโมเดล
const Product = require("../models/products");

router.get("/", (req, res) => {
  /**
   * Ex-17
   * const name = "pokz-naja";
   * const age = 26;
   * const address = "<h2>นนทบุรี นครปฐม</h2>";
   * res.render("index.ejs", { name: name, age: age, address: address });
   * */
  /**
   * Ex-18
   * const products = ["เสื้อ", "พัดลม", "หูฟัง", "คีบอร์ด", "แอร์"];
   * res.render("index.ejs", { products: products });
   */
  const products = [
    {
      name: "โน็ตบุ๊ค",
      price: 500,
      image: "images/products/product1.png",
    },
    {
      name: "เสื้อ",
      price: 200,
      image: "images/products/product2.png",
    },
    {
      name: "หูฟัง",
      price: 3000,
      image: "images/products/product3.png",
    },
  ];
  res.render("index.ejs", { products: products });
});

router.get("/addForm", (req, res) => {
  res.render("form.ejs");
});

router.get("/manage", (req, res) => {
  res.render("manage.ejs");
});

router.get("/insert", (req, res) => {
  console.log("/insert", req.query);
  res.render("form.ejs");
});

router.post("/insert", (req, res) => {
  // console.log("/insert", req.body);
  let data = new Product({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    description: req.body.description,
  });
  Product.saveProduct(data, (err) => {
    if (err) console.log(err);
    res.redirect("/");
  });
  // res.render("form.ejs");
});

module.exports = router;
