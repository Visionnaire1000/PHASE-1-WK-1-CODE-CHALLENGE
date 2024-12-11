
const readline = require('readline');

// Create an interface to read input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to generate the student grade
function studentGradeGenerator() {
    // Ask the user to enter marks
    rl.question("Enter the student marks (0 - 100): ", (input) => {
        let marks = parseInt(input);

        // Validate the input to ensure it's a number between 0 and 100
        if (marks < 0 || marks > 100 || isNaN(marks)) {
            console.log("Invalid input. Please enter a number between 0 and 100.");
        } else {
            let grade; // Variable to store the grade

            // Determine the grade based on the marks entered
            if (marks > 79) {
                grade = "A"; // Marks greater than 79 get grade A
            } else if (marks >= 60) {
                grade = "B"; // Marks between 60 and 79 get grade B
            } else if (marks >= 50) {
                grade = "C"; // Marks between 50 and 59 get grade C
            } else if (marks >= 40) {
                grade = "D"; // Marks between 40 and 49 get grade D
            } else {
                grade = "E"; // Marks less than 40 get grade E
            }

            // Output the calculated grade to the console
            console.log(`The grade is: ${grade}`);
        }

        // Close the readline interface
        rl.close();
    });
}

// Call the function to execute the grade generator
studentGradeGenerator();
