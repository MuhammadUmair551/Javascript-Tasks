// Object Assignment

// Ques 1
// var itemsArray = [
//     {
//         name: "Juice",
//         price: 50,
//         quantity: 3
//     },
//     {
//         name: "Cookie",
//         price: 30,
//         quantity: 9
//     },
//     {
//         name: "shirt",
//         price: 880,
//         quantity: 1
//     },
//     {
//         name: "pen",
//         price: 100,
//         quantity: 2
//     }
// ]

// var totalofAll = 0;

// itemsArray.forEach(function(item){
//     var totalItems = item.price  * item.quantity
//     console.log(`${item.name} Quantity you have: ${item.quantity} So Total Price: ${totalItems}`);
//     totalofAll += totalItems;
// })
// console.log(`The Total of All is: ${totalofAll}`);

// Ques 2

// var obj = {
//     name1: "Umair",
//     email: "ua5600103@gmail.com",
//     password: "dasdas",
//     age: 21,
//     gender: "male",
//     city: "kara",
//     country: "Pak",
// }

// console.log("age" in obj)
// console.log("country" in obj)
// console.log("firstName" in obj)
// console.log("LastName" in obj)

// Ques 3

// function Person(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.Age = age;
//     this.eyeColor = eye;
// }

// var mother = new Person("Mata", "jee", 44, "black");
// var papa = new Person("Papa", "jee", 50, "blue");
// var siblings = new Person("Bhaiya", "jee", 24, "brown");
// var myself = new Person("Apun", "ho", 21, "black");

// console.log(mother)
// console.log(papa.Age)
// console.log(siblings)
// console.log(myself)

// Ques 4
// function getDetails() {
//     function Person(Name, gender, address, education, profession) {
//         this.name = Name,
//             this.genderBata = gender,
//             this.addressKiaha = address,
//             this.kahaTakParhayHo = education,
//             this.kaamkiaKartyHo = profession
//     }

//     var naam = document.querySelector("#Name").value;
//     var pata = document.querySelector("#addresss").value;
//     var professionn = document.querySelector("#profession").value;
//     var educationn = document.querySelector("#education").value;
//     var genderr = document.querySelector('input[name="gender"]:checked').value;

//     var storage = JSON.parse(localStorage.getItem("newperson")) || [];

//     var newPerson = new Person(naam, genderr, pata, educationn, professionn);

//     storage.push(newPerson);

//     localStorage.setItem("newperson", JSON.stringify(storage));
// }

