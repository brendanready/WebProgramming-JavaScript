/*
        Brendan Ready
        Assignment 11
        M13 Assignment
*/

// Setting Speed for the Slide Show Application (Adding to an Existing Closure Function)

/* 
In Lab 20 you created a slide show of Zak’s Life. 
The slides changed from one slide to another and the speed at which each slide rotated was hardcoded as the second parameter in the setInterval() method. 
In this part of the assignment you will create functionality that allows the user to set the speed at which the slideshow plays. 
Here are some things to consider when building out this functionality within the application:

    1.  You’ll need to start by adding a set speed button to the web page. 
        It should appear to the right of the Pause button.
    2.  When the user clicks the button, a prompt should appear that has the current speed shown and allows the user to change it to a different speed.
    3.  Change up the application so that you now have a private variable called speed and the default speed of 2000 should be set for it.
    4.  Create 2 new public methods within your createSlideshow() method. 
        One should set the speed variable and the other should get the speed variable. 
        You’ll need to figure out what to do within these methods to get the application to work correctly.
    5.  The second parameter of the setInterval() method will now be set by the speed variable.
 */

// REWRITTEN TO TAKE ADVANTAGE OF CLOSURES

// GET ELEMENT FROM THE DOM
const $ = (id) => document.getElementById(id);

// MAIN SLIDESHOW OBJECT
const createSlideshow = function () {
    // PRIVATE VARIABLES AND FUNCTIONS
    let speed = 2000;
    let timer;
    let play = true;
    let nodes = { image: null, caption: null };
    let img = { cache: [], counter: 0 };
    
    const stopSlideShow = function () {
        clearInterval(timer);
    };

    const displayNextImage = function () {
        if (img.counter === img.cache.length-1) {
            img.counter = 0;
        } else {
            img.counter++;
        }
        let image = img.cache[img.counter];
        nodes.image.src = image.src;
        nodes.caption.innerHTML = image.title;
    };

    const setPlayText = function (btn) {
        if (play) {
            btn.value = 'Resume';
        } else {
            btn.value = 'Pause';
        }
    };

    // PUBLIC METHODS THAT HAVE ACCESS TO PRIVATE VARIABLES AND FUNCTIONS
    return {
        loadImages: function (slides) {
            for (let i = 0; i < slides.length; i++) {
                let image = new Image();
                image.src = slides[i].href;
                image.title = slides[i].title;
                img.cache.push(image);
            }
            return this;
        },
        startSlideShow: function () {
            if (arguments.length === 2) {
                nodes.image = arguments[0];
                nodes.caption = arguments[1];
            }
            timer = setInterval(displayNextImage, speed);
            return this;
        },
        createToggleHandler: function () {
            let me = this;
            // CLOSURE TO BE USED AS THE CLICK EVENT HANDLER
            return function () {
                // 'THIS' IS THE CLICKED BUTTON
                // 'ME' IS THE OBJECT LITERAL
                if (play) {
                    stopSlideShow();
                } else {
                    me.startSlideShow();
                }
                setPlayText(this);
                // TOGGLE PLAY 'FLAG'
                play = !play;
            };
        },
        setSpeed: function (newSpeed) {
            speed = newSpeed;
            stopSlideShow();
            this.startSlideShow();
        },
        getSpeed: function () {
            return speed;
        }
    };
};

// CREATE THE SLIDESHOW OBJECT
const slideshow = createSlideshow();

// ARRAY OF SLIDES FOR SLIDESHOW
const slides = [
    {href: 'images/backpack.jpg', title: 'He backpacks in the Sierras often'},
    {href: 'images/boat.jpg', title: 'He loves his boat'},
    {href: 'images/camaro.jpg', title: 'He loves his 67 Camaro more'},
    {href: 'images/punk.jpg', title: 'He used to be in a punk band and toured with No Doubt and Sublime'},
    {href: 'images/race.jpg', title: 'He\'s active and loves obstacle coarse racing'},
    {href: 'images/wakeboard.jpg', title: 'He loves to wakeboard.'},
    {href: 'images/wakesurf.jpg', title: 'He loves to wakesurf behind his boat'}
];

// START THE SLIDESHOW
slideshow.loadImages(slides).startSlideShow($('image'), $('caption'));

// PAUSE THE SLIDESHOW
$('play_pause').onclick = slideshow.createToggleHandler();

// SET PLAYBACK SPEED
$('set_speed').onclick = () => {
    let speed = prompt(`Please enter a new playback speed`, slideshow.getSpeed());

    if (speed !== null) {
        while (speed === '' || isNaN(speed)) {
            alert(`You didn't enter a number. Please enter a number to set the playback speed`);
            speed = prompt('Please enter a new playback speed', slideshow.getSpeed());
        }
        slideshow.setSpeed(speed);
    }
};