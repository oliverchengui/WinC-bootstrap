// JavaScript Document
$(document).ready(function(e) {
    var orgimg = $("#orgimg");
	
	$('#orglist li').hover(function(){
		var html = $(this).html();
		if(html.indexOf("National Center")>-1)
		{
			orgimg.attr("src", "Images/logos/ncwit.png");	
		}
		else if(html.indexOf("Anita Borg")>-1)
		{
			
			orgimg.attr("src", "Images/logos/anitaborg.gif");
		}
		else if(html.indexOf("Ada")>-1)
		{
			orgimg.attr("src", "Images/logos/adainitiative.png");
		}
		else if(html.indexOf("Girl Develop It")>-1)
		{
			orgimg.attr("src", "Images/logos/gdi.png");
		}
		else if(html.indexOf("Black Girls Code")>-1)
		{
			orgimg.attr("src", "Images/logos/blackgirlscode.jpg");
		}
		else if(html.indexOf("Rails Girls")>-1)
		{
			orgimg.attr("src", "Images/logos/railsgirls.png");
		}
		
		}, function(){});
		
		
		var i = 0;
		
		$("#next").click(function(){
			
			if(i==0)
			{
				$("#famous_women").removeClass("show");
				$("#famous_women").addClass("hide");
				$("#topic").html("Organizations");
				$("#org").removeClass("hide");
				$("#org").addClass("show");
				i++;
			}
			else if(i==1)
			{
				$("#org").removeClass("show");
				$("#org").addClass("hide");	
				$("#topic").html("Fun Facts");
				$("#fun_facts").removeClass("hide");
				$("#fun_facts").addClass("show");
				i++;
			}
			else if(i==2)
			{
				$("#fun_facts").removeClass("show");
				$("#fun_facts").addClass("hide");
				$("#topic").html("Famous Women");	
				$("#famous_women").removeClass("hide");
				$("#famous_women").addClass("show");
				i=0;				
			}
			

			
			});
			
		$("#previous").click(function(){
			if(i==0)
			{
				$("#famous_women").removeClass("show");
				$("#famous_women").addClass("hide");
				$("#topic").html("Fun Facts");
				$("#fun_facts").removeClass("hide");
				$("#fun_facts").addClass("show");
				i=2;
			}
			else if(i==2)
			{
				$("#fun_facts").removeClass("show");
				$("#fun_facts").addClass("hide");	
				$("#topic").html("Organizations");
				$("#org").removeClass("hide");
				$("#org").addClass("show");
				i--;
			}
			else if(i==1)
			{
				$("#org").removeClass("show");
				$("#org").addClass("hide");
				$("#topic").html("Famous Women");	
				$("#famous_women").removeClass("hide");
				$("#famous_women").addClass("show");
				i--;				
			}

			});
		$("#navfw").click(function(){

				if(i==0)
				{
					return;
				}
				else if(i==1)
				{
					$("#org").removeClass("show");
					$("#org").addClass("hide");
					$("#topic").html("Famous Women");
					$("#famous_women").removeClass("hide");
					$("#famous_women").addClass("show");
					i=0;
						
				}
				else if(i==2)
				{
					$("#fun_facts").removeClass("show");
					$("#fun_facts").addClass("hide");
					$("#topic").html("Famous Women");
					$("#famous_women").removeClass("hide");
					$("#famous_women").addClass("show");
					i=0;

				}
			
			});
		$("#navorg").click(function(){

				if(i==0)
				{
					$("#famous_women").removeClass("show");
					$("#famous_women").addClass("hide");
					$("#topic").html("Organizations");
					$("#org").removeClass("hide");
					$("#org").addClass("show");
					i=1;
				}
				else if(i==1)
				{
					return;	
				}
				else if(i==2)
				{
					console.log("herererere");
					$("#fun_facts").removeClass("show");
					$("#fun_facts").addClass("hide");
					$("#topic").html("Organizations");
					$("#org").removeClass("hide");
					$("#org").addClass("show");
					i=1;

				}
			
			});
		$("#navff").click(function(){

				if(i==0)
				{
					$("#famous_women").removeClass("show");
					$("#famous_women").addClass("hide");
					$("#topic").html("Fun Facts");
					$("#fun_facts").removeClass("hide");
					$("#fun_facts").addClass("show");
					i=2;
				}
				else if(i==1)
				{
					$("#org").removeClass("show");
					$("#org").addClass("hide");
					$("#topic").html("Fun Facts");
					$("#fun_facts").removeClass("hide");
					$("#fun_facts").addClass("show");	
					i=2;
				}
				else if(i==2)
				{
					return;

				}
			
			});
		
		
		

	
});