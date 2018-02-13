const Order = require('./model.js')

module.exports = function(router) {

  router.get('/api/orders', function(req, res) {

    Order.find({}, function(error, doc) {
      // Send any errors to the browser
      if (error) {
        res.send(error);
      }
      // Or send the doc to the browser
      else {
        res.send(doc);
      }
    })
  });

  router.post('/api/orders', function(req, res) {
    //use Order model to make a new order from req.body
    var newOrder = new Order(req.body);

    newOrder.save(function(error, doc) {

      //code here to add new order to DB
      
    })
  });

}
