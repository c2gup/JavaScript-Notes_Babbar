console.log('Chaliye shuru karte hai '); // Start message

// Object create
let rectangle = {
    length: 1,
    breadth: 2,

    draw: function() {
        console.log('drawing rectangle');
    }
};

// Factory function 
 function createRectangle(len, bre) {

const rectangle = {
    length: len,
    breadth: bre,

    draw() {
        console.log('drawing rectangle');
    }
};
return rectangle;
// }

// Creating rectangle objects
let rectangleObj1 = createRectangle(5, 4); 
let rectangle2 = createRectangle(2, 3);
let rectangle3 = createRectangle(7, 9);

// Camelcase -> numberOfStudents
// Constructor function -> Pascal Notation -> first letter of every word is Capital -> NumberOfStudents
// Constructor function -> prop/methods -> intialise/Define
function Rectangle(len, bre) {
    this.length = len;
    this.breadth = bre;
    this.draw = function() {
        console.log('drawing');
    }
}

// Object creation using constructor function
let rectangleObject = new Rectangle(4, 6);

rectangleObject.color = 'yellow'; // Adding property
console.log(rectangleObject);

delete rectangleObject.color; // Deleting property
console.log(rectangleObject);

let Rectangle1 = new Function(
    'length', 'breadth',
    `this.length = length;
this.breadth = breadth;
this.draw= function() {
    console.log('drawing');
}`);

// Object creation using Rectangle1
let rect = new Rectangle1(2, 3);

rect.length;

console.log(rect);

rectangle.length;
rectangle.breadth;

rectangle.draw();

let rectangle1 = {
    length: 1,
    breadth: 2,

    draw: function() {
        console.log('drawing rectangle');
    }
};


let rectangle2 = {
    length: 1,
    breadth: 2,

    draw: function() {
        console.log('drawing rectangle');
    }
};


let a = 10;
let b = a;

a++;
console.log(a);
console.log(b);


let a = { value: 10 };
let b = a;

a.value++;

console.log(a.value);
console.log(b.value);

let a = 10;

function inc(a) {
    a++;
}

inc(a);

console.log(a);

let a = { value: 10 };

function inc(a) {
    a.value++;
}

inc(a);

console.log(a.value);

let rectangle = {
    length: 2,
    breadth: 4
};

// For-in loop 
for (let key in rectangle) {
    // Keys are reflected through key variable 
    // Values are reflected through rectangle[key]
    console.log(key, rectangle[key]);
}

// For-of loop
// imp -> for-of loop is use for iterables
for (let key of Object.entries(rectangle)) {
    console.log(key);
}

if ('length' in rectangle) {
    console.log('Present');
} else {
    console.log('Absent');
}


// Object - clone #1 Methos
let src = {
    a: 10,
    b: 20,
    c: 30
};

let dest = {};

for (let key in src) {
    dest[key] = src[key];
}

console.log(dest);

src.a++;
console.log(dest);

// Object Cloning #2 Methods
let src = {
    a: 10,
    b: 20,
    c: 30
};

let src2 = { value: 25 };

let dest = Object.assign({}, src, src2);

console.log(dest);

src.a++;

console.log(dest);

// Object Cloning #3
let src = {
    a: 10,
    b: 20,
    c: 30
};

let dest = { ...src };

console.log(dest);

src.a++;

console.log(dest); 

