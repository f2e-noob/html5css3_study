var i=0;
function timeCount(){
	i=i++;
	postMessage(i);
	setTimeout('timeCount()',500);
}
timeCount();