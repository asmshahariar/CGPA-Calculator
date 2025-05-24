function calculateCGPA() {
    const totalCredits = parseFloat(document.getElementById('totalCredits').value);
    const completedCredits = parseFloat(document.getElementById('completedCredits').value);
    const currentCGPA = parseFloat(document.getElementById('currentCGPA').value);
    const expectedGradePoint = parseFloat(document.getElementById('expectedGrade').value);
  
    const remainingCredits = totalCredits - completedCredits;
  
    if (remainingCredits < 0 || isNaN(totalCredits) || isNaN(completedCredits) || isNaN(currentCGPA)) {
      document.getElementById('result').textContent = "Please enter valid inputs.";
      return;
    }
  
    const totalGradePoints = (currentCGPA * completedCredits) + (expectedGradePoint * remainingCredits);
    const finalCGPA = totalGradePoints / totalCredits;
  
    document.getElementById('result').textContent = `🎯 Final CGPA: ${finalCGPA.toFixed(2)}`;
  }
  