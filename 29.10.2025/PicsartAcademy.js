
class PicsartAcademy {
  constructor(classroom, library, kitchen) {
    this.classroom = classroom;
    this.library = library;
    this.kitchen = kitchen;
  }

  LOG() {
    console.log(this.classroom);
    console.log(this.library);
    console.log(this.kitchen);
  }
}

class Classroom {
  constructor(ClassName) {
    this.name = ClassName;
    this.students_Name = [];
  }
  addStudent(student) {
    this.students_Name.push(...student);
  }
  listStudents() {
    console.log(this.name, this.students_Name);
  }
}
class Library {
  constructor(Books) {
    this.books = Books === undefined || Books == [] ? new Array() : Books;
  }

  addBook(title, author) {
    this.books.push({ title: title, author: author });
  }
  listBooks() {
    console.log(this.books);
  }
}
class Kitchen {
  constructor(staff) {
    this.staff = staff === undefined || staff == [] ? new Array() : staff;
  }
  addWorker(name) {
    this.staff.push(name);
  }
  listWorkers() {
    console.log(this.name);
  }
}

let picsart = new PicsartAcademy(
  new Classroom("ada Lovelace"),
  new Library(),
  new Kitchen()
);

picsart.classroom.addStudent(["John", "Alice", "Bob"]);
picsart.library.addBook("C++ ", "S.Xolzner");
picsart.kitchen.addWorker("Anna");
picsart.LOG();
