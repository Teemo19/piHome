
setTimeout(function () {
  
  $('.loader-container').addClass('done');
  $('.progress').addClass('done');
  myVar = setTimeout(abrir, 4300);
}, 1000);
function abrir(){
	window.open("welcome.html","_self");
}