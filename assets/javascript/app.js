window.onload = function() {
    const myQuestions = [
        {
            question: "1. With five titles, which country has won the most World Cups?",
            answers: {
            a: "Germany",
            b: "Italy", 
            c: "England", 
            d: "Brazil"
          },
          correctAnswer: "d"
        },
       
        {
            question: "2. Where was the first tournament held?",
            answers: {
                a: "Uruguay", 
                b: "USA", 
                c: "Brazil", 
                d: "France"
            },
            correctAnswer: "a"
        },
        {
            question: "3. What nation has participated in the most finals, doing so eight times?",
            answers: {
                a: "Brazil", 
                b: "Holland", 
                c: "Germany", 
                d: "Argentina"
            },
            correctAnswer: "c"
        },
        {
            question: "4. The record holder for most career World Cup goals has 16, who is it?",
            answers: {
                a: "Pele", 
                b: "Miroslav Klose", 
                c: "Ronaldo", 
                d: "Lionel Messi"
            },
            correctAnswer: "b"
          },
          {
            question: "5. What year was a World Cup not held?",
            answers: {
                a: "1946", 
                b: "1938", 
                c: "1986", 
                d: "1978"
            },
            correctAnswer: "a"
          },
          {
            question: "6. Who scored both 'The Hand of God' and 'The Goal of the Century'?",
            answers: {
                a: "Franz Beckenbauer",
                b: "Diego Maradona", 
                c: "Cristiano Ronaldo", 
                d: "Luis Suarez"
            },
            correctAnswer: "b"
          },
          {
            question: "7. From what nation did the player who scored the first ever hat-trick reside in?",
            answers: {
                a: "England", 
                b: "Uruguay", 
                c: "Portugal", 
                d: "USA"
            },
            correctAnswer: "d"
          },
          {
            question: "8. Oleg Salenko of Russia holds the record for most goals in a game, how many did he score?",
            answers: {
                a: "7",
                b: "5", 
                c: "6",
                d: "4" 
            },
            correctAnswer: "b"
          },
          {
            question: "9. One country has never made it out of the first round, while one has never failed to make it out of the first round. What are those two countries?",
            answers: {
                a: "Scotland and Ireland",
                b: "Norway and Brazil", 
                c: "USA and Germany", 
                d: "Mexico and Ghana"
            },
            correctAnswer: "a"
          },
          {
            question: "10. Which team, in 1954, scored a perposterous 27 goals in a single tournament, setting a record that has yet to be broken?",
            answers: {
                a: "Hungary",
                b: "France", 
                c: "Germany", 
                d: "Argentina",
            },
            correctAnswer: "a"
          }
        ];
    const quizContainer = document.getElementById("quiz");
    console.log(quizContainer);
    const resultsContainer = document.getElementById("results");
    console.log(resultsContainer);
    const submitButton = document.getElementById("submit");
    console.log(submitButton)

    var number = 90;
    // Oddly enough, this will build the quiz.
    function constructQuiz() {
        

        var intervalId;
    
    
         
    
        function runTimer() {
           
            intervalId = setInterval(decrement, 1000);
          
        }
    
        function decrement() {
            
          number--;
    
          $("#show-number").html("<h2>" + (number) + "</h2>");
            //Stops the timer when it reaches 0.
          if (number === 0) {
    
            stopTimer();
            
            
          };
          

        }
        //When the timer is stopped, the interval is cleared.
        function stopTimer(){
            clearInterval(intervalId);
        }
        $("#startButton").on("click", runTimer);
        $("#show-number").html("<h2>" + (number) + "</h2>");

        

    
        

        
        
    
        
    const output = [];
    // This builds all of the questions, and the ".forEach" line of code runs though all ten questions.
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
            for(letter in currentQuestion.answers){ console.log(letter);
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );

            }
            console.log(answers);
            output.push(
                `<div class"question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join("")} </div>`
            );

        });
    quizContainer.innerHTML = output.join("");
    }

// This function will, you guessed it, display the results.
function displayResults(){
    
const answerContainers = quizContainer.querySelectorAll(".answers");
let numCorrect = 0;
myQuestions.forEach((currentQuestion, questionNumber) => {
    const answerContainer = answerContainers[questionNumber];
    const selector = `input[name=question${questionNumber}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;
    //Puts the number of correct answers up by one.
    if(userAnswer===currentQuestion.correctAnswer){
        numCorrect++;
        //Changes the color from white to light green if a question is correct.
        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
          answerContainers[questionNumber].style.color = "white";
      }
    });
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    //I wanted to put the percent score the player had here, but couldn't quite work out the syntax.
}










// display quiz right away
constructQuiz();
displayResults();

// on submit, show results. One thing I couldn't figure out here was how to tie the "Submit" button to
//stopping the timer.
submitButton.addEventListener('click', displayResults);

}
