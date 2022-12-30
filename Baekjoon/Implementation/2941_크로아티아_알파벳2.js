let input = require('fs').readFileSync('text.txt').toString().trim();

['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='].forEach((alphabet) => 
    input = input.replaceAll(alphabet, '1'))

console.log(input.length);

/**
 * C언어적으로 생각하려고 하지 말고 자바스크립트 메서드를 어떻께 써야할 지를 늘 생각하고 있어라
 */