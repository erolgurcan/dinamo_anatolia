const Client = require("pg").Pool;

const connectionString = process.env.DATABASE_URL? process.env.DATABASE_URL: "postgres://xnpiortlghrezn:aba61053c23da5418d92c09b642ae03c1b50da7949d0e9fb9b794f0c82cd62bc@ec2-44-206-89-185.compute-1.amazonaws.com:5432/d1m2g4usso01fc";

module.exports = connectionString;

