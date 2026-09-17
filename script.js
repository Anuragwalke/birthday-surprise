// ============================================
// GIRLFRIEND NAME
// ============================================

const girlfriendName = "Aishwarya";


// Put her name on the page
const girlNameElement = document.getElementById("Aish");

if (girlNameElement) {
    girlNameElement.textContent = Aishwarya;
}


const finalNameElement = document.getElementById("aish");

if (finalNameElement) {
    finalNameElement.textContent = aishwarya + " ❤️";
}



// ============================================
// CHANGE SCENE
// ============================================

function showScene(number) {

    console.log("Changing to scene:", number);

    const scenes = document.querySelectorAll(".scene");

    scenes.forEach(function(scene) {

        scene.classList.remove("active");

    });


    const selectedScene =
        document.getElementById("scene" + number);


    if (!selectedScene) {

        console.error(
            "Scene not found: scene" + number
        );

        return;

    }


    selectedScene.classList.add("active");


    // Create some hearts
    heartBurst();

}



// ============================================
// START EXPERIENCE
// ============================================

function startExperience() {

    console.log("Surprise button clicked");

    const music = document.getElementById("music");

    if (music) {

        music.volume = 0.7;

        music.currentTime = 0;

        music.play()
            .then(function () {

                console.log("❤️ Music started!");

            })
            .catch(function (error) {

                console.log(
                    "Music could not start:",
                    error
                );

            });

    }

    showScene(2);

    heartBurst();
}



// ============================================
// MEMORIES
// ============================================

const memories = [

    {
        image: "images/photo1.jpg",
        caption:
            "Every moment with you becomes a beautiful memory. ❤️"
    },

    {
        image: "images/photo2.jpg",
        caption:
            "Some moments are impossible to forget. 🥹❤️"
    },

    {
        image: "images/photo3.jpg",
        caption:
            "This is another memory I will always keep close to my heart. ✨"
    },

    {
        image: "images/photo4.jpg",
        caption:
            "I hope we create many more beautiful memories together. ❤️"
    },

    {
        image: "images/photo5.jpg",
        caption:
            "Another memory that makes me smile every time. 💕"
    },

    {
        image: "images/photo6.jpg",
        caption:
            "The best memories are the ones we create together. ❤️"
    }

];


let currentMemory = 0;



// ============================================
// NEXT MEMORY
// ============================================

function nextMemory() {

    console.log(
        "Next Memory clicked."
    );


    currentMemory++;


    console.log(
        "Current memory:",
        currentMemory
    );


    // If all 6 photos are finished
    if (
        currentMemory >= memories.length
    ) {

        console.log(
            "All memories finished. Opening Scene 4."
        );


        showScene(4);

        return;

    }


    const image =
        document.getElementById(
            "memoryPhoto"
        );


    const caption =
        document.getElementById(
            "memoryCaption"
        );


    if (!image) {

        console.error(
            "memoryPhoto element not found!"
        );

        return;

    }


    if (!caption) {

        console.error(
            "memoryCaption element not found!"
        );

        return;

    }


    // Fade out
    image.style.opacity = "0";


    setTimeout(function() {

        image.src =
            memories[currentMemory].image;


        caption.textContent =
            memories[currentMemory].caption;


        image.style.opacity = "1";


    }, 400);


}



// ============================================
// OPEN LOVE LETTER
// ============================================

function openLetter() {

    console.log(
        "Envelope clicked"
    );


    const envelope =
        document.getElementById(
            "envelope"
        );


    const letter =
        document.getElementById(
            "letter"
        );


    if (!envelope || !letter) {

        console.error(
            "Envelope or letter not found!"
        );

        return;

    }


    envelope.style.transform =
        "scale(.7)";


    envelope.style.opacity =
        "0";


    setTimeout(function() {

        envelope.style.display =
            "none";


        letter.classList.add(
            "show"
        );


        heartBurst();


    }, 500);

}



// ============================================
// BLOW CANDLES
// ============================================

function blowCandles() {

    console.log(
        "Cake clicked"
    );


    const flames =
        document.querySelectorAll(
            ".flame"
        );


    flames.forEach(function(flame) {

        flame.classList.add(
            "off"
        );

    });


    const cakeText =
        document.getElementById(
            "cakeText"
        );


    if (cakeText) {

        cakeText.textContent =
            "Wish granted... ❤️";

    }


    const finalButton =
        document.getElementById(
            "finalButton"
        );


    if (finalButton) {

        finalButton.classList.remove(
            "hidden"
        );

    }


    massiveHeartBurst();

}



// ============================================
// HEART BURST
// ============================================

function heartBurst() {

    for (
        let i = 0;
        i < 15;
        i++
    ) {

        setTimeout(
            function() {

                createFloatingHeart();

            },
            i * 80
        );

    }

}



// ============================================
// BIG HEART BURST
// ============================================

function massiveHeartBurst() {

    for (
        let i = 0;
        i < 70;
        i++
    ) {

        setTimeout(
            function() {

                createFloatingHeart();

            },
            i * 40
        );

    }

}



// ============================================
// CREATE FLOATING HEART
// ============================================

function createFloatingHeart() {

    const heart =
        document.createElement(
            "div"
        );


    heart.className =
        "floating-heart";


    const symbols = [

        "❤️",
        "💖",
        "💕",
        "✨",
        "🌸"

    ];


    heart.textContent =
        symbols[
            Math.floor(
                Math.random()
                * symbols.length
            )
        ];


    heart.style.left =
        Math.random()
        * 100
        + "vw";


    heart.style.fontSize =
        (
            15 +
            Math.random() * 25
        )
        + "px";


    heart.style.setProperty(
        "--move",
        (
            Math.random()
            * 250
            - 125
        )
        + "px"
    );


    document.body.appendChild(
        heart
    );


    setTimeout(
        function() {

            heart.remove();

        },
        4000
    );

}



// ============================================
// TOUCH / CLICK BUBBLES
// ============================================

document.addEventListener(
    "pointerdown",
    function(event) {

        const bubble =
            document.createElement(
                "div"
            );


        bubble.className =
            "touch-bubble";


        bubble.style.left =
            (
                event.clientX - 12
            )
            + "px";


        bubble.style.top =
            (
                event.clientY - 12
            )
            + "px";


        document.body.appendChild(
            bubble
        );


        setTimeout(
            function() {

                bubble.remove();

            },
            800
        );

    }
);



// ============================================
// AUTOMATIC FLOATING HEARTS
// ============================================

setInterval(
    function() {

        if (
            document.querySelector(
                ".scene.active"
            )
        ) {

            if (
                Math.random() > 0.45
            ) {

                createFloatingHeart();

            }

        }

    },
    900
);