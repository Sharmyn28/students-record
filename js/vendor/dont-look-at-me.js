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

    let eventoTopTecnico = function (e) {
        e.preventDefault();
        let students = getStudentsList();
        var estudiantesTopTecnico = topTecnico(students);
        resultado.innerHTML = showStudentList(estudiantesTopTecnico);
    };

    let update = function (e) {
        let students = getStudentsList();
        let updateList = updateDropout(students);
        resultado.innerHTML = showStudentList(updateList);
    };

    // Manejadores de eventos
    //botonAgregar.addEventListener("click", eventoAgregar);
    $('#agregar').on('click', function(){
        addStudent();
    });
    $('#print').on('click', function(){
        printInfo();
    });
    $('#update').on('click', function(){
        update();
    });
    $('#add').on('click', function(){
        dialog.showModal(); 
    });
    $('#close').on('click', function(){
        dialog.close();
    });
}();
