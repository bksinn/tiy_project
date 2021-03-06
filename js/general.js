$(document).ready(function() {

$('#search-button').click(function() {

var api_key = "789b28d7d74840d2eb449527c4d61127";
var columbia_coord = "34.000,-81.035"; //Lat and Long values of Columbia, SC
var doctors = "doctors?";
var distance = 1; //Want to toggle this, distance is in miles

console.log(api_key);

//Columbia doctors within a 1 mile radius of columbia_coord
var resource_url = 'https://api.betterdoctor.com/2016-03-01/doctors?location='+columbia_coord + ',' +distance+ '&skip=0&limit=30&user_key=789b28d7d74840d2eb449527c4d61127';


// Testing Ajax call here

function displayDoctors (obj) {
	return( "<h3>" + obj.profile.first_name + " " + obj.profile.last_name + "</h3>" +
		"<br/>" + "<img class=docimg src= " + obj.profile.image_url + ">"
		 + "<br/>" + "<p>" + obj.profile.bio + "</p>" + "<br/>" + 
		 "<p> Takes the following insurance: </p>" + "<ul>" + obj.insurances.map(getInsurance).join(" ") + "</ul>"  + "<br/>"
	);
}

//Insurance button, may reuse
// + "<a href=\'htmlPages/doctorinsurance.html\' target=\'blank\'> <button>View Insurances</button> </a>" +

//Move the insurance stuff to a new js file. Idea is to separate like you would components in React
function getInsurance (obj) {
	return "<li>" + obj.insurance_plan.name + "</li>";
}

function displayInsurance (obj) {
	return obj.insurances.map(getInsurance) //this is an array of insurances the doctors accept
}


function testInject (data) {
	document.getElementById('app').innerHTML += "<div class=\'info\''>" + data.data.map(displayDoctors).join(" ") + "</div>";


	// document.getElementById('app').innerHTML += "<p>" + data.data[0].profile.first_name + " " + data.data[0].profile.last_name + "</p>";
	// document.getElementById('app').innerHTML += "<img src= " + data.data[0].profile.image_url + ">";
	// document.getElementById('app').innerHTML += "<p>" + data.data[0].profile.bio + "</p>";

	console.log(data.data);
	//console.log(data.data.map(displayInsurance));

	// data.data.profile.first_name =>first name of doctor
	// data.data.profile.last_name => last name of doctor
	// data.data.profile.bio => Brief description of doctor
	// data.data[i].insurances => returns an array of insurances a doctor takes
	// data.data[i].claims => returns an array of prices for doctor and what procedure

}

		$.ajax({
			url: resource_url,
			success: function successHandler(data) {
				testInject(data);
			}
		});
		
		$(".xbutton").toggleClass("xbuttonanimation")

  });

  $(".search-box").keypress(function(e) {

    if (e.which == 13) {
      $("#search-button").click();
    }
  });

});
