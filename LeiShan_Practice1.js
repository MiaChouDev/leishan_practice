
function Add() {
    
    sessionStorage.setItem("name", document.getElementById("name").value);
    sessionStorage.setItem("phone", document.getElementById("phone").value);

    var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = sessionStorage.name;
    cell2.innerHTML = sessionStorage.phone;
    cell3.innerHTML = "<td><a class='add' title='Add data-toggle='tooltip'><i class='material-icons'>&#xE03B;</i></a>"+
        "<a class='edit' title='Edit' data-toggle='tooltip'><i class='material-icons'>&#xE254;</i></a>"+
        "<a class='delete' title='Delete' data-toggle='tooltip'><i class='material-icons'>&#xE872;</i></a>"+
        "</td>";

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

	// Add row on add button click
	$(document).on("click", ".add", function(){
		var empty = false;
		var input = $(this).parents("tr").find('input[type="text"]');
        input.each(function(){
			if(!$(this).val()){
				$(this).addClass("error");
				empty = true;
			} else{
                $(this).removeClass("error");
            }
		});
		$(this).parents("tr").find(".error").first().focus();
		if(!empty){
			input.each(function(){
				$(this).parent("td").html($(this).val());
			});			
			$(this).parents("tr").find(".add, .edit").toggle();
			$(".add-new").removeAttr("disabled");
		}		
    });

	// Edit row on edit button click
	$(document).on("click", ".edit", function(){		
        $(this).parents("tr").find("td:not(:last-child)").each(function(){
			$(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
		});		
		$(this).parents("tr").find(".add, .edit").toggle();
		$(".add-new").attr("disabled", "disabled");
    });

	// Delete row on delete button click
	$(document).on("click", ".delete", function(){
        $(this).parents("tr").remove();
		$(".add-new").removeAttr("disabled");
    });
});