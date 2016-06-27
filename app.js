var restify = require('restify');
var mysql   = require('mysql');

fs = require('fs');

var server = restify.createServer({
  name: "Ruanito"
});

var employee = require('./routes/employee');
var title = require('./routes/title');

server.listen(8080);

db = mysql.createConnection({
  host  : 'localhost',
  user  : '',
  password : '',
  database : ''
});

db.connect();


server.get('/employees', employee.index);
server.get('/employees/:emp_no', employee.show);

server.get('/titles', title.index);
server.get('/titles/:emp_no', title.show);