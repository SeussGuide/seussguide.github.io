var items = [];

function home() {
	console.log("Showing Home Page...");
	$(".list").hide();
	$(".bookview").hide();
	$(".homepage").show();
}

function list() {
	console.log("Showing List Page...");
	$(".homepage").hide();
	$(".bookview").hide();
	$(".list").show();
}

function bookview() {
	console.log("Showing Book View Page...");
	$(".homepage").hide();
	$(".list").hide();
	$(".bookview").show();
}

function init() {
	home();
	
	$("#home").click(function() {
		home();
	});
	
	$("#list").click(function() {
		list();
	});
}

$(document).ready(function() {
	$.getJSON('main.json', function(data){
		console.log(data);
		for(var d in data) {
			items.push(data[d]);
		}
	});
	
	for(var i in items) {
		var text = '<li><div class="col-sm">';
		text += items[i]["name"];
		text += '</div><div class="col-sm">' 
		text += items[i]["desc"];
		text += '</div><div class="col-sm">';
		text += items[i]["year"];
		text += '</div></li>';
		console.log(text);
	}
});