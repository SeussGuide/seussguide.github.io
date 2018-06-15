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
	$.getJSON('main.json', function(data){
		for(var d in data) {
			items.push(data[d]);
		}
	});
	
	console.log(items.length);
	for(var i = 0; i < items.length; i++) {
		var text = '<li><div class="row list"><div class="col-sm">';
		text += items[i].name;
		text += '</div><div class="col-sm list">';
		text += items[i].desc;
		text += '</div><div class="col-sm list">';
		text += items[i].year;
		text += '</div></div></li>';
		console.log(items[i].name);
		$("#booklist").append(text);
	}
	
	home();
	
	$("#home").click(function() {
		home();
	});
	
	$("#list").click(function() {
		list();
	});
}