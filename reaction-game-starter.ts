(
    function() {
        const spinner: HTMLParagraphElement = document.querySelector('.spinner p');
        const spinnerContainer: HTMLDivElement = document.querySelector('.spinner');
        let rotateCount: number = 0;
        let startTime: number = null;
        let rAF: number;
        const btn: HTMLButtonElement = document.querySelector('button');
        const result: HTMLParagraphElement = document.querySelector('.result');

        result.style.display = 'none';
        spinnerContainer.style.display = 'none';

        btn.addEventListener('click', start);

        function random(min: number, max: number): number {
            let num: number = Math.floor(Math.random()*(max-min)) + min;
            return num;
        }

        function draw(timestamp?: number): void {
            if (!startTime) {
                startTime = timestamp;
            }

            rotateCount = (timestamp - startTime) / 3;

            if (rotateCount > 359) {
                rotateCount %=360;
            }

            spinner.style.transform = 'rotate(' + rotateCount + 'deg';
            rAF = requestAnimationFrame(draw);
        }

        function reset(): void {
            btn.style.display = 'block';
            result.textContent = '';
            result.style.display = 'none';
        }

        function start(): void {
            draw();
            spinnerContainer.style.display = 'block';
            btn.style.display = 'none';
            setTimeout(setEndgame, random(5000, 10000));
        }

        function setEndgame(): void {
            cancelAnimationFrame(rAF);
            spinnerContainer.style.display = 'none';
            result.style.display = 'block';
            result.textContent = 'PLAYERS GO!!';

            document.addEventListener('keydown', keyHandler);

            function keyHandler(e: KeyboardEvent): void {
                let isOver: boolean = false;
                console.log(e.key);

                if(e.key === 'a') {
                    result.textContent = 'Player 1 won!!';
                    isOver = true;
                } else if (e.key === 'l') {
                    result.textContent = 'Player 2 won!!';
                    isOver = true;
                }

                if (isOver) {
                    document.removeEventListener('keydown', keyHandler);
                    setTimeout(reset, 5000);
                }

            };

        }

    }
)();