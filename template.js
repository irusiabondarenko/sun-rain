 $( document ).ready(function() {  

	function weather (){
	 
		function getLocation() {
		   if(navigator.geolocation){
				navigator.geolocation.getCurrentPosition(showLocation);
			}
		}
		getLocation();
		
		function showLocation(position) {
			var latitude=position.coords.latitude;
			var longitude=position.coords.longitude;
			var temperature = document.getElementById("temp");
			var city = document.getElementById("city");
			var font_icon = document.getElementById("font");
			
			$.ajax( {
				url: "http://api.wunderground.com/api/98dfafcf9efb4a27/conditions/q/"+latitude+","+longitude+".json",
				type: "get",
				success: function(response) {
				   temperature.innerHTML=Math.round(response.current_observation.temp_c)+"&deg"+"C";
				   city.innerHTML=response.current_observation.display_location.city;
				   
				   switch (response.current_observation.icon) {
					   case "cloudy":
					   font_icon.innerHTML="3";
					   break;
					   
					   case "chancerain":
					   case "rain":
					   font_icon.innerHTML="W";
					   break;
		 
					   case "chanceflurries":
					   case "flurries":
					   case "chancesnow":
					   case "snow":
					   font_icon.innerHTML="I";
					   break;
					   
					   case "chancesleet":
					   case "sleet":
					   font_icon.innerHTML="U";
					   break;
					   
					   case "chancetstorms":
					   case "tstorms":
					   case "unknown":
					   font_icon.innerHTML="S";
					   break;
					   
					   case "clear":
					   case "sunny":
					   font_icon.innerHTML="1";
					   break;
					   
					   case "fog":
					   case "hazy":
					   font_icon.innerHTML="C";
					   break;
					   
					   case "mostlycloudy":
					   case "mostlysunny":
					   case "partlycloudy":
					   case "partlysunny":
					   font_icon.innerHTML="2";
					   break;
					   
					   default:
					   font_icon.innerHTML="3";   
					};
				    $('#loading').hide();
				}
			});
		};
	}
	
	weather();   

});



	
