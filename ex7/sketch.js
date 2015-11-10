var weather;
var url1 = 'http://api.openweathermap.org/data/2.5/weather?q=Los_Angeles&units=metric&appid=cfe830da5db2e061f7442a1166c73975';
var url2 = 'http://api.openweathermap.org/data/2.5/weather?q=Manhattan&units=metric&appid=cfe830da5db2e061f7442a1166c73975';
var url3 = 'http://api.openweathermap.org/data/2.5/weather?q=Seattle&units=metric&appid=cfe830da5db2e061f7442a1166c73975';
var url4 = 'http://api.openweathermap.org/data/2.5/weather?q=Miami&units=metric&appid=cfe830da5db2e061f7442a1166c73975';
var url5 = 'http://api.openweathermap.org/data/2.5/weather?q=Dallas&units=metric&appid=cfe830da5db2e061f7442a1166c73975';
function preload(){ 
	weatherLA = loadJSON(url1, gotData);
	weatherManhattan =  loadJSON(url2,gotData);
	weatherSeattle = loadJSON(url3,gotData);
	weatherMiami = loadJSON(url4, gotData);
	weatherDallas = loadJSON(url5,gotData);


}

function setup() {
createCanvas(700,700);
}
function gotData(data){ 
weather=data;
}


function draw(){ 
	background(255,0,255,1.5);
	if(weather){
		ellipse(100,350,(weatherLA.main.temp)*6,(weatherLA.main.temp)*6);
		ellipse(445,150,(weatherManhattan.main.temp)*6,(weatherManhattan.main.temp)*6);
		ellipse(120,100,(weatherSeattle.main.temp)*6,(weatherSeattle.main.temp)*6);
		ellipse(400,390,(weatherMiami.main.temp)*6,(weatherMiami.main.temp)*6); 
		ellipse(300,352,(weatherDallas.main.temp)*6,(weatherDallas.main.temp)*6);

	}

}

//fill blue to yellow!