$(document).ready(function(){
    $("#courseTable").append("<tr><th>選項</th><th>時間</th><th>品項</th><th></th><th>價格</th></tr>");
    
    var topicCount = topic.length;
    
    var secondUnit=1000;
    var minuteUnit = secondUnit*60;
    var hourUnit = minuteUnit*60;
    var dayUnit = hourUnit*24;
    
    element=document.getElementById("courseTable")　;
    for(var x= 0;x<topicCount;x++)
    {
        if(topic[x] == "自製葡萄乾一粒" || topic[x] == "有機高麗菜心一顆"){
            $("#courseTable").append("<tr>");
            $("#courseTable").append("<td id='td1'>" + (x+1) + "</td>");
            $("#courseTable").append("<td id='td1'>" + 
				(new Date(startDate.getTime()+x*7*dayUnit)).toLocaleDateString().slice(5)+"</td>");
            $("#courseTable").append("<td id='td1'>" + topic[x] + "</td>");
			$("#courseTable").append("<td><img src ='ert"+x+".jpg'></td>");
			$("#courseTable").append("<td id='td1'>" + price[x] + "</td>");
			
            $("#courseTable").append("</tr>");
        }
        else{
            $("#courseTable").append("<tr>");
            $("#courseTable").append("<td>" + (x+1) + "</td>");
            $("#courseTable").append("<td>" + 
                (new Date(startDate.getTime()+x*7*dayUnit)).toLocaleDateString().slice(5)+"</td>");
            $("#courseTable").append("<td>" + topic[x] + "</td>");
			$("#courseTable").append("<td><img src ='ert"+x+".jpg'></td>");
			$("#courseTable").append("<td>" + price[x] + "</td>");
            $("#courseTable").append("</tr>");
        }

    }
});