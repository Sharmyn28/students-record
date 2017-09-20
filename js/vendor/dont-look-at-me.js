+function () {
    var resultado = document.getElementById("contenedor-estudiantes");

    let addStudent = function (e) {
        let student = addNewStudent();
        resultado.innerHTML = showInfo(student);
    };

    let printInfo = function (e) {
        let students = getStudentsList();
        resultado.innerHTML = showStudentList(students);
    };

    let update = function (e) {
        let newStudents = getStudentsList();
        newStudents = updateDropout(newStudents);
        let length = students.length - 1;
        console.log(students);
        students.splice(0, length);
        students.push(newStudents);
        console.log(students);
        resultado.innerHTML = showStudentList(newStudents);
    };

    let runningEmployability = function (e) {
        let students = getStudentsList();
        let updateList = updateEmployability(students);
        resultado.innerHTML = showStudentList(updateList);
    };


    $('#agregar').on('click', function(){
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
}();
