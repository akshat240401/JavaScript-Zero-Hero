// Print OnScreen
// alert('Welcome');
document.write("Document write is written here")

// Print on Console :- JavaScript-Console API
console.log("Hello World");
console.warn("This is warning")
console.error("This is error")

// JavaScript Variables
    // Variables are containers to store data values
    // var is used to establish a container
    var number1 =34;
    var number2 =56;
    console.log(number1 + number2); //Used to print output in console
    
    // Data Types in JS
    /*
    There are 2 types of DataTypes in JavaScript
    1. Primitve DataTypes - undefined, null, number, string, boolan, symbol
    2. Reference DataTypes - arrays, objects
    */
        // String
    var str1 = "This is a string";  
    console.log(str1)
        // Numbers
    var num1 = 45.5;      
    console.log(num1)          
        // Object
    var marks ={                    
        akshat: 100,
        harshith: 100,
        rutuja: 100,
        aayush: 100
    }
    console.log(marks)
        // Boolean
    var a=true;                    
    var b=false;
    console.log(a,b)
        // Undefined
    var und=undefined; // can also be written as: var und;
    console.log(und)
        // Null
    var n = null;
    console.log(n)
        // Array
    var arr = [1,2,3,4,5];
    var arr1 = [6,7,"akshat",8,9,10];
    console.log(arr);
    console.log(arr1);