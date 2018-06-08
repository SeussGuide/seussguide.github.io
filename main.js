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
		$.each(data, function(key, val) {
			console.log(val);
			items.push(val);
		});
	});
	
	for(var i in items) {
		$("#booklist").append(items[i]);
		console.log(items[i]);
	}
});