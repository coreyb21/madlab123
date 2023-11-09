function checkAnswers(){
    let score = 0;
    let result = 0;
    let quiz = document.forms.quiz.elements;
    let answer1 = quiz.colour.value;
    if (answer1 == "pink") {
        score = score + 1;
    }
    else if (answer1 == "yellow") {
        score = score + 2;
    }
    else if (answer1 == "green") {
        score = score + 3;
    }
    else  {
        score = score + 4;
    
        let answer2 = quiz.animal.value;
        if (answer2 == "red-panda") {
            score = score + 1;
        }
        else if (answer2 == "giraffe") {
            score = score + 2;
        }
        else if (answer2 == "jaguar") {
            score = score + 3;
        }
        else  {
            score = score + 4;
        }
    }
    let answer3 = quiz.music.value;
    if (answer1 == "classic-rock") {
        score = score + 1;
    }
    else if (answer3 == "disco") {
        score = score + 2;
    }
    else if (answer3 == "pop") {
        score = score + 3;
    }
    else  {
        score = score + 4;
    }
    let answer4 = quiz.hobby.value;
    if (answer4 == "writing") {
        score = score + 1;
    }
    else if (answer4 == "gamer") {
        score = score + 2;
    }
    else if (answer4 == "basketball") {
        score = score + 3;
    }
    else  {
        score = score + 4;
    }

    if(score < 6) {
        result="barney";
    }
    else if (score < 10) {
        result = "dr kleiner"
    }
    else if (score < 13) {
        result = "gordon....."
    }
    else {
        result = "gman..........."
    }

    alert ("you are sos so " + result);
}