<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <script src="js/jquery-1.9.1.min.js"></script>
        <script src="js/functions.js"></script>
        <style>
            * {
                box-sizing: border-box;
            }

            body {
                margin: 0;
                font-family: Arial;
                font-size: 17px;
            }

            #myVideo {
                position: fixed;
                right: 0;
                bottom: 0;
                min-width: 100%; 
                min-height: 100%;
            }

            .content {
                position: fixed;
                bottom: 0;
                background: rgba(0, 0, 0, 0.5);
                color: #f1f1f1;
                width: 100%;
                padding: 20px;
            }

            #myBtn {
                width: 200px;
                font-size: 18px;
                padding: 10px;
                border: none;
                background: #000;
                color: #fff;
                cursor: pointer;
            }

            #myBtn:hover {
                background: #ddd;
                color: black;
            }

            /*
                                         $$\           $$\                                   
                                         $$ |          $$ |                                  
 $$$$$$$\  $$$$$$\  $$\   $$\ $$$$$$$\ $$$$$$\    $$$$$$$ | $$$$$$\  $$\  $$\  $$\ $$$$$$$\  
$$  _____|$$  __$$\ $$ |  $$ |$$  __$$\\_$$  _|  $$  __$$ |$$  __$$\ $$ | $$ | $$ |$$  __$$\ 
$$ /      $$ /  $$ |$$ |  $$ |$$ |  $$ | $$ |    $$ /  $$ |$$ /  $$ |$$ | $$ | $$ |$$ |  $$ |
$$ |      $$ |  $$ |$$ |  $$ |$$ |  $$ | $$ |$$\ $$ |  $$ |$$ |  $$ |$$ | $$ | $$ |$$ |  $$ |
\$$$$$$$\ \$$$$$$  |\$$$$$$  |$$ |  $$ | \$$$$  |\$$$$$$$ |\$$$$$$  |\$$$$$\$$$$  |$$ |  $$ |
 \_______| \______/  \______/ \__|  \__|  \____/  \_______| \______/  \_____\____/ \__|  \__|
            */                                                                                            
            .countdown-wrap {
                text-align: center;
                margin: 10px 0 20px;
            }
            .count-headline {
                font-weight: 600;
            }
            .countdown {
                list-style: none;
            }
            .countdown li {
                display: inline-block;
                color: #fafafa;
            }
            .countdown li > p {
                font-size: 0.725rem;
                font-weight: 600;
            }
            .flap {
                margin: 0 25px;
                font-size: 4.25rem;
                font-weight: 600;
                line-height: 1;
                min-width: 70px;
                min-height: 70px;
            }
            body {
                background-image: url("img/background.jpg");
                background-position: center; /* Center the image */
                background-repeat: no-repeat; /* Do not repeat the image */
                background-size: cover; /* Resize the background image to cover the entire container */
            }

        </style>
    </head>
    <body>

        <!--        <video autoplay muted loop id="myVideo">
                    <source src="video/bg.mp4" type="video/mp4">
                </video>-->

        <!-- Optional: some overlay text to describe the video -->
        <div class="content">

            <!--            <button id="myBtn" onclick="myFunction()">P</button>-->

            <div class="container" data-lead-id="section01-container">
                <div class="countdown-wrap" data-lead-id="countdown-wrap">
                    <h3 class="count-headline" data-lead-id="countdown-headline">Taller AppInventor empieza en:</h3>
                    <ul class="countdown" data-lead-id="countdown">
                        <li>
                            <div class="flap">
                                <span id="days" class="days">03</span>
                            </div>
                            <p class="timeRefDays" data-lead-id="days">DIAS</p>
                        </li>
                        <li>
                            <div class="flap">
                                <span id="hours" class="hours">15</span>
                            </div>
                            <p class="timeRefHours" data-lead-id="hours">HORAS</p>
                        </li>
                        <li>
                            <div class="flap">
                                <span id="minutes" class="minutes">53</span>
                            </div>
                            <p class="timeRefMinutes" data-lead-id="minutes">MINUTOS</p>
                        </li>
                        <li>
                            <div class="flap">
                                <span id="seconds" class="seconds">25</span>
                            </div>
                            <p class="timeRefSeconds" data-lead-id="seconds">SEGUNDOS</p>
                        </li>
                    </ul>
                    <p><a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Licencia Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br/><a href="index.php">Mas info</a></p>
                </div>

            </div>


        </div>

        <script>
            // Get the video
            var video = document.getElementById("myVideo");

            // Get the button
            var btn = document.getElementById("myBtn");

            // Pause and play the video, and change the button text
            function myFunction() {
                if (video.paused) {
                    video.play();
                    btn.innerHTML = "Pause";
                } else {
                    video.pause();
                    btn.innerHTML = "Play";
                }
            }

        </script>

    </body>
</html>
