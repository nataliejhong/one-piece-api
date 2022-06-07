const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 4000

app.use(cors())

const strawHatPirates = {
    'luffy':{
        'image': 'https://static.wikia.nocookie.net/onepiece/images/6/6d/Monkey_D._Luffy_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20200429191518',
        'name': 'Monkey D. Luffy',
        'currentAge': 19,
        'occupation': 'Pirate',
        'crewPosition': 'Captain',
        'crew': 'Strawhat Pirates',
        'home': 'Foosha Village',
        'bounty': "1,500,000,000 Belli"
    },
    'zoro':{
        'image': 'https://static.wikia.nocookie.net/onepiece/images/5/52/Roronoa_Zoro_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20141008195159',
        'name': 'Roronoa Zoro',
        'currentAge': 21,
        'occupation': 'Pirate',
        'crewPosition': 'Combatant',
        'crew': 'Strawhat Pirates',
        'home': 'Shimotsuki Village',
        'bounty': "320,000,000 Belli"
        
    },
    'sanji':{
        'image': 'https://static.wikia.nocookie.net/onepiece/images/b/b6/Sanji_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20170625125657',
        'name': 'Vinsmoke Sanji',
        'currentAge': 21,
        'occupation': 'Pirate',
        'crewPosition': 'Cook',
        'crew': 'Strawhat Pirates',
        'home': 'Baratie',
        'bounty': "330,000,000 Belli"
    },
    'nami':{
        'image': 'https://static.wikia.nocookie.net/onepiece/images/6/68/Nami_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20190720162446',
        'name': 'Nami',
        'currentAge': 20,
        'occupation': 'Pirate',
        'crewPosition': 'Navigator',
        'crew': 'Strawhat Pirates',
        'home': 'Cocoyashi Village',
        'bounty': "66,000,000 Belli"
    },
    'usopp':{
        'image': 'https://static.wikia.nocookie.net/onepiece/images/3/35/Usopp_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20130708033601',
        'name': 'Usopp',
        'currentAge': 19,
        'occupation': 'Pirate',
        'crewPosition': 'Siper',
        'crew': 'Strawhat Pirates',
        'home': 'Syrup Village',
        'bounty': "200,000,000 Belli"
    },
    'chopper':{
        'image': 'https://static.wikia.nocookie.net/onepiece/images/a/af/Tony_Tony_Chopper_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20130428202154',
        'name': 'Tony Tony Chooper',
        'currentAge': 17,
        'occupation': 'Pirate',
        'crewPosition': 'Doctor',
        'crew': 'Strawhat Pirates',
        'home': 'Drum Island',
        'bounty': "100 Belli"
    },
    'robin':{
        'image': 'https://static.wikia.nocookie.net/onepiece/images/b/bc/Nico_Robin_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20190202051257',
        'name': 'Nico Robin',
        'currentAge': 30,
        'occupation': 'Pirate',
        'crewPosition': 'Archaeologist',
        'crew': 'Strawhat Pirates',
        'home': 'Ohara',
        'bounty': "130,000,000 Belli"
    },
    'franky':{
        'image': 'https://static.wikia.nocookie.net/onepiece/images/8/8c/Franky_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20130225034035',
        'name': 'Franky',
        'currentAge': 36,
        'occupation': 'Pirate',
        'crewPosition': 'Shipwright',
        'crew': 'Strawhat Pirates',
        'home': 'Water 7',
        'bounty': "94,000,000 Belli"
    },
    'brook':{
        'image': 'https://static.wikia.nocookie.net/onepiece/images/4/41/Brook_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20161016160925',
        'name': 'Brook',
        'currentAge': 90,
        'occupation': 'Pirate',
        'crewPosition': 'Musician',
        'crew': 'Strawhat Pirates',
        'home': 'Nakamura Island',
        'bounty': "83,000,000 Belli"
    },
    'jinbe':{
        'image': 'https://static.wikia.nocookie.net/onepiece/images/8/81/Jinbe_Anime_Infobox.png/revision/latest?cb=20170521201349',
        'name': 'Jinbe',
        'currentAge': 46,
        'occupation': 'Pirate',
        'crewPosition': 'Helmsman',
        'crew': 'Strawhat Pirates',
        'home': 'Fish-man Island',
        'bounty': "438,000,000 Belli"
    },
    'vivi':{
        'image': 'https://static.wikia.nocookie.net/onepiece/images/0/09/Nefertari_Vivi_Anime_Post_Timeskip_Infobox.png/revision/latest?cb=20190505023647',
        'name': 'Nefertari Vivi',
        'currentAge': 18,
        'occupation': 'Princess',
        'crewPosition': 'Former Pirate',
        'crew': 'Strawhat Pirates',
        'home': 'Arabasta Kingdon',
        'bounty': "0 Belli"
    },
    'unknown':{
        'image': 'unknown',
        'name': 'unknown',
        'currentAge': 0,
        'occupation': 'unknown',
        'crewPosition': 'unknown',
        'crew': 'unknown',
        'home': 'unknown',
        'bounty': "unknown"
    }
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const strawHat = request.params.name.toLowerCase()
    if(strawHatPirates[strawHat]){
        response.json(strawHatPirates[strawHat])
    } else{
        response.json(strawHatPirates['unknown'])
    }
    response.json(strawHatPirates)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})