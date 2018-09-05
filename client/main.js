$(document).ready(function() {
// write your code here
    $.getJSON('/data', function(results) {
        results.forEach(function(result) {
            $('#table').append("<tr><td>" + result.name + "</td><td>" + result.description + "</td><td><a href='https://www.google.com/maps?q=" + result.location[0]+ ',' + result.location[1] + "'>Click here to view location</a></td></tr>");
        })
    });

});
