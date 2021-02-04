(
    function(): void {
        const verseChoose: HTMLSelectElement = document.querySelector('select');
        const poemDisplay: HTMLPreElement = document.querySelector('pre');

        verseChoose.onchange = function(): void {
            const verse: string = verseChoose.value;
            updateDisplayFetch(verse);
        };

        function updateDisplayXHR(verse: string): void {
            verse = verse.replace(" ", "");
            verse = verse.toLowerCase();

            let url: string = '/txt/' + verse + '.txt';
            let request: XMLHttpRequest = new XMLHttpRequest();

            request.open('GET', url);
            request.responseType = 'text';

            request.onload = function(): void {
                poemDisplay.textContent = request.response;
            };

            request.send();
        }

        function updateDisplayFetch(verse: string): void {
            verse = verse.replace(" ", "");
            verse = verse.toLowerCase();

            let url: string = '/txt/' + verse + '.txt';

            // fetch(url).then(function(response) {
            //     response.text().then(function(text) {
            //         poemDisplay.textContent = text;
            //     });
            // });

            fetch(url)
            .then(function(response) {
                return response.text();
            })
            .then(function(text) {
                poemDisplay.textContent = text;
            });
        }

        updateDisplayFetch('Verse 1');
        verseChoose.value = 'Verse 1';
    }
)();