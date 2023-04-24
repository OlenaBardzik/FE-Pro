const students = [
    {
      id: 10,
      name: 'John Smith',
      marks: [10, 8, 6, 9, 8, 7]
    },
    {
      id: 11,
      name: 'John Doe',
      marks: [ 9, 8, 7, 6, 7]
    },
    {
      id: 12,
      name: 'Thomas Anderson',
      marks: [6, 7, 10, 8]
    },
    {
      id: 13,
      name: 'Jean-Baptiste Emanuel Zorg',
      marks: [10, 9, 8, 9]
    }
  ]

  const averageStudentMark = getAverageStudentMark(10); // id === 10
  const averageGroupMark = getAverageGroupMark(students);
  alert(`Average student mark = ${averageStudentMark}`);
  alert(`Average group mark = ${averageGroupMark}`);






  function getAverageStudentMark (id) {

    const student = students.find((element) => {return element.id === id});
    return getAverageMark(student.marks);
  }

  function getAverageGroupMark (students) {
    let marksCounter = 0;
    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        const marksAverage = getAverageMark(student.marks);
        marksCounter = marksCounter + marksAverage;
    }
    return marksCounter / students.length;
  }

  function getAverageMark (marks) {
    const marksSum = marks.reduce((total, num) => {return total + num});
    return marksSum / marks.length;
  }