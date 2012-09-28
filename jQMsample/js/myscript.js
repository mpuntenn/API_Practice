function listPosts(data) {
	var output='<ul data-role="listview" data-filter="true">';
	$.each(data.posts, function(key,val){
		output+='<li><h3>'+val.title + '</h3></li>';
	});
	output+='</ul>';
	$('#postlist').html(output);
}

function listVideos(data){
	 var output='';
	for(var i=0; i<data.feed.entry.length; i++){
		var title= data.feed.entry[i].title.$t;
		var thumbnail = data.feed.entry[i].media$group.media$thumbnail[0].url;
		var blocktype= ((i%2)==1)? 'b':'a';
		var description = escape(data.feed.entry[0].media$group.media$description.$t);
		var id = data.feed.entry[0].id.$t.substring(38);
		
		output += '<div class="ui-block-' + blocktype + '">';
		output +='<a href="#videoplayer" data-transition="fade" onclick="playVideo(\''+
		id +'\,\'' + title + '\',\''+unescape(description) + '\')">';
		output+= '<h3 class="movietitle">'+ title +'</h3>';
		output += '<img src="'+ thumbnail +'" alt="' + title + '" />';
		output += '</a>';
		output += '</div>';
	 }
	$('#videolist').html(output);
}

//function playVideo(id, title, description){
//	var output ='<iframe src="http://www.youtube.com/embed/'+id'"'
//}

function listTweets(data){
	var output='<ul data-role="listview" data-theme="a">';
	$.each(data, function(key, val){
		var text=data[key].text;
		var thumbnail= data[key].user.profile_image_url;
		var name=data[key].user.name;
	    output+= '<li>'
		output += '<img src="'+thumbnail +'" alt = "Photo of "'+name +'">';
		output += '<div>'+text+'</div>';
		output +='</li>';
	});
	output += '</ul>';
	$('#tweetlist').html(output);
}

    console.log("Map is:",map);
function initialize() 
{
	var mapOptions = 
	{
    	zoom: 15,
    	center: new google.maps.LatLng(39.079591, -108.554172),
   		mapTypeId: google.maps.MapTypeId.SATELLITE
	};
        
	map = new google.maps.Map(document.getElementById('map_canvas'),mapOptions);
	console.log("Map is:",map);
	google.maps.event.addListener(map, 'click', function(e)
	{
    	placeMarker(e.latLng, map);
    });	  
}
function placeMarker(position, map) 
{
	var marker = new google.maps.Marker(
	{
    	position: position,
    	map: map
	});
    map.panTo(position);
}
var lat_long = function getlat_long()
{
	return map;	
}

console.log(lat_long());
