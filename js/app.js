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
//pruebas unitarias para posibles entradas del modulo mostrar(estudiante)
/*describe("funcion que muestra un estudiante ", function() {
    it("el resultado deberia ser '' si no se ingresa un objeto estudiante", function() {
        var res = mostrar();
        assert.equal('', res);
    });
    it("el resultado deberia ser '' si es estudiante es undefined", function() {
        var res = mostrar(undefined);
        assert.equal("", res);
    });
    it("el resultado deberia ser '' si estudiante es un string", function() {
        var res = mostrar("hola mundo");
        assert.equal("", res);
    });
    it("el resultado deberia ser '' si estudiante es un array", function() {
        var res = mostrar([1, 2, 3, 4]);
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
//pruebas unitarias para posibles entradas de la funcion mostrarLista(estudiante)
/*describe("funcion que muestra la lista de estudiantes ", function() {
    it("el resultado deberia ser '' si no se ingresa un array de estudiantes", function() {
        var res = mostrarLista();
        assert.equal('', res);
    });
    it("el resultado deberia ser '' si es estudiante es undefined", function() {
        var res = mostrarLista(undefined);
        assert.equal("", res);
    });
    it("el resultado deberia ser '' si estudiante es un string", function() {
        var res = mostrarLista("string de lista de estudiantes");
        assert.equal("", res);
    });
});*/


function buscar(name, studentsArray) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    if (name != null && name != undefined && name != '' && Array.isArray(studentsArray)) {
        return studentsArray.filter(element => {
            return name.toLowerCase() == element.nombre.toLowerCase() // filtramos por aquellos que tengan el mismo nombre eliminamos case sensitive
        });
        //swal("Estudiante no Encontrado", "Mensaje del sistema", "warning");
    } else
        return studentsArray;

}
//pruebas unitarias para buscar un estudiante
/*describe("funcion que busca un estudiante ", function() {
    it("el resultado deberia ser la lista de estudiantes si no se ingresa un nombre", function() {
        var res = mostrarLista(students);
        assert.equal(students, res);
    });
    it("el resultado deberia ser la lista de estudiantes si estudiante es undefined", function() {
        var res = mostrarLista(undefined, students);
        assert.equal(students, res);
    });
    it("el resultado deberia ser la lista de estudiantes si estudiante es null", function() {
        var res = mostrarLista(null, students);
        assert.equal(students, res);
    });
});*/

function updateDropout(studentsArray){
    if(Array.isArray(studentsArray)){
        studentsArray.filter(ele)
    };
}

function topTecnico(studentsArray) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
    if (Array.isArray(studentsArray)) {
        return studentsArray.sort((n, m) => {
            return m.techPoints - n.techPoints; // ordenamos de mayor a menor
        });
    } else
        return [];
}
//pruebas unitarias para el modulo topTecnico
/*describe("funcion que lista los estudiantes segun un orden de puntos Tecnicos ", function() {
    it("el resultado deberia ser un arreglo vacio si estudiantes es un string", function() {
        var res = topTecnico("string o cadena");
        assert.deepEqual([], res);
    });
    it("el resultado deberia ser un arreglo vacio si no ingresa el parametro estudiantes", function() {
        var res = topTecnico();
        assert.deepEqual([], res);
    });
    it("el resultado deberia ser un arreglo vacio si ingresa un numero", function() {
        var res = topTecnico(0);
        assert.deepEqual([], res);
    });
});*/

