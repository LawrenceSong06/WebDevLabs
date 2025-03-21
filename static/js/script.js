var x = 5;
var y = 7;
var z = x+y;
console.log(z);

var A = "Hello ";
var B = "world!";
var C = A+B;
console.log(C);

function sumNPrint(x1, x2){
    let x3 = x1+x2;
    console.log(x3);
}

sumNPrint(x,y);
sumNPrint(A,B);

var C = "123456789012";
if(C.length > z){
    console.log(C);
}else if(C.length < z){
    console.log(z);
}else{
    console.log("good job!");
}

L1 = ["Watermelon","Pineapple","Pear","Banana"];
L2 = ["Apple","Banana","Kiwi","Orange"];
function findTheBanana(list){
    for(let i = 0 ; i < list.length ; i++){
        if(list[i] == "Banana"){
            // window.alert("found the Banana in "+i);
        }
    }
}
findTheBanana(L1);
findTheBanana(L2);

function findBananaL1(item){
    if(item=="Banana"){
        // window.alert("Found Banana in the first list");
    }
}
L1.forEach(findBananaL1);

function greetingFunc(){
    let d = new Date();
    let h = d.getHours();
    let msg = "";
    if(h < 5){
        msg = "Good night!";
    }else if(h<12){
        msg = "Good morning!";
    }else if(h<18){
        msg = "Good afternoon!";
    }else if(h<20){
        msg = "Good evening!";
    }else{
        msg = "Good night!";
    }
    console.log(msg);
    document.getElementById("greeting").innerHTML = msg +" I'm Lawrence Song."
}
var path = window.location.href;
function splitPathBySlash(p){
    let res = [];
    let str = "";
    for(let i = 0 ; i < p.length ; i++){
        if(p[i] == "/"){
            if(str != "") res[res.length] = str;
            str = "";
            continue;
        }
        str+=p[i];
    }
    if(str != "") res[res.length]=str;
    return res;
}
var path_split = splitPathBySlash(path);

if(path_split[path_split.length-1]=="index.html") greetingFunc();

function addYear(){
    var d = new Date();
    var year = d.getFullYear();
    document.getElementById("copyYear").innerHTML = " @" +year;
}

// function showList(){
//     let fun_list = document.getElementById("fun_list");
//     document.getElementById("showList").style.display = "none";
//     fun_list.style.display = "block";
// }

$(".read_more_or_less").click(function read_more_or_less(){
    let status = $(this).closest(".read_more_or_less").attr("status");
    let read_more = $(this).closest(".read_more_or_less").attr("read_more");
    let read_less = $(this).closest(".read_more_or_less").attr("read_less");
    if(status=="Read more"){
        $(this).siblings(".full_content").css("display","block");
        $(this).closest(".read_more_or_less").html(read_less);
        $(this).closest(".read_more_or_less").attr("status","Read less");
    }else{
        $(this).siblings(".full_content").css("display","none");
        $(this).closest(".read_more_or_less").html(read_more);
        $(this).closest(".read_more_or_less").attr("status","Read more");
    }
})

function validate_form(){
    if(!document.getElementById("name").checkValidity()){
        document.getElementById("form_msg").style.display="block";
        document.getElementById("name").style.border="solid red";
    }
}

function getAdvice(){
    fetch("https://api.adviceslip.com/advice", {method: "GET"})
    .then(response => response.json())
    .then(data => document.getElementById("adviceText").innerHTML= data.slip.advice)
    .catch(error => console.log(error));


}

function getWeather(){
    fetch("https://api.weather.gov/gridpoints/PBZ/79,67/forecast",{method:"GET"})
    .then(response => response.json())
    .then(data => {
        document.getElementById("weather").innerHTML = 
            data.properties.periods[0].shortForecast +
             ", " + data.properties.periods[0].temperature + 
             data.properties.periods[0].temperatureUnit + 
             "&deg;";
    })
    .catch(error => console.log(error));
}

function initPage(){
    addYear();
    getWeather();
}