const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test',{useMongoClient:true});

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));


var schema = new mongoose.Schema({ name: 'string', size: 'string' });
var Tank = mongoose.model('Tank', schema);

// Tank.create({ size: 'small' }, function (err, small) {
  // if (err) return handleError(err);
  //saved!
// })

Tank.findById("5dc40787ac7e0954d064e7ca", function (err, tank) {
  if (err) return handleError(err);

  tank.size = 'large';
  tank.save(function (err, updatedTank) {
    if (err) return handleError(err);
  });
});


