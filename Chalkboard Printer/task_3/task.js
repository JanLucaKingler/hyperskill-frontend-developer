const input = require('sync-input');
const name  = input("Enter name:")
const surname = input("Enter surname:")
const message = input("Enter message:")
const numberOfRepeats = Number(input("Enter number of repeats:"))

for (let i = 0; i <numberOfRepeats; i++) {
    console.log(`This is ${name} ${surname} and ${message}`);
}
