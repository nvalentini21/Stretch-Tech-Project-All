const Joi = require('joi');
const express = require('express');
const app = express();

// birdInfo from './data.js';

app.use(express.json());

app.set('port', process.env.PORT || 3000)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))

const allBirds = [
	{
		'id': 1,
		'family': 'Paridae',
		'commonName': 'Fire-capped tit',
		'scientificName': 'Cephalopyrus flammiceps',
		'description':
			'The fire-capped tit (Cephalopyrus flammiceps) is a small, 10 cm (3.9 in) long, weighing about 7 g (0.25 oz) bird species assigned to the family Paridae, that breeds in the temperate forest bordering the Himalayas to the south, in the Hengduan Shan and Nujiang Shan on the Myanmar-China border, the Micah Shan and Daba Shan on the Northern Sichuan border. It winters down hill and further south. Further to the east, birds tend to be smaller and the plumage becomes gradually darker.',
		'habitat': 'Forest, woodlands and regions with solitary trees',
		'funFact':
			'This tit is able to open rolled-up leaves with its beak as starlings do, and hold it with its foot.',
		'imgURL':
			'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Fire-capped_Tit._AMSM0952.jpg/800px-Fire-capped_Tit._AMSM0952.jpg',
	},
	{
		'id': 2,
		'family': 'Paridae',
		'commonName': 'Crested titmouse',
		'scientificName': 'Baeolophus bicolor',
		'description':
			'This rather tame, active, crested little bird is common all year in eastern forests, where its whistled peter-peter-peter song may be heard even during mid-winter thaws. It is related to the chickadees, and like them it readily comes to bird feeders, often carrying away sunflower seeds one at a time. Feeders may be helping it to expand its range: in recent decades, Tufted Titmice have been steadily pushing north.',
		'habitat': 'Woodlands, shade trees, groves',
		'funFact':
			'This bird may pluck hair from live woodchuck, dog, or other animal, even from humans.',
		'imgURL':
			'https://upload.wikimedia.org/wikipedia/commons/6/6e/Baeolophus_bicolor_15.jpeg',
	},
	{
		'id': 3,
		'family': 'Paridae',
		'commonName': 'Sultan tit',
		'scientificName': 'Melanochlora sultanea',
		'description':
			'The sultan tit (Melanochlora sultanea) is an Asian forest bird with a yellow crest, dark bill, black upperparts plumage and yellow underparts. The sexes are similar. The female has greenish black upperparts and yellowish throat. The young bird is duller than the adult and has a shorter crest. It is the only member of the monotypic genus Melanochlora, which is fairly distinct from the Parus tits with the nearest relative being the monotypic Sylviparus.',
		'habitat': 'Lowland forests',
		'funFact':
			'The recumbent crest is raised when the bird is alert or alarmed.',
		'imgURL':
			'https://upload.wikimedia.org/wikipedia/commons/7/7e/Sultan_Tit_Mahananda_Wildlife_Sanctuary_Darjeeling%2C_West_Bengal%2C_India.jpg',
	},
	{
		'id': 4,
		'family': 'Paridae',
		'commonName': 'Oak titmouse',
		'scientificName': 'Baeolophus inornatus',
		'description':
			'As plain as a bird can be, marked only by a short crest, the Oak Titmouse nonetheless has personality. Pairs or family parties travel about the woods together, exploring the twigs for insects and calling to each other frequently. Until recently, this bird and the Juniper Titmouse were regarded as one species under the name of Plain Titmouse.',
		'habitat': 'Oak woods, pinyon-juniper; locally river woods, shade trees',
		'funFact': 'Pairs stay together after the breeding season.',
		'imgURL':
			'https://upload.wikimedia.org/wikipedia/commons/4/4b/Baeolophus_inornatus_-San_Luis_Obispo%2C_California%2C_USA-8_%283%29.jpg',
	},
	{
		'id': 5,
		'family': 'Paridae',
		'commonName': 'Elegant tit',
		'scientificName': 'Pardaliparus elegans',
		'description':
			'The elegant tit (Pardaliparus elegans) is a species of bird in the tit family Paridae endemic to the Philippines.',
		'habitat':
			'Subtropical or tropical moist lowland forest and subtropical or tropical moist montane forest',
		'funFact': '',
		'imgURL':
			'https://upload.wikimedia.org/wikipedia/commons/d/d6/Elegant_Tit.jpg',
	}]

app.get('/', (request, response) => {
  response.send('Welcome to the bird app!')
})

app.get('/api/allBirds', (request, response) => {
  response.send(allBirds);
})

app.get('/api/allBirds/:id', (request, response) => {
  const bird = allBirds.find(c => c.id === parseInt(request.params.id))
  if (!bird) response.status(404).send('404: The course with the given id was not found.');
  response.send(bird);
})

app.post('/api/allBirds', (request, response) => {

  const schema = Joi.object({
    family: Joi.string().required(),
    commonName: Joi.string().min(3).required(),
    scientificName : Joi.string().required(),
    description: Joi.string().required(),
    habitat: Joi.string().required(),
    funFact: Joi.string().required(),
    imgURL: Joi.string().required(),
  })

  const newBird = {
    id: allBirds.length + 1,
    family: request.body.family,
    commonName: request.body.commonName,
    scientificName : request.body.scientificName,
    description: request.body.description,
    habitat: request.body.habitat,
    funFact: request.body.funFact,
    imgURL: request.body.imageURL
  }

const result = schema.validate(newBird)
  if(result.error){
    response.status(400).send(result.error.details[0].message)
  }

  allBirds.push(newBird)
  response.send(newBird)








})
