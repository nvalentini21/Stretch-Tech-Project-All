exports.up = function (knex) {
	return knex.schema.createTable('bird_data', function (table) {
		table.increments('id').primary()
		table.string('family')
		table.string('common_name')
		table.string('scientific_name')
		table.string('description')
		table.string('habitat')
		table.string('fun_fact')
		table.string('img_url')

		table.timestamps(true, true)
	})
}

exports.down = function (knex) {
	return knex.schema.dropTable('bird_data')
}
