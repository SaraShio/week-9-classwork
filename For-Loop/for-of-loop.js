var weathers = ["sunny", "rainy", "cloudy"];
var words = "";

for(var weather of weathers){
    words += weather + "\n";
}

console.log(words);

//fixing the above 

var weathers = ["sunny", "rainy", "cloudy"];
var words = "";

for(var weather of weathers){
    if(weather == "cloudy"){
    words += weather;
    break;
    }
    words += weather + "\n";
}

console.log(words);