// สร้าง Promise

const connect = true;
const url1 = "pokz.dev/file1.json";
const url2 = "pokz.dev/file2.json";
const url3 = "pokz.dev/file3.json";
const url4 = "pokz.dev/file4.json";

function downloading(url) {
  return new Promise(function (resolve, reject) {
    console.log(`กำลังโหลดไฟล์จาก ${url}`);
    setTimeout(() => {
      if (connect) {
        resolve(`โหลด ${url} เรียบร้อย`);
      } else {
        reject(`เกิดข้อผิดพลาด`);
      }
    }, 1000);
  });
}

//Promise Hell
// downloading(url1).then((result) => {
//   console.log(result);
//   downloading(url2).then((result) => {
//     console.log(result);
//     ownloading(url3).then((result) => {
//       console.log(result);
//     });
//   });
// });

//Promise Then
downloading(url1)
  .then((result) => {
    console.log(`url1 ${result}`);
    return downloading(url2);
  })
  .then((result) => {
    console.log(`url2 ${result}`);
    return downloading(url3);
  })
  .then((result) => {
    console.log(`url3 ${result}`);
  });
