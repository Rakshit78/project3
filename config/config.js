require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: 'aws-0-ap-south-1.pooler.supabase.com', // Updated host
    port: 6543, // Updated port
    pool_mode: 'transaction', // Pool mode
    logging: false,
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: 'aws-0-ap-south-1.pooler.supabase.com', 
    port: 6543, 
    pool_mode: 'transaction', 
    logging: false,
    dialect: 'postgres',
  }
};

// require('dotenv').config()

// module.exports={
//   development: {
//     username: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     host: process.env.DB_HOST,
//     port:process.env.DB_PORT,
//     logging:false,
//     dialect: "postgres",
//   },
//   production: {
//     username: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,
//     host: process.env.DB_HOST,
//     port:process.env.DB_PORT,
//     logging:false,
//     dialect: "postgres",
//   }
// }
