
function Add() {
    
    sessionStorage.setItem("name", document.getElementById("name").value);
    sessionStorage.setItem("phone", document.getElementById("phone").value);

    var table = document.getElementById("myTable");
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = sessionStorage.name;
    cell2.innerHTML = sessionStorage.phone;

    document.getElementById("name").value="";
    document.getElementById("phone").value="";

}

function Cancel() {
    document.getElementById("name").value="";
    document.getElementById("phone").value="";

}

$(document).ready(function(){

	$('[data-toggle="tooltip"]').tooltip();
	var actions = $("table td:last-child").html();


	// Append table with add row form on add new button click
    $("Add").click(function(){
		$(this).attr("disabled", "disabled");
		var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><input type="text" class="form-control" name="name" id="name"></td>' +
            '<td><input type="text" class="form-control" name="phone" id="phone"></td>' +
			'<td>' + actions + '</td>' +
        '</tr>';
    	$("table").append(row);		
		$("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
        $('[data-toggle="tooltip"]').tooltip();
    });

	// Add row on add button click
	$(document).on("click", ".add", function(){
        
        sessionStorage.name = "111";
        sessionStorage.phone = "222";

      var table = document.getElementById("myTable");
      var row = table.insertRow(1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      cell1.innerHTML = sessionStorage.name;
      cell2.innerHTML = sessionStorage.phone;
      var cell3 = '<td>' + actions + '</td>';
    });

	// Edit row on edit button click
	$(document).on("click", ".edit", function(){

    });

	// Delete row on delete button click
	$(document).on("click", ".delete", function(){
        $(this).parents("tr").remove();
		$(".add-new").removeAttr("disabled");
    });
});