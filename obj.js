"use strict";

const options = {
    name: 'test',
    width:  1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

// console.log(options["colors"]["border"]);

// delete options.name;

// console.log(options);

for(let key in options) {
    if (typeof(options[key]) == 'object'){
        for (let i in options[key]) {
            console.log(`Свойства ${i} имеет значение ${options[key][i]}`);
        }
    } else{
        console.log(`Свойства ${key} имеет значение ${options[key]}`);
    }
}