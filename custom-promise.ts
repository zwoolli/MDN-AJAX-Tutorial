(
    function() {
        // let timeoutPromise: Promise<string> = new Promise((resolve, reject) => {
        //     setTimeout(function() {
        //         resolve('Success!');
        //     }, 10000);
        // });

        // timeoutPromise
        // .then((message) => {
        //     console.log(message);
        // })

        // console.log('Hi, Zenka!');


        function timeoutPromise(message: string, interval: number): Promise<unknown> {
            return new Promise((resolve, reject) => {
                if (message === '' || typeof message !== 'string') {
                    reject('Message is empty or not a string');
                } else if (interval < 0 || typeof interval !== 'number') {
                    reject('Interval is negative or not a number');
                } else {
                    setTimeout(function(): void {
                        resolve(message);
                    }, interval);
                }
            });
        };

        timeoutPromise('Hi, Zenk!', 3000)
        .then((message: string) => {
            alert(message);
        })
        .catch((e: any) => {
            console.log('Error: ' + e);
        });
    }
)();