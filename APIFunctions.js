function GetTwitchClips(token) {
    fetch('https://api.twitch.tv/helix/clips', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          authorization: 'Bearer ' + token,
          client_id: 'r4qo7fi9jgkak7s3xxnggz9o9ca0mn'
        },
        body: JSON.stringify({
            broadcaster_id: '474447255',
            first: 5
        })
    }).then(res => {
        return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

function AuthTwitch() {
    fetch('https://id.twitch.tv/oauth2/token', {
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
    .then(data => console.log(data))
    .catch(error => console.log(error))
}