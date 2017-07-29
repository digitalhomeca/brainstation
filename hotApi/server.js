// Steps
// Create Server and listen
// Define Routes
// Use Routes
const express = require ('express'),
    app = express(),

    coffeeRoutes = require('./routes/coffees');
    teaRoutes = require('./routes/teas');
    popRoutes = require('./routes/pops');

    app.use('/coffees', coffeeRoutes);
    app.use('/teas', teaRoutes);
    app.use('/pops', popRoutes);

    app.listen(8080, ()=> {
    console.log('Server listening on Port 8080');
});
