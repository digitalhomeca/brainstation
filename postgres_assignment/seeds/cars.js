exports.seed = function(knex, Promise) {
  return knex('cars').del() // delete existing entries
    .then(function () { // then seed the following
      return Promise.all([
        knex('cars').insert({make: 'Hyundai', model: 'Genesis', year: '2016', dealership_id: 1}),
        knex('cars').insert({make: 'Hyundai', model: 'Elantra', year: '2017', dealership_id: 2}),
        knex('cars').insert({make: 'GM', model: 'Volt', year: '2017', dealership_id: 3}),
        knex('cars').insert({make: 'GM', model: 'Crapbucket', year: '2015', dealership_id: 3}),
        knex('cars').insert({make: 'Acura', model: 'TLX', year: '2015', dealership_id: 4}),
        knex('cars').insert({make: 'Acura', model: 'MDX', year: '2017', dealership_id: 4}),
        knex('cars').insert({make: 'Toyota', model: 'Highlander', year: '2016', dealership_id: 1}),
        knex('cars').insert({make: 'Toyota', model: 'Camry', year: '2017', dealership_id: 1}),
        knex('cars').insert({make: 'Toyota', model: 'Corolla', year: '2015', dealership_id: 1}),
        knex('cars').insert({make: 'Toyota', model: 'Sienna', year: '2014', dealership_id: 1})
      ]);
    });
};

