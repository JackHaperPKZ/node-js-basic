# node-js-basic

Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project! Node.js runs the V8 .

# สอนโดย Kong Ruksiam

https://www.facebook.com/KongRuksiamTutorial/
https://www.udemy.com/courses/development/

# mongoDB

เป็นฐานข้อมูลเชิงเอกสาร (Document Store) สําหรับเก็บข้อมูลขนาด ใหญ่ที่มีความยืดหยุ่นสูง ง่ายต่อการปรับขนาดและทํางานข้าม Platform ได้ การจัดเก็บข้อมูลไม่ได้อยู่ในรูปแบบตาราง แต่จะอยู่ในรูปแบบเอกสาร JSON แล้วเซฟเก็บไว้ในเอกสารรูปแบบไบนารี BSON
มีองค์ประกอบอยู่ 3 ส่วน

- Database (ฐานข้อมูล) เป็นส่วนที่ใช้เก็บข้อมูล Collection หรือ ฐานข้อมูล
- Collection หรือชุดข้อมูลเทียบได้กับตารางในฐานข้อมูลเชิงสัมพันธ์
- Documents เอกสารที่จัดเก็บข้อมูลของคู่คีย์(Key)และค่า(Value)

# Mongoose

เชื่อมต่อ MongoDB ด้วย Mongoose
ถ้าต้องการให้โปรเจคเชื่อมโยงกับฐานข้อมูล MongDB ต้องดำเนินการผ่านตัวกลางที่เรียกว่า Driver ในหัวข้อนี้จะใช้เครื่องมือตัวหนึ่งชื่อ Mongoose

Mongoose คืออะไร
เป็น Framework รูปแบบ ODM (Object Document Model)
สําหรับติดต่อและดําเนินการกับฐานข้อมูลในรูปแบบ Document ที่มีข้อมูลด้านในเป็น Object
กําหนดโครงสร้างของ Collection เป็น Schema จัดการข้อมูลผ่าน Model (เพิ่ม, ลบ, แก้ไข, สอบถาม)

การใช้งาน Mongoose

/polls "ติดตั้ง Mongoose" "เชื่อม MongoDB ด้วย Mongoose" "ออกแบบ Schema และ Model" "นำโมเดลไปใช้งาน"

-ติดตั้ง Mongoose
npm install mongoose
mongoose.connect('mongodb://<hostnam:port>/<database>)

-เชื่อม MongoDB ด้วย Mongoose
const mongoose = require(‘mongoose')
mongoose.connect(‘mongodb://<hostname:port>/<database>',{
useNewUrlParser:true,
useUnified Topology:true
}).catch(err=>console.log(err))

-ออกแบบ Schema และ Model
mongoose.Schema({
field: type,
field: type
})

const productSchema = mongoose.Schema({
name :String,
price: Number,
description: String,
imagePath:String
})
Schema คือ โครงสร้างในการเก็บข้อมูล

-นำโมเดลไปใช้งาน
mongoose.model ( Collection', schema)
Model คือส่วนที่ใช้จัดการเกี่ยวกับข้อมูล เช่น
let Product = mongoose.model ( Collection', productSchema)
module.exports = Product; // export ออกไปใช้งาน
