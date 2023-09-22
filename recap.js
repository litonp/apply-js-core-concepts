// 1. variable
var myName = 'liton';

// math operation:+, -, *, / 
// shorthand: +=, -=, *=, /=
// shorthand: ++, --

//2. array
var friends = ['liton', 'owhab', 'shakil', 'nowshad', 'nobel'];
var thirdFriend = friends[2];
// console.log(thirdFriend);
friends[3] = 'soikat';
// console.log(friends[3]);

// 3. condionals
//  >, <, >=, <=, ==, ===, !=, !==,

if (friends.length < 2) {
    console.log('amr kono friend nai');
}
else {

}

//4. lop: while loop, for loop
var number = 0;
while (number <= 6) {
    console.log(number);
    number++;
}

for (var i = 0; i <= 10; i++) {
    console.log(i);
}

//5.function 
function isMoonUp(time) {
    if (time > 7) {
        return true;

    }
}

// 6. Object
var jantus = {
    brand: 'realme',
    price: 1800,
    made: 'bangladesh',
}