let a = +prompt('Введите число: ');

let counter = 0;
for (let i = 2; i < a; i++) {
  if (a % i == 0) {
    counter ++;
    break;
  } 
}

if (counter > 0) { 
  console.log (+ a +' ' +'составное число');
  } else { console.log (+ a +' ' +'простое число');
}

for (let i = 2; i <= 1000; i++) {
  let flag = true;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      flag = false;
    }
  } 
  if (flag == true) {
    console.log (i);
  }
}



// v_2
// outerloop: for (let i = 2; i <=1000; i++) {
//   innerloop: for (let j = 2; j < i; j++) {
//     if (i % j == 0) {
//       continue outerloop;
//     }
//   } console.log (i);
// }
