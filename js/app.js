let musicItem = document.querySelectorAll(".fa-play")
let audioItem = document.querySelectorAll("audio")

musicItem.forEach(function (musics) {

    musics.addEventListener("click",function (event) {
        let selectedMusic = event.target.dataset.name

        audioItem.forEach(function (items) {
            if ( items.dataset.name === selectedMusic){
                items.currentTime = 0 ;
                items.play()
            }else {
                items.pause()
            }
        })
    })
})
