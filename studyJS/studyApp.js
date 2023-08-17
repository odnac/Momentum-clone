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
