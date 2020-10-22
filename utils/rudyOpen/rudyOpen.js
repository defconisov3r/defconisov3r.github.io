//:P
var target=null;
var targetActive=null;
i=0;
function rudyOpen(url){
	targetActive=window.open(url,'_blank');
	if(targetActive==null){
		return true;
	}
	return false;
}
function runRudyOpen(){
	//:P
	clearInterval(rep);
	rep=setInterval(runRudyOpen,1500);
	target=document.getElementById("rudyTargets").value.split(",");
	console.log(target);
	l=target.length;
	if(!(targetActive==null)){
		domain="https://"+target[i];
		targetActive.location.href=domain;
	}
	i++;
}
runRudyOpen();
