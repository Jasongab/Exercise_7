//presented is an interactive weather map. The 5 ellipses represent 5 major US cities and their sizes are determined by the weather in the city (see draw function)
//hovering over an ellipse will offer more up-to-date information about the city it represents, courtesy of openweathermap.org
function preload(){ 
	weatherLA = loadJSON(url1, gotData);
	weatherManhattan =  loadJSON(url2,gotData);
	weatherSeattle = loadJSON(url3,gotData);
	weatherMiami = loadJSON(url4, gotData);
	weatherDallas = loadJSON(url5,gotData);
	//simplifying data loading
}
var weather;
//var laColor = color(255,0,0);
//var manColor; 
//var seaColor;
//var miaColor; 
//var dalColor;

var url1 = 'http://api.openweathermap.org/data/2.5/weather?q=Los_Angeles&units=metric&appid=cfe830da5db2e061f7442a1166c73975';
var url2 = 'http://api.openweathermap.org/data/2.5/weather?q=Manhattan&units=metric&appid=cfe830da5db2e061f7442a1166c73975';
var url3 = 'http://api.openweathermap.org/data/2.5/weather?q=Seattle&units=metric&appid=cfe830da5db2e061f7442a1166c73975';
var url4 = 'http://api.openweathermap.org/data/2.5/weather?q=Miami&units=metric&appid=cfe830da5db2e061f7442a1166c73975';
var url5 = 'http://api.openweathermap.org/data/2.5/weather?q=Dallas&units=metric&appid=cfe830da5db2e061f7442a1166c73975';
// getting info for 5 cities, LA, NYC, SEA, MIA, DAL
function setup() {
createCanvas(700,700);
}
function gotData(data){ 
weather=data;
//so the data can actually be used and understood (Shiffman https://www.youtube.com/watch?v=ecT42O6I_WI&list=PLRqwX-V7Uu6a-SQiI4RtIwuOrLJGnel0r&index=5)
}

//Extperimentation with color-after arrays, examined hard-coding
/*function setLAColor(){
	if (weatherLA.main.temp<0){
		laColor=color(255);
	}
	if (weatherLA.main.temp>0 && weatherLA.main.temp<5){
	laColor=color(0,0,250);
	}
	if (weatherLA.main.temp>5 && weatherLA.main.temp<10){
		laColor=color(0,0,200);
	} 
	if (weatherLA.main.temp>10 && weatherLA.main.temp<15){
		laColor=color(0,0,100);
	}
	if (weatherLA.main.temp>15 && weatherLA.temp<20){
		laColor = color(100,0,0);
	}
	if (weatherLA.main.temp>20 && weatherLA.temp<25){ 
		laColor = color(200,0,0);
	}
	if (weatherLA.main.temp>25 && weatherLA.temp<30){ 
		laColor = color(250,0,0);
	}
	if (weatherLA.main.temp>30){ 
		laColor = color(0); 
	}
}


function setManColor(){
if (weatherManhattan.main.temp<0){
		manColor=color(255);
	}
	if (weatherManhattan.main.temp>0 && weatherManhattan.main.temp<5){
	manColor=color(0,0,250);
	}
	if (weatherManhattan.main.temp>5 && weatherManhattan.main.temp<10){
		manColor=color(0,0,200);
	} 
	if (weatherManhattan.main.temp>10 && weatherManhattan.main.temp<15){
		manColor=color(0,0,100);
	}
	if (weatherManhattan.main.temp>15 && weatherManhattan.temp<20){
		manColor =color(100,0,0);
	}
	if (weatherManhattan.main.temp>20 && weatherManhattan.temp<25){ 
		manColor =color(200,0,0);
	}
	if (weatherManhattan.main.temp>25 && weatherManhattan.temp<30){ 
		manColor =color(250,0,0);
	}
	if (weatherManhattan.main.temp>30){ 
		manColor = color(0); 
	} 
} 

function setSeaColor(){
if (weatherSeattle.main.temp<0){
		seaColor=color(255);
	}
	if (weatherSeattle.main.temp>0 && weatherSeattle.main.temp<5){
	seaColor=color(0,0,250);
	}
	if (weatherSeattle.main.temp>5 && weatherSeattle.main.temp<10){
		seaColor=color(0,0,200);
	} 
	if (weatherSeattle.main.temp>10 && weatherSeattle.main.temp<15){
		seaColor=color(0,0,100);
	}
	if (weatherSeattle.main.temp>15 && weatherSeattle.temp<20){
		seaColor = color(100,0,0);
	}
	if (weatherSeattle.main.temp>20 && weatherSeattle.temp<25){ 
		seacolor = color(200,0,0);
	}
	if (weatherSeattle.main.temp>25 && weatherSeattle.temp<30){ 
		seaColor = color(250,0,0);
	}
	if (weatherSeattle.main.temp>30){ 
		seaColor = color(0); 
	}
}

function setMiaColor(){
	if (weatherMiami.main.temp<0){
		miaColor=color(255);
	}
	if (weatherMiami.main.temp>0 && weatherMiami.main.temp<5){
	miaColor= color(0,0,250);
	}
	if (weatherMiami.main.temp>5 && weatherMiami.main.temp<10){
		miaColor=color (0,0,200);
	} 
	if (weatherMiami.main.temp>10 && weatherMiami.main.temp<15){
		miaColor=color(0,0,100);
	}
	if (weatherMiami.main.temp>15 && weatherMiami.temp<20){
		miaColor = color(100,0,0);
	}
	if (weatherMiami.main.temp>20 && weatherMiami.temp<25){ 
		miaColor = color(200,0,0);
	}
	if (weatherMiami.main.temp>25 && weatherMiami.temp<30){ 
		miaColor = color(250,0,0);
	}
	if (weatherMiami.main.temp>30){ 
		miaColor = color(0); 
	}
}

function setDalColor(){
	if (weatherDallas.main.temp<0){
		dalColor=color(255);
	}
	if (weatherDallas.main.temp>0 && weatherDallas.main.temp<5){
	dalColor=color(0,0,250);
	}
	if (weatherDallas.main.temp>5 && weatherDallas.main.temp<10){
		dalColor=color(0,0,200);
	} 
	if (weatherDallas.main.temp>10 && weatherDallas.main.temp<15){
		dalColor=color(0,0,100);
	}
	if (weatherDallas.main.temp>15 && weatherDallas.temp<20){
		dalColor = color(100,0,0);
	}
	if (weatherDallas.main.temp>20 && weatherDallas.temp<25){ 
		dalColor = color(200,0,0);
	}
	if (weatherDallas.main.temp>25 && weatherDallas.temp<30){ 
		dalColor = color(250,0,0);
	}
	if (weatherDallas.main.temp>30){ 
		dalColor = color(0); 
	}
}

*/

function draw(){ 
	background(255,0,255,1.5);
	/*setLAColor(); 
	setManColor(); 
	setSeaColor(); 
	setMiaColor(); 
	setDalColor(); 
	//hard-coding process
	*/if(weather){
		// Drawing ellipses in geographic locations corresponding to the cities, size of ellipse is directly related to temperature in city
		//fill(laColor); //hard-coding for color
		ellipse(100,350,(weatherLA.main.temp)*6,(weatherLA.main.temp)*6);
		fill(255);
		ellipse(445,150,(weatherManhattan.main.temp)*6,(weatherManhattan.main.temp)*6);
		//fill(seaColor); //hard-coding for color
		ellipse(120,100,(weatherSeattle.main.temp)*6,(weatherSeattle.main.temp)*6);
		//fill([miaColor]);//hard-coding for color
		ellipse(400,390,(weatherMiami.main.temp)*6,(weatherMiami.main.temp)*6); 
		//fill(dalColor); //hard-coding for color
		ellipse(300,352,(weatherDallas.main.temp)*6,(weatherDallas.main.temp)*6);
	}

// when the mouse hovers over the ellipses that represent each city, a variet of data is parsed and presented to the user  
 if (mouseX<150 && mouseX>50 && mouseY<120 && mouseY>80){
           text('Seattle, Washington: Temperature ' + weatherSeattle.main.temp +' C Humidity '+weatherSeattle.main.humidity +'% Hi '+ weatherSeattle.main.temp_max+" C Lo "+ weatherSeattle.main.temp_min+" C Pressure " + weatherSeattle.main.pressure +" Hg",100,50);
}

if (mouseX<130 && mouseX>40 && mouseY>320 && mouseY<390){
           text('Los Angeles, California: Temperature ' + weatherLA.main.temp +' C Humidity '+weatherLA.main.humidity +'% Hi '+ weatherLA.main.temp_max+" C Lo "+ weatherLA.main.temp_min+" C Pressure " + weatherLA.main.pressure +" Hg",100,50);
}

if (mouseX>420 && mouseX<480 && mouseY<180 && mouseY>120){
           text('New York, New York: Temperature ' + weatherManhattan.main.temp +' C Humidity '+weatherManhattan.main.humidity +'% Hi '+ weatherManhattan.main.temp_max+" C Lo "+ weatherManhattan.main.temp_min+" C Pressure " + weatherManhattan.main.pressure +" Hg",100,50);
}
if (mouseX>345 && mouseX<500 && mouseY>320 && mouseY <450){
           text('Miami, Florida: Temperature ' + weatherMiami.main.temp +' C Humidity '+weatherMiami.main.humidity +'% Hi '+ weatherMiami.main.temp_max+" C Lo "+ weatherMiami.main.temp_min+" C Pressure " + weatherMiami.main.pressure +" Hg",100,50);
}
if (mouseX<325 && mouseX>275 && mouseY>325 && mouseY<385){
           text('Dallas, Texas: Temperature ' + weatherDallas.main.temp +' C Humidity '+weatherDallas.main.humidity +'% Hi '+ weatherDallas.main.temp_max+" C Lo "+ weatherDallas.main.temp_min+" C Pressure " + weatherDallas.main.pressure +" Hg",100,50);
       }

text('Weather in Big US Cities',200,100);
textAlign(CENTER);


}


// part of array-based strategy to color ellipses based on temperature
/*function setColor(){
	console.log("setColor");
 //electing the color of each circle based on the corresponding city's temperature
//if city temp <0, display white, if city temp >0 and < 15 display shade of blue, if city temp > 15 display shade of red 
var cityTemps=[weatherLA.main.temp, weatherManhattan.main.temp, weatherSeattle.main.temp, weatherMiami.main.temp, weatherDallas.main.temp];

	for(var i=0; i<cityTemps.length; i++){

		if (cityTemps[i]<0){
			colors[i] = color(255,255,255);
		}
		else if (cityTemps[i]>0 && cityTemps[i]<5){
			colors[i]=color(0,0,250);
		}
		else if  (cityTemps[i]>5 && cityTemps[i]<10 ) {
			colors[i]= color(0,0,200);
		}
		else if (cityTemps[i]>10 && cityTemps[i]<15){
			colors[i]=color(0,0,100);
		}
		else if (cityTemps[i]>15 && cityTemps[i]<20){
				colors[i]=color(100,0,0);
			}
		else if (cityTemps[i]>20 && cityTemps[i]<25){
		colors[i]=color(200,0,0); 
		}
		else if (cityTemps[i]>25 && cityTemps[i]<30){
		colors[i]=color(250,0,0); 
		} 
		else if (cityTemps[i]>30) {
		colors[i]=color(0); 
		}
		else 
			return false; 
 console.log(cityTemps);
	}}
	*/

