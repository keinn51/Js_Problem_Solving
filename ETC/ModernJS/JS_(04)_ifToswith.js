
//  🟪 Problem 
// If to Switch

let a = prompt('a?');

if (a == 0) {
  alert(0);
}
if (a == 1) {
  alert(1);
}

if (a == 2 || a == 3) {
  alert('2,3');
}


//  💜 Answer

switch (a) {
  case a == 0:
    alert(0);
    break;
  case a == 1:
    alert(1);
    break;
  case a == 2 || a == 3:
    alert('2,3');
    break;
}