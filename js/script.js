'use strict';

const text = 'abcdef1234';

const textTab = ['a', 'b', 'c'];

const inputl = document.querySelector('#inputl');
const InputMaxValue = 20;

// console.log(text.length);

// console.log(text[0]);

// console.log(text.indexOf('f'));

const generateToken = (length = 8) => {

    const string = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const tabRandom = [];

    for(let i = 0; i < length; i++) {

        const char = (Math.random() * (string.length - 1)).toFixed(0);

        tabRandom.push(string[char]);

    }

    return tabRandom.join('');

}

const button = document.querySelector('button');

button.addEventListener('click', () => {

    if(inputl.value <= InputMaxValue){
        document.querySelector('div').innerText = generateToken(inputl.value);

    } else{
        document.querySelector('div').innerText = "Za duża ilość znaków - wpisz liczbę do 20";
    }


});