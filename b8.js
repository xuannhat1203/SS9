let x =+prompt("Nhập cân nặng");
let y =+prompt("Nhập chiều cao");
let bmi = x/y**2;
if (bmi < 18) {
    console.log("Underweight");
} else if (bmi < 25.0) {
    console.log("Normal");
} else if (bmi < 30.0) {
    console.log("Overweight");
} else {
    console.log("Obese");
}