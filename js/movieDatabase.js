var API_URL = "http://api.themoviedb.org/3/discover/movie?api_key=22d8568621673d1336e8d0d1fb253821";
var API_KEY = "?api_key=22d8568621673d1336e8d0d1fb253821";
var URL_MOVIE = "https://api.themoviedb.org/3/movie/";
var URL_IMAGE = "https://image.tmdb.org/t/p/w500";
// Display movie list
$(document).ready(function(){	
	$("#homeId").addClass('active');
	$("#aboutId").removeClass('active');
	$("#contactId").removeClass('active');
	$.getJSON(API_URL,function(data){
		$.each(data.results,function(key,value){
			$("#movieList").append('<li><a href="#" onClick="callMovie('+value.id+'); return false;">' + value.title + '</a></li>');			
		});
	});
});

function callMovie(movieId) {
	$("#contentLeftPart").css("width","50%");
	$("#contentRightPart").css("width","50%");
	var url = URL_MOVIE+movieId+API_KEY;
	$.getJSON(url,function(data){
		var image = URL_IMAGE+data.backdrop_path;
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

// aboutUs callback 
function callAboutUs(){
		$("#homeId").removeClass('active');
		$("#aboutId").addClass('active');
		$("#contactId").removeClass('active');
		$.getJSON("json/aboutJson.json",function(data){
		$.each(data.about,function(key,value){
			$("#homeSectionPart .row").html(aboutUsWrapper(value.title, value.content));
		});
	});	
}

function aboutUsWrapper(title, content) {
	var output = '<div class="about-us-section"> <span class="content" style="text-align: center;padding:10px;">' + content + '</span> </div>';
	return output;
}

// contactus callback
function callContactUs(){
	$("#homeId").removeClass('active');
	$("#aboutId").removeClass('active');
	$("#contactId").addClass('active');
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
}


