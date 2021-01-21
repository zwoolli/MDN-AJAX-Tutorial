(
    function() {
        // Declare and initialize button variables
        let startButton: HTMLButtonElement = document.querySelector('#start');
        let stopButton: HTMLButtonElement = document.querySelector('#stop');
        let resetButton: HTMLButtonElement = document.querySelector('#reset');


        // Add click event listener to buttons
        startButton.addEventListener('click', Start);
        stopButton.addEventListener('click', Stop);
        resetButton.addEventListener('click', Reset);


        function Start() {
            // Declare and initialize counter and interval
            let startTime: number = Date.now();
            let currentTime: number;
            let elapsedTime: number;

            let interval = setInterval(() => {
                currentTime = Date.now();
                elapsedTime = currentTime - startTime;
            }, 1000);
        }


        function Stop() {

        }

        function Reset() {

        }

        function CalculateHours(elapsedTime: number): number {

        }

        function CalculateMinutes() {

        }

        function CalculateSeconds() {

        }

        function FormatTime() {

        }
    }
)();