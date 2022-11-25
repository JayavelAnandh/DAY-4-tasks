// 1st task for day 4.
var obj1={
    "name" : "person 1",
    "age" : "5"
}
var obj2={
       "age" : "5",
       "name" : "person 1",
}
//taken both objects in JSON format.

console.log(JSON.stringify(obj1.age)===JSON.stringify(obj2.age));
console.log(JSON.stringify(obj1.name)===JSON.stringify(obj2.name));

// true
// true     output on the console
//----------------------------


// 2nd task 

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var data = request.response;
    var result = JSON.parse(data);
    //console.log(result);

for(var need of result){//2nd task
    console.log(need.flags.png);
}
//3rd task answer will be obtained by this
for(var need of result){//3rd task
    console.log(need.name,need.region,need.subregion,need.population);
}
} 
//   SAMPLE FOR OUTPUT ,ORIGINAL OUTPUT SHIWS THE LINK OF EVERY COUNTRY'S FLAG
// https://flagcdn.com/w320/mr.png
// script.js:27 https://flagcdn.com/w320/aw.png
// script.js:27 https://flagcdn.com/w320/ar.png
// script.js:27 https://flagcdn.com/w320/se.png
// script.js:27 https://flagcdn.com/w320/mv.png
// script.js:27 https://flagcdn.com/w320/mx.png
// script.js:27 https://flagcdn.com/w320/nz.png

//-----------------------------
//3 rd task ouput
// {common: 'Mauritania', official: 'Islamic Republic of Mauritania', nativeName: {…}}common: "Mauritania"nativeName: {ara: {…}}official: "Islamic Republic of Mauritania"[[Prototype]]: Object 'Africa' 'Western Africa' 4649660

