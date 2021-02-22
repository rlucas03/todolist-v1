// This is how we can  create our own modules and require them
module.exports.getDate = getDate;
// binding this module to getDate function
// wont run function and give return statement without parenthesis ()

// this code in date.js is completely re-useable, we can require it and use it anywhere we like
function getDate() {
	let today = new Date();

	let options = {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
	};

	let day = today.toLocaleDateString('en-US', options);
	return day; 
}
module.exports.getDay = getDay;

function getDay() {
	let today = new Date();

	let options = {
		weekday: 'long'
	};

	let day = today.toLocaleDateString('en-US', options);
	return day; 
}
console.log(module.exports);