// bai 1 
// let a=1;
// let b=2 ;

// a= a+b;
// b= a - b;
// a= a- b;

// cach 2
// a= a+ (a=b) -b;
// console.log(a,b);

// b2
// let n = prompt(`nhapchuoi`);
// let b = n.split(` `,n.length);
// console.log(b);

//b3
// const a = [4, 5, 7, -8];
// console.log(...a);

//b4
// const product = {
//     name: `Xiaomi rice cooker`,
//     price: 1700,
//     brand: `Xiaomi`,
//     color: `white`
// };

// for (let x in product) {
//     console.log(x);
// }
//b5
// const task = {
//     subject: "Implement login feature",
//     createdBy: "Hoang Ngoc Duc",
//     assignTo: "Nguyen Phuong Nam",
//     dueDate: "2019-10-08T18:00:24+0000",
//     expectedHours: 0.5,
// };
// console.log(task);
// task.name = `HOANG`;
// delete task.subject;
// console.log(task);

// b7
// let check = true;
// let todoList = ["Jean", "Black- shirt",`t-shirt`];
// let a;

// while (check) {
//     a = prompt(`Nhap C , R , U ,D hoac E  :`);

//     if (a == `C`) {
//         let C = prompt(`nhap mon do muon them vao :`);
//         todoList.push(C);
//         console.log(`kho hang  : `);
//         for (let i = 0; i <= todoList.length-1 ; i++)
//             console.log(i + `.` + todoList[i]);
//     }
//     else if (a == `R`) {
//         console.log(`kho hang : `);
//         for (let i = 0; i <= todoList.length-1 ; i++)
//         console.log(i + `.` + todoList[i]);
//     }
//     else if (a== `U`) {
//         let b = Number(prompt(`vat pham ban muon sua la :`));
//         let U = prompt(`sua lai la :`);
//         todoList[b-1] = U;
//         console.log(`kho hang`);
//         for (let i = 0; i <= todoList.length-1; i++)
//         console.log(i + `.` + todoList[i]);
//     }
//     else if (a==`D`) {
//         let x = Number(prompt(`san pham ban muon xoa la : `));
//         todoList.splice(x - 1, 1)
//         console.log(`kho hang :`);
//         for (let i = 0; i <= todoList.length-1; i++)
//         console.log(i + `.` + todoList[i]);
//     }
//     else if (a==`E`)
//         {
//             check = false;
//             alert(`chuong trinh ket thuc`);
//         }
//     else
//     console.log(`end game`)
// }

//b8

// let check = true;
// let todoList = ["HTML", "CSS", "Basics of JavaScript", "Node Package Manager (npm)", "Git"];
// let a;

// while (check) {
//     a = prompt(`Nhap C , R , U ,D hoac E  :`);

//     if (a == `C`) {
//         let C = prompt(`nhap mon do muon them vao :`);
//         todoList.push(C);
//         console.log(`kho hang  : `);
//         for (let i = 0; i <= todoList.length-1 ; i++)
//             console.log(i + `.` + todoList[i]);
//     }
//     else if (a == `R`) {
//         console.log(`kho hang : `);
//         for (let i = 0; i <= todoList.length-1 ; i++)
//         console.log(i + `.` + todoList[i]);
//     }
//     else if (a== `U`) {
//         let b = Number(prompt(`vat pham ban muon sua la :`));
//         let U = prompt(`sua lai la :`);
//         todoList[b-1] = U;
//         console.log(`kho hang`);
//         for (let i = 0; i <= todoList.length-1; i++)
//         console.log(i + `.` + todoList[i]);
//     }
//     else if (a==`D`) {
//         let x = Number(prompt(`san pham ban muon xoa la : `));
//         todoList.splice(x - 1, 1)
//         console.log(`kho hang :`);
//         for (let i = 0; i <= todoList.length-1; i++)
//         console.log(i + `.` + todoList[i]);
//     }
//     else if (a==`E`)
//         {
//             check = false;
//             alert(`chuong trinh ket thuc`);
//         }
//     else
//     console.log(`end game`)
// }

//b9
// let n = prompt(`nhapchuoi`);
// let b = n.split(`,`);
// console.log(b);
// let c=0;
// for (i=0; i<=b.length-1 ; i++){
// c = c + Number(b[i]);
// }
// console.log(c);

//b10
// const sum = prompt("nhap day so co dau , : ");
// let arr = sum.split(",");
// let min = Number(arr[0]);
// for(let i = 1; i < arr.length; i++){
//    if(min > Number(arr[i])){
//        min = Number(arr[i]);
//    }
// }
// console.log(min);

//b11
// const a = [3, 4, 6, -9, 10, -88, 2];
// let num = Number(prompt("nhap so "));
// let flag = 0;
// for(let i = 0; i < a.length; i++){
//     if(num === a[i]){
//         flag = 1;
//         alert(`${num} là số trong mảng thú ${i+1}`);
//     }
// }
// if (flag === 0) {
//     alert(`${num} ko có trong mảng `);
// } 

//b12
// let sheeps = [5,7,300,90,24,50,75];
// console.log(sheeps.length-1);

// let max = Math.max(...sheeps);
// console.log(max);

// let newSheep = sheeps.indexOf(300);
// if(newSheep>-1){
//     console.log("Now my biggest sheep has size 300, let's have it");
    
//     sheeps[newSheep] = 8;
//     console.log("after sharing , here is my block ");
//     console.log(sheeps);
// };
// let month = Number(prompt("enter following month: "));
// const newSheeps = [];
// let j = 0;
// while(j<month){
//     j++;
//     console.log(`MONTH${j}
//     One month has,passed , my sheeps have grown , here are their sizes`);
//     console.log(sheeps);
//     for(let i=0; i<=sheeps.length-1;i++){
//         sheeps[i] = sheeps[i] + 50;
// }
// }
// let sum = 0;
// for(let i of sheeps){
//     sum += i;
//     sell = sum*2;
// }

// console.log(`My flock has size in total: ${sum}`);
// console.log(`i would get ${sum} *2 = ${sell}`);

///// em mới almf dc có tí thôi ạ :((
