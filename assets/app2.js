window.onload = function() {
    const myQuestions = [
        {
            question: "Which country has won the most (5) World Cups?",
            answers: {
            a: "Germany",
            b: "Italy", 
            c: "England", 
            d: "Brazil"
          },
          correctAnswer: "d"
        },
        {
            question: "Where was the first tournament held?",
            answers: {
                a: "Uruguay", 
                b: "USA", 
                c: "Brazil", 
                d: "France"
            },
            correctAnswer: "a"
        },
        {
            question: "Which country has played in the most (8) finals?",
            answers: {
                a: "Brazil", 
                b: "Holland", 
                c: "Germany", 
                d: "Argentina"
            },
            correctAnswer: "c"
        },
        {
            question: "Which player has scored the most career (16) World Cup goals?",
            answers: {
                a: "Pele", 
                b: "Miroslav Klose", 
                c: "Ronaldo", 
                d: "Lionel Messi"
            },
            correctAnswer: "b"
          },
          {
            question: "What year was a World Cup not held?",
            answers: {
                a: "1946", 
                b: "1938", 
                c: "1986", 
                d: "1978"
            },
            correctAnswer: "a"
          },
          {
            question: "Who scored both 'The Hand of God' and 'The Goal of the Century'?",
            answers: {
                a: "Franz Beckenbauer",
                b: "Diego Maradona", 
                c: "Cristiano Ronaldo", 
                d: "Luis Suarez"
            },
            correctAnswer: "b"
          },
          {
            question: "From what nation did the player who scored the first ever hat-trick (three goals in a game) reside in?",
            answers: {
                a: "England", 
                b: "Uruguay", 
                c: "Portugal", 
                d: "USA"
            },
            correctAnswer: "d"
          },
          {
            question: "Oleg Salenko of Russia holds the record for most goals in a game, how many did he score?",
            answers: {
                a: "7",
                b: "5", 
                c: "6",
                d: "4" 
            },
            correctAnswer: "b"
          },
          {
            question: "One country has never made it out of the first round, while one has never failed to make it out of the first round. What are those two countries?",
            answers: {
                a: "Scotland and Ireland",
                b: "Norway and Brazil", 
                c: "USA and Germany", 
                d: "Mexico and Ghana"
            },
            correctAnswer: "a"
          },
          {
            question: "Which team, in 1954, scored the most ever goals (27) in a single competition?",
            answers: {
                a: "Hungary",
                b: "France", 
                c: "Germany", 
                d: "Argentina",
            },
            correctAnswer: "a"
          }
        ];
        var quizContainer = document.getElementById("quiz");
        var resultsContainer = document.getElementById("results");
        var submitButton = document.getElementById("submit");  



    function constructQuiz(questions, quizContainer, resultsContainer, submitButton) {

        function showQuestions(questions, quizContainer){
            var output = [];
            var answers;

            for(var i=0; i<questions.length; i++){
                answers = [];

                for(letter in questions[i].answers){
                    answers.push(
                        `<label>
                        <input type="radio" name="question'+i+'" value="${letter}">
                        
                        ${letter} :
                        ${questions[i].answers[letter]}
                         </label>`
                        
                    );
                }

               output.push(
                `<div class"question"> ${questions[i].question} </div>
                <div class="answers"> ${answers.join("")} </div>`
               ); 
            
            }
            quizContainer.innerhtml = output.join('');
        }
       
       

        function showResults(questions, quizContainer, resultsContainer){
            var answerContainers = quizContainer.querySelectorAll('.answers');
            var userAnswer = '';
            var numCorrect = 0;

            for(var i=0; i < questions.length; i++){
                userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
                if(userAnswer===questions[i].correctAnswer){
                    numCorrect++;
                    answerContainers[i].style.color = 'lightgreen';
                } else{
                    answerContainers[i].style.color = 'red';
                }
            }
            resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
        }

     
        showQuestions(questions, quizContainer);

        submitButton.onclick = function(){
            showResults(questions, quizContainer, resultsContainer);
        };
        
    }
    
    constructQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
    
    };




    