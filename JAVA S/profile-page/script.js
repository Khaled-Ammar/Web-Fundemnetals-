console.log("page loaded...");

function click1(){
    document.getElementById("name1").innerText="Joan Assi";
}
var e=document.getElementById("remove1");
var e1=document.getElementById("remove2");
var e2=document.getElementById("remove3");
var e3=document.getElementById("remove4");
var e4=document.getElementById("remove5");
var e5=document.getElementById("remove6");
var counter = 2;
var counter2 = 500;
function remove1(){
e.remove();
counter-=1;
document.getElementById("c1").innerText=counter;
}
function remove2(){
    e1.remove();
    counter-=1;
    document.getElementById("c1").innerText=counter;
}
function remove3(){
    e2.remove();
    counter2-=1;
    document.getElementById("c2").innerText=counter2+"+";
}
function remove4(){
    e3.remove();
    counter2-=1;
    document.getElementById("c2").innerText=counter2+"+";
}
function remove5(){
    e4.remove();
    counter2-=1;
    document.getElementById("c2").innerText=counter2+"+";
}
function remove6(){
    e5.remove();
    counter2-=1;
    document.getElementById("c2").innerText=counter2+"+";
}
function add5(){
    e5.remove();
    counter2+=1;
    document.getElementById("c2").innerText=counter2+"+";
    
}
function add4(){
    e4.remove();
    counter2+=1;
    document.getElementById("c2").innerText=counter2 +"+";
    
}
function add3(){
    e3.remove();
    counter2+=1;
    document.getElementById("c2").innerText=counter2 +"+";
    
}
function add2(){
    e2.remove();
    counter2+=1;
    document.getElementById("c2").innerText=counter2+"+";
    
}
