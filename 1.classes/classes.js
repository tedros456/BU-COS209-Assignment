// A student class
class Student{
    constructor(name,grade){
        this.name = name;
        this.grade = grade;
        this.courses = [];
    }
    //Method to enroll in a course 
    enroll(course){
        this.courses.push(course);
        console.log('${this.name} enrolled in ${course}.');
    }
    //Method to show all courses
    showCourses(){
        console.log('${this.name}"s" courses: ${this.course.join(", ")} || "None"}');
    }

    //Method to promote to next grade
    promote(){
        this.grade++;
        console.log('${this.name} has been promoted to grade ${this.grade}!');
    }
}

//Application usage:
const student1 = new student("Tedros",11);
student1.enroll("English");
//Tedros enrolled in english
student1.enroll("Mathematics");
//Tedros enrolled in mathematics
student1.showCourses();
//Tedros' courses: English, Mathematics
student1.promote();
//Tedros has been promoted to grade 12