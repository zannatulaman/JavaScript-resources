const inputSong = document.getElementById("input-Song");
const buttonSearch = document.getElementById("button-search");
const lyrics = document.getElementById("listLyrics");

buttonSearch.addEventListener("click", () => {
    const artistSong = inputSong.value;

    if (artistSong) {
        const apiUrl = `https://api.lyrics.ovh/suggest/${artistSong}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then((info) => {
                console.log(info);
                lyrics.innerHTML = ""; // Clear previous results

                for (let i = 0; i <= 5; i++) { // Change <= to < to avoid out of bounds error
                    const song = info.data[i];
                    console.log(song);

                    const songTitle = song.title;
                    const songImage = song.album.cover;

                    // Create a new list item for each song
                    const createItem = document.createElement("li");
                    // createItem.classList.add("li");
                    createItem.innerHTML = `<div class="design"><strong>${songTitle}</strong> <br> <img src="${songImage}" alt="${songTitle} cover" /></div>`;
                     
                    //console.log(inputSong)

                    // Append the new list item to the lyrics element
                    lyrics.appendChild(createItem);

                }
            })
            .catch((error) => console.log(error));
    } else {
        lyrics.innerHTML = "Please insert a valid song";
        lyrics.style.fontSize = "3rem";
        lyrics.style.textAlign = "center";
    }
});
