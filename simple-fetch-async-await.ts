(
    function() {
        async function myFetch() {
            let response = await fetch('img/coffee.jpg');
            console.log('Image was returned');

            if (!response) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                return await response.blob();
            }
        }
        
        myFetch().then((blob) => {
            let objectURL = URL.createObjectURL(blob);
            let image = document.createElement('img');
            image.src = objectURL;
            document.body.appendChild(image);
        })
        .catch(e => {
            console.log('There has beena problem with your fetch operation: ' + e.message);
        });

        console.log('Hi, Zenk!');
    }
)();