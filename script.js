// Handle Enter key press for moving to the next input or submitting the form
document.getElementById("weight").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      document.getElementById("height").focus();
    }
  });
  
  document.getElementById("height").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      calculateBMI();
    }
  });
  
  function calculateBMI() {
      const weight = parseFloat(document.getElementById("weight").value);
      const height = parseFloat(document.getElementById("height").value);
      const resultDiv = document.getElementById("result");
  
      if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        resultDiv.innerHTML = "Please enter valid values for weight and height.";
        resultDiv.style.color = "#e74c3c";
        return;
      }
  
      const bmi = (weight / (height * height)).toFixed(2);
      let message = `Your BMI is ${bmi}. `;
      let classification = "";
  
      if (bmi < 18.5) {
        classification = "Underweight";
        resultDiv.className = "result underweight";
      } else if (bmi < 24.9) {
        classification = "Healthy weight";
        resultDiv.className = "result healthy";
      } else if (bmi < 29.9) {
        classification = "Overweight";
        resultDiv.className = "result overweight";
      } else {
        classification = "Obese";
        resultDiv.className = "result obese";
      }
  
      resultDiv.innerHTML =`${message} <br> Classification: <span class="${classification.toLowerCase()}">${classification}</span>`;
  }
  