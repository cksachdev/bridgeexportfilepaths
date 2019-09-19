#include "json2.js";

var abc = 123;

if(BridgeTalk.appName == 'bridge'){
    var newCommand = new MenuElement('command', 'Export files List...', 'at the end of Tools');
}

newCommand.onSelect = function (){
  $.writeln("Hello World!!");
  var s = "";
  var arr = [];
  for(var i=0; i<app.document.selections.length; i++){
    s = s + "\n" + app.document.selections[i].path;
    arr.push(app.document.selections[i].path);
  }
  // $.writeln(s);
  $.writeln(JSON.stringify(arr));
}

