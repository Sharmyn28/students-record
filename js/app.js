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
                                        <p><strong>TECH SKILL POINTS:  </strong> ${(student.techPoints != undefined ? student.techPoints + '%' : "Sorry, this action impossible to complete")}</p>\
                                        <p><strong>LIFE SKILL POINTS:  </strong> ${(student.lifePoints != undefined ? student.lifePoints + '%' : "Sorry, this action impossible to complete")}</p>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>`
    }
    return studentInfo;
}
//TDD for showInfo(student) inputs
/*describe("This function shows the info of one student", function() {
    it("The result must be '' if there is no student object as an input", function() {
        let res = showInfo();
        assert.equal('', res);
    });
    it("The result must be '' if the student is undefined", function() {
        let res = showInfo(undefined);
        assert.equal("", res);
    });
    it("The result must be '' if the student input is a string", function() {
        let res = showInfo('hola mundo');
        assert.equal("", res);
    });
    it("The result must be '' if student input is an array", function() {
        let res = showInfo([1, 2, 3, 4]);
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
//TDD for showStudentList(studentsArray) inputs
/*describe("This function shows the list of students with same template as one student display form", function() {
    it("The result must be '' if student input is not an array", function() {
        let res = showStudentList();
        assert.equal('', res);
    });
    it("The result must be '' if the student is undefined", function() {
        let res = showStudentList(undefined);
        assert.equal("", res);
    });
    it("The result must be '' if student input is an array", function() {
        let res = showStudentList('student list string');
        assert.equal("", res);
    });
});*/

function updateList(studentsArray){
    if(Array.isArray(studentsArray)){
        return studentsArray.filter(element => {
            let pointAverage = (parseInt(element.techPoints) + parseInt(element.lifePoints))/2;
            return pointAverage > 70;
        });
    };
}

function init() {
    let results = $("#studentResults");

    let addStudent = function (e) {
        let student = addNewStudent();
        results.html(showInfo(student));
    };

    let printInfo = function (e) {
        let students = getStudentsList();
        results.html(showStudentList(students));
    };

    let update = function (e) {
        students = updateList(students);
        results.html(showStudentList(students));
    };

    let runningEmployability = function (e) {
        let students = getStudentsList();
        let updateStudentList = updateList(students);
        results.html(showStudentList(updateStudentList));
    };

    $('#add_btn').on('click', function(){
        addStudent();
    });
    $('#print').on('click', function(){
        printInfo();
    });
    $('#update').on('click', function(){
        update();
    });
    $('#employability').on('click', function(){
        runningEmployability();
    });
    $('#add').on('click', function(){
        dialog.showModal(); 
    });
    $('#close').on('click', function(){
        dialog.close();
    });
}init();
