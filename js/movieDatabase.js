$(document).ready(function(){
	$.getJSON("http://api.themoviedb.org/3/discover/movie?api_key=22d8568621673d1336e8d0d1fb253821",function(data){
		$.each(data.results,function(key,value){
			$("#movieList").append('<li><a href="#" onClick="callMovie('+value.id+'); return false;">' + value.title + '</a></li>');
			//\'' + valuationId + '\',\'' + user + '\'
			//to display movie posterPath -> var image = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
			//$("#movieList").append('<li><a href="#" onClick="callMovie(\'' + value.id + '\',\'' + value.title +  '\',\'' + value.overview +  '\',\'' + value.poster_path +  '\',); return false;">' + value.title + '</a></li>');
		});
	});
});

function callMovie(movieId) {
	//$('#testing').animate({width: 500, marginLeft: 0}, {duration: 1000});
	//https://api.themoviedb.org/3/movie/550?api_key=22d8568621673d1336e8d0d1fb253821
	$("#contentLeftPart").css("width","50%");
	$("#contentRightPart").css("width","50%");
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

		// $.each(data.genres,function(key,value){			
		// 	console.log("Genres : "+value.name+",");
		// });

	});				
}
