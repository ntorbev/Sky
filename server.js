var server = require('express')();

require('./server/configs/express')(server);
require('./server/configs/routes')(server);
server.listen(8080, function(){
    console.log('Express server listening on port 8080');
});