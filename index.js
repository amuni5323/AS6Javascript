// Number one

const colors = ['red', 'green', 'blue']
const [firstColor, secondColor, thirdColor ] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

// OR 
function printColors([firstColor, secondColor, thirdColor]) {
    console.log(`First color: ${firstColor}`);
    console.log(`Second color: ${secondColor}`);
    console.log(`Third color: ${thirdColor}`);
}

const color = ['red', 'green', 'blue'];
printColors(color);

// Number two
const person = {name:'Alice', age:25, city:'wonderland'};
const {name, age, city} = person;

console.log(name);
console.log(age);
console.log(city);

// OR 
function printPerson({ name, age, city }) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`City: ${city}`);
}

const persons = { name: 'Alice', age: 25, city: 'Wonderland' };
printPerson(persons);

// Number Three

const settings = { theme: 'dark', language: 'en' };

const { theme, language, mode = 'light' } = settings;

console.log(theme);    
console.log(language);
console.log(mode);

// OR 
function configureSettings({ theme, language, mode = 'light' }) {
    console.log(`Theme: ${theme}`);
    console.log(`Language: ${language}`);
    console.log(`Mode: ${mode}`);
}

const setting= { theme: 'dark', language: 'en' };

configureSettings(setting);
