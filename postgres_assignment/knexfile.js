module.exports = {

  client: 'pg',
  connection : process.env.DATABASE_URL || {
    user: 'postgres',
    password: 'bs4536',
    database: 'autos'
  }
};