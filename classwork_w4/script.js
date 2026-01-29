function display () {
    let a = 5;
    let b = 6;
    let c = a + b;
    document.getElementById("display").innerHTML = c;
};



function sum (){
    sum = input
}
function sumNumbers() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let sum = a + b;
    document.getElementById("result").innerText = "Sum = " + sum;
}

function calculateMarks() {
  let marks = [
    Number(document.getElementById("sub1").value),
    Number(document.getElementById("sub2").value),
    Number(document.getElementById("sub3").value),
    Number(document.getElementById("sub4").value),
    Number(document.getElementById("sub5").value),
    Number(document.getElementById("sub6").value),
    Number(document.getElementById("sub7").value),
    Number(document.getElementById("sub8").value)
  ];

  for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 0 || marks[i] > 100 || isNaN(marks[i])) {
      document.getElementById("marksResult").innerHTML =
        "Please enter valid marks (0–100)";
      return;
    }
  }

  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }

  if (total >= 400) {
    document.getElementById("marksResult").innerHTML =
      "Total Marks: " + total + "<br>Status: Pass";
  } else {
    document.getElementById("marksResult").innerHTML =
      "Total Marks: " + total + "<br>Status: Fail";
  }
}






