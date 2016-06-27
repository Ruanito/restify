exports.index = function(req, res){
  db.query("SELECT * FROM titles LIMIT 10", function(err, rows){
    if(err)
      throw err;
    res.send(rows);
  });
}

exports.show = function(req, res){
  db.query("SELECT * FROM titles WHERE emp_no = ?", [req.params.emp_no], function(err, rows){
    if(err)
      throw err;
    res.send(rows);
  });
}