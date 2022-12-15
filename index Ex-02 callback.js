//เขียนโปรแกรมดาวน์โฟลดไฟล์
const url1 = "kong.dev/file1.json";
const url2 = "kong.dev/file2.json";
const url3 = "kong.dev/file3.json";
const url4 = "kong.dev/file4.json";

function downloading(url, callback) {
  setTimeout(() => {
    console.log(`กำลังโหลด ${url}`);
    callback(url);
  }, 1000);
}

// function complete(result){
//     console.log(`ดาวน์โหลด ${result} เรียบร้อย!`)
// }

// downloading(url1,complete);
downloading(url1, function (result) {
  console.log(`ดาวน์โหลด ${result} เรียบร้อย!`);
  downloading(url2, function (result) {
    console.log(`ดาวน์โหลด ${result} เรียบร้อย!`);
    downloading(url3, function (result) {
      console.log(`ดาวน์โหลด ${result} เรียบร้อย!`);
      downloading(url4, function (result) {
        console.log(`ดาวน์โหลด ${result} เรียบร้อย!`);
      });
    });
  });
});
