const { default: mongoose } = require("mongoose");

//เชื่อมโยงไปยัง MongoDB
const dbUrl = "mongodb://localhost:27017/productDB";
mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((err) => console.error(err));

//ออกแบบ Schema
let productSchema = mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  description: String,
});

//สร้าง โมเดล
let Product = mongoose.model("Products", productSchema);

//ส่งออกโมเดล
module.exports = Product;

//ออกแบบฟังก์ชั่นสำหรับบันทึกข้อมูล
module.exports.saveProduct = function (model, data) {
  model.save(data);
};
