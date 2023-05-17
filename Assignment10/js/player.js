/*
        Brendan Ready
        Assignment 10
        M12 Assignment
*/

// The Music Player Application v2
/* 
Your job in this assignment will be to do a minimal rewrite of the application that allows the user to pick an artist/album from a drop down menu on a web page and then click a play button to play the actual album. 
Every time the play button is clicked, you need to keep track of which albums are being played and how often. 
There should be a button on the screen that reads “Show my favorite album”. 
When the user clicks this button, it should show the user’s favorite album based on how many times it’s been played. 

When building the application, keep the following in mind:

Store artists/albums within an array
Bind that array to the drop down menu on the web page
In code, iterate through the array and programmatically create new Album class instances based on each album within the array. 
You’ll also need to add these instances to the player.
Add a play button to the web page. When the user selects an artist/album from the drop down menu and clicks the play button, the play() method should be called for that album. 
This will track that album as being played.
When the user clicks the “show my favorite album” button, the favoriteAlbum() method should be called and the user’s favorite album based on number of plays should be displayed in the web page.
 */

let dropDown = document.querySelector('#dropdown');
let playBtn = document.querySelector('#play');
let showFavoriteAlbumBtn = document.querySelector('#showFavoriteAlbum');
let showFav = document.querySelector('#showFav');
let favoriteAlbum = document.querySelector('#favoriteAlbum');
let span = document.createElement('span');

const playList = [
    {artist: 'Operation Ivy', title: 'Energy'},
    {artist: 'Blink 182', title: 'Dude Ranch'},
    {artist: 'New Found Glory', title: 'Sticks and Stones'},
    {artist: 'Goldfinger', title: 'Goldfinger'},
    {artist: 'Bush', title: 'Sixteen Stone'},
    {artist: 'Korn', title: 'Issues'},
    {artist: 'P.O.D.', title: 'Satellite'},
    {artist: 'Deftones', title: 'White Pony'}
];

for (const [i, album] of playList.entries()) {
    let option = document.createElement('option');
    let artistText = document.createTextNode(album.artist);
    let albumText = document.createTextNode(album.title);
    option.appendChild(artistText);
    option.appendChild(document.createTextNode(' - '));
    option.appendChild(albumText);
    option.value = `${i}`;
    dropDown.insertBefore(option, dropDown.lastChild);
}

class Jukebox {
    constructor(albums) {
        this.albums = [];
    }
    addAlbum = function(album) {
        this.albums.push(album);
    }
    favoriteAlbum = function() {
        let max = -1, fav;
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played;
                fav = this.albums[i];
            }
        }
        return fav.display();
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist;
        this.title = title;
        this.played = 0;
    }
    play = function() {
        this.played += 1;
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`;
    }
}

let jbox = new Jukebox();

playList.forEach(album => jbox.addAlbum(new Album(album.artist, album.title)));

playBtn.addEventListener('click', (e) => {
    e.preventDefault();
    jbox.albums[dropDown.value].play();
});

showFavoriteAlbumBtn.addEventListener('click', (e) => {
    if( !document.getElementById('span') ) {
        favoriteAlbum.innerHTML = `<span id="span"></span>`;
        let text = document.createTextNode(`Your favorite album is: ${jbox.favoriteAlbum()}`);
        span.appendChild(text);
        favoriteAlbum.appendChild(span);
    } else {
        let span = document.getElementById('span');
        favoriteAlbum.remove();
        favoriteAlbum = document.createElement('p');
        favoriteAlbum.id = 'favoriteAlbum';
        showFav.appendChild(favoriteAlbum);
        favoriteAlbum.innerHTML = `<span id="span"></span>`;
        let text = document.createTextNode(`Your favorite album is: ${jbox.favoriteAlbum()}`);
        span.appendChild(text);
        favoriteAlbum.appendChild(span);
    }
});