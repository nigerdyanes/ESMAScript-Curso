const data = {
    frontend : 'Niger',
    backend  :'Niger',
    desing   :'Niger',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);


const data = {
    frontend : 'Niger',
    backend  :'Niger',
    desing   :'Niger',
}

const values = Object.values(data);
console.log(values);
console.log(values.length);

const string = 'hello';
console.log(string.padStart(7,'hi'));
console.log(string.padEnd(12,' -----'));

const obj = {
    name:'Niger',
}

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (false) 
            ? setTimeout(()=> resolve('Hello World.'), 3000)
            : reject(new Error ('Error'))
    });
}

const helloAsync = async () => {
    const msg = await helloWorld();
    console.log(msg)
}

helloAsync();


const anotherFunction = async () =>{
    try {
        const msg = await helloWorld();
        console.log(msg);
    } catch (error) {
        console.error(error);
    }
}

anotherFunction();