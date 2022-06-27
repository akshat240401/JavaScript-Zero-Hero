// Print OnScreen
// alert('Welcome');
// document.write("Document write is written here")

// Print on Console :- JavaScript-Console API
// console.log("Hello World");
// console.warn("This is warning")
// console.error("This is error")

// JavaScript Variables
    // Variables are containers to store data values
    // var is used to establish a container
    var number1 =34;
    var number2 =56;
    // console.log(number1 + number2); //Used to print output in console
    
    // Data Types in JS
    /*
    There are 2 types of DataTypes in JavaScript
    1. Primitve DataTypes - undefined, null, number, string, boolan, symbol
    2. Reference DataTypes - arrays, objects
    */
        // String
    var str1 = "This is a string";  
    // console.log(str1)
        // Numbers
    var num1 = 45.5;      
    // console.log(num1)          
        // Object
    var marks ={                    
        akshat: 100,
        harshith: 100,
        rutuja: 100,
        aayush: 100
    }
    // console.log(marks)
        // Boolean
    var a=true;                    
    var b=false;
    // console.log(a,b)
        // Undefined
    var und=undefined; // can also be written as: var und;
    // console.log(und)
        // Null
    var n = null;
    // console.log(n)
        // Array
    var arr = [1,2,3,4,5];
    var arr1 = [6,7,"akshat",8,9,10];
    // console.log(arr);
    // console.log(arr1);

// Operators in JS
    // Arithmetic Operators
var x=34;
var y=36;
// console.log("The value of a+b is",a+b);
// console.log("The value of a-b is",a-b);
// console.log("The value of a*b is",a*b);
// console.log("The value of a/b is",a/b);
    // Assignment Operators
var c = y;
// c += 2;
// c -= 2;
// c *= 2;
// c /= 2;
// console.log("The value of c is",c);
    // Comparison Operators
p = 10;
q = 20;
// console.log(x == y);
// console.log(x != y);
// console.log(x <= y);
// console.log(x >= y);
// console.log(x < y);
// console.log(x > y);
    // Logical Operators
// console.log("Logical AND");
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);
// console.log("Logical OR");
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);
// console.log("Logical NOT");
// console.log(!true);
// console.log(!false);

// Funtion in JS
function avg(a,b){
    c = (a+b)/2;
    return c;
}
c1= avg(4,6);
// console.log(c1);

var arr3 = [1,2,3,4,5,6,7];
// console.log(arr3);
// for(var i=0;i<arr.length;i++){
//     console.log(arr3[i]);
// }

arr3.forEach(function(element){
    // console.log(element)
})

let j=0;
while(j<arr3.length){
    // console.log(arr3[j]);
    j++
}

// do{
//     console.log(arr[j]);
//     j++;
// } while(j<arr3.length);

let myArr = ["Fan","Camera",07,null,true];
// Array Methods
// console.log(myArr.length);
myArr.pop();
myArr.push("Akshat");
myArr.shift();
myArr.sort();
// console.log(myArr);

let myString = "I am Akshat, Akshat Mehta"
// String Methods
// console.log(myString.length);
// console.log(myString.indexOf("Akshat"));
// console.log(myString.lastIndexOf("Akshat"));
// console.log(myString.slice(0,7));
// d = myString.replace("Akshat","Developer");
// console.log("Original String - ",myString);
// console.log("Replaced String - ",d);

// Dates in JavaScript
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());

// DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem);
let cla = document.getElementsByClassName('container');
// console.log(cla);
cla[0].classList.add("bg-primary");
cla[0].classList.add("text-success");
// cla[1].classList.add("bg-secondary");
// cla[1].classList.add("other-text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);
// console.log(cla[0].innerHTML);
// console.log(cla[0].innerText);
// tn = document.getElementsByTagName('div')
// console.log(tn)
// createdElement = document.createElement('p');
// createdElement.innerText = "This is new para";
// tn[0].appendChild(createdElement);
// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is replaced element";
// tn[0].replaceChild(createdElement2, createdElement);
// removeChild(element); ---> removes and element
// document.title
// document.location
// document.scripts
// document.links
// document.URL
// document.forms
// document.domain
// document.images
// sel = document.querySelectorAll('.container')

// function clicked(){
//     console.log("The Button was clicked")
// }
// window.onload = function(){
//     console.log('The document is loaded')
// }
// Events in JavaScript
// firstcontainer.addEventListener('click', function(){
//     console.log("Clicked On Container")
// }) 

// firstcontainer.addEventListener('mouseover', function(){
//     console.log("Mouse on Container")
// })

// firstcontainer.addEventListener('mouseout', function(){
//     console.log("Mouse out of Container")
// })
// let prevHTML = document.querySelectorAll('.container')[1].innerHTML
// firstcontainer.addEventListener('mouseup', function(){
//     document.querySelectorAll('.container')[1].innerHTML= prevHTML;
//     console.log("Mouse up when released clicked on container")
// })
// firstcontainer.addEventListener('mousedown', function(){
//     document.querySelectorAll('.container')[1].innerHTML="<b>We have clicked</b>"
//     console.log("Mouse down when clicked on container")
// })

// Arrow Functions
// function summ(a,b){
//     return a+b;
// }
// summ = (a,b)=>{
//     return a+b;
// }

// SetTimeout and setinterval
    // SetTimeout
// log=()=>{
//     console.log("I am delayed by 2 Seconds")
// }
// clr = setTimeout(log,2000) // 2000 milliseconds
// abc = setInterval(log,2000)
// use clearInterval(abc)/clearTimeout(clr) to cancel setInterval/setTimeout

// Local Storage : Used to save data in users computer in form of a string

localStorage.setItem('name','Akshat') // used to store
localStorage.getItem('name') // used to show what you stored
localStorage.removeItem('name') // used to remove specific item
localStorage.clear(); // used to clear entire local storage

// JSON
    // used for data transfer
obj = {name:"Akshat", length:1, a: {hello: "hii"}}
jso = JSON.stringify(obj);
console.log(jso)
    // or
parsed = JSON.parse('{"name":"Akshat", "length":1, "a": {"hello": "hii"}}')
console.log(parsed);