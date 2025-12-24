const myObject = { x: 10, y: true, z: "bc" };
for (const key in myObject) {
  console.log(`${key}: ${myObject[key]}`);
}
