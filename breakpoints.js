"use strict";

function hello() {
    console.log("hello world");
}

hello();

function hi() {
    console.log('Say hi');
};

hi();

const arr = [1,14,4,30,24],
        sorted = arr.sort(compareNum);

function compareNum(a, b){
    return a - b;
}
compareNum();

console.log(sorted);
