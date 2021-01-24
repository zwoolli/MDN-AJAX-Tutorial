(
    function() {
        async function fetchAndDecode(url: RequestInfo, type: string): Promise<string | Blob> {
            try{
                let response: Response = await fetch(url);
                let content: Blob | string

                if (!response) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                } else {
                    if (type === 'blob') {
                        content = await response.blob();
                    } else if (type === 'text') {
                        content = await response.text();
                    }

                    return content;
                }
            } finally {
                console.log(`fetch attempt for "${url}" finished.`);
            }

        }

        async function displayContent() {
            let coffee: Promise<Blob> = <Promise<Blob>>fetchAndDecode('img/coffee.jpg', 'blob');
            let tea: Promise<Blob> = <Promise<Blob>>fetchAndDecode('img/tea.jpg', 'blob');
            let description: Promise<string> = <Promise<string>>fetchAndDecode('txt/description.txt', 'text');

            let values: Array<any> = await Promise.all([coffee, tea, description]);

            let objectURL1: string = URL.createObjectURL(values[0]);
            let objectURL2: string = URL.createObjectURL(values[1]);
            let descText: string = values[2];

            let image1 = document.createElement('img');
            let image2 = document.createElement('img');
            image1.src = objectURL1;
            image2.src = objectURL2;
            document.body.appendChild(image1);
            document.body.appendChild(image2);

            let para = document.createElement('p');
            para.textContent = descText;
            document.body.appendChild(para);
        }

        displayContent()
        .catch((e) => {
            console.log(e);
        });






    }
)();