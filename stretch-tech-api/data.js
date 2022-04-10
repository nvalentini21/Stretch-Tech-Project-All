const birdInfo = [
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
	},
	{
		'id': 11,
		'family': 'Paridae',
		'common name': 'Yellow-bellied tit',
		'scientific name': 'Pardaliparus venustulus',
		'description':
			'The yellow-bellied tit (Pardaliparus venustulus) is a bird in the family Paridae. The species was first described by Robert Swinhoe in 1870.',
		'habitat':
			'Temperate forest and subtropical or tropical moist lowland forest',
		'fun fact':
			"Male yellow- bellied tits are very territorial, but  they have a mutual respect for their neighbors. This is called the “dear-enemy” effect, since the birds respect each other's territory and want to maintain friendships.",
		'img url':
			'https://en.wikipedia.org/wiki/Yellow-bellied_tit#/media/File:Yellow-bellied_Tit_(Pardaliparus_venustulus)_(8077149502).jpg',
	},
	{
		'id': 12,
		'family': 'Paridae',
		'common name': 'Palawan tit',
		'scientific name': 'Pardaliparus amabilis',
		'description':
			'The Palawan tit (Pardaliparus amabilis) is a species of bird in the tit family Paridae. It is endemic to Palawan and the smaller islands of Calauit and Balabac in the Philippines.',
		'habitat':
			'Lowland forest habitats, including secondary forests, forest edge, swamps as well as submontane forest',
		'fun fact': '',
		'img url':
			'https://en.wikipedia.org/wiki/Palawan_tit#/media/File:7504_Palawan_Tit_2_(1847360808).jpg',
	},
	{
		'id': 13,
		'family': 'Paridae',
		'common name': 'European crested tit',
		'scientific name': 'Lophophanes cristatus',
		'description':
			'The European crested tit, or simply crested tit (Lophophanes cristatus) (formerly Parus cristatus), is a passerine bird in the tit family Paridae.',
		'habitat': 'Coniferous forests and deciduous woodland',
		'fun fact': 'A few vagrant crested tits have been seen in England.',
		'img url':
			'https://en.wikipedia.org/wiki/European_crested_tit#/media/File:Lophophanes_cristatus_-_01.jpg',
	},
	{
		'id': 14,
		'family': 'Paridae',
		'common name': 'Grey crested tit',
		'scientific name': 'Lophophanes dichrous',
		'description':
			'The grey crested tit or grey-crested tit (Lophophanes dichrous) is a species of bird in the family Paridae. It is found in the Himalayan foothills and southern-central China.',
		'habitat':
			'Temperate forest and subtropical or tropical moist montane forest',
		'fun fact': '',
		'img url':
			'https://en.wikipedia.org/wiki/Grey_crested_tit#/media/File:Grey-crested_Tit_I_IMG_7285.jpg',
	},
	{
		'id': 15,
		'family': 'Paridae',
		'common name': 'Bridled titmouse',
		'scientific name': 'Baeolophus wollweberi',
		'description':
			'The bridled titmouse (Baeolophus wollweberi) is a small songbird, a passerine bird in the tit family Paridae.These birds range from 11.5 – 12.7 cm. (4.5 to 5 in.) long. It is small, crested and gray with a black and white patterned face, a black bib. Its crest is boarded with black and white (sometimes gray) underparts. A standard nest ranges from 5 – 9 eggs colored white, speckled, or reddish brown.',
		'habitat': 'Oak or oak-juniper mixed woodland riparian areas of mountains',
		'fun fact':
			'Their song is usually described as a whistled pidi-pidi-pidi-pidi.',
		'img url':
			'https://en.wikipedia.org/wiki/Bridled_titmouse#/media/File:Bridled_Titmouse_(Baeolophus_wollweberi)_(16875140301).jpg',
	},
	{
		'id': 16,
		'family': 'Paridae',
		'common name': 'Juniper titmouse',
		'scientific name': 'Baeolophus ridgwayi',
		'description':
			"The juniper titmouse (Baeolophus ridgwayi) is a passerine bird in the tit family Paridae. The American Ornithologists' Union split the plain titmouse into the oak titmouse and the juniper titmouse in 1996, due to distinct differences in song, preferred habitat, and genetic makeup.",
		'habitat':
			'Woodlands of warm, dry pinyon-juniper, juniper and desert riparian woods',
		'fun fact': '',
		'img url':
			'https://en.wikipedia.org/wiki/Juniper_titmouse#/media/File:Juniper_Titmouse2.jpg',
	},
	{
		'id': 17,
		'family': 'Paridae',
		'common name': 'Black-crested titmouse',
		'scientific name': 'Baeolophus atricristatus',
		'description':
			'The black-crested titmouse or Mexican titmouse (Baeolophus atricristatus), is a passerine bird in the tit family Paridae. Once considered a subspecies of the tufted titmouse (B. bicolor), it was recognized as a separate species in 2002. It is native to southern Texas, Oklahoma, and east-central Mexico. Vagrants have been seen as far north and east as St. Louis, Missouri.',
		'habitat': 'Brushlands, woods, riverside groves',
		'fun fact': '',
		'img url':
			'https://en.wikipedia.org/wiki/Black-crested_titmouse#/media/File:Black-crested_Titmouse_in_Santa_Ana_National_Wildlife_Refuge.jpg',
	},
	{
		'id': 18,
		'family': 'Paridae',
		'common name': 'Varied tit',
		'scientific name': 'Sittiparus varius',
		'description':
			'The varied tit (Sittiparus varius) is a perching bird from the tit family, Paridae. It occurs in the eastern Palearctic in Japan, Korea, and locally in northeastern China (southern Liaoning) and extreme southeastern Russia (southern Kurile Islands).',
		'habitat':
			'Open mixed forests, coniferous forests with Japanese yews, Cryptomeria (sugi), and pines as well as bamboo forests at mountain slopes and in river valleys',
		'fun fact':
			'In Japan varied tits have been used in a kind of show called "omikujihiki" to draw fortune telling-slips (omikuji).',
		'img url':
			'https://en.wikipedia.org/wiki/Varied_tit#/media/File:Varied_tit_at_Tenn%C5%8Dji_Park_in_Osaka,_January_2016.jpg',
	},
	{
		'id': 19,
		'family': 'Paridae',
		'common name': "Owston's tit",
		'scientific name': 'Sittiparus owstoni',
		'description':
			"Owston's tit (Sittiparus owstoni) is a small passerine bird in the tit family Paridae that is endemic to the southern Izu Islands south of Japan.",
		'habitat': 'Forest, anthropogenic biome',
		'fun fact': '',
		'img url':
			'https://en.wikipedia.org/wiki/Owston%27s_tit#/media/File:Sittiparus_owstoni_60369541_(cropped).jpg',
	},
	{
		'id': 20,
		'family': 'Paridae',
		'common name': 'Chestnut-bellied tit',
		'scientific name': 'Sittiparus castaneoventris',
		'description':
			'The chestnut-bellied tit (Sittiparus castaneoventris) is a small passerine bird in the tit family Paridae that is endemic to Taiwan.',
		'habitat':
			'Forest, parks, and gardens, primarily in foothill and montane areas',
		'fun fact': '',
		'img url':
			'https://en.wikipedia.org/wiki/Chestnut-bellied_tit#/media/File:Sittiparus_castaneoventris,_Taiwan_1.jpg',
	},
	{
		'id': 21,
		'family': 'Paridae',
		'common name': 'White-fronted tit',
		'scientific name': 'Sittiparus semilarvatus',
		'description':
			'The white-fronted tit (Sittiparus semilarvatus) is a species of bird in the family Paridae. It is endemic to the Philippines found in the islands of Luzon and Mindanao. Its natural habitat is tropical moist lowland forests. It is threatened by habitat loss.',
		'habitat': 'Tropical moist lowland forests',
		'fun fact': '',
		'img url':
			'https://upload.wikimedia.org/wikipedia/commons/d/d9/White-fronted_Tit.jpg',
	},
	{
		'id': 22,
		'family': 'Paridae',
		'common name': 'Bridled titmouse',
		'scientific name': 'Baeolophus wollweberi',
		'description':
			'The bridled titmouse (Baeolophus wollweberi) is a small songbird, a passerine bird in the tit family Paridae.',
		'habitat': 'Deciduous woods or mixed evergreen-deciduous woods',
		'fun fact': '',
		'img url':
			'https://en.wikipedia.org/wiki/Bridled_titmouse#/media/File:Bridled_Titmouse_(Baeolophus_wollweberi)_(16875140301).jpg',
	},
	{
		'id': 23,
		'family': 'Paridae',
		'common name': 'Tufted titmouse',
		'scientific name': 'Baeolophus bicolor',
		'description':
			'The tufted titmouse (Baeolophus bicolor) is a small songbird from North America, a species in the tit and chickadee family (Paridae). The black-crested titmouse, found from central and southern Texas southward, was included as a subspecies, but now is considered a separate species, Baeolophus atricristatus.',
		'habitat':
			'Deciduous and mixed woods as well as gardens, parks, and shrublands.',
		'fun fact':
			'The titmouse can demonstrate curiosity regarding humans, and sometimes will perch on a window ledge and seem to be peering into the house.',
		'img url':
			'https://en.wikipedia.org/wiki/Tit_(bird)#/media/File:Tufted_Titmouse-27527-2.jpg',
	},
	{
		'id': 24,
		'family': 'Paridae',
		'common name': 'Eurasian blue tit',
		'scientific name': 'Cyanistes caeruleus',
		'description':
			'The Eurasian blue tit (Cyanistes caeruleus) is a small passerine bird in the tit family, Paridae. It is easily recognisable by its blue and yellow plumage and small size.',
		'habitat':
			'Temperate and subarctic Europe and the western Palearctic in deciduous or mixed woodlands',
		'fun fact':
			'Eurasian blue tits are able to culturally transmit learning to other tit species. An example of this, dating from the 1920s, is the ability to open milk bottles with foil tops, to get at the cream underneath.',
		'img url':
			'https://en.wikipedia.org/wiki/Eurasian_blue_tit#/media/File:Eurasian_blue_tit_Lancashire.jpg',
	},
	{
		'id': 25,
		'family': 'Paridae',
		'common name': 'Marsh tit',
		'scientific name': 'Poecile palustris',
		'description':
			"The marsh tit (Poecile palustris) is a passerine bird in the tit family Paridae and genus Poecile, closely related to the willow, Père David's and Songar tits. It is a small bird, around 12 cm (4.7 in) long and weighing 12 g (0.42 oz), with a black crown and nape, pale cheeks, brown back and greyish-brown wings and tail. Between 8 and 11 subspecies are recognised.",
		'habitat':
			'Lowland areas, large areas of moist, broadleaved woodland, wet alder woodland, riverside trees, parks and gardens or orchards',
		'fun fact': '',
		'img url':
			'https://en.wikipedia.org/wiki/Marsh_tit#/media/File:Parus_palustris02.jpg',
	},
	{
		'id': 26,
		'family': 'Paridae',
		'common name': 'Black-capped chickadee',
		'scientific name': 'Poecile atricapillus',
		'description':
			'The black-capped chickadee (Poecile atricapillus) is a small, nonmigratory, North American songbird that lives in deciduous and mixed forests. It is a passerine bird in the tit family, the Paridae. It is the state bird of Massachusetts and Maine in the United States, and the provincial bird of New Brunswick in Canada. It is well known for its ability to lower its body temperature during cold winter nights, its good spatial memory to relocate the caches where it stores food, and its boldness near humans (sometimes feeding from the hand).',
		'habitat': 'Deciduous and mixed forests',
		'fun fact':
			'The Black-capped generally sings out a “fee-bee” call while the Carolina sings “fee-bee fee-bay;” however, this song is learned and, in overlapping territories, may be learned from the “wrong” bird.',
		'img url':
			'https://en.wikipedia.org/wiki/Black-capped_chickadee#/media/File:Poecile-atricapilla-001.jpg',
	},
	{
		'id': 27,
		'family': 'Paridae',
		'common name': 'American bushtit',
		'scientific name': 'Psaltriparus minimus',
		'description':
			'The American bushtit (Psaltriparus minimus) is the only species placed in the genus Psaltriparus and the only species in the family Aegithalidae that is found in the New World. In North America, it is referred to simply as "bushtit".',
		'habitat':
			'Mixed open woodlands, often containing oaks and a scrubby chaparral understory; it also inhabits parks and gardens',
		'fun fact':
			'This species produces an elaborate pendant nest of moss and lichen assembled with spider silk and lined with feathers.',
		'img url':
			'https://upload.wikimedia.org/wikipedia/commons/3/36/Psaltriparus_minimus_-Chilliwack%2C_British_Columbia%2C_Canada_-male-8.jpg',
	},
	{
		'id': 28,
		'family': 'Paridae',
		'common name': 'Green-backed tit',
		'scientific name': 'Parus monticolus',
		'description':
			'The green-backed tit (Parus monticolus) is a species of bird in the family Paridae. It is found in Bangladesh, Bhutan, China, India, Laos, Myanmar, Nepal, Pakistan, Taiwan and Vietnam.',
		'habitat':
			'Boreal forest, temperate forest, and subtropical or tropical moist lowland forest.',
		'fun fact': '',
		'img url':
			'https://en.wikipedia.org/wiki/Green-backed_tit#/media/File:Green_Backed_tit_in_Sattal_India.jpg',
	},
	{
		'id': 29,
		'family': 'Paridae',
		'common name': 'Cinereous tit',
		'scientific name': 'Parus cinereus',
		'description':
			'The cinereous tit (Parus cinereus) is a species of bird in the tit family Paridae. This species is made up of several populations that were earlier treated as subspecies of the great tit (Parus major). These birds are grey backed with white undersides. The great tit in the new sense is distinguishable by the greenish-back and yellowish underside. The distribution of this species extends from parts of West Asia across South Asia and into Southeast Asia.',
		'habitat':
			'Greater and Lesser Sundas found in wide variety of deciduous, coniferous and secondary forests, including montane heath and grasslands',
		'fun fact':
			'Both parents take part in incubation and hissing from within the nest when threatened',
		'img url':
			'https://upload.wikimedia.org/wikipedia/commons/b/b8/Cinereous_tit_%28Parus_cinereus%29_Photograph_by_Shantanu_Kuveskar.jpg',
	},
	{
		'id': 30,
		'family': 'Falconidae',
		'common name': 'Malagasy kestrel',
		'scientific name': 'Falco newtoni',
		'description':
			'The Malagasy kestrel can reach a size of 30 cm. The wings are 180 mm to 195 mm at the males and 188 mm to 203 mm at the females. The males can reach a weight between 112 and 118 grams. The weight of the females is up to 128 grams. The head and the nape of the males is rufous grey with dark streaks. A dark moustachial streak running from the basis of the bill backwards to sides of the throat. The upperparts and the wingcoverts are chestnut with black spots. The uppertail coverts are grey with blackish spots. The long flight feathers are blackish brown, the inner webs are covered with white and chestnut spots. The underparts are whitish. The short flight feathers are chestnut coloured and dark banded. The chest, belly and underwing coverts are covered with black spots. The tail is grey coloured. It has six to seven narrow black bars and a broad subterminal bar. All feathers have white tips. In addition there is a rufous phase. At this morph the head and nape are almost black. Body and underwing coverts are dark chestnut brown with black streaks and spots. The throat exhibits a buffish-white hue. The underwing coverts are greyish white and spotted black. The head of the females is stronger chestnut coloured. The underparts are more spotted and the tail is brown with black bars. Both sexes exhibits a slate grey bill with a black tip. The cere is yellow. The legs are either yellow or bright orange (rufous morph). The juveniles are similar coloured as the females.',
		'habitat': 'Savannahs/wetlands of Madagascar, Mayotte, and the Comores',
		'fun fact':
			"The Malagasy kestrel's call consists of a sharp scream of iitsi, kitsi, kitsi, kitsi or a loud repeated twitter.",
		'img url':
			'https://upload.wikimedia.org/wikipedia/commons/c/cb/Madagascar_Kestrel_RWD.jpg',
	},
	{
		'id': 31,
		'family': 'Falconidae',
		'common name': 'Seychelles kestrel',
		'scientific name': 'Falco auraeus',
		'description':
			"The Seychelles kestrel is the smallest of kestrels, 18-23 cm long witha wingspan of 40-45 cm. The wings are fairly short and rounded. The adult male's upperparts are reddish brown with black spots while the underparts are unspotted and buff. The head and rump are dark blue-grey. The tail is blue-grey with black bars. The bill is dark and the feet and cere are yellow. Females are similar to the males in appearance but are a little larger and paler. Immature birds have a brown, streaked head, spots on the breast and a buff tip to the tail.",
		'habitat': 'Forest, scrub, and farmland around rock faces nad houses',
		'fun fact':
			'This species only has a population of about 800 birds, and is considered vulnerable.',
		'img url':
			'https://en.wikipedia.org/wiki/Seychelles_kestrel#/media/File:Falco_araea_Seychelles_Kestrel_side_views.jpg',
	},
	{
		'id': 32,
		'family': 'Falconidae',
		'common name': 'Mauritius kestrel',
		'scientific name': 'Falco punctatus',
		'description':
			'The Mauritius kestrel can reach a size between 26 and 30.5 cm. The weight is up to 250 grams. The males are slightly smaller than the females. Wingspan is approximately 45 cm and wings are rounded, unlike those of other falcons. The lifespan is 15 years in captivity. The Mauritius kestrel hunts by means of short, swift flights through forests. It is carnivorous, eating geckos, dragonflies, cicadas, cockroaches, crickets, and small birds.',
		'habitat':
			'Forests, cliffs, and ravines of the island nation of Mauritius (Indian Ocean)',
		'fun fact':
			'The Mauritius kestrel was once the most endagered falcon species in the world in the 1970s - it has since recovered from endangerment, and is now considered vulnerable.',
		'img url':
			'https://en.wikipedia.org/wiki/Mauritius_kestrel#/media/File:Falco_punctatus.jpg',
	},
	{
		'id': 33,
		'family': 'Falconidae',
		'common name': 'Spotted kestrel',
		'scientific name': 'Falco moluccensis',
		'description':
			'Also known as the Moluccan kestrel, the Spotted Kestrel is a heavily-marked reddish-brown falcon. Dense spotting on back and wings contrasts sharply with gray tail. Sexes generally similar, but female averages more densely patterned, with fine barring on the tail. The only resident kestrel throughout much of range, but potential for overlap with Australian and Eurasian Kestrels exists; note densely-patterned underparts, overall richer and darker coloration, and dark brown crown. Hovers and hunts from an exposed perch. Gives shrill yaps and squeaks.',
		'habitat': 'Open habitats across the Indonesian Archipelago',
		'fun fact':
			'The Spotted kestrel has a habit of fluffing its tail while it is perched. This helps these birds to balance while they feed.',
		'img url':
			'https://en.wikipedia.org/wiki/Spotted_kestrel#/media/File:Spotted_kestrel_-bird_-birding_-bandungbirding_-Ig_Bird_-birdextreme_-nature_perfection_-wildlife_(16656529537).jpg',
	},
	{
		'id': 34,
		'family': 'Falconidae',
		'common name': 'Nankeen kestrel',
		'scientific name': 'Falco cenchroides',
		'description':
			'The Nankeen kestrel is a small, slim falcon 28 to 35 cm (11 to 14 in) long with a wingspan of 66 to 78 cm (26 to 31 in).The male weighs 121 to 195 g (4.3 to 6.9 oz) while the female weighs 115 to 273 g (4.1 to 9.6 oz).[7] It has pale rufous upper-parts with contrasting black flight-feathers and is finely streaked white below, with a black subterminal band. The cere, eye-ring, and legs are yellow. The male has a pale grey crown and tail with a darker grey tear-mark, while the female and juvenile have a pale rufous crown and finely barred rufous tail.',
		'habitat':
			'temperate grasslands and open woodlands of Australia and New Guinea',
		'fun fact':
			"The Nankeen kestrel is one of the smallest falcons, and unlike many, does not rely on speed to catch it's prey.",
		'img url':
			"https://en.wikipedia.org/wiki/Nankeen_kestrel#/media/File:Falco_cenchroides_-_Bushell's_Lagoon.jpg",
	},
	{
		'id': 35,
		'family': 'Falconidae',
		'common name': 'Common kestrel',
		'scientific name': 'Falco tinnuculus',
		'description':
			'Common kestrels measure 32–39 cm (12+1⁄2–15+1⁄2 in) from head to tail, with a wingspan of 65–82 cm (25+1⁄2–32+1⁄2 in). Females are noticeably larger, with the adult male weighing 136–252 g (4+3⁄4–8+7⁄8 oz), around 155 g (5+1⁄2 oz) on average; the adult female weighs 154–314 g (5+3⁄8–11+1⁄8 oz), around 184 g (6+1⁄2 oz) on average. Their plumage is mainly light chestnut brown with blackish spots on the upperside and buff with narrow blackish streaks on the underside; the remiges are also blackish.',
		'habitat': 'Europe, Asia, Africa, east coast of North America',
		'fun fact':
			'The Common kestrel is able to see near ultraviolent light, allowing the birds to detect the urine trails around rodent burrows.',
		'img url':
			'https://en.wikipedia.org/wiki/Common_kestrel#/media/File:Common_kestrel_falco_tinnunculus.jpg',
	},
	{
		'id': 36,
		'family': 'Falconidae',
		'common name': 'Rock kestrel',
		'scientific name': 'Falco rupicolus',
		'description':
			'The Rock kestrel is a A slender, medium-sized kestrel, between 30 and 33 centimeters tall. Adult male kestrels weigh between 183g and 254g, while females weigh between 190g and 280g.',
		'habitat':
			'High-lying, central, and eastern regions of Angola, the Democratic Republic of Congo, Tanzania, and South Africa.',
		'fun fact':
			'Rock kestrels have been observed following baboons through grasslands, and caatching insect species that are flushed out as a result of the baboons path.',
		'img url': 'https://en.wikipedia.org/wiki/Rock_kestrel',
	},
	{
		'id': 37,
		'family': 'Bop',
		'common name': 'Greater Iophorina',
		'scientific name': 'Lophorina superba',
		'description':
			'After meticulously preparing a "dance floor" (even scrubbing the dirt or branch smooth with leaves), the male first attracts a female with a loud call. His black feather cape and blue-green chest feathers spring upward and spread widely around his head, instantly transforming the frontal view .of the male bird into a spectacular ellipse-shaped creature that rhythmically snaps his tail feathers against each other, similar to how snapping fingers work, while hopping in frantic circles around the female.',
		'habitat': 'Rainforests of New Guinea',
		'fun fact':
			"The word 'Lophorina' in the bird's scientific name means 'tuft', this is based on the upward standing tuft of feathers above their head.",
		'img url': 'https://images-cdn.9gag.com/photo/aQoKVpw_700b.jpg',
	},
	{
		'id': 38,
		'family': 'Bop',
		'common name': 'King Bird of Paradise',
		'scientific name': 'Cicinnurus regius',
		'description':
			'They are perhaps more persistent callers than any other birds of paradise. Courtship involves complex vocalizations, feather manipulations, and a variety of body posturing and movements, including hanging fully inverted and pendulum-like swinging.',
		'habitat': 'Lowland forests of New Guinea and western satellite islands',
		'fun fact':
			'The female builds the nest and cares for the young without male assistance.',
		'img url':
			'https://en.wikipedia.org/wiki/File:Cicinnurus_regius-20031005.jpg',
	},
	{
		'id': 39,
		'family': 'Bop',
		'common name': "King of Saxony's",
		'scientific name': 'Pteridophora alberti',
		'description':
			'The songs sung by the males are reminiscent of "radio-static hisses" and can last from four to five seconds.',
		'habitat': 'Mountains and rainforests of New Guinea',
		'fun fact': 'These birds can easily live up to 30 years',
		'img url':
			'https://en.wikipedia.org/wiki/King_of_Saxony_bird-of-paradise#/media/File:Pteridophora_alberti_-Papua_New_Guinea-8.jpg',
	},
	{
		'id': 40,
		'family': 'Bop',
		'common name': 'Red Bird of Paradise',
		'scientific name': 'Paradisaea rubra',
		'description':
			'Large, up to 33 cm long, brown and yellow with a dark brown iris, grey legs and yellow bill. The male has an emerald green face, a pair of elongated black corkscrew-shaped tail wires, dark green feather pompoms above each eye and a train of glossy crimson red plumes with whitish tips at either side of the breast. The female is similar but smaller in size, with a dark brown face and has no ornamental red plumes.',
		'habitat':
			'Lowland rainforests of Waigeo and Batanta islands of Raja Ampat, West Papua',
		'fun fact':
			'The males take a long time to mature. It can take a male Red Bird up to seven years for them to gain their adult plumage.',
		'img url':
			'https://en.wikipedia.org/wiki/Red_bird-of-paradise#/media/File:Stavenn_Paradisaea_rubra_00.jpg',
	},
	{
		'id': 41,
		'family': 'Bop',
		'common name': "Wilson's Bird of Paradise",
		'scientific name': 'Cicinnurus respublica',
		'description':
			"Wilson's bird-of-paradise is rather small. Males can reach a length of 16 centimetres, while females can reach a length of 16 cm. The male is a red and black bird-of-paradise, with a yellow mantle on its neck, light green mouth, rich blue feet and two curved violet tail feathers. The head is naked blue, with a black double cross pattern on it. The female is a brownish bird with bare blue crown.",
		'habitat':
			'The hill and lowland rainforests of Waigeo and Batanta Islands off West Papua.',
		'fun fact':
			'The male species has a little blue cap on their head because they are, in fact, gentlemanly.',
		'img url':
			"https://en.wikipedia.org/wiki/Wilson%27s_bird-of-paradise#/media/File:Wilson's_Bird_of_Paradise_Best.jpg",
	},
	{
		'id': 42,
		'family': 'Bop',
		'common name': 'Lesser Bird of Paradise',
		'scientific name': 'Paradisaea minor',
		'description':
			'The Lesser Bird-of-Paradise is medium-sized, maroon-brown with a yellow crown and brownish-yellow upper back. The male has a dark emerald-green throat, a pair of long tail-wires and is adorned with ornamental flank plumes which are deep yellow at their base and fade outwards into white. The female is a maroon bird with a dark-brown head and whitish underparts.',
		'habitat':
			'Forests of northern New Guinea, and the nearby islands of Misool and Yapen',
		'fun fact':
			'The female usually lays two pinkish eggs with dark markings in a nest in a tree high above ground.',
		'img url':
			'https://en.wikipedia.org/wiki/Lesser_bird-of-paradise#/media/File:Lesser_Bird_of_Paradise,_Bronx_Zoo.jpg',
	},
	{
		'id': 43,
		'family': 'Bop',
		'common name': "Victoria's Riflebird",
		'scientific name': 'Ptiloris victoriae',
		'description':
			'The smallest riflebird. Males have an iridescent purple sheen plumage, which becomes more blue-green on the head and more bronze on the lower breast. Females have a pale eyebrow, and the buff underparts are faintly barred with brown.',
		'habitat': 'Northeastern Queensland, Australia',
		'fun fact':
			'As well as insects, they eat fruits from the trees, some which they peel by holding the fruit with one foot and removing the skin with their bill.',
		'img url':
			'https://en.wikipedia.org/wiki/Victoria%27s_riflebird#/media/File:Ptiloris_victoriae_-Daintree,_Queensland,_Australia-8_(1).jpg',
	},
	{
		'id': 44,
		'family': 'Bop',
		'common name': 'Magnificent Riflebird',
		'scientific name': 'Ptiloris magnificus',
		'description':
			'The male is velvet-black with elongated black filamental flank plumes, an iridescent blue-green crown, a triangle-shaped breast shield, and on central tail feathers. The female is brownish with dark spots and buff bars below with a white brow.',
		'habitat':
			'Lowland rainforests of New Guinea and the northern Cape York Peninsula of Australia',
		'fun fact':
			'During courtship displays, the male fully extends his wings and raises his tail; he jerks upward while swinging his head from side to side, showing off his metallic blue-green breast shield, and producing a distinctive "woosh" sound as he flaps his wings.',
		'img url':
			'https://en.wikipedia.org/wiki/Magnificent_riflebird#/media/File:Magnificent_Riflebird.jpg',
	},
	{
		'id': 45,
		'family': 'Bop',
		'common name': "Goldie's Bird of Paradise",
		'scientific name': 'Paradisaea decora',
		'description':
			'The male has a yellow and dark green plumage with a lavender grey breast. It is adorned with large crimson ornamental flank plumes and two long tail wired. Unadorned females have an olive-brown plumage with cinnamon-brown below.',
		'habitat':
			"The hill forests of Fergusson and Normanby Island of the D'Entrecasteaux Archipelago, eastern Papuan Islands",
		'fun fact':
			"It's name commemorates the Scottish collector, Andrew Goldie, who discovered the bird in 1882.",
		'img url':
			'https://en.wikipedia.org/wiki/Goldie%27s_bird-of-paradise#/media/File:Paradesia_decora_Keulemans.jpg',
	},
	{
		'id': 46,
		'family': 'Bop',
		'common name': 'Ribbon-tailed Astrapia',
		'scientific name': 'Astrapia mayeri',
		'description':
			'The male has an iridescent olive green and bronze plumage and has two extremely long, ribbon-like white tail feathers. The female has an irridescent head and does not have the long white tails.',
		'habitat':
			'Subalpine forests in the western part of the central highlands of Papau New Guinea',
		'fun fact':
			'The male has the longest tail feathers in relation to body and size of any bird, over three times the length of its body.',
		'img url':
			'https://en.wikipedia.org/wiki/Ribbon-tailed_astrapia#/media/File:Ribbon-tailed_Astrapia.jpg',
	},
	{
		'id': 47,
		'family': '',
		'common name': 'Greater Iophorina',
		'scientific name': 'Lophorina superba',
		'description':
			'After meticulously preparing a "dance floor" (even scrubbing the dirt or branch smooth with leaves), the male first attracts a female with a loud call. His black feather cape and blue-green chest feathers spring upward and spread widely around his head, instantly transforming the frontal view .of the male bird into a spectacular ellipse-shaped creature that rhythmically snaps his tail feathers against each other, similar to how snapping fingers work, while hopping in frantic circles around the female.',
		'habitat': 'Rainforests of New Guinea',
		'fun fact':
			"The word 'Lophorina' in the bird's scientific name means 'tuft', this is based on the upward standing tuft of feathers above their head.",
		'img url': 'https://images-cdn.9gag.com/photo/aQoKVpw_700b.jpg',
	},
	{
		'id': 48,
		'family': '',
		'common name': 'King Bird of Paradise',
		'scientific name': 'Cicinnurus regius',
		'description':
			'They are perhaps more persistent callers than any other birds of paradise. Courtship involves complex vocalizations, feather manipulations, and a variety of body posturing and movements, including hanging fully inverted and pendulum-like swinging.',
		'habitat': 'Lowland forests of New Guinea and western satellite islands',
		'fun fact':
			'The female builds the nest and cares for the young without male assistance.',
		'img url':
			'https://en.wikipedia.org/wiki/File:Cicinnurus_regius-20031005.jpg',
	},
	{
		'id': 49,
		'family': '',
		'common name': "King of Saxony's",
		'scientific name': 'Pteridophora alberti',
		'description':
			'The songs sung by the males are reminiscent of "radio-static hisses" and can last from four to five seconds.',
		'habitat': 'Mountains and rainforests of New Guinea',
		'fun fact': 'These birds can easily live up to 30 years',
		'img url':
			'https://en.wikipedia.org/wiki/King_of_Saxony_bird-of-paradise#/media/File:Pteridophora_alberti_-Papua_New_Guinea-8.jpg',
	},
	{
		'id': 50,
		'family': '',
		'common name': 'Red Bird of Paradise',
		'scientific name': 'Paradisaea rubra',
		'description':
			'Large, up to 33 cm long, brown and yellow with a dark brown iris, grey legs and yellow bill. The male has an emerald green face, a pair of elongated black corkscrew-shaped tail wires, dark green feather pompoms above each eye and a train of glossy crimson red plumes with whitish tips at either side of the breast. The female is similar but smaller in size, with a dark brown face and has no ornamental red plumes.',
		'habitat':
			'Lowland rainforests of Waigeo and Batanta islands of Raja Ampat, West Papua',
		'fun fact':
			'The males take a long time to mature. It can take a male Red Bird up to seven years for them to gain their adult plumage.',
		'img url':
			'https://en.wikipedia.org/wiki/Red_bird-of-paradise#/media/File:Stavenn_Paradisaea_rubra_00.jpg',
	},
	{
		'id': 51,
		'family': '',
		'common name': "Wilson's Bird of Paradise",
		'scientific name': 'Cicinnurus respublica',
		'description':
			"Wilson's bird-of-paradise is rather small. Males can reach a length of 16 centimetres, while females can reach a length of 16 cm. The male is a red and black bird-of-paradise, with a yellow mantle on its neck, light green mouth, rich blue feet and two curved violet tail feathers. The head is naked blue, with a black double cross pattern on it. The female is a brownish bird with bare blue crown.",
		'habitat':
			'The hill and lowland rainforests of Waigeo and Batanta Islands off West Papua.',
		'fun fact':
			'The male species has a little blue cap on their head because they are, in fact, gentlemanly.',
		'img url':
			"https://en.wikipedia.org/wiki/Wilson%27s_bird-of-paradise#/media/File:Wilson's_Bird_of_Paradise_Best.jpg",
	},
	{
		'id': 52,
		'family': '',
		'common name': 'Lesser Bird of Paradise',
		'scientific name': 'Paradisaea minor',
		'description':
			'The Lesser Bird-of-Paradise is medium-sized, maroon-brown with a yellow crown and brownish-yellow upper back. The male has a dark emerald-green throat, a pair of long tail-wires and is adorned with ornamental flank plumes which are deep yellow at their base and fade outwards into white. The female is a maroon bird with a dark-brown head and whitish underparts.',
		'habitat':
			'Forests of northern New Guinea, and the nearby islands of Misool and Yapen',
		'fun fact':
			'The female usually lays two pinkish eggs with dark markings in a nest in a tree high above ground.',
		'img url':
			'https://en.wikipedia.org/wiki/Lesser_bird-of-paradise#/media/File:Lesser_Bird_of_Paradise,_Bronx_Zoo.jpg',
	},
	{
		'id': 53,
		'family': '',
		'common name': "Victoria's Riflebird",
		'scientific name': 'Ptiloris victoriae',
		'description':
			'The smallest riflebird. Males have an iridescent purple sheen plumage, which becomes more blue-green on the head and more bronze on the lower breast. Females have a pale eyebrow, and the buff underparts are faintly barred with brown.',
		'habitat': 'Northeastern Queensland, Australia',
		'fun fact':
			'As well as insects, they eat fruits from the trees, some which they peel by holding the fruit with one foot and removing the skin with their bill.',
		'img url':
			'https://en.wikipedia.org/wiki/Victoria%27s_riflebird#/media/File:Ptiloris_victoriae_-Daintree,_Queensland,_Australia-8_(1).jpg',
	},
	{
		'id': 54,
		'family': '',
		'common name': 'Magnificent Riflebird',
		'scientific name': 'Ptiloris magnificus',
		'description':
			'The male is velvet-black with elongated black filamental flank plumes, an iridescent blue-green crown, a triangle-shaped breast shield, and on central tail feathers. The female is brownish with dark spots and buff bars below with a white brow.',
		'habitat':
			'Lowland rainforests of New Guinea and the northern Cape York Peninsula of Australia',
		'fun fact':
			'During courtship displays, the male fully extends his wings and raises his tail; he jerks upward while swinging his head from side to side, showing off his metallic blue-green breast shield, and producing a distinctive "woosh" sound as he flaps his wings.',
		'img url':
			'https://en.wikipedia.org/wiki/Magnificent_riflebird#/media/File:Magnificent_Riflebird.jpg',
	},
	{
		'id': 55,
		'family': '',
		'common name': "Goldie's Bird of Paradise",
		'scientific name': 'Paradisaea decora',
		'description':
			'The male has a yellow and dark green plumage with a lavender grey breast. It is adorned with large crimson ornamental flank plumes and two long tail wired. Unadorned females have an olive-brown plumage with cinnamon-brown below.',
		'habitat':
			"The hill forests of Fergusson and Normanby Island of the D'Entrecasteaux Archipelago, eastern Papuan Islands",
		'fun fact':
			"It's name commemorates the Scottish collector, Andrew Goldie, who discovered the bird in 1882.",
		'img url':
			'https://en.wikipedia.org/wiki/Goldie%27s_bird-of-paradise#/media/File:Paradesia_decora_Keulemans.jpg',
	},
	{
		'id': 56,
		'family': '',
		'common name': 'Ribbon-tailed Astrapia',
		'scientific name': 'Astrapia mayeri',
		'description':
			'The male has an iridescent olive green and bronze plumage and has two extremely long, ribbon-like white tail feathers. The female has an irridescent head and does not have the long white tails.',
		'habitat':
			'Subalpine forests in the western part of the central highlands of Papau New Guinea',
		'fun fact':
			'The male has the longest tail feathers in relation to body and size of any bird, over three times the length of its body.',
		'img url':
			'https://en.wikipedia.org/wiki/Ribbon-tailed_astrapia#/media/File:Ribbon-tailed_Astrapia.jpg',
	},
]

export default birdInfo
