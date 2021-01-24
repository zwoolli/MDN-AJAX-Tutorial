// @ts-nocheck
(
    function () {
        function fetchAndDecode(url: RequestInfo, type: string): Promise<void | Response> {
            return fetch(url).then(response => {
                if(!response) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                } else {
                    if(type === 'blob') {
                        return response.blob();
                    } else if(type === 'text') {
                        return response.text();
                    }
                }
            })
            .catch(e => {
                console.log(`There has been a problem with your fetch operation for resource "${url}":` + e.message);
            })
            .finally(() => {
                console.log(`fetch attempt for "${url}" finished.`);
            });
        }

        let coffee = fetchAndDecode('img/coffee.jpg', 'blob');
        let tea = fetchAndDecode('img/tea.jpg', 'blob');
        let description = fetchAndDecode('txt/description.txt', 'text');

        Promise.all([coffee, tea, description]).then(values => {
            console.log(values);

            // Store each value returned from the promises in separate variables
            let objectURL1: string = URL.createObjectURL(values[0]);
            let objectURL2: string = URL.createObjectURL(values[1]);
            let descText: string = String(values[2]);

            // Display the images in <img> elements
            let image1: HTMLImageElement = document.createElement('img');
            let image2: HTMLImageElement = document.createElement('img');
            image1.src = objectURL1;
            image2.src = objectURL2;
            document.body.appendChild(image1);
            document.body.appendChild(image2);

            // Display the text in a paragraph
            let para: HTMLParagraphElement = document.createElement('p');
            para.textContent = descText;
            document.body.appendChild(para);
        });
    }
)();