//  🟪 Problem
// Continue & Break
// (1) Iterate from 0 to 10 and print only even numbers (use continue)
// (2) Iterate form 0 to 10 and print numbers until reaching 8 (use break)
let result1;
let result2;



// 💜 Answer
//(1) 
for (i = 0; i < 11; i++) {
  if (i % 2 == 1) {
    continue;
  };
  result1 = i;
};
console.log(result1);


//(2) 
for (i = 0; i < 11; i++) {
  if (i == 9) {
    break;
  };
  result2 = i;
};
console.log(result2);