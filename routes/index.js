
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};


exports.test = function(req, res){
  res.render('test', { title: 'Test page' });
};
