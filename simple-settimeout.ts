(
    function() {
        let myGreeting = setTimeout(sayHi, 2000, 'Zenka');

        function sayHi(who) {
            alert(`Hello, ${who}!`);
        }
    }
)();