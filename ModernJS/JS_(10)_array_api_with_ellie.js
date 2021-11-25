/* This is the coding example at https://www.youtube.com/watch?v=3CUjtKJ7PJg&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=10*/




// Problem (10)



/* 
// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
}

// Q6. make an array of enrolled students
{
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
}

// Q8. check if there is a student with the score lower than 50
{
}

// Q9. compute students' average score
{
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
}

*/




// Answer




// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  console.log(`A1 : ${fruits.join()}`)
  console.log(`A1 : ${typeof fruits.join()}`)
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  console.log(`A2 : ${fruits.split(', ')}`);
  console.log(`A2 : ${typeof fruits.split(', ')}`)
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  array.reverse();
  console.log(`A3 : ${array}`);
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const newarray = array.slice(2);
  console.log(`A4 : ${newarray}`)
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// 🛑🛑🛑 Q5. find a student with the score 90
{
  const found = students.find((student) => student.score === 90);
  console.log(found)
}

// Q6. make an array of enrolled students
{
  const result = students.filter(student => student.enrolled === true);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result = students.map(student => student.score);
  console.log(result);

}

// Q8. check if there is a student with the score lower than 50
{
  const result = students.some((student) => student.score < 50);
  console.log(result);
}

//🔴🔴🔴 Q9. compute students' average score
{
  const result = students.reduce((initialValue, currentScore) => {
    return initialValue + currentScore.score
  }, 0);
  console.log(result);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const joining = students.map(student => student.score);
  const result = joining.join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const sorting = students.map(student => student.score);
  sorting.sort();
  const result = sorting.join();
  console.log(result);
}