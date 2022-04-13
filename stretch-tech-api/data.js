const birdData = [
	{
		'id': 1,
		'family': 'Paridae',
		'common_name': 'Fire-capped tit',
		'scientific_name': 'Cephalopyrus flammiceps',
		'description':
			'The fire-capped tit (Cephalopyrus flammiceps) is a small, 10 cm (3.9 in) long, weighing about 7 g (0.25 oz) bird species assigned to the family Paridae.',
		'habitat': 'Forest, woodlands and regions with solitary trees',
		'fun_fact':
			'This tit is able to open rolled-up leaves with its beak as starlings do, and hold it with its foot.',
		'img_url':
			'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Fire-capped_Tit._AMSM0952.jpg/800px-Fire-capped_Tit._AMSM0952.jpg',
	},
	{
		'id': 2,
		'family': 'Paridae',
		'common_name': 'Crested titmouse',
		'scientific_name': 'Baeolophus bicolor',
		'description':
			'This rather tame, active, crested little bird is common all year in eastern forests, where its whistled peter-peter-peter song may be heard even during mid-winter thaws.',
		'habitat': 'Woodlands, shade trees, groves',
		'fun_fact':
			'This bird may pluck hair from live woodchuck, dog, or other animal, even from humans.',
		'img_url':
			'https://upload.wikimedia.org/wikipedia/commons/6/6e/Baeolophus_bicolor_15.jpeg',
	},
	{
		'id': 3,
		'family': 'Paridae',
		'common_name': 'Sultan tit',
		'scientific_name': 'Melanochlora sultanea',
		'description':
			'The sultan tit (Melanochlora sultanea) is an Asian forest bird with a yellow crest, dark bill, black upperparts plumage and yellow underparts.',
		'habitat': 'Lowland forests',
		'fun_fact':
			'The recumbent crest is raised when the bird is alert or alarmed.',
		'img_url':
			'https://upload.wikimedia.org/wikipedia/commons/7/7e/Sultan_Tit_Mahananda_Wildlife_Sanctuary_Darjeeling%2C_West_Bengal%2C_India.jpg',
	},
	{
		'id': 4,
		'family': 'Paridae',
		'common_name': 'Oak titmouse',
		'scientific_name': 'Baeolophus inornatus',
		'description':
			'As plain as a bird can be, marked only by a short crest, the Oak Titmouse nonetheless has personality. ',
		'habitat': 'Oak woods, pinyon-juniper; locally river woods, shade trees',
		'fun_fact': 'Pairs stay together after the breeding season.',
		'img_url':
			'https://upload.wikimedia.org/wikipedia/commons/4/4b/Baeolophus_inornatus_-San_Luis_Obispo%2C_California%2C_USA-8_%283%29.jpg',
	},
	{
		'id': 5,
		'family': 'Paridae',
		'common_name': 'Elegant tit',
		'scientific_name': 'Pardaliparus elegans',
		'description':
			'The elegant tit (Pardaliparus elegans) is a species of bird in the tit family Paridae endemic to the Philippines.',
		'habitat':
			'Subtropical or tropical moist lowland forest and subtropical or tropical moist montane forest',
		'fun_fact': '',
		'img_url':
			'https://upload.wikimedia.org/wikipedia/commons/d/d6/Elegant_Tit.jpg',
	},
	{
		'id': 6,
		'family': 'Paridae',
		'common_name': 'Yellow-cheeked tit',
		'scientific_name': 'Machlolophus spilonotus',
		'description':
			'The yellow-cheeked tit (Machlolophus spilonotus) is a species of bird in the family Paridae.It is found in Bangladesh, Bhutan, China, Hong Kong, India, Laos, Myanmar, Nepal, Thailand, and Vietnam.',
		'habitat':
			'Subtropical or tropical moist lowland forest and subtropical or tropical moist montane forest',
		'fun_fact': '',
		'img_url':
			'https://en.wikipedia.org/wiki/Yellow-cheeked_tit#/media/File:Yellow-cheeked_Tit.jpg',
	},
	{
		'id': 7,
		'family': 'Paridae',
		'common_name': 'Rufous-naped tit',
		'scientific_name': 'Periparus rufonuchalis',
		'description':
			'The rufous-naped tit (Periparus rufonuchalis), also known as the black-breasted tit or dark-grey tit, is an Asian songbird species in the tit and chickadee family (Paridae).',
		'habitat':
			'Subtropical or tropical moist lowland forest and subtropical or tropical moist montane forest, arable land, tropical high altitude',
		'fun_fact': '',
		'img_url':
			'https://upload.wikimedia.org/wikipedia/commons/e/e6/Rufous-naped_Tit_%28Periparus_rufonuchalis%29_%2847057111594%29.jpg',
	},
	{
		'id': 8,
		'family': 'Paridae',
		'common_name': 'Rufous-vented tit',
		'scientific_name': 'Periparus rubidiventris',
		'description':
			'The rufous-vented tit (Periparus rubidiventris) is an Asian songbird species in the tit and chickadee family (Paridae).',
		'habitat': 'Boreal forests and temperate forests',
		'fun_fact':
			'Widespread and by no means rare, it is not considered a threatened species by the IUCN.',
		'img_url':
			'https://en.wikipedia.org/wiki/Rufous-vented_tit#/media/File:Rufous-vented_Tit.jpg',
	},
	{
		'id': 9,
		'family': 'Paridae',
		'common_name': 'Coal tit',
		'scientific_name': 'Periparus ater',
		'description':
			'The coal tit or cole tit, (Periparus ater), is a small passerine bird in the tit family, Paridae.',
		'habitat': 'Temperate humid conifer forest',
		'fun_fact':
			'The coal tit has the dubious distinction of having the largest number of bird fleas (Ceratophyllus gallinae) reported from a single nest, 5,754 fleas!',
		'img_url':
			'https://en.wikipedia.org/wiki/Coal_tit#/media/File:Coal_tit_UK09.JPG',
	},
	{
		'id': 10,
		'family': 'Paridae',
		'common_name': 'Great tit',
		'scientific_name': 'Parus major',
		'description':
			'The great tit (Parus major) is a passerine bird in the tit family Paridae.',
		'habitat':
			'Open deciduous woodland, mixed forests, forest edges and gardens',
		'fun_fact':
			'In 2009, great tits were reported killing, and eating the brains of roosting pipistrelle bats.',
		'img_url':
			'https://en.wikipedia.org/wiki/Great_tit#/media/File:Great_tit_side-on.jpg',
	},
	{
		'id': 11,
		'family': 'Paridae',
		'common_name': 'Yellow-bellied tit',
		'scientific_name': 'Pardaliparus venustulus',
		'description':
			'The yellow-bellied tit (Pardaliparus venustulus) is a bird in the family Paridae. The species was first described by Robert Swinhoe in 1870.',
		'habitat':
			'Temperate forest and subtropical or tropical moist lowland forest',
		'fun_fact':
			"Male yellow- bellied tits are very territorial, but  they have a mutual respect for their neighbors. This is called the “dear-enemy” effect, since the birds respect each other's territory and want to maintain friendships.",
		'img_url':
			'https://en.wikipedia.org/wiki/Yellow-bellied_tit#/media/File:Yellow-bellied_Tit_(Pardaliparus_venustulus)_(8077149502).jpg',
	},
	{
		'id': 12,
		'family': 'Paridae',
		'common_name': 'Palawan tit',
		'scientific_name': 'Pardaliparus amabilis',
		'description':
			'The Palawan tit (Pardaliparus amabilis) is a species of bird in the tit family Paridae.',
		'habitat':
			'Lowland forest habitats, including secondary forests, forest edge, swamps as well as submontane forest',
		'fun_fact': '',
		'img_url':
			'https://en.wikipedia.org/wiki/Palawan_tit#/media/File:7504_Palawan_Tit_2_(1847360808).jpg',
	},
	{
		'id': 13,
		'family': 'Paridae',
		'common_name': 'European crested tit',
		'scientific_name': 'Lophophanes cristatus',
		'description':
			'The European crested tit, or simply crested tit (Lophophanes cristatus) (formerly Parus cristatus), is a passerine bird in the tit family Paridae.',
		'habitat': 'Coniferous forests and deciduous woodland',
		'fun_fact': 'A few vagrant crested tits have been seen in England.',
		'img_url':
			'https://en.wikipedia.org/wiki/European_crested_tit#/media/File:Lophophanes_cristatus_-_01.jpg',
	},
	{
		'id': 14,
		'family': 'Paridae',
		'common_name': 'Grey crested tit',
		'scientific_name': 'Lophophanes dichrous',
		'description':
			'The grey crested tit or grey-crested tit (Lophophanes dichrous) is a species of bird in the family Paridae.',
		'habitat':
			'Temperate forest and subtropical or tropical moist montane forest',
		'fun_fact': '',
		'img_url':
			'https://en.wikipedia.org/wiki/Grey_crested_tit#/media/File:Grey-crested_Tit_I_IMG_7285.jpg',
	},
	{
		'id': 15,
		'family': 'Paridae',
		'common_name': 'Bridled titmouse',
		'scientific_name': 'Baeolophus wollweberi',
		'description':
			'The bridled titmouse (Baeolophus wollweberi) is a small songbird, a passerine bird in the tit family Paridae.',
		'fun_fact':
			'Their song is usually described as a whistled pidi-pidi-pidi-pidi.',
		'img_url':
			'https://en.wikipedia.org/wiki/Bridled_titmouse#/media/File:Bridled_Titmouse_(Baeolophus_wollweberi)_(16875140301).jpg',
	},
	{
		'id': 16,
		'family': 'Paridae',
		'common_name': 'Juniper titmouse',
		'scientific_name': 'Baeolophus ridgwayi',
		'description':
			'The juniper titmouse (Baeolophus ridgwayi) is a passerine bird in the tit family Paridae. ',
		'habitat':
			'Woodlands of warm, dry pinyon-juniper, juniper and desert riparian woods',
		'fun_fact': '',
		'img_url':
			'https://en.wikipedia.org/wiki/Juniper_titmouse#/media/File:Juniper_Titmouse2.jpg',
	},
	{
		'id': 17,
		'family': 'Paridae',
		'common_name': 'Black-crested titmouse',
		'scientific_name': 'Baeolophus atricristatus',
		'description':
			'The black-crested titmouse or Mexican titmouse (Baeolophus atricristatus), is a passerine bird in the tit family Paridae.',
		'habitat': 'Brushlands, woods, riverside groves',
		'fun_fact': '',
		'img_url':
			'https://en.wikipedia.org/wiki/Black-crested_titmouse#/media/File:Black-crested_Titmouse_in_Santa_Ana_National_Wildlife_Refuge.jpg',
	},
	{
		'id': 18,
		'family': 'Paridae',
		'common_name': 'Varied tit',
		'scientific_name': 'Sittiparus varius',
		'description':
			'The varied tit (Sittiparus varius) is a perching bird from the tit family, Paridae.',
		'habitat':
			'Open mixed forests, coniferous forests with Japanese yews, Cryptomeria (sugi), and pines as well as bamboo forests at mountain slopes and in river valleys',
		'fun_fact':
			'In Japan varied tits have been used in a kind of show called "omikujihiki" to draw fortune telling-slips (omikuji).',
		'img_url':
			'https://en.wikipedia.org/wiki/Varied_tit#/media/File:Varied_tit_at_Tenn%C5%8Dji_Park_in_Osaka,_January_2016.jpg',
	},
	{
		'id': 19,
		'family': 'Paridae',
		'common_name': "Owston's tit",
		'scientific_name': 'Sittiparus owstoni',
		'description':
			"Owston's tit (Sittiparus owstoni) is a small passerine bird in the tit family Paridae that is endemic to the southern Izu Islands south of Japan.",
		'habitat': 'Forest, anthropogenic biome',
		'fun_fact': '',
		'img_url':
			'https://en.wikipedia.org/wiki/Owston%27s_tit#/media/File:Sittiparus_owstoni_60369541_(cropped).jpg',
	},
	{
		'id': 20,
		'family': 'Paridae',
		'common_name': 'Chestnut-bellied tit',
		'scientific_name': 'Sittiparus castaneoventris',
		'description':
			'The chestnut-bellied tit (Sittiparus castaneoventris) is a small passerine bird in the tit family Paridae that is endemic to Taiwan.',
		'habitat':
			'Forest, parks, and gardens, primarily in foothill and montane areas',
		'fun_fact': '',
		'img_url':
			'https://en.wikipedia.org/wiki/Chestnut-bellied_tit#/media/File:Sittiparus_castaneoventris,_Taiwan_1.jpg',
	},
	{
		'id': 21,
		'family': 'Paridae',
		'common_name': 'White-fronted tit',
		'scientific_name': 'Sittiparus semilarvatus',
		'description':
			'The white-fronted tit (Sittiparus semilarvatus) is a species of bird in the family Paridae. It is endemic to the Philippines found in the islands of Luzon and Mindanao.',
		'habitat': 'Tropical moist lowland forests',
		'fun_fact': '',
		'img_url':
			'https://upload.wikimedia.org/wikipedia/commons/d/d9/White-fronted_Tit.jpg',
	},
	{
		'id': 22,
		'family': 'Paridae',
		'common_name': 'Bridled titmouse',
		'scientific_name': 'Baeolophus wollweberi',
		'description':
			'The bridled titmouse (Baeolophus wollweberi) is a small songbird, a passerine bird in the tit family Paridae.',
		'habitat': 'Deciduous woods or mixed evergreen-deciduous woods',
		'fun_fact': '',
		'img_url':
			'https://en.wikipedia.org/wiki/Bridled_titmouse#/media/File:Bridled_Titmouse_(Baeolophus_wollweberi)_(16875140301).jpg',
	},
	{
		'id': 23,
		'family': 'Paridae',
		'common_name': 'Tufted titmouse',
		'scientific_name': 'Baeolophus bicolor',
		'description':
			'The tufted titmouse (Baeolophus bicolor) is a small songbird from North America, a species in the tit and chickadee family (Paridae).',
		'habitat':
			'Deciduous and mixed woods as well as gardens, parks, and shrublands.',
		'fun_fact':
			'The titmouse can demonstrate curiosity regarding humans, and sometimes will perch on a window ledge and seem to be peering into the house.',
		'img_url':
			'https://en.wikipedia.org/wiki/Tit_(bird)#/media/File:Tufted_Titmouse-27527-2.jpg',
	},
	{
		'id': 24,
		'family': 'Paridae',
		'common_name': 'Eurasian blue tit',
		'scientific_name': 'Cyanistes caeruleus',
		'description':
			'The Eurasian blue tit (Cyanistes caeruleus) is a small passerine bird in the tit family, Paridae. It is easily recognisable by its blue and yellow plumage and small size.',
		'habitat':
			'Temperate and subarctic Europe and the western Palearctic in deciduous or mixed woodlands',
		'fun_fact':
			'Eurasian blue tits are able to culturally transmit learning to other tit species. An example of this, dating from the 1920s, is the ability to open milk bottles with foil tops, to get at the cream underneath.',
		'img_url':
			'https://en.wikipedia.org/wiki/Eurasian_blue_tit#/media/File:Eurasian_blue_tit_Lancashire.jpg',
	},
	{
		'id': 25,
		'family': 'Paridae',
		'common_name': 'Marsh tit',
		'scientific_name': 'Poecile palustris',
		'description':
			"The marsh tit (Poecile palustris) is a passerine bird in the tit family Paridae and genus Poecile, closely related to the willow, Père David's and Songar tits.",
		'habitat':
			'Lowland areas, large areas of moist, broadleaved woodland, wet alder woodland, riverside trees, parks and gardens or orchards',
		'fun_fact': '',
		'img_url':
			'https://en.wikipedia.org/wiki/Marsh_tit#/media/File:Parus_palustris02.jpg',
	},
	{
		'id': 26,
		'family': 'Paridae',
		'common_name': 'Black-capped chickadee',
		'scientific_name': 'Poecile atricapillus',
		'description':
			'The black-capped chickadee (Poecile atricapillus) is a small, nonmigratory, North American songbird that lives in deciduous and mixed forests.',
		'habitat': 'Deciduous and mixed forests',
		'fun_fact':
			'The Black-capped generally sings out a “fee-bee” call while the Carolina sings “fee-bee fee-bay;” however, this song is learned and, in overlapping territories, may be learned from the “wrong” bird.',
		'img_url':
			'https://en.wikipedia.org/wiki/Black-capped_chickadee#/media/File:Poecile-atricapilla-001.jpg',
	},
	{
		'id': 27,
		'family': 'Paridae',
		'common_name': 'American bushtit',
		'scientific_name': 'Psaltriparus minimus',
		'description':
			'The American bushtit (Psaltriparus minimus) is the only species placed in the genus Psaltriparus and the only species in the family Aegithalidae that is found in the New World.',
		'habitat':
			'Mixed open woodlands, often containing oaks and a scrubby chaparral understory; it also inhabits parks and gardens',
		'fun_fact':
			'This species produces an elaborate pendant nest of moss and lichen assembled with spider silk and lined with feathers.',
		'img_url':
			'https://upload.wikimedia.org/wikipedia/commons/3/36/Psaltriparus_minimus_-Chilliwack%2C_British_Columbia%2C_Canada_-male-8.jpg',
	},
	{
		'id': 28,
		'family': 'Paridae',
		'common_name': 'Green-backed tit',
		'scientific_name': 'Parus monticolus',
		'description':
			'The green-backed tit (Parus monticolus) is a species of bird in the family Paridae.',
		'habitat':
			'Boreal forest, temperate forest, and subtropical or tropical moist lowland forest.',
		'fun_fact': '',
		'img_url':
			'https://en.wikipedia.org/wiki/Green-backed_tit#/media/File:Green_Backed_tit_in_Sattal_India.jpg',
	},
	{
		'id': 29,
		'family': 'Paridae',
		'common_name': 'Cinereous tit',
		'scientific_name': 'Parus cinereus',
		'description':
			'The cinereous tit (Parus cinereus) is a species of bird in the tit family Paridae.',
		'habitat':
			'Greater and Lesser Sundas found in wide variety of deciduous, coniferous and secondary forests, including montane heath and grasslands',
		'fun_fact':
			'Both parents take part in incubation and hissing from within the nest when threatened',
		'img_url':
			'https://upload.wikimedia.org/wikipedia/commons/b/b8/Cinereous_tit_%28Parus_cinereus%29_Photograph_by_Shantanu_Kuveskar.jpg',
	},
	{
		'id': 31,
		'family': 'Falconidae',
		'common_name': 'Malagasy kestrel',
		'scientific_name': 'Falco newtoni',
		'description': 'The Malagasy kestrel can reach a size of 30 cm.',
		'habitat': 'Savannahs/wetlands of Madagascar, Mayotte, and the Comores',
		'fun_fact':
			"The Malagasy kestrel's call consists of a sharp scream of iitsi, kitsi, kitsi, kitsi or a loud repeated twitter.",
		'img_url':
			'https://upload.wikimedia.org/wikipedia/commons/c/cb/Madagascar_Kestrel_RWD.jpg',
	},
	{
		'id': 32,
		'family': 'Falconidae',
		'common_name': 'Seychelles kestrel',
		'scientific_name': 'Falco auraeus',
		'description':
			'The Seychelles kestrel is the smallest of kestrels, 18-23 cm long witha wingspan of 40-45 cm.',
		'habitat': 'Forest, scrub, and farmland around rock faces nad houses',
		'fun_fact':
			'This species only has a population of about 800 birds, and is considered vulnerable.',
		'img_url':
			'https://en.wikipedia.org/wiki/Seychelles_kestrel#/media/File:Falco_araea_Seychelles_Kestrel_side_views.jpg',
	},
	{
		'id': 33,
		'family': 'Falconidae',
		'common_name': 'Mauritius kestrel',
		'scientific_name': 'Falco punctatus',
		'description':
			'The Mauritius kestrel can reach a size between 26 and 30.5 cm. The weight is up to 250 grams. The males are slightly smaller than the females.',
		'habitat':
			'Forests, cliffs, and ravines of the island nation of Mauritius (Indian Ocean)',
		'fun_fact':
			'The Mauritius kestrel was once the most endagered falcon species in the world in the 1970s - it has since recovered from endangerment, and is now considered vulnerable.',
		'img_url':
			'https://en.wikipedia.org/wiki/Mauritius_kestrel#/media/File:Falco_punctatus.jpg',
	},
	{
		'id': 34,
		'family': 'Falconidae',
		'common_name': 'Spotted kestrel',
		'scientific_name': 'Falco moluccensis',
		'description':
			'Also known as the Moluccan kestrel, the Spotted Kestrel is a heavily-marked reddish-brown falcon. Dense spotting on back and wings contrasts sharply with gray tail.',
		'habitat': 'Open habitats across the Indonesian Archipelago',
		'fun_fact':
			'The Spotted kestrel has a habit of fluffing its tail while it is perched. This helps these birds to balance while they feed.',
		'img_url':
			'https://en.wikipedia.org/wiki/Spotted_kestrel#/media/File:Spotted_kestrel_-bird_-birding_-bandungbirding_-Ig_Bird_-birdextreme_-nature_perfection_-wildlife_(16656529537).jpg',
	},
	{
		'id': 35,
		'family': 'Falconidae',
		'common_name': 'Nankeen kestrel',
		'scientific_name': 'Falco cenchroides',
		'description':
			'The Nankeen kestrel is a small, slim falcon 28 to 35 cm (11 to 14 in) long with a wingspan of 66 to 78 cm (26 to 31 in).',
		'habitat':
			'temperate grasslands and open woodlands of Australia and New Guinea',
		'fun_fact':
			"The Nankeen kestrel is one of the smallest falcons, and unlike many, does not rely on speed to catch it's prey.",
		'img_url':
			"https://en.wikipedia.org/wiki/Nankeen_kestrel#/media/File:Falco_cenchroides_-_Bushell's_Lagoon.jpg",
	},
	{
		'id': 36,
		'family': 'Falconidae',
		'common_name': 'Common kestrel',
		'scientific_name': 'Falco tinnuculus',
		'description':
			'Their plumage is mainly light chestnut brown with blackish spots on the upperside and buff with narrow blackish streaks on the underside; the remiges are also blackish.',
		'habitat': 'Europe, Asia, Africa, east coast of North America',
		'fun_fact':
			'The Common kestrel is able to see near ultraviolent light, allowing the birds to detect the urine trails around rodent burrows.',
		'img_url':
			'https://en.wikipedia.org/wiki/Common_kestrel#/media/File:Common_kestrel_falco_tinnunculus.jpg',
	},
	{
		'id': 37,
		'family': 'Falconidae',
		'common_name': 'Rock kestrel',
		'scientific_name': 'Falco rupicolus',
		'description':
			'The Rock kestrel is a A slender, medium-sized kestrel, between 30 and 33 centimeters tall. ',
		'habitat':
			'High-lying, central, and eastern regions of Angola, the Democratic Republic of Congo, Tanzania, and South Africa.',
		'fun_fact':
			'Rock kestrels have been observed following baboons through grasslands, and caatching insect species that are flushed out as a result of the baboons path.',
		'img_url': 'https://en.wikipedia.org/wiki/Rock_kestrel',
	},
	{
		'id': 38,
		'family': 'Bop',
		'common_name': 'Greater Iophorina',
		'scientific_name': 'Lophorina superba',
		'description':
			'After meticulously preparing a "dance floor" (even scrubbing the dirt or branch smooth with leaves), the male first attracts a female with a loud call.',
		'habitat': 'Rainforests of New Guinea',
		'fun_fact':
			"The word 'Lophorina' in the bird's scientific name means 'tuft', this is based on the upward standing tuft of feathers above their head.",
		'img_url': 'https://images-cdn.9gag.com/photo/aQoKVpw_700b.jpg',
	},
	{
		'id': 39,
		'family': 'Bop',
		'common_name': 'King Bird of Paradise',
		'scientific_name': 'Cicinnurus regius',
		'description':
			'They are perhaps more persistent callers than any other birds of paradise. Courtship involves complex vocalizations, feather manipulations, and a variety of body posturing and movements.',
		'habitat': 'Lowland forests of New Guinea and western satellite islands',
		'fun_fact':
			'The female builds the nest and cares for the young without male assistance.',
		'img_url':
			'https://en.wikipedia.org/wiki/File:Cicinnurus_regius-20031005.jpg',
	},
	{
		'id': 40,
		'family': 'Bop',
		'common_name': "King of Saxony's",
		'scientific_name': 'Pteridophora alberti',
		'description':
			'The songs sung by the males are reminiscent of "radio-static hisses" and can last from four to five seconds.',
		'habitat': 'Mountains and rainforests of New Guinea',
		'fun_fact': 'These birds can easily live up to 30 years',
		'img_url':
			'https://en.wikipedia.org/wiki/King_of_Saxony_bird-of-paradise#/media/File:Pteridophora_alberti_-Papua_New_Guinea-8.jpg',
	},
	{
		'id': 41,
		'family': 'Bop',
		'common_name': 'Red Bird of Paradise',
		'scientific_name': 'Paradisaea rubra',
		'description':
			'Large, up to 33 cm long, brown and yellow with a dark brown iris, grey legs and yellow bill.',
		'habitat':
			'Lowland rainforests of Waigeo and Batanta islands of Raja Ampat, West Papua',
		'fun_fact':
			'The males take a long time to mature. It can take a male Red Bird up to seven years for them to gain their adult plumage.',
		'img_url':
			'https://en.wikipedia.org/wiki/Red_bird-of-paradise#/media/File:Stavenn_Paradisaea_rubra_00.jpg',
	},
	{
		'id': 42,
		'family': 'Bop',
		'common_name': "Wilson's Bird of Paradise",
		'scientific_name': 'Cicinnurus respublica',
		'description':
			"Wilson's bird-of-paradise is rather small. Males can reach a length of 16 centimetres, while females can reach a length of 16 cm.",
		'habitat':
			'The hill and lowland rainforests of Waigeo and Batanta Islands off West Papua.',
		'fun_fact':
			'The male species has a little blue cap on their head because they are, in fact, gentlemanly.',
		'img_url':
			"https://en.wikipedia.org/wiki/Wilson%27s_bird-of-paradise#/media/File:Wilson's_Bird_of_Paradise_Best.jpg",
	},
	{
		'id': 43,
		'family': 'Bop',
		'common_name': 'Lesser Bird of Paradise',
		'scientific_name': 'Paradisaea minor',
		'description':
			'The Lesser Bird-of-Paradise is medium-sized, maroon-brown with a yellow crown and brownish-yellow upper back.',
		'habitat':
			'Forests of northern New Guinea, and the nearby islands of Misool and Yapen',
		'fun_fact':
			'The female usually lays two pinkish eggs with dark markings in a nest in a tree high above ground.',
		'img_url':
			'https://en.wikipedia.org/wiki/Lesser_bird-of-paradise#/media/File:Lesser_Bird_of_Paradise,_Bronx_Zoo.jpg',
	},
	{
		'id': 44,
		'family': 'Bop',
		'common_name': "Victoria's Riflebird",
		'scientific_name': 'Ptiloris victoriae',
		'description':
			'The smallest riflebird. Males have an iridescent purple sheen plumage, which becomes more blue-green on the head and more bronze on the lower breast.',
		'habitat': 'Northeastern Queensland, Australia',
		'fun_fact':
			'As well as insects, they eat fruits from the trees, some which they peel by holding the fruit with one foot and removing the skin with their bill.',
		'img_url':
			'https://en.wikipedia.org/wiki/Victoria%27s_riflebird#/media/File:Ptiloris_victoriae_-Daintree,_Queensland,_Australia-8_(1).jpg',
	},
	{
		'id': 45,
		'family': 'Bop',
		'common_name': 'Magnificent Riflebird',
		'scientific_name': 'Ptiloris magnificus',
		'description':
			'The male is velvet-black with elongated black filamental flank plumes, an iridescent blue-green crown, a triangle-shaped breast shield, and on central tail feathers.',
		'habitat':
			'Lowland rainforests of New Guinea and the northern Cape York Peninsula of Australia',
		'fun_fact':
			'During courtship displays, the male fully extends his wings and raises his tail; he jerks upward while swinging his head from side to side, showing off his metallic blue-green breast shield, and producing a distinctive "woosh" sound as he flaps his wings.',
		'img_url':
			'https://en.wikipedia.org/wiki/Magnificent_riflebird#/media/File:Magnificent_Riflebird.jpg',
	},
	{
		'id': 46,
		'family': 'Bop',
		'common_name': "Goldie's Bird of Paradise",
		'scientific_name': 'Paradisaea decora',
		'description':
			'The male has a yellow and dark green plumage with a lavender grey breast. It is adorned with large crimson ornamental flank plumes and two long tail wired.',
		'habitat':
			"The hill forests of Fergusson and Normanby Island of the D'Entrecasteaux Archipelago, eastern Papuan Islands",
		'fun_fact':
			"It's name commemorates the Scottish collector, Andrew Goldie, who discovered the bird in 1882.",
		'img_url':
			'https://en.wikipedia.org/wiki/Goldie%27s_bird-of-paradise#/media/File:Paradesia_decora_Keulemans.jpg',
	},
	{
		'id': 47,
		'family': 'Bop',
		'common_name': 'Ribbon-tailed Astrapia',
		'scientific_name': 'Astrapia mayeri',
		'description':
			'The male has an iridescent olive green and bronze plumage and has two extremely long, ribbon-like white tail feathers.',
		'habitat':
			'Subalpine forests in the western part of the central highlands of Papau New Guinea',
		'fun_fact':
			'The male has the longest tail feathers in relation to body and size of any bird, over three times the length of its body.',
		'img_url':
			'https://en.wikipedia.org/wiki/Ribbon-tailed_astrapia#/media/File:Ribbon-tailed_Astrapia.jpg',
	},
]

module.exports = birdData
