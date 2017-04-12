const router = require('express').Router()
const knex = require('../db/knex.js')

router.get('/', (req, res) => {
	knex('post')
		.then(function(data) {
			res.send(data)
		})
})

module.exports = router;
