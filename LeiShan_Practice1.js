
$(document).ready(function(){

	getTable();
	
	// Edit row on edit button click
	$(document).on("click", ".edit", function(){		

        $(this).parents("tr").find("td:not(:last-child)").each(function(){
			$(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
		});		
		$(this).parents("tr").find(".add, .edit").toggle();
		$(".add-new").attr("disabled", "disabled");

    });

});


function Add_new() {
	
	var userEntity;
	var userJsonStr;

	if (sessionStorage['arr']) {

		userJsonStr = sessionStorage.getItem('arr');
		userEntity = JSON.parse(userJsonStr);

	}else{

		userEntity = new Array();
		
	}

	userEntity.push({
		name: document.getElementById("iname").value,
		phone: document.getElementById("iphone").value,
	});

	sessionStorage.setItem('arr', JSON.stringify(userEntity));

	getTable();

    document.getElementById("iname").value="";
    document.getElementById("iphone").value="";

}


function Cancel() {
	
    document.getElementById("iname").value="";
    document.getElementById("iphone").value="";

}


//以下為table中的按鈕操作

function editrow(r) {

}

function add(r) {

	var userEntity;
	var userJsonStr;

	userJsonStr = sessionStorage.getItem('arr');
	userEntity = JSON.parse(userJsonStr);

	var i = r.parentNode.parentNode.rowIndex;

	sessionStorage.setItem('test', i);

	userEntity[0,i-1].name = r.parentNode.parentNode.cells[0].children[0].value;
	userEntity[0,i-1].phone = r.parentNode.parentNode.cells[1].children[0].value;

	sessionStorage.setItem('arr', JSON.stringify(userEntity));

	getTable();

	$(".add-new").removeAttr("disabled");
}

function deleterow(r) {

	var userEntity;
	var userJsonStr;

	userJsonStr = sessionStorage.getItem('arr');
	userEntity = JSON.parse(userJsonStr);

	var i = r.parentNode.parentNode.rowIndex;

	userEntity.splice(i-1,1);

	sessionStorage.setItem('arr', JSON.stringify(userEntity));

	getTable();
	
	$(".add-new").removeAttr("disabled");

}


//匯入table
function getTable(){

	var userEntity;
	var userJsonStr;	

	if (sessionStorage['arr']) {

		userJsonStr = sessionStorage.getItem('arr');
		userEntity = JSON.parse(userJsonStr);

	}

	var rows = userEntity;

		var html = "<table id='myTable' class='table table-bordered'>";
			html+="<thead>";
			html+="<tr>";
			html+="<th>Name</th>";
            html+="<th>Phone</th>";
			html+="<th></th>";
			html+="</tr>";
			html+="</thead>";
			html+="<tbody>";

		for (var i = 0; i < rows.length; i++) {
			html+="<tr>";
			html+="<td>"+rows[i].name+"</td>";
			html+="<td>"+rows[i].phone+"</td>";
			html+="<td><a onclick='add(this)' class='add' title='Add data-toggle='tooltip'><i class='material-icons'>&#xE03B;</i></a>"+
			"<a onclick='editrow(this)' class='edit' title='Edit' data-toggle='tooltip'><i class='material-icons'>&#xE254;</i></a>"+
			"<a onclick='deleterow(this)' class='delete' title='Delete' data-toggle='tooltip'><i class='material-icons'>&#xE872;</i></a>"+
			"</td>";
			html+="</tr>";
	
		}
		html+="</tbody>";
		html+="</table>";
	document.getElementById("myTablediv").innerHTML = html;

}