$(function(){
    $.getJSON("https://boyddelfin.github.io/assets/json/settings.json", function(settings){
        console.log(settings.mainURL);
    });
});