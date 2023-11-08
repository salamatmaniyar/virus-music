

// Initialize the Variables
let songIndex = 20;
let audioElement = new Audio('songs1/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs1 = [
    {songName: "AGAR TUMM SATH HO:-recommended by swati.k", filePath: "songs1/1.mp3", coverPath: "covers/5.jpg"},
    {songName: "pasoori [coockstudio]:-recommended by swati.k", filePath: "songs1/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "tera chehra:-recommended by fizza.p", filePath: "songs1/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "KHAMOSHIYA", filePath: "songs1/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "ek din mohabbat odh kar [bajarani bhaijan]", filePath: "songs1/5.mp3", coverPath: "covers/1.jpg"},
    {songName: "SUN SUN SUN BARSAAT KI DHOON", filePath: "songs1/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "KAFIRAANA ", filePath: "songs1/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "teri oor", filePath: "songs1/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "jina jina", filePath: "songs1/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "love me thoda aur", filePath: "songs1/10.mp3", coverPath: "covers/10.jpg"},
    {songName: "KESATIYA TERA ISHQ", filePath: "songs1/11.mp3", coverPath: "covers/1.jpg"},
    {songName: "kesariya mashup:-recommended by shreya.m", filePath: "songs1/12.mp3", coverPath: "covers/2.jpg"},
    {songName: "give me some shine:-recommended by sandesh.h", filePath: "songs1/13.mp3", coverPath: "covers/3.jpg"},
    {songName: "tera yaar hu main:-recommended by shreya.m", filePath: "songs1/14.mp3", coverPath: "covers/4.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs1[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs1[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs1/${songIndex+1}.mp3`;
        masterSongName.innerText = songs1[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=20){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs1/${songIndex+1}.mp3`;
    masterSongName.innerText = songs1[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs1/${songIndex+1}.mp3`;
    masterSongName.innerText = songs1[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})