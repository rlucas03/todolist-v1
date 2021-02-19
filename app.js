const express = require('express');
const bodyParser = require('body-parser');


// create a new instance of express
const app = express();

// this line tells our code which is generated 
// using express to use ejs as its view engine
// the views directory is where the view engine by default will go and look for the files we are trying to render
app.set('view engine', 'ejs');

// when user tries to access home route we just send hello atm
app.get('/', function(req, res) {

let today = new Date();
let currentDay = today.getDay();
let day = '';

// we are using a new method: res.render and 
// this uses the view engine that we set 
//up above to render a particular page, e.g list and that is a .ejs page 

switch(currentDay) {
	case 0:
		day = 'Sunday';
		break;
		case 1:
		day = 'Monday';
		break;
	case 2:
		day = 'Tuesday';
		break;
	case 3:
		day = 'Wednesday';
		break;
	case 4:
		day = 'Thursday';
		break;
	case 5:
		day = 'Friday';
		break;
	case 6:
		day = 'Saturday';
		break;
	default:
	console.log(`Error: current day is equal to ${currentDay}`);
}


	// key value pair in obj
	// this basically says render a file called list
	// and we are going to pass that file a variable called kindOfDay and the value is going to equal whatever the value of our current variable day
/* 
so to re-iterate the process: we are creating our response by rendering a file
called list which has to exist inside a views folder and it has to have the 
extension .ejs and then into that list file we are passing in a single variable 
that has the name of kindOfDay and the valiue we are giving it is the value of
our variable day. 
 */
	res.render('list', {kindOfDay: day});


});

app.listen(3000, function() {
	console.log('Server started on port 3000');
});

