// ------------------------------------------- function count Purchases
var button = document.querySelector("#num")
var count = 0
function buy() {
    count++;
    button.innerText = count
}
// ------------------------------------------- function count Purchases



// ------------------------------------------- function on change
var section_paragraph_ = document.querySelector(".section_paragraph");

function select(x) {
    if (x.value == "Price") {
        section_paragraph_.innerText = "62 Products, sorted by Price";
    }
    else {
        section_paragraph_.innerText = "62 Products, sorted by Best Selling";
    }
}
// ------------------------------------------- function on change



// ------------------------------------------- function alert
function contact() {
    alert("Contact us 555-5555");
}
// ------------------------------------------- function alert