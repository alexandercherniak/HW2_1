let a = +prompt('Число: ');
outerloop: for (let i = 2; i <= a; i++) {
  innerloop: for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      continue outerloop; 
    } 
  } console.log (i);
}

