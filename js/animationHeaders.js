(function() {

	var widthsceen, heightsceen, largeHeader, canvas, ctx, inx;
	 // total=0, id=[35, 50, 80, 110, 140], o=0, tojal=[], r=[], inx;
	
	var binaryitem=[];
	var route=[];
	var train=[];
	var trainlength=[0, 0, 0, 0, 0];
	var trainhead=[];
	var traintail=0;

	//set route train
	var x= Math.floor(widthsceen/15);
	var first=(Math.floor((Math.random()*x+1)))*15;
	var second=(Math.floor((Math.random()*x+1)))*15;

	first=first+5;
	route.push(first);
	
	second=second+5;
	route.push(second);

	trainhead.push(15);//15(px) is first binary item in screen
	trainhead.push(15);

	setArea();

	train.push(setInterval(function(){
		MovementTrain(0);
	},500));
	train.push(setInterval(function(){
		MovementTrain(1);
	},250));
	
	//seting area 
	function setArea(){
    	widthsceen = document.getElementById('screen').offsetWidth;
    	heightsceen = document.getElementById('screen').offsetHeight;
    	//set canvas to fit screen
      	canvas = document.getElementById('intro');
        canvas.width = widthsceen;
        canvas.height = heightsceen;
        ctx = canvas.getContext('2d');


        //var t -> gap between row
        //var l ->gap between coloum

        //draw binary item
        for (var t = 15; t < heightsceen; t+=25) {
        	binaryitem[t]=[];
        	for (var l = 5; l <widthsceen; l+=15) {
        		z=Math.floor((Math.random() * 2) + 0);
        		binaryitem[t][l]=z;
        		ctx.font = "20px"; // size of binery
        		ctx.fillStyle='rgba(0, 0, 0, 0.1)'; //colour of binery
        		ctx.fillText(z,l,t);//draw binery in canvas
        	}
        	ctx.save();
        }
	};

	function MovementTrain(inx){
		var c=trainhead[inx];
		var x=route[inx];


		if (c<(heightsceen+125)) {//when the train in screen
			//draw the train
			if(c <heightsceen){
				ctx.font ="20px";
	        	ctx.fillStyle='rgba(0, 0, 0, 1.0)';
	        	var newhead=binaryitem[c][x];
				ctx.fillText(newhead,x,c);
					}

			//remove and draw grey item
			if (trainlength[inx]==5) { //
				traintail=c-125;
				ctx.clearRect((x-3), (traintail-8), 10, 10);
				ctx.font ="20px";
	        	ctx.fillStyle='rgba(0, 0, 0, 0.1)';
	        	var oldhead=binaryitem[traintail][x];
				ctx.fillText(oldhead,x,traintail);
				// alert(o);
			}else{
				trainlength[inx]++;
			}
		}else{ //train out of screen
				//get random new coloum as route
				var totalcoloum=Math.floor(widthsceen/15);
				var newroute=(Math.floor((Math.random()*totalcoloum+1)))*15;
				newroute=newroute+5;
				route[inx]=newroute;
				trainhead[inx]=15;
				trainlength[inx]=0;
		}
		trainhead[inx]+=25;
	};
})();