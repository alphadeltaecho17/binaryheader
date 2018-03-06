(function() {

	var lebar, tinggi, largeHeader, canvas, ctx, points, target, animateHeader = true, baris=[], baris=[], total=0, batas=[], tes=[], id=[35, 50, 80, 110, 140], o=0, jum=[0, 0, 0, 0, 0], tojal=[], r=[], inx;
	var x= Math.floor(lebar/15);
	var m=(Math.floor((Math.random()*x+1)))*15;
	m=m+5;
	var a= Math.floor(lebar/15);
	var s=(Math.floor((Math.random()*a+1)))*15;
	s=s+5;
	r.push(m);
	r.push(s);
	batas.push(15);
	batas.push(15);
	batas.push(15);
	batas.push(15);
	area();
	tojal.push(setInterval(function(){
		jalan(0);
	},500));
	tojal.push(setInterval(function(){
		jalan(1);
	},250));
	
	function area(){
    	lebar = document.getElementById('int').offsetWidth;
    	tinggi = document.getElementById('int').offsetHeight;
      	canvas = document.getElementById('intro');
        canvas.width = lebar;
        canvas.height = tinggi;
        ctx = canvas.getContext('2d');

        for (var t = 15; t < tinggi; t+=25) {
        	baris[t]=[];
        	for (var l = 5; l <lebar; l+=15) {
        		z=Math.floor((Math.random() * 2) + 0);
        		baris[t][l]=z;
        		ctx.font = "20px";
        		ctx.fillStyle='rgba(0, 0, 0, 0.1)';
        		ctx.fillText(z,l,t);
        	}
        	ctx.save();
        }
	};
	function anime(){
			batas[total]=15;
			var x= Math.floor(lebar/15);
			var m=(Math.floor((Math.random()*x+1)))*15;
			m=m+5;
			var t=m;
			var g=id[total];
			tojal[total]=setInterval(function(){
				jalan(t,total);
			},500);
			if(total<5){
				total++;
			}else{
				total=0;
			}
	};
	function animasi(){
		var x= Math.floor(lebar/15);
	var m=(Math.floor((Math.random()*x+1)))*15;
	m=m+5;
	var r=m;
	tojal.push(setInterval(function(){
		jalan(r,0);
	},500));
	}
	function draw(){
		var y= Math.floor(tinggi/25);
		var x= Math.floor(lebar/15);
		var m=(Math.floor((Math.random()*x+1)))*15;
		m=m+5;
		var n=(Math.floor((Math.random()*y+1)))*25;
		n=n+15;
		ctx.font ="20px";
        ctx.fillStyle='rgba(0, 0, 0, 1.0)';
		ctx.fillText(baris[n][m],m,n);
		var o=7*15;

	};
	function jalan(inx){
		var c=batas[inx];
		var x=r[inx];
		if (c<(tinggi+125)) {
			if(c <tinggi){
				ctx.font ="20px";
	        	ctx.fillStyle='rgba(0, 0, 0, 1.0)';
	        	m=baris[c][x];
				ctx.fillText(m,x,c);
					}
			if (jum[inx]==5) {
				o=c-125;
				ctx.clearRect((x-3), (o-8), 10, 10);
				ctx.font ="20px";
	        	ctx.fillStyle='rgba(0, 0, 0, 0.1)';
	        	n=baris[o][x];
				ctx.fillText(n,x,o);
				// alert(o);
			}else{
				jum[inx]++;
			}
		}else{
				var q=Math.floor(lebar/15);
				var w=(Math.floor((Math.random()*q+1)))*15;
				w=w+5;
				r[inx]=w;
				batas[inx]=15;
				jum[inx]=0;
		}
		batas[inx]+=25;
	};
	function tema(){
		 x=tinggi/5;
		 y=x/2;
		ctema = document.getElementById('tema');
        ctema.width = lebar;
        ctema.height = x;
        ctm= ctema.getContext('2d');
        ctm.fillStyle='cyan';
        ctm.fillRect(0,0,lebar,y);
        ctm.fillStyle='black';
        ctm.fillRect(0,y,lebar,y);
        var gradient = ctm.createLinearGradient(0, 0, 0, x);
		gradient.addColorStop("0", "black");
		gradient.addColorStop("0.5", "black");
		gradient.addColorStop("0.51", "cyan");
		gradient.addColorStop("1.0", "cyan");
		ctm.fillStyle = gradient;
		ctm.font='50px Montserrat';
		var txt="STRIDE WITH EASE AT TECHNOLOGY";
		var tl=ctm.measureText(txt).width;
		var pas=(ctema.width-tl)/2;		
		ctm.fillText(txt,pas,y+18);
	}
})();