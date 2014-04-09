			//image last updated function
			function LastModUsingHeader(U) {
			    var X = !window.XMLHttpRequest ? new ActiveXObject('Microsoft.XMLHTTP') : new XMLHttpRequest;
			    X.open('GET', U, false);
			    try{ X.send();}catch(y){}
			    var dt=X.getResponseHeader('Last-Modified'); 
			    return (dt);
			}
			//image last updated
			dt=LastModUsingHeader('motion.jpg'); 
			console.log(dt);
			var lastUpdatedTime = Date.parse(dt);
			console.log(lastUpdatedTime, "updated time in ms");

			//current time
		    var now     = new Date(); 
		    var year    = now.getFullYear();
		    var month   = now.getMonth()+1; 
		    var day     = now.getDate();
		    var hour    = now.getHours();
		    var minute  = now.getMinutes();
		    var second  = now.getSeconds(); 
		    if(month.toString().length == 1) {
		        var month = '0'+month;
		    }
		    if(day.toString().length == 1) {
		        var day = '0'+day;
		    }   
		    if(hour.toString().length == 1) {
		        var hour = '0'+hour;
		    }
		    if(minute.toString().length == 1) {
		        var minute = '0'+minute;
		    }
		    if(second.toString().length == 1) {
		        var second = '0'+second;
		    }   
		    var dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;   
		    console.log(dateTime);
		    var currentDateTime = Date.parse(dateTime);
		    console.log(currentDateTime, "current time in ms");

		    //create div
		   	var motionDivImg = document.createElement('div');
		   	document.body.appendChild(motionDivImg);
		    var motionDiv = document.createElement('div');
		   	document.body.appendChild(motionDiv);
	    	motionDiv.style.display = "inline-block";
	    	motionDiv.style.float ="left";
	    	motionDiv.style.marginTop ="38px";
	    	motionDivImg.style.width ="144px"
	    	motionDivImg.style.display = "inline-block";
	    	motionDivImg.style.float ="left";
	    	// motionDiv.style.alignItems ="center";
	    	// console.log(motionDiv.style.alignContent());

		    //compare times
		    if (lastUpdatedTime + 5000 >= currentDateTime){
		    	motionDivImg.id = "motionImg";
		    	motionDiv.id = "motionTxt";
		    	motionDiv.innerHTML="<h5>We are here. Join us!</h5>";
		    	motionDivImg.innerHTML="<img src ='active.gif'>";
		    }
		    else if (lastUpdatedTime + 5000 < currentDateTime){
		    	motionDivImg.id = "noMotionImg";
		    	motionDiv.id = "noMotionTxt";
		    	motionDiv.innerHTML="<h5>Looks like nobody is home...</h5>";
		    	motionDivImg.innerHTML="<img src ='inactive.png'>";
		    }
		    else{
		    	motionDivImg.id = "failImg";
		    	motionDiv.id = "failTxt";
		    	motionDiv.innerHTML="<h5>We are here. Join us!</h5>";
		    	motionDivImg.innerHTML="<img src ='broken.png'>";
		    }




				
