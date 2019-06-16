$(document).ready(function()
{
	$("input").click(function()
	{
		var rnum = Math.floor(Math.random()*19);
		document.getElementById("picture").setAttribute("src",rnum+".jpg");
	});
});