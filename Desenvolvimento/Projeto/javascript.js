var toDoList = [];
var doneList = [];
var listItem = {};
var currentYear = new Date().getFullYear();

function main() {
    setYear();
    generateList();
    event.preventDefault();
}

function generateList() {
    if (toDoList.length >= 1) {
        var str = '';
        toDoList.forEach(function (list, index) {
            str += '<div class="list-item"><span><h3>' + list.nome + ' - ' + list.dia + '/' + list.mes + '/' + currentYear + '</h3><p>' + list.descricao + '</p></span><button onclick="moveToDone(' + index + ')">Concluir</button></div>';
        });
    }
    else {
        var str = '<p class="empty-list">Nenhuma tarefa pra fazer</p>'
    }
    document.getElementById("toDoList").innerHTML = str;

    if (doneList.length >= 1) {
        var str = '';
        doneList.forEach(function (list, index) {
            str += '<div class="list-item"><span><h3>' + list.nome + ' - ' + list.dia + '/' + list.mes + '/' + currentYear + '</h3><p>' + list.descricao + '</p></span></div>';
        });

        document.getElementById("doneList").innerHTML = str;
    }
    event.preventDefault();
};

function setYear() {
    document.getElementById("currentYear").innerHTML = '/ ' + currentYear;
}

function addToList() {

    toDoList.push({
        'nome': document.getElementById("nome").value,
        'descricao': document.getElementById("descricao").value,
        'dia': document.getElementById("dia").value,
        'mes': document.getElementById("mes").value,
    });

    event.preventDefault();
    generateList();
}

function moveToDone(index) {
    doneList.push(toDoList[index]);
    toDoList.splice(index, 1);
    event.preventDefault();
    generateList();
}


