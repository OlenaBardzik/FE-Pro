class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }
    
    getMarksSum() {
        return this.marks.reduce((total, curVal) => total + curVal);
    }

    getAverageMark() {
        return this.getMarksSum() / this.marks.length;
    }
}

class Group {
    #students = [];

    get students() {
        return this.#students;
    }
        
    addStudent(student) {
        if (!this.#isStudent(student)) return;
        this.#students.push(student);
    }
  
    getAverageMarksSum() {
        return this.#students.reduce((total, curVal) => total + curVal.getAverageMark(), 0);
    }

    getAverageMark() {
        return this.getAverageMarksSum() / this.#students.length;
    }

    #isStudent(student) {
        return student instanceof Student;
    }
}



const group = new Group();

group.addStudent(new Student('John', [10, 8])); // средний балл = 9
group.addStudent(new Student('Alex', [10, 9])); // средний балл = 9.5
group.addStudent(new Student('Bob', [6, 10,])); // средний балл = 8


console.log(group.students.length === 3); // --> true
group.addStudent({}); // игнорируем добавление невалидных данных
console.log(group.students.length === 3); // --> true

// Выводим средний балл группы
console.log(group.getAverageMark() === (9 + 9.5 + 8) / 3); // --> true


group.students = [new Student('John', [10, 10, 5, 10])]; // Сделать group.students - readonly
console.log(group.students.length === 3); // --> true