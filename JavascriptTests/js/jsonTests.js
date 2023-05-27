const jsonObj = [
    {
        "name": "pippo",
        "prop2": "prop12",
        "prop3": "prop13",
        "prop4": "prop14"
    },
    {
        "name": "pluto2",
        "prop2": "prop22",
        "prop3": "prop23",
        "prop4": "prop24"
    }
]

// Dato un oggetto jsonObj come sopra trovare 
// quello/quelli con una proprietà specifica
let filtered = jsonObj.filter(d => { return d.name == "pluto2" });
console.log(filtered);

// Dato un oggetto jsonObj come sopra estrarre 
// una lista di elementi della stessa proprietà
let names = jsonObj.map(o => { return o.name });
console.log(names);

let numberList = [1, 3, 5, 7, 2, 4, 6, 8, 11, 12, 15];

// Data una lista di numeri come sopra estrarre solo i dispari
// che sono più grandi di 5
let disp = numberList.filter(n => { return (n % 2 != 0 && n > 5) });
console.log(disp);

// Data una lista di numeri come sopra incrementare tutti i
// dispari di uno

//let mapped = numberList.map(n => { if (n % 2 != 0) { return n + 1 } else { return n } });
let mapped = numberList.map(f);

function f(n) {
    function f(n) {
        if (n % 2 != 0) {
            return n + 1
        } else {
            return n
        }
    }
}

console.log(mapped);