( 
  function() {
    let btn = document.querySelector('button');
    const worker = new Worker('worker.ts');

    btn.addEventListener('click', () => {
      worker.postMessage('Go!');

      let pElem = document.createElement('p');
      pElem.textContent = 'This is a newly-added paragraph.';
      document.body.appendChild(pElem);
    });

    worker.onmessage = function(e) {
      console.log(e.data);
    }
  }
)();
