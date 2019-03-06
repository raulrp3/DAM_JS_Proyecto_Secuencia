let images = ["img/secuencia_01.png", "img/secuencia_02.png","img/secuencia_03.png","img/secuencia_04.png"];
let solution;

$(function(){
	build();
	buildSolution();

	$("#sortable").sortable();
	$("#btnCheck").click(check);
	start();
});

function start(){
	let elements = $("#sortable li img");
	let aleatoryNumbers = Object.keys(images).sort(function() {return Math.random() - 0.5});
	while(JSON.stringify(aleatoryNumbers) == JSON.stringify(Object.keys(images))){
		aleatoryNumbers = Object.keys(images).sort(function() {return Math.random() - 0.5});
	}
	for(let i = 0; i < aleatoryNumbers.length; i++){
		elements[i].id = Object.keys(solution)[aleatoryNumbers[i]];
		elements[i].src = images[aleatoryNumbers[i]];
	}
}

function build(){
	let container = document.getElementById("game");
	let list = document.createElement("ul");
	list.id = "sortable";
	let isLong = false;

	if (images.length == 4){
		isLong = true;
		list.classList.add("area");
	}
	for (let i = 0;i < images.length;i++){
		let element = document.createElement("li");
		let image = document.createElement("img");
		element.appendChild(image);
		list.appendChild(element);
		if (isLong){
			if (i % 2 == 0){
				element.classList.add("even");
			}else{
				element.classList.add("odd");
			}
		}
	}
	container.appendChild(list);
}

function buildSolution(){
	solution = new Object();
	for (let i = 0;i < images.length;i++){
		solution[i + 1] = images[i];
	}
}

function check(){
	let elements = $("#sortable li img");
	let thisSolution = [];
	$.each(elements,function(){
		thisSolution.push(this.id);
	});
	console.log(thisSolution);
	for(let i = 0; i < Object.keys(solution).length; i++){
		if(Object.keys(solution)[i] == thisSolution[i]){
			$("#" + thisSolution[i]).addClass("right");
			$("#" + thisSolution[i]).removeClass("error");
		}else{
			$("#" + thisSolution[i]).addClass("right");
			$("#" + thisSolution[i]).removeClass("ok");
		}
	}
}