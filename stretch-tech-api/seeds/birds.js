/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 *
 *
 */

const birdData = require('../data')

// exports.seed = function (knex) {
// 	return knex('bird_data')
// 		.del()
// 		.then(function () {
// 			return knex('bird_data').insert(birdData)
// 		})
// }

// ----
const createBird = async (knex, bird) => {
	const birdId = await knex('bird_data').insert({
		id: bird.id,
		family: bird.family,
		common_name: bird.common_name,
		scientific_name: bird.scientific_name,
		description: bird.description,
		habitat: bird.habitat,
		fun_fact: bird.fun_fact,
		img_url: bird.img_url,
	})
	return Promise.all([birdId])
}

exports.seed = async (knex) => {
	try {
		await knex('bird_data').del()

		let birdPromises = birdData.map((bird) => {
			return createBird(knex, bird)
		})

		return Promise.all(birdPromises)
	} catch (error) {
		console.log(`Error seeding data: ${error}`)
	}
}
