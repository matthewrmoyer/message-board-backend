const router = require('express').Router()
const knex = require('../db/knex.js')

router.get('/', (req, res) => {
	knex('post')
		.then(function(data) {
			res.send(data)
		})
})


router.post('/', (req, res) => {
	knex('post').insert({title: req.body.title, body: req.body.body, author: req.body.author, image_url: req.body.image_url, vote_count: req.body.voteCount, created_at: req.body.time})
		.then(function(data) {
			res.send(data)
		})
})

module.exports = router;
