//	HYPE.documents["index"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="index.hyperesources",f="index",g="index_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/index_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=null==navigator.userAgentData&&navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_752F||null!=window.HYPE_dtl_752F)||true==!0||null!=c&&10>c;a=!0==d?"HYPE-752.full.min.js":"HYPE-752.thin.min.js";c=!0==d?"F":"T";
d=d?"":"";if(false==!1&&(a=k("HYPE_752"+c,"HYPE_dtl_752"+c,a,d),false==!0&&(a=a||k("HYPE_w_752","HYPE_wdtl_752","HYPE-752.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_752","HYPE-752.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=
document.getElementsByTagName("div"),b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"initializeMain",source:"function(hypeDocument, element, event) {\t\n\tif (DIFFICULTY == \"easy\") {\n\t\tINITIALCOUNTDOWNVALUE = 60;\n\t\tdocument.getElementById(\"maskBox\").style.visibility = \"hidden\";\n\t} else {\n\t\tINITIALCOUNTDOWNVALUE = 45;\n\t\tdocument.getElementById(\"maskBox\").style.visibility = \"visible\";\n\t}\n\n\tdocument.getElementById(\"mask1\").style.top = \"-48px\";\n\tdocument.getElementById(\"mask1\").style.left = \"-848px\";\n\tdocument.getElementById(\"thermometer\").style.width = \"790px\";\n\tdocument.getElementById(\"player\").style.top = \"608px\";\n\tdocument.getElementById(\"player\").style.left = \"0px\";\n\tdocument.getElementById(\"blueDoor\").style.visibility = \"visible\";\n\tdocument.getElementById(\"redDoor\").style.visibility = \"visible\";\n\tdocument.getElementById(\"greenDoor\").style.visibility = \"visible\";\n\tdocument.getElementById(\"blueKey\").style.visibility = \"visible\";\n\tdocument.getElementById(\"redKey\").style.visibility = \"visible\";\n\tdocument.getElementById(\"greenKey\").style.visibility = \"visible\";\n\tdocument.getElementById(\"blueKeyDisplay\").style.visibility = \"hidden\";\n\tdocument.getElementById(\"redKeyDisplay\").style.visibility = \"hidden\";\n\tdocument.getElementById(\"greenKeyDisplay\").style.visibility = \"hidden\";\n\tdocument.getElementById(\"counter\").innerHTML = INITIALCOUNTDOWNVALUE;\n\tPLAYERMOVEABLE = true;\n\tvar counterSegments = 10;\n\t\n\tCOUNTDOWNINTERVAL = setInterval(decrementTimer, 100);\n\t\n\tfunction decrementTimer() {\n\t\tvar temp2 = parseFloat(document.getElementById(\"thermometer\").style.width);\n\t\tvar decrementAmount = 79/(INITIALCOUNTDOWNVALUE);\n\t\tdocument.getElementById(\"thermometer\").style.width = (temp2 - decrementAmount) + \"px\";\n\t\tcounterSegments--;\n\t\tif (counterSegments == 0) {\n\t\t\tcounterSegments = 10;\n\t\t\tvar temp1 = parseInt(document.getElementById(\"counter\").innerHTML);\n\t\t\ttemp1 = temp1 - 1;\n\t\t\tdocument.getElementById(\"counter\").innerHTML = temp1;\n\t\t}\n\t\tif (temp1 == 0) {\n\t\t\tclearInterval(COUNTDOWNINTERVAL);\n\t\t\tPLAYERMOVABLE = false;\n\t\t\tdocument.getElementById(\"gameOverMessage\").innerHTML = \"YOU LOSE!\";\n\t\t\tdocument.getElementById(\"thermometer\").style.width = \"0px\";\n\t\t\thypeDocument.startTimelineNamed('playerLose');\n\t\t}\n\t}\n\t\t\t\n}",identifier:"30"},{name:"detectKeyDown",source:"function(hypeDocument, element, event) {\t\n\tif (PLAYERMOVEABLE == true) {\n\t\tvar topPosition = parseInt(document.getElementById('player').style.top);\n\t\tvar leftPosition = parseInt(document.getElementById('player').style.left);\n\t\tvar maskTopPosition = parseInt(document.getElementById('mask1').style.top);\n\t\tvar maskLeftPosition = parseInt(document.getElementById('mask1').style.left);\n\t\tvar playerTopGrid = topPosition/32;\n\t\tvar playerLeftGrid = leftPosition/32;\n\t\tvar keyPressed = event.key;\n\t\tvar keyCode = event.keyCode;\n\t\tif (keyCode == \"37\") \t\t{ playerLeftGrid = playerLeftGrid - 1; } // MOVE LEFT\n\t\telse if (keyCode == \"38\") { playerTopGrid = playerTopGrid - 1; } // MOVE UP\n\t\telse if (keyCode == \"39\") { playerLeftGrid = playerLeftGrid + 1; } // MOVE RIGHT\n\t\telse if (keyCode == \"40\")  { playerTopGrid = playerTopGrid + 1; } // MOVE DOWN\n\t\tvar string4 = \"GRID[\" + playerTopGrid + \"][\" + playerLeftGrid + \"]\";\n\t\tvar string5 = eval(string4);\n\t\t\n\t\t// REMINDER:\t\tGRID[14][3] = 2; // BLUE KEY\n\t\t// REMINDER:\t\tGRID[12][11] = 3; // BLUE DOOR\n\t\t// REMINDER:\t\tGRID[18][19] = 4; // RED KEY\n\t\t// REMINDER:\t\tGRID[6][7] = 5; // RED DOOR\n\t\t// REMINDER:\t\tGRID[9][19] = 6; // GREEN KEY\n\t\t// REMINDER:\t\tGRID[11][21] = 7; // GREEN DOOR\n\t\n\t\tif (string5 == 1) { // OPEN PATH\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\thypeDocument.startTimelineNamed('footstep');\n\t\t} else if (string5 == 0) { // OBSTACLE\n\t\t\thypeDocument.startTimelineNamed('badBeep');\n\t\t} else if (string5 == 2) { // BLUE KEY\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\tdocument.getElementById(\"blueKey\").style.visibility = \"hidden\";\n\t\t\tdocument.getElementById(\"blueKeyDisplay\").style.visibility = \"visible\";\n\t\t\tGRID[14][3] = 1;\n\t\t\thypeDocument.startTimelineNamed('pickup');\n\t\t} else if (string5 == 4) { // RED KEY\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\tdocument.getElementById(\"redKey\").style.visibility = \"hidden\";\n\t\t\tdocument.getElementById(\"redKeyDisplay\").style.visibility = \"visible\";\n\t\t\tGRID[18][19] = 1;\n\t\t\thypeDocument.startTimelineNamed('pickup');\n\t\t} else if (string5 == 6) { // GREEN KEY\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\tdocument.getElementById(\"greenKey\").style.visibility = \"hidden\";\n\t\t\tdocument.getElementById(\"greenKeyDisplay\").style.visibility = \"visible\";\n\t\t\tGRID[9][19] = 1;\n\t\t\thypeDocument.startTimelineNamed('pickup');\n\t\t} else if (string5 == 3) { // BLUE DOOR\n\t\t\tif (document.getElementById(\"blueKeyDisplay\").style.visibility == \"visible\") {\n\t\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\t\tdocument.getElementById(\"blueDoor\").style.visibility = \"hidden\";\n\t\t\t\tGRID[12][11] = 1;\n\t\t\t\thypeDocument.startTimelineNamed('doorOpen');\n\t\t\t} else {\n\t\t\t\thypeDocument.startTimelineNamed('badBeep');\n\t\t\t}\n\t\t} else if (string5 == 5) { // RED DOOR\n\t\t\tif (document.getElementById(\"redKeyDisplay\").style.visibility == \"visible\") {\n\t\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\t\tdocument.getElementById(\"redDoor\").style.visibility = \"hidden\";\n\t\t\t\tGRID[6][7] = 1;\n\t\t\t\thypeDocument.startTimelineNamed('doorOpen');\n\t\t\t} else {\n\t\t\t\thypeDocument.startTimelineNamed('badBeep');\n\t\t\t}\n\t\t} else if (string5 == 7) { // GREEN DOOR\n\t\t\tif (document.getElementById(\"greenKeyDisplay\").style.visibility == \"visible\") {\n\t\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\t\tdocument.getElementById('mask1').style.top = ((playerTopGrid*32) - 624) + \"px\";\n\t\t\t\tdocument.getElementById('mask1').style.left = ((playerLeftGrid*32) - 880) + \"px\";\n\t\t\t\tdocument.getElementById(\"greenDoor\").style.visibility = \"hidden\";\n\t\t\t\tGRID[11][21] = 1;\n\t\t\t\thypeDocument.startTimelineNamed('doorOpen');\n\t\t\t} else {\n\t\t\t\thypeDocument.startTimelineNamed('badBeep');\n\t\t\t}\n\t\t} else if (string5 == 8) { // CHECKERED FLAG\n\t\t\tPLAYERMOVEABLE = false;\n\t\t\tdocument.getElementById('player').style.left = (playerLeftGrid*32) + \"px\";\n\t\t\tdocument.getElementById('player').style.top = (playerTopGrid*32) + \"px\";\n\t\t\tdocument.getElementById(\"maskBox\").style.visibility = \"hidden\";\n\t\t\thypeDocument.startTimelineNamed('endMaze');\n\t\t\tclearInterval(COUNTDOWNINTERVAL);\n\t\t\tdocument.getElementById(\"gameOverMessage\").innerHTML = \"YOU WIN!\";\n\t\t\thypeDocument.startTimelineNamed('playerWin');\n\t\t}\n\t}\n\t\t\t\n}",identifier:"33"},{name:"initializeSplash",source:"function(hypeDocument, element, event) {\t\n\tif (element.id == \"easyButton\") {\n\t\tDIFFICULTY = \"easy\";\n\t} else {\n\t\tDIFFICULTY = \"hard\";\n\t}\n\t\n\thypeDocument.startTimelineNamed('splashStart');\n\t\n\tGRID = [\n\t\t[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1],\n\t\t[1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1],\n\t\t[1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1],\n\t\t[1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1],\n\t\t[1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1],\n\t\t[1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1],\n\t\t[1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,1],\n\t\t[1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,1],\n\t\t[1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],\n\t\t[1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],\n\t\t[1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1],\n\t\t[1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1],\n\t\t[1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1],\n\t\t[1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0],\n\t\t[1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1],\n\t\t[1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1],\n\t\t[1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1],\n\t\t[1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1],\n\t\t[1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1],\n\t\t[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1]\n\t];\n\t//\t y\t x\n\tGRID[1]\t[25] \t= 2; // BLUE \tKEY\n\tGRID[14][14] \t= 3; // BLUE \tDOOR\n\tGRID[12][21] \t= 4; // RED \tKEY\n\tGRID[9]\t[27] \t= 5; // RED \tDOOR\n\tGRID[16][20] \t= 6; // GREEN \tKEY\n\tGRID[12][14] \t= 7; // GREEN \tDOOR\n\tGRID[0]\t[27] \t= 8; // FINISH \tFLAG\n\t\n}",identifier:"65"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_752"+c](f,g,{"-2":{n:"blank.gif"},"18":{p:1,n:"Collect%206.png",g:"107",t:"@1x"},"10":{p:1,n:"Collect.png",g:"100",t:"@1x"},"19":{p:1,n:"Collect%205.png",g:"108",t:"@1x"},"11":{p:1,n:"Collect%203.png",g:"101",t:"@1x"},"0":{p:2,n:"badBeep.mp3",g:"36",t:"audio/mpeg"},"12":{p:1,n:"Collect%202.png",g:"102",t:"@1x"},"1":{p:2,n:"charge.mp3",g:"72",t:"audio/mpeg"},"20":{p:1,n:"Collect%207.png",g:"109",t:"@1x"},"2":{p:2,n:"creditRoll.mp3",g:"89",t:"audio/mpeg"},"13":{p:1,n:"Collect.jpeg",g:"103",t:"@1x"},"3":{p:2,n:"doorOpen.mp3",g:"37",t:"audio/mpeg"},"21":{p:1,n:"Untitled_Artwork.png",g:"151",t:"@1x"},"14":{p:1,n:"player.png",g:"10",t:"@1x"},"4":{p:2,n:"footstep.mp3",g:"38",t:"audio/mpeg"},"5":{p:2,n:"pickup.mp3",g:"39",t:"audio/mpeg"},"15":{p:1,n:"map1.jpg",g:"8",o:true,t:"@1x"},"22":{p:1,n:"Untitled_Artwork.jpeg",g:"34",t:"@1x"},"6":{p:2,n:"playerLose.mp3",g:"58",t:"audio/mpeg"},"16":{p:1,n:"Collect%204.jpeg",g:"105",t:"@1x"},"7":{p:2,n:"playerWin.mp3",g:"53",t:"audio/mpeg"},"-1":{n:"PIE.htc"},"8":{p:2,n:"mainTheme.mp3",g:"99",t:"audio/mpeg"},"17":{p:1,n:"Collect%203.jpeg",g:"106",t:"@1x"},"9":{p:1,n:"mask1.png",g:"96",t:"@1x"}},
l,["<link href='https://fonts.googleapis.com/css?family=Silkscreen&subset=latin' rel='stylesheet' type='text/css'>","<link href='https://fonts.googleapis.com/css?family=Press+Start+2P&subset=latin' rel='stylesheet' type='text/css'>"],e,[{n:"splash",o:"59",X:[0]},{n:"main",o:"1",X:[1]},{n:"credits",o:"73",X:[2]}],[{o:"61",p:"600px",cA:false,Y:1024,Z:768,L:[],c:"#0433FF",bY:1,d:1024,U:{},T:{"66_hover":{q:false,z:1,i:"66_hover",n:"66_hover",a:[{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#FF0",o:"157"},{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#FFFB00",o:"157"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#FF0",o:"157"},{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#FF0",o:"157"},{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#FF0",o:"157"},{f:"c",y:0,z:1,i:"bA",e:"#00F",s:"#F00",o:"157"},{f:"c",y:0,z:1,i:"b",e:597,s:597,o:"157"},{f:"c",y:0,z:1,i:"a",e:604,s:604,o:"157"},{f:"c",y:0,z:1,i:"N",e:8,s:8,o:"157"},{f:"c",y:0,z:1,i:"O",e:8,s:8,o:"157"},{f:"c",y:0,z:1,i:"P",e:8,s:8,o:"157"},{f:"c",y:0,z:1,i:"M",e:8,s:8,o:"157"},{f:"c",y:0,z:1,i:"c",e:202,s:202,o:"157"},{f:"c",y:0,z:1,i:"d",e:62,s:62,o:"157"},{f:"c",y:0,z:1,i:"Y",e:62,s:62,o:"157"},{f:"c",y:0,z:1,i:"F",e:"right",s:"right",o:"157"},{y:1,i:"A",s:"#FF2600",z:0,o:"157",f:"c"},{y:1,i:"G",s:"#FF2600",z:0,o:"157",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"157",f:"c"},{y:1,i:"B",s:"#FF2600",z:0,o:"157",f:"c"},{y:1,i:"D",s:"#FF2600",z:0,o:"157",f:"c"},{y:1,i:"bA",s:"#00F",z:0,o:"157",f:"c"},{y:1,i:"b",s:597,z:0,o:"157",f:"c"},{y:1,i:"a",s:604,z:0,o:"157",f:"c"},{y:1,i:"N",s:8,z:0,o:"157",f:"c"},{y:1,i:"O",s:8,z:0,o:"157",f:"c"},{y:1,i:"P",s:8,z:0,o:"157",f:"c"},{y:1,i:"M",s:8,z:0,o:"157",f:"c"},{y:1,i:"c",s:202,z:0,o:"157",f:"c"},{y:1,i:"d",s:62,z:0,o:"157",f:"c"},{y:1,i:"Y",s:62,z:0,o:"157",f:"c"},{y:1,i:"F",s:"right",z:0,o:"157",f:"c"}],f:30,b:[]},"71":{q:false,z:4,i:"71",n:"splashStart",a:[{f:"c",y:0,z:0.01,i:"e",e:0,s:1,o:"156"},{f:"c",y:0,z:0.05,i:"a",e:302,s:-425,o:"162"},{y:0.01,i:"e",s:0,z:0,o:"156",f:"c"},{f:"c",p:2,y:0.05,z:0.3,i:"ActionHandler",e:{a:[{p:12,o:"39",q:false}]},s:{a:[{p:12,o:"39",q:false}]},o:"71"},{f:"c",y:0.05,z:0.2,i:"a",e:302,s:302,o:"162"},{f:"c",y:0.25,z:0.05,i:"a",e:1024,s:302,o:"162"},{f:"c",y:1,z:0.05,i:"a",e:297,s:-425,o:"155"},{y:1,i:"a",s:1024,z:0,o:"162",f:"c"},{f:"c",p:2,y:1.05,z:1,i:"ActionHandler",e:{a:[{p:12,o:"39",q:false}]},s:{a:[{p:12,o:"39",q:false}]},o:"71"},{f:"c",y:1.05,z:0.2,i:"a",e:297,s:297,o:"155"},{f:"c",y:1.25,z:0.05,i:"a",e:1019,s:297,o:"155"},{f:"c",y:2,z:0.05,i:"a",e:297,s:-425,o:"159"},{y:2,i:"a",s:1019,z:0,o:"155",f:"c"},{f:"c",p:2,y:2.05,z:1,i:"ActionHandler",e:{a:[{}]},s:{a:[{p:12,o:"39",q:false}]},o:"71"},{f:"c",y:2.05,z:0.2,i:"a",e:297,s:297,o:"159"},{f:"c",y:2.25,z:0.05,i:"a",e:1019,s:297,o:"159"},{f:"c",y:3,z:0.05,i:"a",e:253,s:-469,o:"154"},{y:3,i:"a",s:1019,z:0,o:"159",f:"c"},{f:"c",p:2,y:3.05,z:0.25,i:"ActionHandler",e:{a:[{d:1.1,p:1,g:1,e:"1"}]},s:{a:[{p:12,o:"39",q:false}]},o:"71"},{f:"c",y:3.05,z:0.2,i:"a",e:253,s:253,o:"154"},{f:"c",y:3.25,z:0.05,i:"a",e:975,s:253,o:"154"},{f:"c",p:2,y:4,z:0,i:"ActionHandler",s:{a:[{d:1.1,p:1,g:1,e:"1"}]},o:"71"},{y:4,i:"a",s:975,z:0,o:"154",f:"c"}],f:30,b:[]},"64_hover":{q:false,z:1,i:"64_hover",n:"64_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#FFFB00",o:"160"},{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#FF0",o:"160"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#FF0",o:"160"},{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#FF0",o:"160"},{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#FF0",o:"160"},{f:"c",y:0,z:1,i:"bA",e:"#00F",s:"#F00",o:"160"},{f:"c",y:0,z:1,i:"b",e:597,s:597,o:"160"},{f:"c",y:0,z:1,i:"a",e:180,s:180,o:"160"},{f:"c",y:0,z:1,i:"N",e:8,s:8,o:"160"},{f:"c",y:0,z:1,i:"O",e:8,s:8,o:"160"},{f:"c",y:0,z:1,i:"P",e:8,s:8,o:"160"},{f:"c",y:0,z:1,i:"M",e:8,s:8,o:"160"},{f:"c",y:0,z:1,i:"c",e:202,s:202,o:"160"},{f:"c",y:0,z:1,i:"d",e:62,s:62,o:"160"},{f:"c",y:0,z:1,i:"Y",e:62,s:62,o:"160"},{f:"c",y:0,z:1,i:"F",e:"right",s:"right",o:"160"},{y:1,i:"G",s:"#FF2600",z:0,o:"160",f:"c"},{y:1,i:"B",s:"#FF2600",z:0,o:"160",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"160",f:"c"},{y:1,i:"D",s:"#FF2600",z:0,o:"160",f:"c"},{y:1,i:"A",s:"#FF2600",z:0,o:"160",f:"c"},{y:1,i:"bA",s:"#00F",z:0,o:"160",f:"c"},{y:1,i:"b",s:597,z:0,o:"160",f:"c"},{y:1,i:"a",s:180,z:0,o:"160",f:"c"},{y:1,i:"N",s:8,z:0,o:"160",f:"c"},{y:1,i:"O",s:8,z:0,o:"160",f:"c"},{y:1,i:"P",s:8,z:0,o:"160",f:"c"},{y:1,i:"M",s:8,z:0,o:"160",f:"c"},{y:1,i:"c",s:202,z:0,o:"160",f:"c"},{y:1,i:"d",s:62,z:0,o:"160",f:"c"},{y:1,i:"Y",s:62,z:0,o:"160",f:"c"},{y:1,i:"F",s:"right",z:0,o:"160",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:3.01,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"v",y:0,z:1.14,i:"b",e:220,s:240,o:"156"},{f:"d",y:1.14,z:0.02,i:"b",e:220,s:220,o:"156"},{f:"v",y:1.16,z:1.13,i:"b",e:240,s:220,o:"156"},{f:"c",y:2.29,z:0.02,i:"b",e:240,s:240,o:"156"},{f:"c",p:2,y:3.01,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"60"}]},o:"kTimelineDefaultIdentifier"},{y:3.01,i:"b",s:240,z:0,o:"156",f:"c"}],f:30,b:[]}},bZ:180,O:["161","158","163","156","154","159","155","162","160","157"],n:"Untitled Layout","_":0,v:{"161":{p:"no-repeat",bJ:1.33345588,c:1057,q:"100% 100%",bK:1,r:"inline",d:793,e:0.78556985,aW:0,bL:4,aX:0,h:"151",BDbJ:1,w:"",j:"absolute",x:"visible",bG:1,BDbH:0,k:"div",dB:"img",z:2,bH:316,a:-16,BDbK:1,b:-13},"154":{aU:8,bB:6,G:"#FFFB00",c:453,aV:8,r:"inline",d:148,bC:6,s:"'Press Start 2P'",t:148,Z:"break-word",i:"title6",w:"GO!\n",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:11,aS:8,aT:8,a:-469,bA:"#FF2600",F:"center",b:302},"157":{J:"Solid",b:597,K:"Solid",z:7,bC:6,L:"Solid",d:62,aS:6,M:8,bD:"none",c:202,N:8,aT:6,dB:"button",O:8,g:"#000",aU:6,P:8,aV:6,i:"hardButton",j:"absolute",k:"div",aI:16,aJ:16,aK:16,aZ:0,aL:16,A:"#FF0",Y:62,B:"#FF0",aM:"66_hover",r:"inline",C:"#FF0",Z:"break-word",s:"'Press Start 2P'",D:"#FF0",t:48,F:"right",aA:{a:[{p:4,h:"65"}]},G:"#FFFB00",aP:"pointer",w:"HARD",bA:"#F00",x:"visible",I:"Solid",a:604,y:"preserve",bB:0},"160":{J:"Solid",b:597,K:"Solid",z:6,bC:6,L:"Solid",d:62,aS:6,M:8,bD:"none",c:202,N:8,aT:6,dB:"button",O:8,g:"#000",aU:6,P:8,aV:6,i:"easyButton",j:"absolute",k:"div",aI:14,aJ:14,aK:14,aZ:0,aL:14,A:"#FF0",Y:62,B:"#FF0",aM:"64_hover",r:"inline",C:"#FF0",Z:"break-word",s:"'Press Start 2P'",D:"#FF0",t:48,F:"right",aA:{a:[{p:4,h:"65"}]},G:"#FFFB00",aP:"pointer",w:"EASY",bA:"#F00",x:"visible",I:"Solid",a:180,y:"preserve",bB:0},"163":{aU:8,bB:0,G:"#FFFB00",c:1008,aV:8,r:"inline",d:184,bC:12,s:"'Press Start 2P'",X:0,t:100,u:"normal",Z:"break-word",v:"normal",i:"title1",w:"MINE MAZE",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:4,aS:8,E:-76,aT:8,a:0,bA:"#FF2600",F:"center",b:30},"156":{aU:8,bB:0,G:"#FFFB00",c:1008,aV:8,r:"inline",d:254,e:1,s:"Silkscreen",X:-6,bC:6,t:48,Y:54,u:"normal",Z:"break-word",v:"normal",i:"title2",w:"Use Arrow Keys To Move<br>\nGrab TNT and Blow Up Rocks<br>To reach the Treasure<br>Before The Timer reaches Zero\n",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:5,aS:8,E:0,aT:8,a:0,bA:"rgba(255, 38, 0, 0.750)",F:"center",b:240},"159":{aU:8,bB:6,G:"#FFFB00",c:409,aV:8,r:"inline",d:148,bC:6,s:"'Press Start 2P'",t:136,Z:"break-word",i:"title5",w:"1",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:10,aS:8,aT:8,a:-425,bA:"#FF2600",F:"center",b:302},"162":{aU:8,bB:6,G:"#FFFB00",c:409,aV:8,r:"inline",d:148,bC:6,s:"'Press Start 2P'",t:136,Z:"break-word",i:"title3",w:"3",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:8,aS:8,aT:8,a:-420,bA:"#FF2600",F:"center",b:302},"155":{aU:8,bB:6,G:"#FFFB00",c:409,aV:8,r:"inline",d:148,bC:6,s:"'Press Start 2P'",t:136,Z:"break-word",i:"title4",w:"2",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:9,aS:8,aT:8,a:-425,bA:"#FF2600",F:"center",b:302},"158":{c:1014,d:758,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:5,w:"",N:5,A:"#000",x:"visible",j:"absolute",B:"#000",O:5,P:5,C:"#000",z:1,l:0,D:"#000",m:"#000",k:"div",n:"#0000C0",a:0,b:0}}},{A:{a:[{p:4,h:"30"}]},o:"3",p:"600px",cA:false,Y:1024,Z:768,C:{a:[{p:4,h:"33"}]},c:"#00FDFF",L:[],bY:1,d:1024,U:{},T:{"52":{q:false,z:3.15,i:"52",n:"playerWin",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"53",q:false}]},o:"52"},{f:"f",y:0,z:1.15,i:"b",e:1,s:-637,o:"176"},{y:1.15,i:"b",s:1,z:0,o:"176",f:"c"},{f:"c",y:2,z:0.15,i:"e",e:1,s:0,o:"177"},{y:2.15,i:"e",s:1,z:0,o:"177",f:"c"},{f:"c",y:3,z:0.15,i:"e",e:1,s:0,o:"178"},{y:3.15,i:"e",s:1,z:0,o:"178",f:"c"}],f:30,b:[]},"57":{q:false,z:3.15,i:"57",n:"playerLose",a:[{f:"f",y:0,z:1.15,i:"b",e:1,s:-669,o:"176"},{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"58",q:false},{p:13,o:"99",q:false}]},o:"57"},{y:1.15,i:"b",s:1,z:0,o:"176",f:"c"},{f:"c",y:2,z:0.15,i:"e",e:1,s:0,o:"177"},{y:2.15,i:"e",s:1,z:0,o:"177",f:"c"},{f:"c",y:3,z:0.15,i:"e",e:1,s:0,o:"178"},{y:3.15,i:"e",s:1,z:0,o:"178",f:"c"}],f:30,b:[]},"42":{q:false,z:0,i:"42",n:"doorOpen",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"37",q:false}]},o:"42"}],f:30,b:[]},"49_hover":{q:false,z:1,i:"49_hover",n:"49_hover",a:[{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#FF0",o:"178"},{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#FF0",o:"178"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#FF0",o:"178"},{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#FF0",o:"178"},{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#FF0",o:"178"},{f:"c",y:0,z:1,i:"bA",e:"#00F",s:"#F00",o:"178"},{f:"c",y:0,z:1,i:"b",e:430,s:433,o:"178"},{f:"c",y:0,z:1,i:"a",e:264,s:262,o:"178"},{f:"c",y:0,z:1,i:"N",e:6,s:8,o:"178"},{f:"c",y:0,z:1,i:"O",e:6,s:8,o:"178"},{f:"c",y:0,z:1,i:"P",e:6,s:8,o:"178"},{f:"c",y:0,z:1,i:"M",e:6,s:8,o:"178"},{f:"c",y:0,z:1,i:"d",e:66,s:62,o:"178"},{f:"c",y:0,z:1,i:"Y",e:67,s:62,o:"178"},{f:"c",y:0,z:1,i:"c",e:347,s:343,o:"178"},{y:1,i:"A",s:"#FF2600",z:0,o:"178",f:"c"},{y:1,i:"G",s:"#FF2600",z:0,o:"178",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"178",f:"c"},{y:1,i:"B",s:"#FF2600",z:0,o:"178",f:"c"},{y:1,i:"D",s:"#FF2600",z:0,o:"178",f:"c"},{y:1,i:"bA",s:"#00F",z:0,o:"178",f:"c"},{y:1,i:"b",s:430,z:0,o:"178",f:"c"},{y:1,i:"a",s:264,z:0,o:"178",f:"c"},{y:1,i:"N",s:6,z:0,o:"178",f:"c"},{y:1,i:"O",s:6,z:0,o:"178",f:"c"},{y:1,i:"P",s:6,z:0,o:"178",f:"c"},{y:1,i:"M",s:6,z:0,o:"178",f:"c"},{y:1,i:"d",s:66,z:0,o:"178",f:"c"},{y:1,i:"Y",s:67,z:0,o:"178",f:"c"},{y:1,i:"c",s:347,z:0,o:"178",f:"c"}],f:30,b:[]},"45":{q:false,z:0,i:"45",n:"pickup",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"39",q:false}]},o:"45"}],f:30,b:[]},"43":{q:false,z:0,i:"43",n:"endMaze",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:13,o:"99",q:false}]},o:"43"}],f:30,b:[]},"48_hover":{q:false,z:1,i:"48_hover",n:"48_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#FF0",o:"177"},{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#FF0",o:"177"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#FF0",o:"177"},{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#FF0",o:"177"},{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#FF0",o:"177"},{f:"c",y:0,z:1,i:"b",e:323,s:321,o:"177"},{f:"c",y:0,z:1,i:"a",e:186,s:184,o:"177"},{f:"c",y:0,z:1,i:"N",e:6,s:8,o:"177"},{f:"c",y:0,z:1,i:"O",e:6,s:8,o:"177"},{f:"c",y:0,z:1,i:"P",e:6,s:8,o:"177"},{f:"c",y:0,z:1,i:"M",e:6,s:8,o:"177"},{f:"c",y:0,z:1,i:"d",e:66,s:62,o:"177"},{f:"c",y:0,z:1,i:"bA",e:"#00F",s:"#F00",o:"177"},{f:"c",y:0,z:1,i:"c",e:504,s:500,o:"177"},{f:"c",y:0,z:1,i:"Y",e:67,s:70,o:"177"},{y:1,i:"G",s:"#FF2600",z:0,o:"177",f:"c"},{y:1,i:"B",s:"#FF2600",z:0,o:"177",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"177",f:"c"},{y:1,i:"D",s:"#FF2600",z:0,o:"177",f:"c"},{y:1,i:"A",s:"#FF2600",z:0,o:"177",f:"c"},{y:1,i:"b",s:323,z:0,o:"177",f:"c"},{y:1,i:"a",s:186,z:0,o:"177",f:"c"},{y:1,i:"N",s:6,z:0,o:"177",f:"c"},{y:1,i:"O",s:6,z:0,o:"177",f:"c"},{y:1,i:"P",s:6,z:0,o:"177",f:"c"},{y:1,i:"M",s:6,z:0,o:"177",f:"c"},{y:1,i:"d",s:66,z:0,o:"177",f:"c"},{y:1,i:"bA",s:"#00F",z:0,o:"177",f:"c"},{y:1,i:"c",s:504,z:0,o:"177",f:"c"},{y:1,i:"Y",s:67,z:0,o:"177",f:"c"}],f:30,b:[]},"41":{q:false,z:0,i:"41",n:"badBeep",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"36",q:false}]},o:"41"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"72",q:false},{p:12,o:"99",q:true}]},o:"kTimelineDefaultIdentifier"}],f:30,b:[]},"44":{q:false,z:0,i:"44",n:"footstep",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"38",q:false}]},o:"44"}],f:30,b:[]}},bZ:180,O:["179","176","180","177","178","187","186","167","164","169","174","182","171","181","168","184","170","192","191","173","185","172","175","166","183","189","188","165","190"],n:"Untitled Layout","_":1,v:{"173":{h:"108",p:"no-repeat",x:"visible",a:926,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:21,i:"greenKeyDisplay",b:366,d:64,k:"div",c:64},"165":{aU:8,bB:0,G:"#FFF",c:192,aV:8,r:"inline",d:84,bC:11,s:"'Press Start 2P'",t:88,Z:"break-word",i:"counter",w:"60",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:18,aS:8,aT:8,a:816,bA:"rgba(255, 0, 0, 0.500)",F:"right",b:654},"186":{x:"hidden",k:"div",c:896,d:640,z:23,i:"maskBox",r:"inline",a:0,j:"absolute",b:0},"178":{J:"Solid",b:433,K:"Solid",z:5,bC:6,L:"Solid",d:62,aS:6,M:8,e:0,bD:"none",N:8,aT:6,dB:"button",O:8,g:"#000",aU:6,P:8,c:343,bF:"176",aV:6,i:"creditsButton",j:"absolute",k:"div",aI:25,aJ:25,aK:25,aZ:0,aL:25,A:"#FF0",Y:62,B:"#FF0",aM:"49_hover",r:"inline",C:"#FF0",Z:"break-word",s:"'Press Start 2P'",D:"#FF0",t:48,E:-36,F:"right",aA:{a:[{d:1.1,p:1,g:1,e:"73"}]},G:"#FF0",aP:"pointer",w:"CREDITS",bA:"#F00",x:"visible",I:"Solid",a:262,y:"preserve",bB:0},"190":{aI:0,c:790,d:90,I:"None",J:"None",K:"None",L:"None",M:0,i:"thermometer",bF:"188",N:0,A:"#FF2600",x:"visible",j:"absolute",B:"#FF2600",O:0,P:0,C:"#FF2600",z:1,l:90,D:"#FF2600",aK:0,m:"#90154C",n:"#FF2600",aJ:0,a:5,aL:0,k:"div",b:5},"182":{c:128,d:768,I:"None",J:"None",K:"None",g:"#000",L:"None",M:0,i:"rightBorder",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,O:0,C:"#D8DDE4",z:1,k:"div",D:"#D8DDE4",a:896,b:0},"174":{aU:8,G:"#FFF",c:144,H:"underline",aV:8,r:"inline",d:32,s:"Silkscreen",X:-3,t:22,Z:"break-word",i:"inventoryTitle",w:"INVENTORY",j:"absolute",x:"visible",k:"div",y:"preserve",z:7,aS:8,aT:8,a:880,F:"center",b:0},"166":{w:"",h:"105",p:"no-repeat",x:"visible",a:640,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:16,b:512,i:"greenKey",d:32,k:"div",c:32},"187":{h:"96",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:1,bF:"186",b:0,d:1280,i:"mask1",k:"div",c:1792},"179":{c:903,d:642,I:"None",J:"None",K:"None",L:"None",M:0,i:"background1",bF:"176",N:0,A:"#0433FF",x:"visible",j:"absolute",B:"#0433FF",O:0,P:0,C:"#0433FF",z:1,l:0,D:"#0433FF",m:"#1F0054",k:"div",n:"rgba(0, 0, 255, 0.750)",a:-7,b:0},"170":{h:"107",p:"no-repeat",x:"visible",a:926,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:20,i:"redKeyDisplay",b:224,d:64,k:"div",c:64},"191":{c:80,d:80,I:"Solid",J:"Solid",K:"Solid",g:"#FF00C5",L:"Solid",M:10,i:"border3",N:10,aI:20,A:"#00FF3A",x:"visible",j:"absolute",B:"#00FF3A",P:10,O:10,C:"#00FF3A",z:10,aJ:20,D:"#00FF3A",aK:20,k:"div",a:908,aL:20,b:348},"183":{c:1024,d:128,I:"None",J:"None",K:"None",g:"#000",L:"None",M:0,i:"bottomBorder",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,O:0,C:"#D8DDE4",z:2,k:"div",D:"#D8DDE4",a:0,b:640},"175":{p:"no-repeat",c:32,q:"100% 100%",d:32,I:"None",J:"None",K:"None",L:"None",h:"101",M:0,i:"blueDoor",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:5,k:"div",D:"#D8DDE4",a:448,b:451},"167":{h:"10",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:15,i:"player",b:0,d:32,k:"div",c:32},"188":{I:"None",x:"visible",J:"None",a:16,b:654,K:"None",j:"absolute",L:"None",z:11,k:"div",M:0,d:100,c:800,N:0,O:0,P:0},"171":{h:"106",p:"no-repeat",x:"visible",a:800,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:4,i:"blueKey",b:32,d:32,k:"div",c:32},"192":{p:"no-repeat",c:32,q:"100% 100%",d:32,I:"None",J:"None",K:"None",L:"None",h:"102",M:0,i:"redDoor",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:14,k:"div",D:"#D8DDE4",a:864,b:290},"184":{c:80,d:80,I:"Solid",J:"Solid",K:"Solid",g:"#00C5FF",L:"Solid",M:10,i:"border2",N:10,aI:20,A:"#FF3A00",x:"visible",j:"absolute",B:"#FF3A00",P:10,O:10,C:"#FF3A00",z:9,aJ:20,D:"#FF3A00",aK:20,k:"div",a:908,aL:20,b:206},"176":{x:"visible",k:"div",c:896,d:642,z:27,i:"gameOverBox",a:0,j:"absolute",b:-637},"168":{w:"",h:"109",p:"no-repeat",x:"visible",a:926,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:19,b:82,i:"blueKeyDisplay",d:64,k:"div",c:64},"189":{c:780,d:80,I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:10,i:"border4",bF:"188",N:10,A:"#0433FF",x:"visible",j:"absolute",B:"#0433FF",O:10,P:10,C:"#0433FF",z:2,aJ:20,D:"#0433FF",aK:20,k:"div",aI:20,a:0,aL:20,b:0},"180":{aU:8,bB:0,G:"#FFFB00",c:816,aV:8,r:"inline",d:124,bC:12,s:"'Press Start 2P'",t:100,Z:"break-word",i:"gameOverMessage",w:"MESSAGE",bF:"176",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:2,aS:8,E:-76,aT:8,a:32,bA:"#F00",F:"center",b:108},"172":{p:"no-repeat",c:32,q:"100% 100%",d:32,I:"None",J:"None",K:"None",L:"None",h:"100",M:0,i:"greenDoor",N:0,A:"#D8DDE4",j:"absolute",x:"visible",B:"#D8DDE4",O:0,P:0,C:"#D8DDE4",z:6,k:"div",D:"#D8DDE4",a:448,b:387},"164":{w:"",h:"8",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:3,b:0,i:"map1",d:640,k:"div",c:896},"185":{h:"103",p:"no-repeat",x:"visible",a:672,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:17,i:"redKey",b:384,d:32,k:"div",c:32},"177":{J:"Solid",b:321,K:"Solid",z:3,bC:6,L:"Solid",d:62,aS:6,M:8,e:0,bD:"none",N:8,aT:6,dB:"button",O:8,g:"#000",aU:6,P:8,c:500,bF:"176",aV:6,i:"playAgainButton",j:"absolute",k:"div",aI:25,aJ:25,aK:25,aZ:0,aL:25,A:"#FF0",Y:70,B:"#FF0",aM:"48_hover",r:"inline",C:"#FF0",Z:"break-word",s:"'Press Start 2P'",D:"#FF0",t:48,E:-36,F:"right",aA:{a:[{d:1.1,p:1,g:1,e:"59"}]},G:"#FF0",aP:"pointer",w:"PLAY AGAIN?",bA:"#F00",x:"visible",I:"Solid",a:184,y:"preserve",bB:0},"169":{h:"34",p:"no-repeat",x:"visible",a:864,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:22,i:"checkeredFlag",b:0,d:32,k:"div",c:32},"181":{c:80,d:80,I:"Solid",J:"Solid",K:"Solid",g:"#C5FF00",L:"Solid",M:10,i:"border1",N:10,aI:20,A:"#3A00FF",x:"visible",j:"absolute",B:"#3A00FF",P:10,O:10,C:"#3A00FF",z:8,aJ:20,D:"#3A00FF",aK:20,k:"div",a:908,aL:20,b:64}}},{o:"84",p:"600px",B:{a:[{p:13,o:"89",q:false}]},cA:false,Z:768,Y:1024,c:"#0433FF",L:[],bY:1,d:1024,U:{},T:{"79_hover":{q:false,z:1,i:"79_hover",n:"79_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#FF2600",s:"#FFFB00",o:"199"},{f:"c",y:0,z:1,i:"B",e:"#FF2600",s:"#FF0",o:"199"},{f:"c",y:0,z:1,i:"C",e:"#FF2600",s:"#FF0",o:"199"},{f:"c",y:0,z:1,i:"D",e:"#FF2600",s:"#FF0",o:"199"},{f:"c",y:0,z:1,i:"A",e:"#FF2600",s:"#FF0",o:"199"},{f:"c",y:0,z:1,i:"bA",e:"#00F",s:"#F00",o:"199"},{f:"c",y:0,z:1,i:"b",e:832,s:832,o:"199"},{f:"c",y:0,z:1,i:"a",e:248,s:248,o:"199"},{f:"c",y:0,z:1,i:"N",e:8,s:8,o:"199"},{f:"c",y:0,z:1,i:"O",e:8,s:8,o:"199"},{f:"c",y:0,z:1,i:"P",e:8,s:8,o:"199"},{f:"c",y:0,z:1,i:"M",e:8,s:8,o:"199"},{f:"c",y:0,z:1,i:"d",e:62,s:62,o:"199"},{f:"c",y:0,z:1,i:"c",e:499,s:499,o:"199"},{f:"c",y:0,z:1,i:"F",e:"right",s:"right",o:"199"},{f:"c",y:0,z:1,i:"Y",e:65,s:62,o:"199"},{y:1,i:"G",s:"#FF2600",z:0,o:"199",f:"c"},{y:1,i:"B",s:"#FF2600",z:0,o:"199",f:"c"},{y:1,i:"C",s:"#FF2600",z:0,o:"199",f:"c"},{y:1,i:"D",s:"#FF2600",z:0,o:"199",f:"c"},{y:1,i:"A",s:"#FF2600",z:0,o:"199",f:"c"},{y:1,i:"bA",s:"#00F",z:0,o:"199",f:"c"},{y:1,i:"b",s:832,z:0,o:"199",f:"c"},{y:1,i:"a",s:248,z:0,o:"199",f:"c"},{y:1,i:"N",s:8,z:0,o:"199",f:"c"},{y:1,i:"O",s:8,z:0,o:"199",f:"c"},{y:1,i:"P",s:8,z:0,o:"199",f:"c"},{y:1,i:"M",s:8,z:0,o:"199",f:"c"},{y:1,i:"d",s:62,z:0,o:"199",f:"c"},{y:1,i:"c",s:499,z:0,o:"199",f:"c"},{y:1,i:"F",s:"right",z:0,o:"199",f:"c"},{y:1,i:"Y",s:65,z:0,o:"199",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:20,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"89",q:true}]},o:"kTimelineDefaultIdentifier"},{f:"b",y:0,z:20,i:"b",e:-580,s:141,o:"196"},{y:20,i:"b",s:-580,z:0,o:"196",f:"c"}],f:30,b:[]}},bZ:180,O:["194","193","195","198","200","197","196","199"],n:"Untitled Layout","_":2,v:{"200":{aU:8,bB:0,G:"#FFFB00",c:462,aV:8,r:"inline",d:885,e:1,s:"Silkscreen",X:-6,bC:6,t:48,Y:54,Z:"break-word",i:"credits3",w:"Designed by:\n<br>\nJavascript by:\n<br>\nDeveloped at:\n<br>\nAudio Resources:\n<br>\n<br>\n<br>\nUsability Testers:\n<br>\n<br><br>\n<br>\n<br>\n\n",bF:"196",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:2,aS:8,aT:8,a:9,bA:"#FF2600",F:"left",b:-24},"193":{aU:8,bB:0,G:"#FFFB00",c:1008,aV:8,r:"inline",d:184,bC:12,s:"'Press Start 2P'",t:100,Z:"break-word",i:"credits1",w:"MINE MAZE",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:2,aS:8,E:-76,aT:8,a:0,bA:"#FF2600",F:"center",b:30},"196":{x:"visible",k:"div",c:1024,d:1200,z:1,i:"creditRoll",a:0,j:"absolute",bF:"195",b:141},"199":{J:"Solid",b:832,K:"Solid",z:4,bC:6,L:"Solid",d:62,aS:6,M:8,bD:"none",c:499,N:8,aT:6,dB:"button",O:8,g:"#000",aU:6,P:8,bF:"196",aV:6,i:"restartButton",j:"absolute",k:"div",aI:20,aJ:20,aK:20,X:0,aZ:0,aL:20,Y:62,A:"#FF0",B:"#FF0",aM:"79_hover",r:"inline",C:"#FF0",Z:"break-word",s:"'Press Start 2P'",D:"#FF0",t:48,E:-36,F:"right",aA:{a:[{d:1.1,p:1,g:1,e:"59"}]},G:"#FFFB00",aP:"pointer",w:"PLAY AGAIN?",bA:"#F00",x:"visible",I:"Solid",a:248,y:"preserve",bB:0},"195":{x:"hidden",k:"div",c:1024,d:584,z:3,i:"outerContainer",a:0,j:"absolute",b:160},"198":{J:"Solid",b:-111,K:"Solid",z:1,bC:6,L:"Solid",d:48,aS:8,M:4,e:1,c:1008,N:4,aT:8,O:4,aU:8,P:4,bF:"196",aV:8,i:"credits2",j:"absolute",k:"div",l:0,m:"#5B21AC",n:"#00F",aZ:0,A:"#00FDFF",B:"#00FDFF",Z:"break-word",r:"inline",C:"#00FDFF",s:"'Press Start 2P'",D:"#00FDFF",t:48,F:"center",G:"#FFFB00",w:"CREDITS\n",H:"none",bA:"#FF2600",x:"visible",I:"Solid",a:-4,y:"preserve",bB:0},"194":{c:1024,d:768,I:"None",J:"None",K:"None",L:"None",M:0,N:0,A:"#FF0",x:"visible",j:"absolute",B:"#FF0",O:0,P:0,C:"#FF0",z:1,l:0,D:"#FF0",m:"#6B00B4",k:"div",n:"rgba(0, 0, 255, 0.750)",a:0,b:0},"197":{aU:8,bB:0,G:"#FFFB00",c:511,aV:8,r:"inline",d:884,e:1,s:"Silkscreen",X:-6,bC:6,t:48,Y:54,Z:"break-word",i:"credits4",w:"Lila Jensen<br>\nDarren Pearson<br>\nSaint Paul College<br>\nCenturion_of_war<br>\ncynicmusic<br>\ncongusbongus<br>\nJack O\n<br>\nPixie\n<br><br>\n\n",bF:"196",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:3,aS:8,aT:8,a:487,bA:"#FF2600",F:"left",b:-23}}}],{},h,{f:{p:0,q:[[0,0,0.1971,0,0.3391,0.8944,0.3636,1],[0.3636,1,0.3636,1,0.4425,0.75,0.5455,0.75],[0.5455,0.75,0.6519,0.75,0.7273,1,0.7273,1],[0.7273,1,0.7273,1,0.7718,0.9375,0.8182,0.9375],[0.8182,0.9375,0.8646,0.9375,0.9091,1,0.9091,1],[0.9091,1,0.9091,1,0.9294,0.9844,0.9546,0.9844],[0.9546,0.9844,0.9798,0.9844,1,1,1,1]]},v:{p:0,q:[[0,0,0.455,0.03,0.515,0.955,1,1]]}},null,false,true,-1,true,true,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();
