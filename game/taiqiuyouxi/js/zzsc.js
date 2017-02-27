// common 
function $(str) {
	return document.getElementById(str);
}

function $tag(str,target) {
	target = target || document;
	return target.getElementsByTagName(str);
}

function addEventHandler(obj,eType,fuc){
	if(obj.addEventListener){ 
		obj.addEventListener(eType,fuc,false); 
	}else if(obj.attachEvent){ 
		obj.attachEvent("on" + eType,fuc); 
	}else{ 
		obj["on" + eType] = fuc; 
	} 
} 

function removeEventHandler(obj,eType,fuc){
	if(obj.removeEventListener){ 
		obj.removeEventListener(eType,fuc,false); 
	}else if(obj.attachEvent){ 
		obj.detachEvent("on" + eType,fuc); 
	} 
}

function randowNum(start,end) {
	return Math.floor(Math.random()*(end - start)) + start;
}

Array.prototype.remove=function(dx) {
	if(isNaN(dx)||dx>this.length){return false;}
	for(var i=0,n=0;i<this.length;i++) 2="" {="" if(this[i]!="this[dx])" this[n++]="this[i]" }="" this.length-="1" const="" var="" totalr="15," ���i̇뾶(������ӱ)="" r="12," ����ʵ�뾶="" poker="20," w="736," ����="" h="480," thickness="32," ��ե����="" rate="100," ˢ��ƶ��="" f="0.01," ħ����="" loss="0.2," ��ײ�ٶ���ʧ="" tips="["Tip1:" �ο�����ŀ������ŀ����������һ�ߣ������������ľ��򷽷�","tip2:="" ���½����������������ȣ�с�����ȸ����ڿ���ĸ��λ��","tip3:="" ���½ǰ����ϵ��������ƻ����㣬�߸ˣ��͸ˣ��������������ƣ����������������������ڴ�","tip4:="" ��������ʵ���ĳ���ŀ��������ĸ��"];="" table,="" cueball,="" ĸ��="" guideball,="" �ο���="" dotwrap,="" speed="12," rollup="0," rollright="0," timer,="" forcetimer,="" balls="[]," movingballs="[]," pokes="[[0,0],[W/2,-5],[W,0],[0,H],[W/2,H+5],[W,H]]," hasshot="false;" shots="0;" ��������="" window.onload="function()" inittable();="" initshootpos();="" showtips();="" startgame();="" function="" startgame()="" initball();="" addeventhandler(table,"mousemove",dragcueball);="" addeventhandler(table,"mouseup",setcueball);="" inittable()="" table="$("table");" dotwrapdiv="document.createElement("div")," guideballdiv="document.createElement("div");" dotwrapdiv.id="dotWrap" ;="" guideballdiv.classname="guide ball" setstyle(guideballdiv,"display","none");="" dotwrap="table.appendChild(dotWrapDiv);" guideball="table.appendChild(guideBallDiv);" initball()="" ����ĸ��="" cueball="new" ball("cue",170,h="" 2);="" balls.push(cueball);="" ����ŀ����="" for(var="" i="0;" <="" 5;="" i++)="" j="0;" j++)="" ball="new" ball("target",520="" +="" i*2*r,="" -="" r*i="" j*2*r);="" balls.push(ball);="" initshootpos()="" wrap="$("shootPos")," handler="$("dot")," arrowr="18;" addeventhandler(wrap,"mousedown",selectdot);="" selectdot(e)="" e="e" ||="" event;="" pos="getElemPos(wrap)," x="e.clientX" pos[0]="" handler.offsetwidth="" 2,="" y="e.clientY" pos[1]="" handler.offsetheight="" 2;="" if(math.sqrt((x-22)*(x-22)="" (y-22)*(y-22))=""> arrowR) {
			var angle = Math.atan2(x-22,y-22);
			x = arrowR*Math.sin(angle) + 22;
			y = arrowR*Math.cos(angle) + 22;
		}
		setPos(handler,x,y);		
	}
}

function getElemPos(target,reference) {
	reference = reference || document;
	var left = 0,top = 0;
	return getPos(target);
	function getPos(target) {
		if(target != reference) {
			left += target.offsetLeft;
			top += target.offsetTop;
			return getPos(target.parentNode);
		} else {
			return [left,top];
		}
	}
}

// ball class
function Ball(type,x,y) {
	var div = document.createElement("div");
	div.className = type + " ball";
	this.elem = table.appendChild(div);
	this.type = type;
	this.x = x; //λ��
	this.y = y;
	this.angle = 0; //�Ƕ�
	this.v = 0; //�ٶ�(����������)
	setBallPos(this.elem,x,y);
	return this;
}

function setCueBall() {
	removeEventHandler(table,"mousemove",dragCueBall);
	removeEventHandler(table,"mouseup",setCueBall);
	startShot();
}

function startShot() {
	show(cueBall.elem);
	addEventHandler(table,"mousemove",showGuide);
	addEventHandler(table,"mousedown",updateForce);
	addEventHandler(table,"mouseup",shotCueBall);
	
}

function dragCueBall(e) {
	var toX,toY;
	e = e || event;
	toX = e.clientX - table.offsetLeft - THICKNESS,
	toY = e.clientY - table.offsetTop - THICKNESS;
	
	toX = toX >= R ? toX : R;
	toX = toX <= 170="" ?="" tox="" :="" 170;="" toy="toY">= R ? toY : R;
	toY = toY <= h="" -="" r="" ?="" toy="" :="" r;="" setballpos(cueball,tox,toy);="" }="" function="" shotcueball()="" {="" removeeventhandler(table,"mousemove",showguide);="" removeeventhandler(table,"mousedown",updateforce);="" removeeventhandler(table,"mouseup",shotcueball);="" window.clearinterval(forcetimer);="" speed="$("force").offsetWidth" *="" 0.15;="" var="" dotdisx="$("dot").offsetLeft-22," dotdisy="$("dot").offsetTop-22," dotdis="Math.sqrt(dotDisX*dotDisX" +="" dotdisy*dotdisy),="" dotangle="Math.atan2(dotDisX,dotDisY);" rollright="Math.round(dotDis*Math.sin(dotAngle))/5;" rollup="-Math.round(dotDis*Math.cos(dotAngle))/5;" formpos="getBallPos(cueBall.elem)," topos="getBallPos(guideBall)," angle="Math.atan2(toPos[0]" formpos[0],topos[1]="" formpos[1]);="" hide(dotwrap);="" hide(guideball);="" cueball.v="speed;" cueball.angle="angle;" movingballs.push(cueball);="" timer="window.setInterval(roll,1000" rate);="" showguide(e)="" fromx,fromy,tox,toy;="" e="e" ||="" event;="" tox="e.clientX" table.offsetleft="" thickness,="" table.offsettop="" thickness;="" setballpos(guideball,tox,toy);="" show(dotwrap);="" show(guideball);="" drawline();="" �ο���="" drawline()="" dotnum="16," pos="getBallPos(cueBall.elem);" dotwrap.innerhtml="" ;="" fromx="pos[0];" fromy="pos[1];" partx="(toX" fromx)="" dotnum,="" party="(toY" fromy)="" dotnum;="" for(var="" i="1;" <="" i++)="" x="fromX" i,="" y="fromY" i;="" drawdot(dotwrap,="" x,="" y);="" roll()="" if(movingballs.length="" if(!hasshot)="" shots="0;" else="" ++;="" �ۼ�����="" hasshot="false;" setstyle($("force"),"width",80+"px");="" setpos($("dot"),22,22);="" window.clearinterval(timer);="" if(shots=""> 1) showScore(shots); //��ʾ������
		startShot();
	}
	for(var i = 0; i < movingBalls.length; i++) {
		var ball = movingBalls[i],
			sin = Math.sin(ball.angle),
			cos = Math.cos(ball.angle);
		ball.v -= F;
		//�Ƴ���ֹ��С��
		if(Math.round(ball.v) == 0) {
			ball.v = 0;
			movingBalls.remove(i);
			continue;	
		}
		var vx = ball.v * sin,
			vy = ball.v * cos;
		ball.x += vx;
		ball.y += vy;
				
		//����
		if(isPocket(ball.x,ball.y)) {
			hide(ball.elem);
			
			if(ball.type == "cue") {
					if(!hasShot) shots = 0;
					hasShot = false;

				window.setTimeout(function(){
				
					ball.v = 0;	
					setBallPos(ball,170,250);
					
				},500);

			}else {
				//�Ƴ�����С��
				hasShot = true;
				ball.v = 0;	
				for(var k = 0, l =0; k < balls.length; k++) {
					if(balls[k] != ball) {
						balls[l++] = balls[k];
					}
				}
				balls.length -= 1;
			}
			return;
		}
		
		//��Ե��ײ
		if(ball.x < R || ball.x > W - R) {
			ball.angle *= -1;
			ball.angle %= Math.PI;
			ball.v = ball.v * (1 - LOSS);
			vx = ball.v*Math.sin(ball.angle);
			vy = ball.v*Math.cos(ball.angle);
			if(ball.x < R) ball.x = R;
			if(ball.x > W - R) ball.x = W - R;
			//ĸ������
			if(ball.type == "cue")	{
				if(ball.angle > 0) vy -= rollRight;
				else vy += rollRight;
				vx += rollUp;
				rollUp *= 0.2;
				rollRight *= 0.2;
				ball.v = Math.sqrt(vx*vx + vy*vy);
				ball.angle = Math.atan2(vx,vy);
			}				
		}
		if(ball.y < R || ball.y > H - R) {
			ball.angle = ball.angle > 0 ? Math.PI - ball.angle : - Math.PI - ball.angle ;
			ball.angle %= Math.PI;
			ball.v = ball.v * (1 - LOSS);
			vx = ball.v*Math.sin(ball.angle);
			vy = ball.v*Math.cos(ball.angle);
			if(ball.y < R) ball.y = R;
			if(ball.y > H - R) ball.y = H - R;	
			//ĸ������
			if(ball.type == "cue")	{
				if(Math.abs(ball.angle) < Math.PI/2) vx += rollRight;
				else vx -= rollRight;
				vy += rollUp;
				rollUp *= 0.2;
				rollRight *= 0.2;
				ball.v = Math.sqrt(vx*vx + vy*vy);
				ball.angle = Math.atan2(vx,vy);
			}					
		}
		
		//С����ײ
		for(var j = 0; j < balls.length; j++) {
			var obj = balls[j];
			if(obj == ball) continue;
			var disX = obj.x - ball.x,
				disY = obj.y - ball.y,
				gap = 2 * R;
			if(disX <= gap="" &&="" disy="" <="gap)" {="" var="" dis="Math.sqrt(Math.pow(disX,2)+Math.pow(disY,2));" if(dis="" �����ǿ�ֹ�ģ������ӵ�����movingballs="" if(math.round(obj.v)="=" 0)="" movingballs.push(obj);="" ��������ת��x��������ײ����="" �����ƕⱥ�������ֵ="" -="" ��ȷֵ="" c="(obj.x*ball.y" obj.y*ball.x)="" (2*r),="" d="Math.sqrt(ball.x*ball.x" +="" ball.y*ball.y),="" angle="Math.asin(ball.y/d)" math.asin(c="" d)="" ball.angle%(math.pi="" 2),="" (2="" *="" r)),="" ��ԭ��������״̬="" ����ֵ="" ball.x="" dis)*sin;="" ball.y="" dis)*cos;="" disx="obj.x" ball.x;="" ball.y;="" disx),="" hitsin="Math.sin(angle)," hitcos="Math.cos(angle)," objvx="obj.v" math.sin(obj.angle),="" objvy="obj.v" math.cos(obj.angle);="" trace(angle*180="" math.pi);="" ��ת����="" x1="0," y1="0," x2="disX" hitsin,="" y2="disY" vx1="vx" vy="" vy1="vy" vx="" vx2="objVx" vy2="objVy" hitsin;="" ��ײ�����ٶⱥ�λ��="" plusvx="vx1" vx2;="" vx1;="" ĸ������="" if(ball.type="=" "cue")="" rollup="" }="" ��λ����ת����="" x1final="x1" y1final="y1" x2final="x2" y2final="y2" obj.x="ball.x" x2final;="" obj.y="ball.y" y2final;="" x1final;="" y1final;="" ���ٶ���ת����="" �����ٶ�="" ball.v="Math.sqrt(vx*vx" vy*vy)="" (1="" 0);="" obj.v="Math.sqrt(objVx*objVx" objvy*objvy)="" �����ƕ�="" ball.angle="Math.atan2(vx" ,="" vy);="" obj.angle="Math.atan2(objVx" objvy);="" break;="" setballpos(ball,ball.x,ball.y);="" function="" ispocket(x,y)="" if(y="" poker)="" return="" check(0,2);="" else="" if="" (y=""> H - POKER) return check(3,5);
	else return false;
	
	function check(m,n) {
		for(var i=m; i<=n; i++)="" {="" if(x="">= pokes[i][0] - POKER && x <= pokes[i][0]="" +="" poker)="" {="" var="" dis="Math.sqrt(Math.pow(x" -="" pokes[i][0],2)="" math.pow(y="" pokes[i][1],2));="" if(dis="" <="POKER)" return="" true;="" else="" false;="" }="" function="" getballpos(obj)="" pos="[];" pos.push(obj.offsetleft="" thickness="" totalr);="" pos.push(obj.offsettop="" pos;="" setpos(obj,x,y)="" obj.style.left="x" "px";="" obj.style.top="y" setballpos(ball,x,y)="" if(ball.constructor="=" ball)="" ball.x="x;" ball.y="y;" ball="ball.elem;" setpos(ball,x="" totalr,y="" drawdot(wrap,x,y)="" elem="document.createElement("div");" setstyle(elem,{="" position:="" "absolute",="" width:="" "1px",="" height:="" fontsize:="" background:="" "white"="" });="" setpos(elem,x,y);="" wrap.appendchild(elem);="" updateforce()="" obj="$("force")," len="80," up="true;" forcetimer="window.setInterval(update,10);" update()="" if(up)="" setstyle(obj,"width",len+++"px");="" setstyle(obj,"width",len--+"px");="" if(len=""> 136) up = false;
		 if(len <= 2="" 0)="" up="true;" }="" function="" setstyle()="" {="" if(arguments.length="=" &&="" typeof="" arguments[1]="=" "object")="" for(var="" key="" in="" arguments[1])="" arguments[0].style[key]="arguments[1][key];" else="" if="" (arguments.length=""> 2) {
		arguments[0].style[arguments[1]] = arguments[2];
	}
}

function hide(obj) {
	setStyle(obj,"display","none");
}

function show(obj) {
	setStyle(obj,"display","block");
}

//������Ϣ
function trace(sth,who) {
	who = who || $("tips");
	if(document.all) who.innerText = sth;
	else who.textContent = sth;
	return who;
}

function showScore(n) {
	var wrap = $("scoreBoard");
	trace(n+"����",wrap);
	fadeIn(wrap);
}

function fadeIn(obj){
	var fromY = 230,
		posStep = [8,14,19,23,26,28,29,29,30,30,30],
		opaStep = [0,0.05,0.1,0.15,0.2,0.25,0.3,0.4,0.5,0.6,0.8],
		fromOpa = 0,
		t = 0,
		step = posStep.length,
		inTimer = window.setInterval(showIn,20),
		outTimer;
	
	function showIn() {
		setOpacity(obj,opaStep[t]);
		obj.style.top = fromY + posStep[t] + "px";
		t++;
		if(t>=step) {
			window.clearInterval(inTimer);
			outTimer = window.setInterval(fadeOut,50);
		}	
	}
	
	function fadeOut() {
		t--;
		setOpacity(obj,opaStep[t]);
		obj.style.top = fromY + posStep[t] + "px";
		if(t <= 0)="" {="" window.clearinterval(outtimer);="" hide(obj);="" }="" function="" setopacity(obj,n)="" obj.style.csstext="filter:alpha(opacity=" +="" n*100="" +");="" -moz-opacity:"+="" n="" +";="" opacity:"+="" n;="" showtips()="" var="" i="0;" tip();="" window.setinterval(tip,3000);="" tip()="" trace(tips[i++]);="" if(i="">= TIPS.length) i = 0;
	}
}</=></=></=></=n;></=></=></=></this.length;i++)>