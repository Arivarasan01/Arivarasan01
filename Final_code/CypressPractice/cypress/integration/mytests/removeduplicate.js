var str = "I'm a guy who works work's at Software Industry";
str = str.replace(/[ ]/g,"").split(",");
var result = [];
for(var i =0; i < str.length ; i++){
    if(result.indexOf(str[i]) == -1) result.push(str[i]);
}
result=result.join(", ");