const Breakfast = require('./model.js')

const andrewData = new Breakfast({
  name: 'Andrew',
  drink: 'Latte',
  main: 'Pancakes',
  side1: 'Eggs',
  side2: 'Chicken sausage'
});

const christineData = new Breakfast({
  name: 'Christine',
  drink: 'Americano',
  main: 'Waffle',
  side1: 'Eggs',
  side2: 'Bacon'
});

module.exports = function(router) {

  router.get('/api/andrew', function(req, res) {
    res.json(andrewData);
  });

  router.get('/api/christine', function(req, res) {
    res.json(christineData);
  });

  router.post('/api/andrew', function(req, res) {
    andrewData.push(req.body);
    res.json(true);
  });

  router.post('/api/christine', function(req, res) {
    christineData.push(req.body);
    res.json(true);
  })

}
