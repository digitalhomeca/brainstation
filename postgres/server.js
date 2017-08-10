// const express

// app .listen

app.get('/songs/songID', (req,res) => {
    const songID = Number(req.params.songId);
    Song.where({id: SongId})
    .fetch({withRelated: 'artist'})
    .then(results => {
        res.json(results);
    });
})

const knex = require('knex')({
    client: 'postgres',
    connection: {
        host : '127.0.0.1',
        user: 'postgres',
        password: 'bs4536',
        database: 'songdb',
        charset : 'utf-8'
    }
})

const bookshelf = require('bookshelf')(knex);

// Song has foreign key of Artist ID
const Song = bookshelf.Model.extend ({
    tableName: 'songs',
    artist: function(){
        return this.belongsTo(Artist)
    }
})

// one to many relationship. One artist, many songs
const Artist = bookshelf.Model.extend ({
    tableName: 'artists',
    songs: function (){
        return this.hasMany(Song)
    }
})


console.log('song model created');

// Creating Song in songs table

// const newSong = new Song({
//     title: 'Born to Run'
// })

// newSong.save()
//     .then(saved => {
//         console.log(saved.attributes)
//     });

// Select all songs i.e. Read

Song.fetchAll()
    .then(songs => {
        console.log(songs.models);
    })

// Select a single song with id of 1
// Song.where({id: 1}) 
//     .fetch ()
//     .then(song=> {
//         console.log(song.attributes);
//     });

// Update Song

// const updateData= {
//     title: 'Rappers Delight'
// };

// new Song ({id:1})
//     .save(updateData,{patch: true})
//     .then(updated => {
//         console.log(updated.attributes);
//     });


// Delete

// new Song ({id:2})
//     .destroy()
//     .then(result => {
//         console.log(result);
//     });

// find songs for artist with id 1
// Artist.where({id:1})
//     .fetch({withRelated: 'songs'})
//     .then (artist => {
//         console.log(artist)
//     })

Song.where({id: 1})
    .fetch({withRelated: 'artist'})
    .then(results => {
        console.log(results.attributes);
        console.log(JSON.stringify(results.relations));
    });