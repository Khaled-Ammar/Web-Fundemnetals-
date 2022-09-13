var ro = document.querySelector(".foot");

// This funcation will make ...
function fun1() {
    ro.remove();
}
// ------------------------------------------------------
// const tem=[
//     {fer:'60',cel:'24'},
//     {fer:'52',cel:'18'},
//     {fer:'65',cel:'27'},
//     {fer:'40',cel:'19'},
//     {fer:'45',cel:'21'},
//     {fer:'70',cel:'16'},
//     {fer:'66',cel:'26'},
//     {fer:'67',cel:'21'},

// ]
// var temp =document.querySelector("")
// function fun2 (){
//     temp.numContent
//     =temp.num
// }

// -----------------------------------------------

// var sp1_ = document.querySelector(".sp1") 
// function fun2 (x) {
//     // f = x * 1.8 + 32
//     if (x.value =="f"){

//         sp1_.innerText = Number(sp1_) * 1.8 + 32;
//         console.log(typeof(sp1_) )
//     }

// }
// ------
var sp1_ = document.querySelector(".sp1");
var sp2_ = document.querySelector(".sp2");
var sp3_ = document.querySelector(".sp3");
var sp4_ = document.querySelector(".sp4");
var sp5_ = document.querySelector(".sp5");
var sp6_ = document.querySelector(".sp6");
var sp7_ = document.querySelector(".sp7");
var sp8_ = document.querySelector(".sp8");

function fun2(x) {

    if (x.value == "f") {

        sp1_.innerText = 75 + "°";
        sp2_.innerText = 65 + "°";
        sp3_.innerText = 80 + "°";
        sp4_.innerText = 66 + "°";
        sp5_.innerText = 69 + "°";
        sp6_.innerText = 61 + "°";
        sp7_.innerText = 78 + "°";
        sp8_.innerText = 70 + "°";
    }
    else {
        sp1_.innerText = 24 + "°";
        sp2_.innerText = 18 + "°";
        sp3_.innerText = 27 + "°";
        sp4_.innerText = 19 + "°";
        sp5_.innerText = 21 + "°";
        sp6_.innerText = 16 + "°";
        sp7_.innerText = 26 + "°";
        sp8_.innerText = 21 + "°";
    }

}
