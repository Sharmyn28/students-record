+function () {
    let results = document.getElementById("studentResults");
   
    let addStudent = function (e) {
        let student = addNewStudent();
        results.innerHTML = showInfo(student);
    };

    let printInfo = function (e) {
        let students = getStudentsList();
        results.innerHTML = showStudentList(students);
    };

    let update = function (e) {
        students = updateList(students);
        results.innerHTML = showStudentList(students);
    };

    let runningEmployability = function (e) {
        let students = getStudentsList();
        let updateStudentList = updateList(students);
        results.innerHTML = showStudentList(updateStudentList);
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
}();
