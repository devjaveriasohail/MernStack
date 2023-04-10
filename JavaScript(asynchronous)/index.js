// // Java Script is the synchronous single thread language

// //synchronous one by one 
// console.log("I");
// console.log("eat");
// console.log("ice cream ");
// console.log("with a");
// console.log("spoon");

// //asynchronous one by one 
// console.log("I");
// console.log("eat");
// console.log("with a");
// console.log("spoon");
// //settimeout is the asynchronous function
// setTimeout(()=>{
// console.log("ice cream ");
// },3000)

// //Callback when you nest a funcction inside another function as an argument thats called a callback
// function one (call_two){
//     call_two();
//     console.log("call function two first.")
//     // showing the synchronous property
//     console.log("call console first")
//     call_two();
// }
// function two (){
//     console.log("step 2")
// }
// // two();
// // one();
// one(two);

// let stocks = {
//     Fruits: ["strawberry", "grapes", "banana", "apple"],
//     Holder: ["cone", "cup", "stick"],
//     Toppings: ["chocolate", "sprinkles"],
//     Liquids: ["water", "ice"]
// }

// let order = (Fruit_name, call_production) => {
//     setTimeout(() => {
//         console.log(`${stocks.Fruits[Fruit_name]} was selected`)
//         call_production()
//     }, 2000)

//     //console.log("order placed,please call production")
// }

// // this is callback Hell relation to further
// let production = () => {
//     setTimeout(() => {
//         console.log(`production has started`)
//         setTimeout(() => {
//             console.log(`the fruit has been chopped`)
//             setTimeout(() => {
//                 console.log(`${stocks.Liquids[0]} and ${stocks.Liquids[1]} was added`)
//                 setTimeout(() => {
//                     console.log(`the machine is started`)
//                     setTimeout(() => {
//                         console.log(`${stocks.Holder[0]} is selected`)
//                         setTimeout(() => {
//                             console.log(`${stocks.Toppings[1]} is selected`)
//                             setTimeout(() => {
//                                 console.log(` ice-cream is served`)
//                             }, 2000)
//                         }, 3000)
//                     }, 2000)
//                 }, 1000)
//             }, 1000)
//         }, 2000)
//     }, 0000)

//     //console.log("order received,starting the production")
// };

// order(2, production);

//Promises
// let stocks = {
//         Fruits: ["strawberry", "grapes", "banana", "apple"],
//         Holder: ["cone", "cup", "stick"],
//         Toppings: ["chocolate", "sprinkles"],
//         Liquids: ["water", "ice"]
//     }
// let isShopOpen=true;

// let order=(time,work)=>{
//     return new Promise((resolve,reject)=>{
//         if(isShopOpen){
//             setTimeout(()=>{
//                 resolve(work())
//             },time)
           
//         }
//         else{
//             reject(console.log("our shop is closed"))
//         }
//     })
// }
// order(2000,()=>{console.log(`${stocks.Fruits[0]} was selected`)})
// .then(()=>{
//     return order(0000,()=>{console.log("production has started")})
// })
// .then(()=>{
//     return order(2000,()=>{console.log(`${stocks.Fruits[0]} was cutted`)})
// })
// .then(()=>{
//     return order(1000,()=>{console.log(`${stocks.Liquids[0]} and ${stocks.Liquids[1]} was selected`)})
// })
// .then(()=>{
//     return order(1000,()=>{console.log(`starting the machine`)})
// })
// .then(()=>{
//     return order(2000,()=>{console.log(`${stocks.Holder[0]} was selected`)})
// })
// .then(()=>{
//     return order(3000,()=>{console.log(`${stocks.Toppings[0]} and ${stocks.Toppings[1]} was selected`)})
// })
// .then(()=>{
//     return order(1000,()=>{console.log(`ice cream is served`)})
// })
// .catch(()=>{
//     console.log("customer left")
// })
// .finally(()=>{
//     console.log(`day ended ,shop is closed`)
// })

//Async and await suppose to be a better version of promise
let stocks = {
        Fruits: ["strawberry", "grapes", "banana", "apple"],
        Holder: ["cone", "cup", "stick"],
        Toppings: ["chocolate", "sprinkles"],
        Liquids: ["water", "ice"]
    }
let isShopOpen=true;

function time(ms){
    return new Promise((resolve,reject)=>{
        if(isShopOpen){
            setTimeout(resolve,ms)
        }
        else{
            reject(console.log("shop is closed"))
        }
    })
}
async function order(){
        try{
            await time(2000)
            console.log(`${stocks.Fruits[0]} was selected`)
            console.log("production has started")
            await time(2000)
            console.log("cut the fruit")
            await time(1000)
            console.log(`${stocks.Liquids[0]} and ${stocks.Liquids[1]} was selected`)
            await time(1000)
            console.log(`machine has started`)
            await time(2000)
            console.log(`${stocks.Holder[0]}  was selected`)
            await time(3000)
            console.log(`${stocks.Toppings[0]}  was selected`)
            await time(1000)
            console.log(`ice cream is served`)
        }

        catch(error){
            console.log(`customer left`,error)
        }
        finally{
            console.log(`day ended ,shop is closed`)
        }
    }

    order();

// async function order(){
//     try{
//         await abc;
//     }
//     catch(error){
//         console.log(`abc doesnot exit`,error)
//     }
//     finally{
//         console.log(`day ended ,shop is closed`)
//     }
// }
// order();

