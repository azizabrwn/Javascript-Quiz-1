var questions = [
    {
        prompt: "Jack and Jill went...\n (a) Up the hill \n (b) To the market \n (c) To the sea \n (d) To the woods ",
        answer: "a"
    },
    {
        prompt: "This little piggy went to the market, this little piggy... \n (a) Stayed at home \n (b) Had roast beef \n (c) Built a hut \n (d) Fell in love",
        answer: "a"
    },
    {
        prompt: "Who did the black sheep not give any wool to? \n (a) The Master \n (b) The Dame \n (c) The King \n (d) The little boy who lived down the lane",
        answer: "c"
    },
    {
        prompt: "How did the Big Bad Wolf try to demolish the homes of three little pigs? \n (a) A bulldozer \n (b) Taking it apart brick by brick \n (c) He huffed and puffed \n (d)He was welcomed in",
        answer: "c"
    },
    {
        prompt: "Did the Eensy Weensy spider \n (a) Climb up the wall \n (b) Scare a little girl \n (c) Catch a fly \n (d) Climb up the water spout",
        answer: "d"
    },
    {
        prompt: "What did the three little kittens lose? \n (a) Their mittens \n (b) Their shoes \n (c) Their lust for life \n (d) Their hats",
        answer: "a"
    },
    {
        prompt: "Who stole the Queen of Hearts' tarts? \n (a) The Knave of Hearts \n (b) The Prince of Mince \n (c) The King of Wings /n (d) Jack",
        answer: "a"
    },
    {
        prompt: "Twinkle, twinkle, little... \n (a) Diamond \n (b) Star \n (c) square \n (d) Triangle",
        answer: "b"
    },
    {
        prompt: "Ringa ringa rosy, a pocket full of... \n (a) posy \n (b) dandelions \n (c) Sleepdust \n (d) Sauce ",
        answer: "a"
    },
    {
        prompt: "Goldilocks and the three... \n (a)Geese \n (b) Kittens \n (c) Bears \n (d) Koalas",
        answer: "c"
    },
    {
        prompt: "Jack and Jill went...\n (a) Up the hill \n (b) To the market \n (c) To the sea \n (d) To the woods ",
        answer: "a"
    },
    {
        prompt: "This little piggy went to the market, this little piggy... \n (a) Stayed at home \n (b) Had roast beef \n (c) Built a hut \n (d) Fell in love",
        answer: "a"
    },
    {
        prompt: "Who did the black sheep not give any wool to? \n (a) The Master \n (b) The Dame \n (c) The King \n (d) The little boy who lived down the lane",
        answer: "c"
    },
    {
        prompt: "How did the Big Bad Wolf try to demolish the homes of three little pigs? \n (a) A bulldozer \n (b) Taking it apart brick by brick \n (c) He huffed and puffed \n (d)He was welcomed in",
        answer: "c"
    },
    {
        prompt: "Did the Eensy Weensy spider \n (a) Climb up the wall \n (b) Scare a little girl \n (c) Catch a fly \n (d) Climb up the water spout",
        answer: "d"
    },
    {
        prompt: "What did the three little kittens lose? \n (a) Their mittens \n (b) Their shoes \n (c) Their lust for life \n (d) Their hats",
        answer: "a"
    },
    {
        prompt: "Who stole the Queen of Hearts' tarts? \n (a) The Knave of Hearts \n (b) The Prince of Mince \n (c) The King of Wings /n (d) Jack",
        answer: "a"
    },
    {
        prompt: "Twinkle, twinkle, little... \n (a) Diamond \n (b) Star \n (c) square \n (d) Triangle",
        answer: "b"
    },
    {
        prompt: "Ringa ringa rosy, a pocket full of... \n (a) posy \n (b) dandelions \n (c) Sleepdust \n (d) Sauce ",
        answer: "a"
    },
    {
        prompt: "Goldilocks and the three... \n (a)Geese \n (b) Kittens \n (c) Bears \n (d) Koalas",
        answer: "c"
    },

]
var score = 0;
for (var i=0; i < questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if(response == questions[i].answer){
        score++;
        alert("Well done! Keep going :)");
    }
    else {
        alert("Oof. Better luck next time   ");
    }
}
alert ("you got " + score + "/" + questions.length);