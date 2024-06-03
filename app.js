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

rl.question('Please input number (seat): ', (input) => {
    const requiredSeats = parseInt(input);

    let minCost = Number.MAX_SAFE_INTEGER;
    let optimalSmall = 0, optimalMedium = 0, optimalLarge = 0;

    for (let large = 0; large <= Math.ceil(requiredSeats / cars[2].seats); large++) {
        for (let medium = 0; medium <= Math.ceil(requiredSeats / cars[1].seats); medium++) {
            for (let small = 0; small <= Math.ceil(requiredSeats / cars[0].seats); small++) {
                let totalSeats = large * cars[2].seats + medium * cars[1].seats + small * cars[0].seats;
                if (totalSeats >= requiredSeats) {
                    let totalCost = large * cars[2].cost + medium * cars[1].cost + small * cars[0].cost;
                    if (totalCost < minCost) {
                        minCost = totalCost;
                        optimalSmall = small;
                        optimalMedium = medium;
                        optimalLarge = large;
                    }
                }
            }
        }
    }

    if (optimalLarge > 0) console.log(`L x ${optimalLarge}`);
    if (optimalMedium > 0) console.log(`M x ${optimalMedium}`);
    if (optimalSmall > 0) console.log(`S x ${optimalSmall}`);
    console.log(`Total = PHP ${minCost}`);

    rl.close();
});