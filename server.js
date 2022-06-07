const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const songTitles = {
    'all too well (10 minute version)':{
        'album': 'Red (Taylor\'s Version)',
        'songLength': '10:13'
    },
    'sad beautiful tragic':{
        'album': 'Red (Taylor\'s Version)',
        'songLength':'4:44'
    },
    'delicate':{
        'album': 'Reputation',
        'songLength':'3:52'
    },
    'unknown': {
        'album': 'unknown',
        'songLength': 'unknown'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request, response) => {
    response.json(songTitles);
})

app.get('/api/:songName', (request,response)=>{
    const songTitleName = request.params.songName.toLowerCase()
    if(songTitles[songTitleName]){
        response.json(songTitles[songTitleName])
    }else{
        response.json(songTitles['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}! You better go get a Taylor Swift song about it!`)
})