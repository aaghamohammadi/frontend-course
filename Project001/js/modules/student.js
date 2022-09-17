class Student {
  studentNumber;
  studentName;
  constructor(studentNumber, studentName) {
    this.studentNumber = studentNumber;
    this.studentName = studentName;
  }

  set studentNumber(st) {
    if (st > 0) {
      this.studentNumber = st;
    }
  }

  get studentNumber() {
    return this.studentNumber;
  }

  enroll(courseName) {
    return `${this.studentName} enrolled in ${courseName} course`;
  }
}

export { Student };
