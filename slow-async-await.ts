(
    function() {
        function timeoutPromise(interval: number): Promise<unknown> {
            return new Promise((resolve, reject) => {
                setTimeout(function() {
                    resolve("done");
                }, interval);
            });
        };

        async function timeTest(): Promise<void> {
            await timeoutPromise(3000);
            await timeoutPromise(3000);
            await timeoutPromise(3000);
        }

        let startTime: number = Date.now();
        timeTest().then(() => {
            let finishTime: number = Date.now();
            let timeTaken: number = finishTime - startTime;
            alert("Time taken in milliseconds: " + timeTaken);
        })
    }
)();