        <div id="body" class="output width" style="text-align: center">
            <div class="row holders message"></div>
            <input type="number">
            <button id="btnGuess">Guess</button>
        </div>
        <script>
            let game = {
                "min": 1
                , "max": 10
            };
            document.addEventListener("DOMContentLoaded", function () {
                console.log("Ready");
                game.output = document.querySelector(".output");
                game.message = document.querySelector(".message");
                game.guessInput = document.querySelector("input");
                game.btn = document.querySelector("button");
                game.btn.addEventListener("click", guessValue);
                init();
            })

            function guessValue() {
                if (game.btn.classList.contains("replay")) {
                    init();
                    game.btn.innerHTML = "Guess";
                    game.guessInput.style.display = "block";
                    game.btn.classList.remove("replay");
                }
                else {
                    game.guesses++;
                    let tempGuess = game.guessInput.value;
                    game.guessInput.value = "";
                    tempGuess = parseInt(tempGuess);
                    if (isNaN(tempGuess)) {
                        message("Please enter only Digits", "red");
                    }
                    else if (tempGuess === game.num) {
                        message(game.num + " Is the correct number! You guessed " + game.guesses + " time(s).", "green");
                        gameOver();
                    }
                    else {
                        let holder = tempGuess > game.num ? {
                            "c": "blue"
                            , "m": "Guess Lower"
                        } : {
                                "c": "purple"
                                , "m": "Guess Higher"
                            };
                        message(holder.m, holder.c);
                    }
                    console.log(game.num);
                }
            }

            function gameOver() {
                game.btn.innerHTML = "Restart Game";
                game.guessInput.style.display = "none";
                game.btn.classList.add("replay");
            }

            function init() {
                game.guesses = 0;
                game.num = ranNumber(game.min, game.max);
                let tempMes = "Welcome to the game.  Guess a number from " + game.min + " to " + game.max;
                message(tempMes, "blue");
            }

            function ranNumber(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            }

            function message(mes, clr) {
                game.message.innerHTML = mes;
                game.message.style.color = clr || "black";
                game.guessInput.style.borderColor = clr || "black";
                game.btn.style.backgroundColor = clr || "black";
                game.btn.style.color = "white";
            }
        </script>
