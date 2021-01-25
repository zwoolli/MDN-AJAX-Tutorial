//@ts-nocheck
(
    function() {
        let button1 = document.querySelector('#button1');
        let button2 = document.querySelector('#button2');
        let button3 = document.querySelector('#button3');
        let button4 = document.querySelector('#button4');

        button1.addEventListener('click', example1);
        button2.addEventListener('click', example2);
        button3.addEventListener('click', example3);
        button4.addEventListener('click', example4);


        function doSomething() {
            console.log('doSomething(): start');
            return new Promise(function (resolve) {
              setTimeout(function () {
                console.log('doSomething(): end');
                resolve('doSomething');
              }, 1000);
            });
          }
          
          function doSomethingElse() {
            console.log('doSomethingElse(): start');
            return new Promise(function (resolve) {
              setTimeout(function () {
                console.log('doSomethingElse(): end');
                resolve('doSomethingElse');
              }, 1000);
            });
          }
          
          function finalHandler() {
            console.log('finalHandler(): start');
            return new Promise(function (resolve) {
              setTimeout(function () {
                console.log('finalHandler(): end');
                resolve('finalHandler');
              }, 1000);
            });
          }
          
          function example1() {
            doSomething().then(function () {
              return doSomethingElse();
            }).then(finalHandler);
          }
          
          function example2() {
             doSomething().then(function () {
              doSomethingElse();
            }).then(finalHandler); 
          }
          
          function example3() {
            doSomething().then(doSomethingElse())
              .then(finalHandler);
          }
          
          function example4() {
            doSomething().then(doSomethingElse)
              .then(finalHandler);
          }
    }
)();