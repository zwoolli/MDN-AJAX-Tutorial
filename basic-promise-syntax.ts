(
    function() {
        // --------------------------------------------------------------------------------------------------
        // Longhand approach
        // --------------------------------------------------------------------------------------------------
        // let promise: Promise<Response> = fetch('img/coffee.jpg');

        // let promise2: Promise<Blob> = promise.then(response => {
        //     if (!response.ok) {
        //         throw new Error(`HTTP error! status: ${response.status}`);
        //     } else {
        //         return response.blob();
        //     }
        // });

        // let promise3: Promise<void> = promise2.then(myBlob => {
        //     let objectURL = URL.createObjectURL(myBlob);
        //     let image = document.createElement('img');
        //     image.src = objectURL;
        //     document.body.appendChild(image);
        // });

        // let errorCase = promise3.catch(e => {
        //     console.log('There has been a problem with your fetch operation: ' + e.message);
        // });

        // --------------------------------------------------------------------------------------------------
        // Chained approach
        // --------------------------------------------------------------------------------------------------
        fetch('img/coffee.jpg')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                return response.blob();
            }
        })
        .then(myBlob => {
            let objectURL = URL.createObjectURL(myBlob);
            let image = document.createElement('img');
            image.src = objectURL;
            document.body.appendChild(image);
        })
        .catch(e => {
            console.log('There has been a problem with your fetch operation: ' + e.message);
        });
    }
)();