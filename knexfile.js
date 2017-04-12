module.exports = {

        development: {
            client: 'pg',
            connection: 'postgres://localhost/messageboard_db'
        },

        production: {
            client: 'pg',
            connection: process.env.DATABASE_URL
        }
    }
