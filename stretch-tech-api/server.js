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
		'common name': 'Fire-capped tit',
		'scientific name': 'Cephalopyrus flammiceps',
		'description':
			'The fire-capped tit (Cephalopyrus flammiceps) is a small, 10 cm (3.9 in) long, weighing about 7 g (0.25 oz) bird species assigned to the family Paridae, that breeds in the temperate forest bordering the Himalayas to the south, in the Hengduan Shan and Nujiang Shan on the Myanmar-China border, the Micah Shan and Daba Shan on the Northern Sichuan border. It winters down hill and further south. Further to the east, birds tend to be smaller and the plumage becomes gradually darker.',
		'habitat': 'Forest, woodlands and regions with solitary trees',
		'fun fact':
			'This tit is able to open rolled-up leaves with its beak as starlings do, and hold it with its foot.',
		'img url':
			'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Fire-capped_Tit._AMSM0952.jpg/800px-Fire-capped_Tit._AMSM0952.jpg',
	},
	{
		'id': 2,
		'family': 'Paridae',
		'common name': 'Crested titmouse',
		'scientific name': 'Baeolophus bicolor',
		'description':
			'This rather tame, active, crested little bird is common all year in eastern forests, where its whistled peter-peter-peter song may be heard even during mid-winter thaws. It is related to the chickadees, and like them it readily comes to bird feeders, often carrying away sunflower seeds one at a time. Feeders may be helping it to expand its range: in recent decades, Tufted Titmice have been steadily pushing north.',
		'habitat': 'Woodlands, shade trees, groves',
		'fun fact':
			'This bird may pluck hair from live woodchuck, dog, or other animal, even from humans.',
		'img url':
			'https://upload.wikimedia.org/wikipedia/commons/6/6e/Baeolophus_bicolor_15.jpeg',
	},
	{
		'id': 3,
		'family': 'Paridae',
		'common name': 'Sultan tit',
		'scientific name': 'Melanochlora sultanea',
		'description':
			'The sultan tit (Melanochlora sultanea) is an Asian forest bird with a yellow crest, dark bill, black upperparts plumage and yellow underparts. The sexes are similar. The female has greenish black upperparts and yellowish throat. The young bird is duller than the adult and has a shorter crest. It is the only member of the monotypic genus Melanochlora, which is fairly distinct from the Parus tits with the nearest relative being the monotypic Sylviparus.',
		'habitat': 'Lowland forests',
		'fun fact':
			'The recumbent crest is raised when the bird is alert or alarmed.',
		'img url':
			'https://upload.wikimedia.org/wikipedia/commons/7/7e/Sultan_Tit_Mahananda_Wildlife_Sanctuary_Darjeeling%2C_West_Bengal%2C_India.jpg',
	},
	{
		'id': 4,
		'family': 'Paridae',
		'common name': 'Oak titmouse',
		'scientific name': 'Baeolophus inornatus',
		'description':
			'As plain as a bird can be, marked only by a short crest, the Oak Titmouse nonetheless has personality. Pairs or family parties travel about the woods together, exploring the twigs for insects and calling to each other frequently. Until recently, this bird and the Juniper Titmouse were regarded as one species under the name of Plain Titmouse.',
		'habitat': 'Oak woods, pinyon-juniper; locally river woods, shade trees',
		'fun fact': 'Pairs stay together after the breeding season.',
		'img url':
			'https://upload.wikimedia.org/wikipedia/commons/4/4b/Baeolophus_inornatus_-San_Luis_Obispo%2C_California%2C_USA-8_%283%29.jpg',
	},
	{
		'id': 5,
		'family': 'Paridae',
		'common name': 'Elegant tit',
		'scientific name': 'Pardaliparus elegans',
		'description':
			'The elegant tit (Pardaliparus elegans) is a species of bird in the tit family Paridae endemic to the Philippines.',
		'habitat':
			'Subtropical or tropical moist lowland forest and subtropical or tropical moist montane forest',
		'fun fact': '',
		'img url':
			'https://upload.wikimedia.org/wikipedia/commons/d/d6/Elegant_Tit.jpg',
	},
	{
		'id': 6,
		'family': 'Paridae',
		'common name': 'Yellow-cheeked tit',
		'scientific name': 'Machlolophus spilonotus',
		'description':
			'The yellow-cheeked tit (Machlolophus spilonotus) is a species of bird in the family Paridae.It is found in Bangladesh, Bhutan, China, Hong Kong, India, Laos, Myanmar, Nepal, Thailand, and Vietnam.',
		'habitat':
			'Subtropical or tropical moist lowland forest and subtropical or tropical moist montane forest',
		'fun fact': '',
		'img url':
			'https://en.wikipedia.org/wiki/Yellow-cheeked_tit#/media/File:Yellow-cheeked_Tit.jpg',
	},
	{
		'id': 7,
		'family': 'Paridae',
		'common name': 'Rufous-naped tit',
		'scientific name': 'Periparus rufonuchalis',
		'description':
			'The rufous-naped tit (Periparus rufonuchalis), also known as the black-breasted tit or dark-grey tit, is an Asian songbird species in the tit and chickadee family (Paridae). It was sometimes considered conspecific with the rufous-vented tit (P. rubidiventris), and was formerly placed in the genus Parus.',
		'habitat':
			'Subtropical or tropical moist lowland forest and subtropical or tropical moist montane forest, arable land, tropical high altitude',
		'fun fact': '',
		'img url':
			'https://upload.wikimedia.org/wikipedia/commons/e/e6/Rufous-naped_Tit_%28Periparus_rufonuchalis%29_%2847057111594%29.jpg',
	},
	{
		'id': 8,
		'family': 'Paridae',
		'common name': 'Rufous-vented tit',
		'scientific name': 'Periparus rubidiventris',
		'description':
			'The rufous-vented tit (Periparus rubidiventris) is an Asian songbird species in the tit and chickadee family (Paridae). Some of its subspecies were formerly assigned to its western relative the rufous-naped tit (P. rufonuchalis), or these two were considered entirely conspecific.',
		'habitat': 'Boreal forests and temperate forests',
		'fun fact':
			'Widespread and by no means rare, it is not considered a threatened species by the IUCN.',
		'img url':
			'https://en.wikipedia.org/wiki/Rufous-vented_tit#/media/File:Rufous-vented_Tit.jpg',
	},
	{
		'id': 9,
		'family': 'Paridae',
		'common name': 'Coal tit',
		'scientific name': 'Periparus ater',
		'description':
			'The coal tit or cole tit, (Periparus ater), is a small passerine bird in the tit family, Paridae. It is a widespread and common resident breeder in forests throughout the temperate to subtropical Palearctic, including North Africa. The black-crested tit is now usually included in this species.',
		'habitat': 'Temperate humid conifer forest',
		'fun fact':
			'The coal tit has the dubious distinction of having the largest number of bird fleas (Ceratophyllus gallinae) reported from a single nest, 5,754 fleas!',
		'img url':
			'https://en.wikipedia.org/wiki/Coal_tit#/media/File:Coal_tit_UK09.JPG',
	},
	{
		'id': 10,
		'family': 'Paridae',
		'common name': 'Great tit',
		'scientific name': 'Parus major',
		'description':
			'The great tit (Parus major) is a passerine bird in the tit family Paridae. It is a widespread and common species throughout Europe, the Middle East, Central Asia and east across the Palearctic to the Amur River, south to parts of North Africa where it is generally resident in any sort of woodland; most great tits do not migrate except in extremely harsh winters.',
		'habitat':
			'Open deciduous woodland, mixed forests, forest edges and gardens',
		'fun fact':
			'In 2009, great tits were reported killing, and eating the brains of roosting pipistrelle bats.',
		'img url':
			'https://en.wikipedia.org/wiki/Great_tit#/media/File:Great_tit_side-on.jpg',
  	}]

app.get('/', (request, response) => {
  response.send('Welcome to the bird app!')
})

app.get('/api/allBirds', (request, response) => {
  response.send(allBirds);
})
