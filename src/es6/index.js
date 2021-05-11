function newFunction(name, age, country){
    var name = name || 'Niller';
    var age = age || 23;
    var country = country || 'BGT';
    console.log(name,age,country);
}

//ES6
function newFunction2(name = 'Niller', age = '23', country = 'BGT'){
    console.log(name, age, country);
}

newFunction2();// Toma los elementos por default;
newFunction2('David','23','VE'); //Old function.


let hello = "Hello";
let world = "World";
let epicPharse = hello + ' ' + world;
console.log(epicPharse);
let epicPharse2 = `${hello} ${world}`;
console.log(epicPharse2);

/**
 * --------------------------------------------------------------
 */


let lorem = "Lorem llalalla isump \n"
+ " Otra frase que se agrego";

//ES6
let lorem2 = `Otra frase epica que necesitamos
ahora es otra frase epica
`;

console.log(lorem);
console.log(lorem2);

let person = {
    'name' : 'Niger',
    'age' : 32,
    'country' : 'VE'
}

console.log(person.name, person.age);

let {name,age,} = person;
console.log(name, age,);

let team1 = ['Niger','Julian','Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];
let education = ['David',...team1, ...team2];
console.log(education);


{
    var globalVar = 'Global Var';
}

{
    let globalLeft = 'Global Left';
    console.log(globalLeft);
}

console.log(globalVar);

const a = 'b';
a = 'a';
console.log(a);


/**
 * ----------------------------------------------------------------------
 */

let name = 'Niger';
let age = 23;
// ES5
obj= { 'name':name, 'age':age}
//ES6
obj2 = { name, age}
console.log(obj2);

const names =[
    {name: 'Niger', age :23},
    {name: 'Yesica', age :27},
]

let listOfName = names.map(function (item){
    console.log(item.name);
})

let listOfName2 = names.map(item => console.log(item.name));

const listOfName3 = (name, age, country) => {

};

const listOfName4 = name =>{

};

const square = num => num * num;

const helloPromise = () =>{
    return new Promise((resolve, reject)=>{
        if(false){
            resolve('Todo fue correcto.');
        }else{
            reject('Ups!!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));


class calculator {
    constructor() {
        this.valueA=0;
        this.valueB=0;
    }
    sumar(valueA, valueB){
        this.valueA = valueA;
        this.valueB =valueB
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sumar(2,2));

import{ hello } from './module';
console.log(hello());


function* helloWorld (){
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);


