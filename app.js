const playsound = (note)=>{
    const audio = new Audio(`audios/${note}.mp3`)
    audio.play()
    console.log(note);
}