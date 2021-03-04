// This is how we can  create our own modules and require them
// binding this module to getDate function
// wont run function and give return statement without parenthesis ()

// this code in date.js is completely re-useable, we can require it and use it anywhere we like
// anonymous function
// shortened module.exports to just exports.
exports.getDate = function() {
	const today = new Date();

	const options = {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
	};

	return today.toLocaleDateString('en-US', options);
	  
}
exports.getDay = function () {
	const today = new Date();

	const options = {
		weekday: 'long'
	};

	return today.toLocaleDateString('en-US', options);

}
