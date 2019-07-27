module.exports = {
  getHomePage: (req, res) => {
    res.status(200).render('index.pug');
  },
  postMessage: (req, res) => {
    var name = req.body.name;
    var content = req.body.content;
    
    if (req.body.name != '' && req.body.content != '' && req.body.name != undefined && req.body.content != undefined)
      res.render('showMessage.pug', {name: name, content: content});
    else
      res.sendStatus(400);
  }
};