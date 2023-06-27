// function name1(firstname){
//     return function(lastname){
//         return "hello " +firstname +' ' +lastname;
//     }
// }


// var example = name1('sagar');
// console.log(example('rahuja'))


// map method (displaying list of items in react)

// const colors = ['red','green','blue'];
// const items = colors.map((color)=>{
//     return `<li>${color}</li>`
// })

// console.log(items)


// abstracting properties from objects  (object destructuring)

// const address = {
//     street: 'new vip',
//     city: 'vadodara',
//     country: 'india'
// }

// const {street,city,country} = address

// console.log(street +city+country);

//spread (joining 2 arrays or objects)

// const first = [1,2,3];
// const second = [4,5,6];

// const combined = [...first,...second];
// console.log(combined);


//class in js


// class Person{
//     constructor(name){
//         this.name = name;
//     }
//     walk(){
//         console.log('walk')
//     }
// }

// const person = [new Person('sagar'),new Person('dummy')
// ]
// console.log(person)


// inheritance

// class Teacher extends Person{
//     constructor(name,degree){
//         super(name);
//         this.degree = degree;
//     }
//     teach(){
//         console.log("teach");
//     }
// }

// const teach = new Teacher("sagar", 'IT');
// console.log(teach);