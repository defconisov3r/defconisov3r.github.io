target=document.getElementById("rudyTargets").value.split(",");
console.log(target);
l=target.length;
targetActive=null;
i=0;
function rudyOpen(url){
	targetActive=window.open(url,'_blank');
	if(targetActive==null){
		return true;
	}
	return false;
}
function runRudyOpen(){	
	if(!(targetActive==null)){
		domain="https://"+target[i];
		targetActive.location.href=domain;
	}
	i++;
}
setInterval(runRudyOpen,1000);
