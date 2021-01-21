function Main() {
    // Declare and initialize button variables
    let startButton: HTMLButtonElement = document.querySelector('#start');
    let stopButton: HTMLButtonElement = document.querySelector('#stop');
    let resetButton: HTMLButtonElement = document.querySelector('#reset');
    let clockElement: HTMLParagraphElement = document.querySelector('.clock');
    let interval:number = 0;

    // Add click event listener to buttons
    startButton.addEventListener('click', () => Start(clockElement, interval));
    stopButton.addEventListener('click', () => Stop(interval));
    resetButton.addEventListener('click', () => Reset(interval));
}



function Start(clockElement: HTMLParagraphElement, interval: number) {
    // Declare and initialize counter and interval
    let startTime: number = Date.now();

    interval = setInterval(function(startTime: number) {
        let currentTime = Date.now();
        let elapsedTime = currentTime - startTime;

        let hours: number = CalculateHours(elapsedTime);
        let minutes: number = CalculateMinutes(elapsedTime, hours);
        let seconds: number = CalculateSeconds(elapsedTime, hours, minutes);
//https://stackoverflow.com/questions/2998784/how-to-output-numbers-with-leading-zeros-in-javascript
        alert(`${hours} hr, ${minutes} min & ${seconds}`)

    }, 1000, startTime);
}



function Stop(interval: number) {

}

function Reset(interval: number) {

}

function CalculateHours(elapsedTime: number): number {
    // Convert milliseconds to hours
    return Math.floor((elapsedTime / 1000) / 3600);
}

function CalculateMinutes(elapsedTime: number, hours?: number): number {
    // Convert remaining milliseconds to minutes
    return Math.floor(((elapsedTime - (hours * 3600 * 1000)) / 1000) / 60);
}

function CalculateSeconds(elapsedTime: number, hours?: number, minutes?: number): number {
    // Convert remaining milliseconds to seconds
    return Math.floor((elapsedTime - (hours * 3600 * 1000) - (minutes * 60 * 1000)) / 1000);
}

function FormatTime() {

}

Main();