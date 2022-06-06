var current_obj = null;
var current_row = null;
var current_subj = null;
var current_hours = null;

function SubmitAddition(){
    console.log("open");
    let obj_table = document.getElementsByTagName("table")[0];
    console.log(obj_table);
    let tr = document.createElement('tr');
    let td_code = document.createElement('td');
	td_code.innerHTML = document.getElementById("new_code").value;
	let img_button = "<button width=20px height=20px margin-right: 20px onclick='BeforeEdit(id)' id=" + (obj_table.rows.length + 1) +"><img src='edit_img.png' width=20px height=20px></button><button width=20px height=20px margin-left: 20px onclick='deleteStr(id)' id=" + (obj_table.rows.length + 1) +"><img src='del.png' width=20px height=20px></button>";
	document.getElementById("new_code").value = "";
	tr.appendChild(td_code);
	let td_subj = document.createElement('td');
	td_subj.innerHTML = document.getElementById("new_subj").value;
	document.getElementById("new_subj").value = "";
	tr.appendChild(td_subj);
	let td_hours = document.createElement('td');
	td_hours.innerHTML = document.getElementById("new_hours").value;
	document.getElementById("new_hours").value = "";
	tr.appendChild(td_hours);
	let td_img = document.createElement('td');
	td_img.innerHTML = img_button;
	tr.appendChild(td_img);
	let td_id = document.createElement('td');
	td_id.innerHTML = obj_table.rows.length + 1;
	tr.appendChild(td_id);
	console.log(tr);
	obj_table.appendChild(tr);
	console.log(obj_table);
//    obj_table.appendChild("<tr><th>" + document.getElementById("new_code").value + "</th><th>" + document.getElementById("new_subj").value +"</th><th>" + document.getElementById("new_hours").value +"</th></tr>");
    $("#AddModal").modal('hide');
}

function SubmitEdit(){
    let table = document.getElementsByTagName("table")[0];
    let current_id = document.getElementById("IdInForm").value;
    current_obj = document.getElementById("code").value;
    document.getElementById("code").value = "";
    current_subj = document.getElementById("subj").value;
    document.getElementById("subj").value = "";
    current_hours = document.getElementById("hours").value;
    document.getElementById("hours").value = "";
    for (let row of table.rows) {
        let i = 0;
        for (let cell of row.cells) {
            console.log(cell.innerHTML);
            if (cell.innerHTML == current_id && i == 4) {
                current_row = row;
                break;
            }
            i += 1;
        }
        if (current_row != null){
            break;
        }
    }
    i = 0;
    for (let cell of current_row.cells) {
        if (i == 0){
            cell.innerHTML = current_obj;
        }
        if (i == 1){
            cell.innerHTML = current_subj;
        }
        if (i == 2) {
            cell.innerHTML = current_hours;
        }
        i += 1;
    }
    current_row = null;
    $("#EditModal").modal('hide');



}

function BeforeEdit(id){
    console.log(id);
    let table = document.getElementsByTagName("table")[0];
    for (let row of table.rows) {
        let i = 0;
        for (let cell of row.cells) {
            console.log(cell.innerHTML);
            if (cell.innerHTML == id && i == 4) {
                current_row = row;
                break;
            }
            i += 1;
        }
        if (current_row != null){
            break;
        }
    }
    console.log(current_row);
    i = 0;
    for (let cell of current_row.cells) {
        if (i == 0){
            current_obj = cell.innerHTML;
        }
        if (i == 1){
            current_subj = cell.innerHTML;
        }
        if (i == 2) {
            current_hours = cell.innerHTML;
        }
        i += 1;
    }
    document.getElementById("code").value = current_obj;
    document.getElementById("subj").value = current_subj;
    document.getElementById("hours").value = current_hours;
    document.getElementById("IdInForm").value = id;
    console.log("id" + document.getElementById("IdInForm").value);
    current_row = null;
    $("#EditModal").modal('show');

}

function deleteStr(id){
    let table = document.getElementsByTagName("table")[0];
    table.deleteRow(id - 1);
}
