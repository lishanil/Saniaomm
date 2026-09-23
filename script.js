// =====================================
// LOVEOS v1.0
// PART 1
// Loading + Error + Buggu
// =====================================

// ---------- AUDIO ----------
const introAudio = new Audio("intro.mp3");
const laughAudio = new Audio("laugh.mp3");

// ---------- LOADING ----------
const loadingMessages = [
    "Loading Memories...",
    "Loading Happiness...",
    "Loading laaliiiii's cute guide...",
    "Preparing Buggu...",
    "Almost Ready..."
];

const loadingText = document.getElementById("loadingText");

let msg = 0;

const loadingInterval = setInterval(() => {

    msg++;

    if(msg < loadingMessages.length){

        loadingText.innerHTML = loadingMessages[msg];

    }

},1000);

// ---------- SCREEN CHANGE ----------

setTimeout(()=>{

clearInterval(loadingInterval);

document.getElementById("loadingScreen").classList.remove("active");

document.getElementById("errorScreen").classList.add("active");

setTimeout(showBuggu,2500);

},5000);

// ---------- BUGGU ----------

const dialogues=[

"Hehee Hee... 😂",

"Don't be scared...",

"I'm Buggu 🧸",

"Someone worked very hard to make this for you ❤️",

"Today I'm your guide.",

"Let's begin our adventure!",

"Before We Begin Remeber",

"Your First Anniversary as a HINT"

];

function showBuggu(){

document.getElementById("errorScreen").classList.remove("active");

const bugguScreen=document.getElementById("bugguScreen");

bugguScreen.classList.add("active");

setTimeout(()=>{

bugguScreen.classList.add("show");

},200);

let i=0;

const bugguText=document.getElementById("bugguText");

const continueBtn=document.getElementById("continueBtn");

// Play intro voice
introAudio.play().catch(()=>{});

// Dialogue animation

function nextDialogue(){

if(i<dialogues.length){

bugguText.innerHTML=dialogues[i];

// Laugh only on first line

if(i==0){

laughAudio.currentTime=0;

laughAudio.play().catch(()=>{});

}

i++;

setTimeout(nextDialogue,2500);

}else{

continueBtn.style.display="block";

continueBtn.onclick = function () {

    document.getElementById("bugguScreen").classList.remove("active");

    document.getElementById("questionScreen").classList.add("active");

    currentQuestion = 0;

    loadQuestion();

};

}

}

nextDialogue();

}
// ===============================
// BUGGU EXAMINATION
// ===============================

const questions = [

{
question:"Who is the funniest?",
option1:"❤️ Him",
option2:"🧸 Buggu",
reply1:"Hmm... Good answer! ❤️",
reply2:"Hehee Hee... I like your choice! 😂"
},

{
question:"Who replies late?",
option1:"👑 Princess",
option2:"😎 Him",
reply1:"I'll pretend I didn't hear that 😂",
reply2:"Director has been exposed! 😆"
},

{
question:"Who gets hungry first?",
option1:"🍕 Him",
option2:"🍟 Princess",
reply1:"Food is life 😋",
reply2:"Hehee! Someone loves snacks!"
},

{
question:"Who is more dramatic?",
option1:"😂 Princess",
option2:"🧸 Buggu",
reply1:"Honesty unlocked 😂",
reply2:"Excuse me?! 😭"
},

{
question:"Mammmm Are You Ready to enter into THE HEART?",
option1:"❤️ YES!",
option2:"🚀 LET'S GO!",
reply1:"Opening memories... ❤️",
reply2:"Here we goooo! 🚀"
}

];

let currentQuestion = 0;

const questionCount = document.getElementById("questionCount");
const questionText = document.getElementById("questionText");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const bugguReply = document.getElementById("bugguReply");

function loadQuestion(){

questionCount.innerHTML="Question "+(currentQuestion+1)+" / "+questions.length;

questionText.innerHTML=questions[currentQuestion].question;

option1.innerHTML=questions[currentQuestion].option1;

option2.innerHTML=questions[currentQuestion].option2;

bugguReply.innerHTML="";

}

option1.onclick=function(){

bugguReply.innerHTML=questions[currentQuestion].reply1;

nextQuestion();

}

option2.onclick=function(){

bugguReply.innerHTML=questions[currentQuestion].reply2;

nextQuestion();

}

function nextQuestion(){

option1.disabled=true;
option2.disabled=true;

setTimeout(()=>{

currentQuestion++;

if(currentQuestion<questions.length){

loadQuestion();

option1.disabled=false;
option2.disabled=false;

}else{

document.getElementById("questionScreen").classList.remove("active");

/* Music screen will come here */
document.getElementById("musicScreen").classList.add("active");

}

},2000);

}

loadQuestion();
// ===============================
// MUSIC SCREEN
// ===============================

const bgMusic = document.getElementById("bgMusic");

const playMusicBtn = document.getElementById("playMusicBtn");

const silentBtn = document.getElementById("silentBtn");

const musicToggle = document.getElementById("musicToggle");

playMusicBtn.onclick = function(){

bgMusic.play().catch(()=>{});

musicToggle.style.display="block";

musicToggle.innerHTML="🔊";

document.getElementById("musicScreen").classList.remove("active");

// Next mission
document.getElementById("musicScreen").classList.remove("active");

document.getElementById("passwordScreen").classList.add("active");

};

silentBtn.onclick = function(){

musicToggle.style.display="block";

musicToggle.innerHTML="🔇";

document.getElementById("musicScreen").classList.remove("active");

// Next mission
document.getElementById("musicScreen").classList.remove("active");

document.getElementById("passwordScreen").classList.add("active");

};

musicToggle.onclick=function(){

if(bgMusic.paused){

bgMusic.play();

musicToggle.innerHTML="🔊";

}else{

bgMusic.pause();

musicToggle.innerHTML="🔇";

}

};
// ===============================
// PASSWORD SCREEN
// ===============================

const digits = document.querySelectorAll(".digit");
const keypadButtons = document.querySelectorAll("#keypad button");
const passwordMessage = document.getElementById("passwordMessage");

let enteredPassword = "";

const correctPassword = "0908";

keypadButtons.forEach(button => {

    button.onclick = function () {

        const value = button.innerText;

        // Clear Button
        if (value === "⌫") {

            enteredPassword = "";

            updateDisplay();

            passwordMessage.innerHTML = "";

            return;
        }

        // Enter Button
        if (value === "❤️") {

            checkPassword();

            return;
        }

        // Numbers
        if (enteredPassword.length < 4) {

            enteredPassword += value;

            updateDisplay();

        }

    };

});

function updateDisplay() {

    digits.forEach((box, index) => {

        box.innerHTML = enteredPassword[index] || "";

    });

}

function checkPassword() {

    if (enteredPassword === correctPassword) {

        passwordMessage.style.color = "green";

        passwordMessage.innerHTML = "🔓 Access Granted ❤️";

        setTimeout(() => {

            document.getElementById("passwordScreen").classList.remove("active");

            document.getElementById("passwordScreen").classList.remove("active");
document.getElementById("diaryScreen").classList.add("active");

        },1500);

    }

    else {

        passwordMessage.style.color = "#ff5f8a";

        const replies = [

            "😂 Hehee... Wrong password!",

            "🧸 Buggu: Try again!",

            "🤭 Nice try, Princess!",

            "❤️ Almost there..."

        ];

        const randomReply = replies[Math.floor(Math.random()*replies.length)];

        passwordMessage.innerHTML = randomReply;

        enteredPassword = "";

        updateDisplay();

    }

}
// ===============================
// DIARY
// ===============================

const diaryPhotos = [

"photo1.jpg",
"photo2.jpg",
"photo3.jpg",
"photo4.jpg",
"photo5.jpg",
"photo6.jpg"

];

const diaryCaptions = [

"❤️ The day it all Began Unofficially.",
"🌸 Darlinggggg Chhota belu etk height auu badhuni 😂.",
"🥹 Darlinggggg Jibana sara emt rahibeeeee 🌷.",
"✨ Myyyyy Cutieeeee I Will Always Love You As I do.",
"💖 Darlinggggg Traditional Ree Cuteness Pura Highhhhh.",
"🫶 Namaskar 🙏🏼 Deviiiii jiii Sabubele tkkk krupa karuthibee."

];

const bugguReplies = [

"I remember this day! ❤️",

"Hehee Hee... This memory is adorable! 🧸",

"Princesssss You look so happy here. 🌸",

"This one always makes me smile. 😊",

"One of my favourite memories! ✨",

"Thank you for making so many beautiful memories. ❤️"

];

let diaryIndex = 0;

const diaryImage = document.getElementById("diaryImage");
const diaryCaption = document.getElementById("diaryCaption");
const bugguDiaryText = document.getElementById("bugguDiaryText");

const prevPage = document.getElementById("prevPage");
const nextPage = document.getElementById("nextPage");

function loadDiary(){

diaryImage.src = diaryPhotos[diaryIndex];

diaryCaption.innerHTML = diaryCaptions[diaryIndex];

bugguDiaryText.innerHTML = bugguReplies[diaryIndex];

}

nextPage.onclick = function(){

if(diaryIndex < diaryPhotos.length-1){

diaryIndex++;

loadDiary();

}
else{

document.getElementById("diaryScreen").classList.remove("active");

document.getElementById("letterScreen").classList.add("active");

}

};

prevPage.onclick = function(){

if(diaryIndex > 0){

diaryIndex--;

loadDiary();

}

};

loadDiary();
// ===============================
// LOVE LETTER
// ===============================

const letterText = `

My Dearest Princess,
knn ma kahibii, 
jibana re asa nathila apanka bhali kahaku paibi.
mo asaa thu adhika mili gala mam. 
Always feeling greatfulllll to have a wife like you
Darlingggg.
Mammmmm Dhanyawad sabubele pakhare thiba ruu.
Darlinggggg always falling for you.
I Love You
~Your's Gelhu Anil❤️

`;

const openLetterBtn = document.getElementById("openLetterBtn");

const envelope = document.getElementById("envelope");

const letterPaper = document.getElementById("letterPaper");

const letterContent = document.getElementById("letterContent");

openLetterBtn.onclick = function(){

envelope.style.display="none";

letterPaper.style.display="block";

letterContent.innerHTML=letterText;

};

document.getElementById("continueEndingBtn").onclick=function(){

document.getElementById("letterScreen").classList.remove("active");

document.getElementById("finalScreen").classList.add("active");

};
// ===============================
// FINAL SCREEN
// ===============================

const restartBtn = document.getElementById("restartBtn");
const exitBtn = document.getElementById("exitBtn");

restartBtn.onclick = function () {

    // Hide final screen
    document.getElementById("finalScreen").classList.remove("active");

    // Show loading screen again
    document.getElementById("loadingScreen").style.display = "flex";

    // Restart from beginning
    setTimeout(() => {

        document.getElementById("loadingScreen").style.display = "none";

        document.getElementById("errorScreen").classList.add("active");

        startBugguSequence();

    },4500);

};

exitBtn.onclick = function(){

document.querySelector(".finalButtons").style.display="none";

document.getElementById("goodbyeText").innerHTML=`

❤️

Thank you for taking this journey.

Happy 1st Anniversary Babyyyyy.
    
Darling we completed the first step together.
    
I hope this little gift made you smile.

Forever Yours...

❤️

`;

};
