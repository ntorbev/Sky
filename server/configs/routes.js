 var controllers = require('../controller');

module.exports = function(server){
	
	server.post('/userUpdate', controllers.userCntrl);

	server.get('/', function(req, res) {
	        res.render('markup');
	});
}