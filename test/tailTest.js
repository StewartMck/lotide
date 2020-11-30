const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual(tail([5, 6, 7]), '6,7');
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Lighthouse,Labs");
assertEqual(tail([]), 5);
assertEqual(tail([6]), 8);