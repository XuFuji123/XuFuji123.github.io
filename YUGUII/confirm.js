function MCK(){
	var deathTime=document.getElementById("Time");
	var deathLocation=document.getElementById("Location").value;
	var deathCloth=document.getElementById("Cloth").value;
	var toDo1=document.getElementById("todo1").value;
	var toDo2=document.getElementById("todo2").value;
	var toDo3=document.getElementById("todo3").value;
	var howDeal=document.getElementById("howDeal").value;
	var theHeritage=document.getElementById("Heritage").value;
	if(deathTime.value<0){
	document.getElementById("tst1").innerHTML="<h1>请输入正确的24制时间</h1>"
	return
}
	if(deathTime.value<6){
		document.getElementById("tst1").innerHTML="<h1>天将初晓</br>晨间的风不经意拂过</br>穿着"+deathCloth+"</br>所有的约束在身边弥散</br>在"+deathLocation+"</br>你被世界创造</br>又被世界召回</h1>";
    document.getElementById("tst2").innerHTML="<h1>珍惜时光，请你一定要做的事情:</br>1."+toDo1+"</br>2."+toDo2+"</br>3."+toDo3+"</br>遗体处理方式："+howDeal+"</br>遗产分配方式："+theHeritage+"</h1>";
}
  else if(deathTime.value<12){
	  document.getElementById("tst1").innerHTML="<h1>大亮的天光</br>等着阳光洒落</br>盼着雨打芭蕉，穿着"+deathCloth+"</br>所有的约束在身边弥散</br>在"+deathLocation+"你被世界创造</br>又被世界召回</h1>";
    document.getElementById("tst2").innerHTML="<h1>珍惜时光，请你一定要做的事情:</br>1."+toDo1+"</br>2."+toDo2+"</br>3."+toDo3+"</br>遗体处理方式："+howDeal+"</br>遗产分配方式："+theHeritage+"</h1>";
}
  else if(deathTime.value<14){
	  document.getElementById("tst1").innerHTML="<h1>此刻你所处的位置</br>光垂直下落</br>穿着"+deathCloth+"</br>所有的约束在身边弥散</br>在"+deathLocation+"你被世界创造</br>又被世界召回</h1>"
    document.getElementById("tst2").innerHTML="<h1>珍惜时光，请你一定要做的事情:</br>1."+toDo1+"</br>2."+toDo2+"</br>3."+toDo3+"</br>遗体处理方式："+howDeal+"</br>遗产分配方式："+theHeritage+"</h1>";
}
  else if(deathTime.value<18){
	  document.getElementById("tst1").innerHTML="<h1>地球自转</br>带着太阳从头顶移开</br>穿着"+deathCloth+"</br>所有的约束在身边弥散</br>在"+deathLocation+"你被世界创造</br>又被世界召回</h1>"
    document.getElementById("tst2").innerHTML="<h1>珍惜时光，请你一定要做的事情:</br>1."+toDo1+"</br>2."+toDo2+"</br>3."+toDo3+"</br>遗体处理方式："+howDeal+"</br>遗产分配方式："+theHeritage+"</h1>";
}
  else if(deathTime.value<20){
	  document.getElementById("tst1").innerHTML="<h1>在日夜流转的缝隙里</br>身后有光</br>眼前有梦</br>穿着"+deathCloth+"</br>所有的约束在身边弥散</br>在"+deathLocation+"你被世界创造</br>又被世界召回</h1>"
    document.getElementById("tst2").innerHTML="<h1>珍惜时光，请你一定要做的事情:</br>1."+toDo1+"</br>2."+toDo2+"</br>3."+toDo3+"</br>遗体处理方式："+howDeal+"</br>遗产分配方式："+theHeritage+"</h1>";
}
  else if(deathTime.value<=24){
	  document.getElementById("tst1").innerHTML="<h1>喧嚣归于寂静</br>夜幕低垂</br>穿着"+deathCloth+"</br>所有的约束在身边弥散</br>在"+deathLocation+"你被世界创造</br>又被世界召回</h1>"
    document.getElementById("tst2").innerHTML="<h1>珍惜时光，请你一定要做的事情:</br>1."+toDo1+"</br>2."+toDo2+"</br>3."+toDo3+"</br>遗体处理方式："+howDeal+"</br>遗产分配方式："+theHeritage+"</h1>";
}


}

function back(){
	window.location.href='index.html';
}
