// --------------形参默认值---------------
// function str(x,y=1){
//     return x+y;
// }
// console.log(str(5))

// ---------解构赋值和形参默认值结合使用--------------
// function add({x,y=2}) { 
//     return x+y;
//  }
//  console.log(add({x:3}))

// ----------- rest参数---------------

// function add() { 
//     let total = 0;
//     for (let i = 0; i <arguments.length ;i++){
//         total += arguments[i];
//     }
//     console.log(total);
//  }
//  add(1,2,3,4,5,6)

function add(...str) { 
    let total = 0;
    for(let i = 0; i < str.length; i++){
        total += str[i];
    }
    console.log(total);
 }
 let ss = [12,21,2,1,5,4,8,33];
 add(...ss);