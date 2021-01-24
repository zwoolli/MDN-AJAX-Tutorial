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
            const timeoutPromise1: Promise<unknown> = timeoutPromise(3000);
            const timeoutPromise2: Promise<unknown> = timeoutPromise(3000);
            const timeoutPromise3: Promise<unknown> = timeoutPromise(3000);

            await timeoutPromise1;
            await timeoutPromise2;
            await timeoutPromise3;
        }

        let startTime: number = Date.now();
        timeTest().then(() => {
            let finishTime: number = Date.now();
            let timeTaken: number = finishTime - startTime;
            alert("Time taken in milliseconds: " + timeTaken);
        })
    }
)();