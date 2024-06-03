const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const cars = [
    { size: 'Small', seats: 5, cost: 5000 },
    { size: 'Medium', seats: 10, cost: 8000 },
    { size: 'Large', seats: 15, cost: 12000 }
];

