exports.seed = function(knex, Promise) {
  return knex('dealers').del() // delete existing entries
    .then(function () { // then seed the following
      return Promise.all([
        knex('dealers').insert({make: 'Hyundai', city: 'Toronto', province: 'ON', postal_code: 'M4M 2E4', street: '21 Broadview Ave'}),
        knex('dealers').insert({make: 'Hyundai', city: 'Thornhill', province: 'ON',  postal_code: 'L4J 1V8', street: '7200 Yonge St'}),
        knex('dealers').insert({make: 'GM', city: 'Etobicoke', province: 'ON',  postal_code: 'M9B 2T9', street: '5150 Dundas Str. W.'}),
        knex('dealers').insert({make: 'Acura', city: 'Etobicoke', province: 'ON',  postal_code: 'M8Z 4R8', street: '65 The Queensway'}),
        knex('dealers').insert({make: 'Toyota', city: 'Mississauga', province: 'ON',  postal_code: 'L6T 3R9', street: '6554 Bloor Street W.'})
      ]);
    });
};
