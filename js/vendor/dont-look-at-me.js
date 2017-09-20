+function () {
    var resultado = document.getElementById("contenedor-estudiantes");

    let addStudent = function (e) {
        let student = addNewStudent();
        resultado.innerHTML = showInfo(student);
    };

    let eventoMostrar = function (e) {
        let students = getStudentsList();
        resultado.innerHTML = showStudentList(students);
    };

    let eventoTopTecnico = function (e) {
        e.preventDefault();
        let students = getStudentsList();
        var estudiantesTopTecnico = topTecnico(students);
        resultado.innerHTML = showStudentList(estudiantesTopTecnico);
    };

    // Manejadores de eventos
    //botonAgregar.addEventListener("click", eventoAgregar);
    $('#agregar').on('click', function(){
        addStudent();
    });
    $('#print').on('click', function(){
        eventoMostrar();
    });
    $('#update').on('click', function(){
        addStudent();
    });
    $('#add').on('click', function(){
        dialog.showModal(); 
    });
    $('#close').on('click', function(){
        dialog.close();
    });
}();
