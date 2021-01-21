(
    function() {
        const spinner: HTMLDivElement = document.querySelector('div');
        const body: HTMLBodyElement = document.querySelector('body');
        let rotateCount: number  = 0;
        let startTime: number = null;
        let rAF: number;
        let active: boolean;

        body.addEventListener('click', pause)

        function draw(timestamp: number): void {
            active = true;

            if (!startTime) {
                startTime = timestamp;
            }

            rotateCount = (timestamp - startTime) / 3;

            if (rotateCount > 359) {
                rotateCount %= 360;
            }

            spinner.style.transform = `rotate(${rotateCount}deg)`;

            rAF = requestAnimationFrame(draw);
        }

        function pause() {
            switch(active) {
                case true:
                    cancelAnimationFrame(rAF);
                    active = false;
                    break;
                case false:
                    draw(0);
                    active = false;
                    break;
            }
        }

        draw(0);
    }
)();