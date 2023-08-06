async function AuthTwitch() {
    var token
    await fetch('https://id.twitch.tv/oauth2/token', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            client_id: 'r4qo7fi9jgkak7s3xxnggz9o9ca0mn',
            client_secret: 'cg7z363ikkvf1ocrk8f2c5osmaws45',
            grant_type: 'client_credentials'
        })
    }).then(res => {
        return res.json()
    })
    .then((data) => {
        console.log(data)
        token = data.access_token
        console.log(token)
    })
    .catch(error => console.log(error))

    return token
}

async function GetTwitchClips(token) {
    var clipsInfo
    console.log('Bearer '.concat(token))
    await fetch('https://api.twitch.tv/helix/clips?broadcaster_id=474447255&first=5', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer '.concat(token),
          'client-id': 'r4qo7fi9jgkak7s3xxnggz9o9ca0mn'
        }
    }).then(res => {
        return res.json()
    })
    .then((data) => {
        console.log(data)
        clipsInfo = data
    })
    .catch(error => console.log(error))

    return clipsInfo
}