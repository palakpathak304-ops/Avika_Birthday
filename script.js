/* =========================
   PAGE SYSTEM
========================= */

let currentPage = 1;

const totalPages = 11;

let score = 0;


/* =========================
   MUSIC
========================= */

const music = document.getElementById("birthdayMusic");

const musicButton =
    document.getElementById("musicButton");


function startBirthday() {

    music.play()
        .then(() => {

            musicButton.innerHTML =
                "🎵 Music: ON";

        })
        .catch(() => {

            console.log(
                "Music could not start automatically."
            );

        });

    nextPage();
}


function toggleMusic() {

    if (music.paused) {

        music.play();

        musicButton.innerHTML =
            "🎵 Music: ON";

    } else {

        music.pause();

        musicButton.innerHTML =
            "🎵 Music: OFF";
    }
}


/* =========================
   PAGE NAVIGATION
========================= */

function showPage(pageNumber) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });


    const selectedPage =
        document.getElementById(
            "page" + pageNumber
        );


    if (selectedPage) {

        selectedPage.classList.add("active");

    }


    currentPage = pageNumber;


    const progress =
        (pageNumber / totalPages) * 100;


    document.getElementById(
        "progressBar"
    ).style.width = progress + "%";
}


function nextPage() {

    if (currentPage < totalPages) {

        showPage(currentPage + 1);

    }
}


/* =========================
   QUIZ 1
========================= */

function checkMeet(year) {

    const feedback =
        document.getElementById(
            "quiz1Feedback"
        );


    if (year === 2020) {

        score++;

        feedback.innerHTML =
            "Correct! 🎉 You remembered! 💗";

        setTimeout(() => {

            showPage(4);

        }, 900);

    } else {

        feedback.innerHTML =
            "Nope 😂 Try again!";

    }
}


/* =========================
   QUIZ 2
========================= */

function checkQuiz2(correct) {

    const feedback =
        document.getElementById(
            "quiz2Feedback"
        );


    if (correct) {

        score++;

        feedback.innerHTML =
            "HAHA! Exactly! 😂💀";

        setTimeout(() => {

            showPage(5);

        }, 900);

    } else {

        feedback.innerHTML =
            "Think carefully 😂";

    }
}


/* =========================
   QUIZ 3
========================= */

function quiz3(answer) {

    const feedback =
        document.getElementById(
            "quiz3Feedback"
        );


    if (answer === "correct") {

        score++;

        feedback.innerHTML =
            "Obviously! 💗😂";

        setTimeout(() => {

            showPage(7);

        }, 900);

    } else {

        feedback.innerHTML =
            "Really? 😭 Try again!";

    }
}


/* =========================
   QUIZ 4
========================= */

function quiz4(answer) {

    const feedback =
        document.getElementById(
            "quiz4Feedback"
        );


    if (answer === "correct") {

        score++;

        feedback.innerHTML =
            "Exactly! That's our movie! 🎬💗";

        setTimeout(() => {

            showPage(8);

        }, 900);

    } else {

        feedback.innerHTML =
            "Nooo 😂 That's not our story!";

    }
}


/* =========================
   QUIZ 5
========================= */

function quiz5(answer) {

    const feedback =
        document.getElementById(
            "quiz5Feedback"
        );


    if (answer === "correct") {

        score++;

        feedback.innerHTML =
            "FACTS! We'd be completely lost 💀😂";

        setTimeout(() => {

            showPage(10);

        }, 900);

    } else {

        feedback.innerHTML =
            "Think again 😂";

    }
}


/* =========================
   SECRET CODE
========================= */

function checkCode() {

    const input =
        document.getElementById(
            "secretCode"
        );

    const feedback =
        document.getElementById(
            "codeFeedback"
        );


    const code = input.value.trim();


    if (code === "2020") {

        score++;

        feedback.innerHTML =
            "🔓 CODE ACCEPTED! 🎉";


        setTimeout(() => {

            showPage(11);

            finalCelebration();

        }, 900);

    } else {

        feedback.innerHTML =
            "❌ Wrong code! Think about when we met...";

    }
}


/* =========================
   ENTER KEY
========================= */

function handleEnter(event) {

    if (event.key === "Enter") {

        checkCode();

    }
}


/* =========================
   FALLING FLOWERS
========================= */

const symbols = [

    "🌸",
    "🌷",
    "🌺",
    "🌹",
    "🌼",
    "💗",
    "💕",
    "💖",
    "✨",
    "⭐"

];


function createFallingItem() {

    const item =
        document.createElement("div");


    item.className =
        "falling-item";


    item.innerHTML =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];


    item.style.left =
        Math.random() * 100 + "vw";


    item.style.fontSize =
        (15 + Math.random() * 15) + "px";


    item.style.animationDuration =
        (5 + Math.random() * 5) + "s";


    document
        .getElementById(
            "falling-container"
        )
        .appendChild(item);


    setTimeout(() => {

        item.remove();

    }, 10000);
}


setInterval(
    createFallingItem,
    500
);


/* =========================
   FINAL HEART BURST
========================= */

function createHeartBurst() {

    for (let i = 0; i < 35; i++) {

        const heart =
            document.createElement("div");


        heart.className = "burst";


        heart.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        heart.style.setProperty(
            "--x",
            (Math.random() * 500 - 250) + "px"
        );


        heart.style.setProperty(
            "--y",
            (Math.random() * 500 - 250) + "px"
        );


        heart.style.fontSize =
            (15 + Math.random() * 20) + "px";


        document.body.appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 2200);
    }
}


/* =========================
   FINAL CELEBRATION
========================= */

function finalCelebration() {

    createHeartBurst();


    setTimeout(
        createHeartBurst,
        700
    );


    setTimeout(
        createHeartBurst,
        1400
    );


    setTimeout(
        createHeartBurst,
        2100
    );
}


/* =========================
   START
========================= */

showPage(1);