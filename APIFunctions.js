function GetTiktokInfos() {
    fetch('https://open.tiktokapis.com/v2/user/info', {
        method: 'get',
        headers: {
            
        }
    })
}