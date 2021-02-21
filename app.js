const express = require('express');
const bodyParser = require('body-parser');


// create a new instance of express
const app = express();
// tells express to serve up this public folder as a static resource, it can have our css, imgs, js in it
app.use(express.static('public'));

let items = ['Buy food', 'Cook Food', 'Eat Food'];
// items increases ++ by one and newitem gets pushed onto the end of the array
// this whole thing is a fundamental part of templating

// this line tells our code which is generated 
// using express to use ejs as its view engine
// the views directory is where the view engine by default will go and look for the files we are trying to render
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended: true}));

//  when we first load up our home page we go through this get route
// and we render our list.ejs passing in 2 variables kindofday and newlistitems which is set to equal the items array
app.get('/', function(req, res) {
		res.sendFile(__dirname + '/list.ejs');


let today = new Date();
let currentDay = today.getDay();

// we are using a new method: res.render and 
// this uses the view engine that we set 
//up above to render a particular page, e.g list and that is a .ejs page 
// going to use our options object to render our date

let options = {
	weekday: 'long',
	day: 'numeric',
	month: 'long'
};

// this formatted day gets passed into day in res.render below
let day = today.toLocaleDateString("en-US", options);

// which gets sent over to our list.ejs as a variable called kindOfDay
// when we pass item over to list view we pass over our entire array
	res.render('list', {kindOfDay: day, newListItems: items });
});


// handle post requests to the home / route
app.post('/', function(req, res) {
	let item = req.body.newItem;
	items.push(item);
	console.log(item);
	res.redirect('/');
	// redirect to get back into the .get homeroute code and update item because wehad scope issue with item var here

});

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


app.listen(3000, function() {
	console.log('Server started on port 3000');
});

