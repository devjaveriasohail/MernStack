console.log("Hi there")

// variables let and const
//let can be reasign but not redeclare
// let age=25
// console.log(age)

//const cannot be reasign and redeclare
// const salary =800000
// console.log(salary)

// data type two primitve and non primitive(objects)
//primitve type
const string ="javeria sohail"
const number=67
let hello=null ;
let yes;
let booleen= true;
console.log(string,number,hello,yes,booleen)
// bigInt  and symbol
console.log ("type of vaiable",typeof booleen)
// type of tell the type of any variable

//object are the key value pair
const person={
    //key(only of string and symbol datatype) :  // value(any data type)
     firstName : "javeria",
     lastName : "Sohail",
     age : 22
}
console.log(person)
console.log(person.firstName)

//array 
let evenNumber=[2,4,6,8,10]
console.log(evenNumber)
console.log(evenNumber[3])

// no error
let a =10
a="javeria"
a=true
console.log(a)

//operators
// assignment operator
let x=5;
// arithmetic operator
let y=47
console.log(x+y)
console.log(++x)
console.log(--x)

//comparision operator
console.log("== compare value",x==y)
console.log("=== compare value and datatype",x===y)
console.log("not equal",x !==y)
console.log("greater ",x>y)
console.log("greater than equal too ",x>=y)
console.log("lesser",x<y)
console.log("lesser than and equal too",x<=y)

//logical operator
const andEqual=x>8 && 8>y  //both have to true
console.log("and logical operator",andEqual)
const orEqual=x>8 || 8>y  //either one have to true
console.log("or logical operator",orEqual)
const notEqual=x !== 7
console.log("not logical operator",notEqual)

//+ sign can be use to string concate
firstName = "javeria"
lastName = "Sohail"
console.log(firstName+lastName)

//ternary operator
const isEven=10%2 ===0? ("Number is even"):("Number is odd")
console.log("ternary operator",isEven)

//Type Conversion 
//coercion refers to the automatic type conversion that occurs when an operator or function is applied to a value of a different type.
// (Implicit coercion also as typecoercion where javaScript itself automatically convert the type)
//(expicit coercion where you manually convert the type)
// implicit example converting string to numeric value
console.log("implicit converion ",2+"3")
console.log("implicit converion ","2"-"3")
console.log("implicit converion ","2"*"3")
console.log("implicit converion ","20"/"3")
console.log("implicit converion ",true+"3")
console.log("implicit converion ","2"-true) //true=1
console.log("implicit converion ","2"-false) //false=0
console.log("implicit converion ","2"-null) //Null=0
console.log("implicit converion ","2"- undefined)
//explicit converion
console.log("explicit converion ",(Number("5")))
console.log("explicit converion ",(Number(false)))
console.log("explicit converion ",(parseInt("5")))
console.log("explicit converion ",(parseFloat("3.15")))
console.log("explicit converion ",(String("500")))
console.log("explicit converion ",(String(null)))
console.log("explicit converion ",(String(undefined)))
console.log("explicit converion ",((778).toString()))//.to stng will not work on null and undefined
console.log("explicit converion ",(Boolean(10))) 
console.log("explicit converion ",(Boolean("     ")))//null undefined 0 ""(empty string) NaN return false

//equality  == (allows coercion)   ===(Doesnot allow coercion)
const var1= 10
const var2= "10"
console.log ("equality",var1== var2)
console.log("equality",var1=== var2)

//conditional statements if elseif switch
const num=5
if(num>0){
    console.log("number is positive")
}
else if (num<0){
    console.log("number is negative")

}
else {
    console.log("number is zero")
}

const color="red";
switch (color) {
    case "red":
        console.log("color is red")
    break;
    case "green":
        console.log("color is green")
    break;
    default:
        console.log("not valid value")
}

const value = 10;
switch(true){
    case value > 0:
        console.log("number is positive")
    break;
    case value < 0:
        console.log("number is negative")
    break;
    default:
        console.log("number is zero")
}

//looping code  for loop  whileloop dowhile loop  for of loop
for(let i=0; i<=7; i++){
    console.log("for loop",i)
}
let i=1;
while (i<=9) {
    console.log("while loop",i)
    i++
}
// do while must executed once
let j=0
do {
    console.log("do loop",j)
    j++
}while (j<=8) 

//for of loop loop array and objects best suited for collection of data
const numArray=[1,2,3,444,56,76,08,58]
for (const num of numArray){
    console.log("for of loop",num)

}

//functions 
function addNum(a,b){
    return a+b
}
console.log("function",addNum(5,6))


function greet(){
    console.log("Good morning")
}
greet();

const arrow=(c,d)=>{
return c+d
}

const sum = arrow(78,9);
console.log("arrow functions",sum)

//scope 
//block scope cannot accessed out of block
//function scope cannot accessed out of function
//global  scope can access every where