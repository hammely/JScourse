const myObject = { x: 10, y: true, z: "bc" };
Object.keys(myObject).forEach(key => console.log(key, myObject[key]));
Object.values(myObject).forEach(value => console.log(value));
