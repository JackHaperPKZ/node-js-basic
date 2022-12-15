/*const name = 'pokz'
console.log(name)
const options = 5+5
console.log(options)*/


//ทบทวน Callback Function

function calculate(x,y,callback) {
    // return x+y
    console.log(`กำลังคำนวณ...`)

    setTimeout(() =>{
        // console.log(`กำลังคำนวณ...`)
        const sum = x+y
        callback(sum)
    },3000)
}

/*function display(result){
    console.log(`ผลบวก = ${result}`)
}*/


//ฟังชั่นแบบปกติ
/*const sum = calculate(100,500)
display(sum)*/

//ฟังชั่นแบบ Callback
calculate(100,500,function(result){
    console.log(`ผลบวก = ${result}`)
})
