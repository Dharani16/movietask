
// Display movie list
$(document).ready(function(){
	$("#homeId").css("border-bottom","3px solid #66d9ff");
	$("#aboutId").css("border-bottom","3px solid #FFFFFF");
	$("#contactId").css("border-bottom","3px solid #FFFFFF");	
	$.getJSON("http://api.themoviedb.org/3/discover/movie?api_key=22d8568621673d1336e8d0d1fb253821",function(data){
		$.each(data.results,function(key,value){
			$("#movieList").append('<li><a href="#" onClick="callMovie('+value.id+'); return false;">' + value.title + '</a></li>');			
		});
	});
});

function callMovie(movieId) {
	//https://api.themoviedb.org/3/movie/550?api_key=22d8568621673d1336e8d0d1fb253821	
	$("#contentLeftPart").addClass("col-md-6 col-xs-12");
	$("#contentRightPart").addClass("col-md-6 col-xs-12");
	var url = 'https://api.themoviedb.org/3/movie/'+movieId+'?api_key=22d8568621673d1336e8d0d1fb253821';
	//console.log("success url -> "+url);
	$.getJSON(url,function(data){
		var image = 'https://image.tmdb.org/t/p/w500'+data.backdrop_path;
		console.log("Got image url --->"+image);
		$("#moviePoster").attr("src",image).attr('width', 600).attr('height', 300);
		$("#movieNameTitle").html("Movie Name");
		$("#movieNameId").html(data.original_title);

		$("#movieBudgetTitle").html("Budget");
		$("#movieBudgetId").html(data.budget);

		$("#movieOverviewTitle").html("Description");
		$("#movieOverviewId").html(data.overview);

		$("#movieReleaseTitle").html("Released Date");
		$("#movieReleaseId").html(data.release_date);
	});				
}

// script for about us
$(document).ready(function(){
	$("#aboutId").click(function(){
		$("#homeId").css("border-bottom","3px solid #FFFFFF");
		$("#aboutId").css("border-bottom","3px solid #66d9ff");
		$("#contactId").css("border-bottom","3px solid #FFFFFF");
		$.getJSON("json/aboutJson.json",function(data){
			$.each(data.about,function(key,value){
				$("#homeSectionPart .row").html(aboutUsWrapper(value.title, value.content));
			});
		});	
	});	
});

function aboutUsWrapper(title, content) {
	var output = '<div class="about-us-section"> <span class="content" style="text-align: center;padding:10px;">' + content + '</span> </div>';
	return output;
}

// contact us page
$(document).ready(function(){
  	$("#contactId").click(function(){  		
  	  $("#homeId").css("border-bottom","3px solid #FFFFFF");
	  $("#aboutId").css("border-bottom","3px solid #FFFFFF");
      $("#contactId").css("border-bottom","3px solid #66d9ff");
	  $("div#homePartDummy").html( 
		    $("<form/>",{action:'#', method:'#'}).append(   
		    $("<input/>", {type:'text', id:'vname', name:'name', placeholder:'Your Name'}), 
		    $("<br/>"),
		    $("<br/>"),
		    $("<input/>", {type:'text', id:'vemail', name:'email', placeholder:'Your Email'}),
		    $("<br/>"),
		    $("<br/>"),
		    $("<input/>", {type:'number', id:'vname', name:'contact', placeholder:'Contact number'}), 
		    $("<br/>"),
		    $("<br/>"),
		    $("<textarea/>", {rows:'4px', cols:'63px', type:'text', id:'vmsg', name:'msg', placeholder:'Feedback'}),
		    $("<br/>"),
		    $("<br/>"),
		    $("<input/>", {type:'submit', id:'submit', value:'Submit'}))
	    )  
	}); 
});


