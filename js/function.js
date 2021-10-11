/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
var jobTitle = "software engineer";
var location = "Dubai";
var partnerName ="Alice";
var childNum ="1";
console.log(tellFortune());
function tellFortune (){

  return "you will be a "+jobTitle+" in "+","+"and married to "+partnerName+" with "+ childNum +" kids."
}





/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
var dogAge = 1 ;
console.log( calculateDogAge () ) ;
function calculateDogAge () {
  return dogAge*7;

}


/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
var age = 30;
var amount = 3;
var maxAge =100;
function calculateSupply (){
  return "you will need "+(maxAge-age)*amount*365 +" cup of tea to last you until thr ripe old age of 100."
}


/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
var names="Adam";
function greet (){
  return  "Hello " + names;

}


/*
5
what is the error:
function double(cat) {
  return 2 * x;
}
// x must be cat 

function double(7) {
  return 2 * 7;
}
we cant pass a value direct 

function double('7') {
  return 2 * 'x';
}
*/
// we cant do mathmatic opreation with char/string



/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}

functiondouble2 x)
return 2 * x;
}

function (x) double3 {
  return 2 * x;

*/
function double1 (x){
  return 2*x;
}
function double2 (x){
  return 2*x;
}
function double3 (x){
  return 2*x;
}

/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
var num = 4;
console.log(cube());
function cube (){
  return num * num * num;
}


/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
var num1 = 3;
var num2 = 4;
console.log(multiply());
function multiply (){
  return 3*4;
}


/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"

*/
var ageCar = 27 ;
console.log(canIGetADrivingLicense())
function canIGetADrivingLicense (ageCar){
  if (age >=20 ) {
    return "yes you can";
    }
  else
  return "please come back after 3 years to get one";

 
}


/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/

console.log(sameLength("leen" , "ala"));
function sameLength (string1, string2){
  if(string1.length==string2.length)
  return "true";
  else 
  return "false";
}

/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
console.log(largerNubmer(5 ,7))
function largerNubmer(number1 , number2){
  if(number1 >=number2)
  return number1;
  else 
  return number2;

}



/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3

*/
console.log(smallerNubmer(8 ,7 ,6))
function smallerNubmer ( num1 , num2, num3){
  if(num1<=num2 && num1<=num3)
  return num1;
  else if (num2<=num1 && num2<=num3 )
   return num2;
   else if (num3<=num1 && num3<=num2)
   return num3;
}

/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/
console.log(shorterString("air","tr","car","github","by"))
function shorterString ( a , b , c , d , e){
var min = a ;
if(min.length  > b.length )
   min = b;
if (min.length > c.length )
min = c;
if (min.length > d.length)
min = d;
if (min.length > e.length )
min = e ;
return min ;

}

/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
console.log(longerString("air","tr","car","github","by"))
function longerString ( a , b , c , d , e){
var max = a ;
if(max.length < b.length )
   max = b;
if (max.length < c.length )
   max = c;
if (max.length < d.length)
   max= d;
if (max.length < e.length )
max = e ;
return max ;

}

/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/ 
console.log(isEven(6));
function isEven (x){
  if(x%2==0)
  return "true";
  else
  return "false"
}


/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true

*/
console.log(isOdd(6));
function isOdd (x){
  if(x%2!=0)
  return "true";
  else
  return "false"
}


/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5

*/
console.log(positive (6));
function positive (x){
  if(x>=0)
  return x;
  else 
  return x *-1 ;


}


/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
console.log(fullName("leen " , "Nasser "))
function  fullName (firstName ,lastName){
  return firstName +" " +lastName;

}


/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
console.log(average(1,2,3,4,5))
function average ( a , b , c , d , e){
  return (a+b+c+d+e)/5;
}


/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function  randomNumber (){
  return Math.random();

}

/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
console.log(randomBetweenNumbers(1 , 8 ))
function randomBetweenNumbers (min , max){
  return Math.random()* (max - min+1) + min;
}


/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
console.log(scoreInUniversty(80));
function scoreInUniversty  (x){
  if (x >= 95)
  return "A";
  else if (x >= 85 &&  x<= 94)
  return "B";
  else if (x >=70  &&  x<= 84)
  return "C";
  else if (x >= 50 &&  x<= 69)
  return "D";
  else if (x >= 49 &&  x<= 0)
  return "F";

  
}


/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
var c =0;
console.log(counter(c));
function counter (c){
  return ++c;
}


/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
function  resetCounter (x){
  let z  = x ;
  x = 0;
  return z +" and the counter reset now";

}