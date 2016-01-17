var usersController = function(req, res) {
	var fs = require("fs"),		
		users;

	if (fs.statSync("server/controller/users.json").size == 0) {
		users = {
			firstName:req.body.people[0].firstname,
			sureName:req.body.people[0].surname
		}	
		fs.writeFile('server/controller/users.json', JSON.stringify( users ), "utf8");		
	}

	users = require("./users.json");
	if (req.body.people[0].firstname !== users.firstName) {
		users.firstName.forEach(function(element, index, array){
			if (array[index] !== this[index]) {
				array[index] = this[index]
			};
		},req.body.people[0].firstname)
	};
	if(req.body.people[0].surname !== users.sureName){

	}
	
	fs.writeFile('server/controller/users.json', JSON.stringify( users ), "utf8");
	
	res.render('markup', {people: req.body.people}); //comment if you wish jquery ajax
    // res.json({people: req.body.people}) //uncomment if you wish to use jquery ajax request 
	 
}


module.exports = {
    userCntrl: usersController
}