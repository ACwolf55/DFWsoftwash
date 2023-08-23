require('dotenv').config()
const {CONNECTION_STRING} = process.env
const Sequelize = require ('sequelize')

const sequelize = new Sequelize("postgresql://postgres:Lk29027620!@db.uppjuoofjcnhelrhnxkj.supabase.co:5432/postgres", {
    dialect: 'postgres', 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {sequelize}