// const 재선언 금지, 재할당 금지
// let 재선언 금지, 재할당 가능
const a = 5;
const b = 2;
let myName = "can";

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log("hello " + myName);

myName = "cando";
console.log("your new name is " + myName);

// boolean, null, undefined
const amIFat = true;
console.log(amIFat);

// arrays
const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];
const nonsense = [1, 2, "hello", false, null, true, undefined, "can"];

console.log(daysOfWeek, nonsense);

// Get item from array
console.log(daysOfWeek[4]);

// add one more day to the array
daysOfWeek.push("sun");
console.log(daysOfWeek);

// Objects
const player = {
    name: "can",
    points: 10,
    fat: true,
};

// 특정 속성 뽑아내기
console.log(player);
console.log(player.name);

// 값 바꾸기
player.fat = false;
console.log(player);

// 새로운 값 삽입
player.lastName = "do";
console.log(player);

// Functions
function sayHello(name) {
    console.log("Hello my name is " + name + "!");
}

sayHello("can");
sayHello("do");
sayHello("it");

// 응용
const person = {
    name: "can",
    speakHello: function (otherPersonsName) {
        console.log("hello " + otherPersonsName + " nice to meet you");
    },
};

person.speakHello("dodo");

const object = {};

function func() {}

const objectName = {
    funcName: function () {},
};

objectName.funcName();

const calculatorT = {
    add: function (a, b) {
        alert(a + b);
    },
    minus: function (a, b) {
        alert(a - b);
    },
    multi: function (a, b) {
        alert(a * b);
    },
    square: function (a, b) {
        alert(a ** b);
    },
};

// calculatorT.add(1, 5);
// calculatorT.minus(10, 5);
// calculatorT.multi(10, 5);
// calculatorT.square(10, 5);

const age = 96;
function calculateKrAge(ageOfForeigner) {
    return ageOfForeigner + 2;
}

const KrAge = calculateKrAge(age);

console.log(KrAge);

// 형변환
const age1 = parseInt(prompt("how old are you"));

// isNaN() 숫자 판별 함수
console.log(isNaN(age1));

// if
if (isNaN(age1) || age1 < 0) {
    console.log("Please write a positive number");
} else if (age1 < 18) {
    console.log("You are too young.");
} else if (age1 >= 18 && age1 <= 50) {
    console.log("You can drink");
} else if (age1 >= 51 && age1 <= 80) {
    console.log("You should exercise");
} else {
    console.log("You can't drink");
}

// === !==
