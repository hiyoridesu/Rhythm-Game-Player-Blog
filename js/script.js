// Function to calculate BMI
function calculateBMI() {
    // Get input values and convert to numbers
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to m
    const weight = parseFloat(document.getElementById('weight').value);
    
    // Validate input
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        alert("Please enter valid values");
        return;
    }
    
    // Calculate BMI
    const bmi = weight / (height * height);
    let category = "";
    
    // Determine BMI category
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Normal";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }
    
    // Display results
    document.getElementById('result').innerHTML = `
        <p>Your BMI: ${bmi.toFixed(1)}</p>
        <p>Category: ${category}</p>
    `;
}

// Initialize when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if this is the game page
    if (document.querySelector('.game-form')) {
        // Add event listener to calculate button
        document.getElementById('calculate').addEventListener('click', calculateBMI);
        
        // Add event listener for Enter key
        document.getElementById('weight').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calculateBMI();
            }
        });
    }
});
