
const readline = require('readline');

// Create an interface to read input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculateDemeritPoints() {
    // Ask the user to enter the speed of the car
    rl.question("Enter the speed of the car: ", (input) => {
        let speed = parseInt(input);

        // Check if the speed is less than 70
        if (speed < 70) {
            console.log("Ok");
        } else {
            // Calculate the number of demerit points
            let points = Math.floor((speed - 70) / 5);

            // Check if the points exceed the limit
            if (points > 12) {
                console.log("License suspended");
            } else {
                console.log(`Points: ${points}`);
            }
        }

        // Close the readline interface
        rl.close();
    });
}

// Call the function
calculateDemeritPoints();
