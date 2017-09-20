let students = [];
let dialog = document.getElementById('dialog') ; // NOTE: don't use this line for TDD
//let assert = require('assert'); //assert node js for TDD

function Student(name, techPoints, lifePoints) {
    this.name = name;
    this.techPoints = techPoints;
    this.lifePoints = lifePoints;
}

function getStudentsList() {
    return students;
}

function addNewStudent() {
    let studentName = $('#name').val();
    let studentTechPoints = $('#techPoints').val();
    let studentLifePoints = $('#lifePoints').val();
    let newStudent = "";
    
    newStudent = new Student(studentName, studentTechPoints, studentLifePoints); 
    students.push(newStudent); 
    swal("Registration Completed", "The student has been registered", "success");

    dialog.close();
    return newStudent;
}

function showInfo(student) {
    let studentInfo = "";
    if (typeof student == "object" && (student != null || student != undefined) && !Array.isArray(student)) {
        studentInfo = `<div class='row'> \
                            <div class='col m12'> \
                                <div class='card blue-grey darken-1'> \
                                    <div class='card-content white-text'> \
                                        <p><strong>NAME:  </strong>${(student.name != undefined ? student.name : "Sorry, this action impossible to complete")}</p>\
                                        <p><strong>TECH SKILL POINTS:  </strong> ${(student.techPoints != undefined ? student.techPoints : "Sorry, this action impossible to complete")}</p>\
                                        <p><strong>LIFE SKILL POINTS:  </strong> ${(student.lifePoints != undefined ? student.lifePoints : "Sorry, this action impossible to complete")}</p>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>`
    }
    return studentInfo;
}
//pruebas unitarias para posibles entradas del modulo showInfo(student)
/*describe("funcion que muestra un estudiante ", function() {
    it("el resultado deberia ser '' si no se ingresa un objeto estudiante", function() {
        var res = showInfo();
        assert.equal('', res);
    });
    it("el resultado deberia ser '' si es estudiante es undefined", function() {
        var res = showInfo(undefined);
        assert.equal("", res);
    });
    it("el resultado deberia ser '' si estudiante es un string", function() {
        var res = showInfo('hola mundo');
        assert.equal("", res);
    });
    it("el resultado deberia ser '' si estudiante es un array", function() {
        var res = showInfo([1, 2, 3, 4]);
        assert.equal("", res);
    });
});*/

function showStudentList(studentsArray) {
    let studentList = "";
    if (Array.isArray(studentsArray)) {
        studentsArray.forEach((element) => {
            studentList += showInfo(element);
        })
    }
    return studentList;
}
//pruebas unitarias para posibles entradas de la funcion showStudentList(studentsArray)
/*describe("funcion que muestra la lista de estudiantes ", function() {
    it("el resultado deberia ser '' si no se ingresa un array de estudiantes", function() {
        var res = showStudentList();
        assert.equal('', res);
    });
    it("el resultado deberia ser '' si es estudiante es undefined", function() {
        var res = showStudentList(undefined);
        assert.equal("", res);
    });
    it("el resultado deberia ser '' si estudiante es un string", function() {
        var res = showStudentList('string de lista de estudiante');
        assert.equal("", res);
    });
});*/

function updateDropout(studentsArray){
    if(Array.isArray(studentsArray)){
        return studentsArray.filter(element => {
            let pointAverage = (parseInt(element.techPoints) + parseInt(element.lifePoints))/2;
            return pointAverage > 70;
        });
    };
}

function updateEmployability(studentsArray){
    if(Array.isArray(studentsArray)){
        return studentsArray.filter(element => {
            let pointAverage = (parseInt(element.techPoints) + parseInt(element.lifePoints))/2;
            return pointAverage > 70;
        });
    };
}