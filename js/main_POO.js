'use strict';
const app = {
	items: {
        students : undefined,
        results : undefined,
        addStudent : undefined,
        printInfo : undefined,
        update : undefined,
        runningEmployability : undefined,
        dialog : undefined,
    },
    
    init: function(){
        app.items.students = [];
        app.items.results = $("#studentResults");
        app.items.dialog = document.getElementById('dialog');
        app.setEvents();
        app.setup();
    },

	setup: function(){      
        $('#add_btn').click(app.items.addStudent);
        $('#print').click(app.items.printInfo);
        $('#update').click(app.items.update);
        $('#employability').click(app.items.runningEmployability);
        $('#add').click(()=>{app.items.dialog.showModal()});
        $('#close').click(()=>{app.items.dialog.close()});
    },

    setEvents: function(){

        app.items.addStudent = function (e) {
            let student = app.addNewStudent();
            app.items.results.html(app.showInfo(student));
        };
        
        app.items.printInfo = function (e) {
            let students = app.getStudentsList();
            app.items.results.html(app.showStudentList(students));
        };
        
        app.items.update = function (e) {
            app.items.students = app.updateList(app.items.students);
            app.items.results.html(app.showStudentList(app.items.students));
        };
        
        app.items.runningEmployability = function (e) {
            let students = app.getStudentsList();
            let updateStudentList = app.updateList(students);
            app.items.results.html(app.showStudentList(updateStudentList));
        };
    },

    Student: function(name, techPoints, lifePoints) {
        this.name = name;
        this.techPoints = techPoints;
        this.lifePoints = lifePoints;
    },
    
    getStudentsList: function() {
        return app.items.students;
    },

    addNewStudent: function() {
        let studentName = $('#name').val();
        let studentTechPoints = $('#techPoints').val();
        let studentLifePoints = $('#lifePoints').val();
        let newStudent = "";
        
        newStudent = new app.Student(studentName, studentTechPoints, studentLifePoints); 
        app.items.students.push(newStudent); 
        swal("Registration Completed", "The student has been registered", "success");
    
        app.items.dialog.close();
        return newStudent;
    },

    showInfo: function(student) {
        let studentInfo = "";
        if (typeof student == "object" && (student != null || student != undefined) && !Array.isArray(student)) {
            studentInfo = `<div class='row'> \
                                <div class='col m4 offset-m4 col s4 offset-s4'> \
                                    <div class='card blue-grey darken-1 '> \
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
    },

    showStudentList: function(studentsArray) {
        let studentList = "";
        if (Array.isArray(studentsArray)) {
            studentsArray.forEach((element) => {
                studentList += app.showInfo(element);
            })
        }
        return studentList;
    },

    updateList: function(studentsArray){
        if(Array.isArray(studentsArray)){
            return studentsArray.filter(element => {
                let pointAverage = (parseInt(element.techPoints) + parseInt(element.lifePoints))/2;
                return pointAverage > 70;
            });
        };
    },
	
}

$(document).ready(app.init);