
const readline = require('readline');

// Create an interface to read input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to calculate PAYE tax based on monthly taxable pay
function calculatePAYE(monthlyPay) {
    let annualPay = monthlyPay * 12;
    let tax = 0;

    if (monthlyPay <= 24000) {
        tax = monthlyPay * 0.10;
    } else if (monthlyPay <= 32333) {
        tax = 24000 * 0.10 + (monthlyPay - 24000) * 0.25;
    } else if (monthlyPay <= 500000) {
        tax = 24000 * 0.10 + (32333 - 24000) * 0.25 + (monthlyPay - 32333) * 0.30;
    } else if (monthlyPay <= 800000) {
        tax = 24000 * 0.10 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (monthlyPay - 500000) * 0.325;
    } else {
        tax = 24000 * 0.10 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (800000 - 500000) * 0.325 + (monthlyPay - 800000) * 0.35;
    }
    
    return tax / 12; // Return monthly PAYE tax
}

// Function to calculate NHIF Deduction based on monthly salary
function calculateNHIFDeduction(monthlyPay) {
    if (monthlyPay <= 5999) return 150;
    if (monthlyPay <= 7999) return 300;
    if (monthlyPay <= 9999) return 400;
    if (monthlyPay <= 14999) return 500;
    if (monthlyPay <= 19999) return 600;
    if (monthlyPay <= 24999) return 750;
    if (monthlyPay <= 29999) return 850;
    if (monthlyPay <= 34999) return 900;
    if (monthlyPay <= 39999) return 950;
    if (monthlyPay <= 44999) return 1000;
    if (monthlyPay <= 49999) return 1100;
    if (monthlyPay <= 59999) return 1200;
    if (monthlyPay <= 69999) return 1300;
    if (monthlyPay <= 79999) return 1400;
    if (monthlyPay <= 89999) return 1500;
    if (monthlyPay <= 99999) return 1600;
    return 1700;
}

// Function to calculate NSSF Deduction based on monthly salary
function calculateNSSFContribution(monthlyPay) {
    let tier1 = Math.min(monthlyPay, 7000) * 0.06;
    let tier2 = monthlyPay > 7000 ? Math.min(monthlyPay - 7000, 29000) * 0.06 : 0;
    return tier1 + tier2;
}

// Function to calculate SHIF Deduction based on gross salary (2.75%)
function calculateSHIFDeduction(grossSalary) {
    return grossSalary * 0.0275;
}

// Function to calculate Housing Levy Deduction based on gross salary (1.5%)
function calculateHousingLevyDeduction(grossSalary) {
    return grossSalary * 0.015;
}

// Main function to calculate the net salary
function calculateNetSalary() {
    rl.question("Enter the basic salary (Ksh): ", (basicSalaryInput) => {
        rl.question("Enter the benefits (Ksh): ", (benefitsInput) => {
            const basicSalary = parseFloat(basicSalaryInput);
            const benefits = parseFloat(benefitsInput);
            
            // Calculate gross salary
            const grossSalary = basicSalary + benefits;
            
            // Calculate PAYE tax
            const payeTax = calculatePAYE(basicSalary);
            
            // Calculate NHIF Deduction
            const nhifDeduction = calculateNHIFDeduction(basicSalary);
            
            // Calculate NSSF Deduction
            const nssfDeduction = calculateNSSFContribution(basicSalary);
            
            // Calculate SHIF Deduction
            const shifDeduction = calculateSHIFDeduction(grossSalary);
            
            // Calculate Housing Levy Deduction
            const housingLevy = calculateHousingLevyDeduction(grossSalary);
            
            // Calculate total deductions
            const totalDeductions = payeTax + nhifDeduction + nssfDeduction + shifDeduction + housingLevy;
            
            // Calculate net salary
            const netSalary = grossSalary - totalDeductions;
            
            // Display results
            console.log(`Gross Salary: Ksh ${grossSalary.toFixed(2)}`);
            console.log(`PAYE Tax: Ksh ${payeTax.toFixed(2)}`);
            console.log(`NHIF Deduction: Ksh ${nhifDeduction.toFixed(2)}`);
            console.log(`NSSF Deduction: Ksh ${nssfDeduction.toFixed(2)}`);
            console.log(`SHIF Deduction: Ksh ${shifDeduction.toFixed(2)}`);
            console.log(`Housing Levy: Ksh ${housingLevy.toFixed(2)}`);
            console.log(`Total Deductions: Ksh ${totalDeductions.toFixed(2)}`);
            console.log(`Net Salary: Ksh ${netSalary.toFixed(2)}`);
            
            rl.close();
        });
    });
}

// Call the function to calculate the net salary
calculateNetSalary();
