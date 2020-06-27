const api="https://cdn.rage.mp/master";const serverStatus=document.getElementById("servStatus");const currentPlayers=document.getElementById("cantPlayers");const maxPlayers=document.getElementById("maxPlayers");const serverBox=document.getElementById("serverBox");function httpGetAsync(theUrl,callback)
{var xmlHttp=new XMLHttpRequest();xmlHttp.onreadystatechange=function(){if(xmlHttp.readyState==4&&xmlHttp.status==200)
callback(xmlHttp.responseText);}
xmlHttp.open("GET",theUrl,true);xmlHttp.send(null);}
httpGetAsync(api,(result)=>{let json=JSON.parse(result);let ecrp;for(var ip in json){if(ip=="51.91.16.98:22005")
{ecrp=json[ip];break;}}
if(ecrp!=null)
{currentPlayers.innerHTML=ecrp.players;maxPlayers.innerHTML=ecrp.maxplayers;serverStatus.innerHTML="Online";}
else
{serverBox.style.display="none";}});