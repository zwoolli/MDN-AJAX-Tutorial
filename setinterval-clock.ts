// Data structure to encapsulate stopwatch properties
interface StopWatch {
    interval: number,
    startTime: number,
    elapsedTime: number,
    startButton: HTMLButtonElement,
    stopButton: HTMLButtonElement,
    resetButton: HTMLButtonElement,
    clockElement: HTMLParagraphElement,
    lastButtonClicked?: Button
}

// Available buttons
enum Button {
    Start,
    Stop,
    Reset
}

// Entry into program
function Main() {
    // Declare and initialize stopwatch object
    let stopWatch: StopWatch = {
        interval: 0,
        startTime: undefined,
        elapsedTime: undefined,
        startButton: document.querySelector('#start'),
        stopButton: document.querySelector('#stop'),
        resetButton: document.querySelector('#reset'),
        clockElement: document.querySelector('.clock'),
    }

    // Add click event listener to buttons
    stopWatch.startButton.addEventListener('click', () => Start(stopWatch));
    stopWatch.stopButton.addEventListener('click', () => Stop(stopWatch));
    stopWatch.resetButton.addEventListener('click', () => Reset(stopWatch));
}

// Start button
function Start(stopWatch: StopWatch): void {
    // Disable the Start button
    stopWatch.startButton.disabled = true;

    // Select start time based on last button clicked
    switch(+stopWatch.lastButtonClicked) {
        case Button.Stop:
            stopWatch.startTime = Date.now() - stopWatch.elapsedTime;
            break;

        default:
            stopWatch.startTime = Date.now();
    }
    
    // Update stopwatch time every second
    stopWatch.interval = setInterval(function(startTime: number) {
        let currentTime = Date.now();
        stopWatch.elapsedTime = currentTime - startTime;

        let formatTime = GetFormattedTime(stopWatch.elapsedTime);
        stopWatch.clockElement.textContent = formatTime;

    }, 1000, stopWatch.startTime);

    // Update last button clicked
    stopWatch.lastButtonClicked = Button.Start;
}

// Stop button
function Stop(stopWatch: StopWatch): void {
    // Enable the Start button
    stopWatch.startButton.disabled = false;

    // Clear the stopwatch interval
    clearInterval(stopWatch.interval);

    // Reset start time and last button clicked
    stopWatch.startTime = undefined;
    stopWatch.lastButtonClicked = Button.Stop;
}

// Reset button
function Reset(stopWatch: StopWatch) {
    // Enable the Start button
    stopWatch.startButton.disabled = false;

    // Clear the stopwatch interval
    clearInterval(stopWatch.interval);

    // Reset the start and elapsed times
    stopWatch.startTime = undefined;
    stopWatch.elapsedTime = undefined;

    // Set the clock element time back to zero
    stopWatch.clockElement.textContent = GetFormattedTime(0);

    // Set the last button clicked
    stopWatch.lastButtonClicked = Button.Reset;
}

// Format elapsed time
function GetFormattedTime(elapsedTime: number): string {
    let hours: number =  Math.floor((elapsedTime / 1000) / 3600);
    let minutes: number = Math.floor(((elapsedTime - (hours * 3600 * 1000)) / 1000) / 60);
    let seconds: number = Math.floor((elapsedTime - (hours * 3600 * 1000) - (minutes * 60 * 1000)) / 1000);

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

Main();