const gpa = 3.8;
const IELTS = 7.5;

const isEligible = gpa >= 3.6 || IELTS >= 7;
console.log(isEligible);
console.log(!isEligible);

if (gpa >= 3.6 && IELTS >= 7) {
  console.log("You're eligible...");
}
