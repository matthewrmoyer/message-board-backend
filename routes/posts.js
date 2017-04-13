const router = require('express').Router()
const knex = require('../db/knex.js')

router.get('/', (req, res) => {
	knex('post')
		.then(function(data) {
			res.send(data)
		})
})


router.post('/', (req, res) => {
	knex('post').insert(req.body)
		.then(function(data) {
			res.send(data)
		})
})

module.exports = router;
