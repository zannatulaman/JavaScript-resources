const inputSong = document.getElementById("input-Song");
const buttonSearch = document.getElementById("button-search");
const lyrics = document.getElementById("listLyrics");


buttonSearch.addEventListener("click", () => {
    const artistSong = inputSong.value
    //console.log(artistSong);

    if(artistSong){
        
        const apiUrl = 'https://api.lyrics.ovh/suggest/' + artistSong + '';

        fetch(apiUrl)
        .then((response) => response.json())
        .then((info) => {
            console.log(info)

            // const songTitle = info.data[0].title
            // const songImage = info.data[0].album.cover
            // console.log(songTitle,songImage);

            for(let i= 0 ; i <= 5; i++){
                const song = info.data[i]
                console.log(song);
                
                const songTitle = song.title 
                const songImage = song.album.cover

                //console.log(songTitle, songImage);

                lyrics.innerHTML = `<li class=cardDesign ><strong>${songTitle}</strong> <br> <strong>${songImage}</strong> </li>`

                const createItem = document.createElement("li");
                createItem.innerHTML = `<div>${inputSong}</div>`
            }    
           
        })



        .catch((error) => console.log(error))
    
         
    }else{
        lyrics.innerHTML = "Please insert valid song";
        lyrics.style.fontSize = "3rem";
        lyrics.style.textAlign = "center"
    }



})