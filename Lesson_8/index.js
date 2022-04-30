// // const city = {
// //     name: 'Nizhniy Novgorod',
// //     yearOfBuild: 1221,
// //     crowd: 897987970,
// //     callName: function() {
// //       return this.name;
// //     },
// //     showCrowd: function() {
// //        this.crowd;
// //     }
// // };

// // console.log(city.callName());

// const myCity = {
//       name: "Moscow",
//       population: 10000000,
//       showName: function () {
//         console.log(this.name);
//       },
//       showPopulation: function () {
//         console.log(this.population);
//       },
    
//       changeKeyValue: function (key, newValue) {
//         switch (key) {
//           case "name":
//             this.name = newValue;
//             return;
//           case "population":
//             this.population = newValue;
//             return;
//           default:
//             console.log("Ключ не найден");
//             return;
//         }
//       },
//     };


//     const cityTwo = {
//         name: 'Krasnodar'
//     }
//     myCity.showName.call(cityTwo);
//     console.log(myCity..bind(cityTwo) = 500)    

// const volume = () => {
//     const a = 5;
//     const b = 6;

//     return result = (c) => a*b*c;
// };

// console.log(volume()(10));

const volume = (a) => {
    return (b) => {
        return (c) => a*b*c;
    }
}
console.log(volume(5)(6)(10));