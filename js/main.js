// javascript array named presidents with 5 objects
var presidents = [
    //object 0
    {
        firstName: 'Donald',
        lastName: 'Trump',
        termLength: 0,
        party: 'Republican',
        yearsOfPresidency: 0,
    },
    //object 1
    {
        firstName: 'Barack',
        lastName: 'Obama',
        termLength: 2,
        party: 'Democratic',
        yearsOfPresidency: 8,
    },
    //object 2
    {
        firstName: 'George W.',
        lastName: 'Bush',
        termLength: 2,
        party: 'Republican',
        yearsOfPresidency: 8,
    },
    //object 3
    {
        firstName: 'Bill',
        lastName: 'Clinton',
        termLength: 2,
        party: 'Democratic',
        yearsOfPresidency: 8,
    },
    //object 4
    {
        firstName: 'George',
        lastName: 'Bush',
        termLength: 1,
        party: 'Republican',
        yearsOfPresidency: 4,
    }
];
// console.log the position 2 object with key firstName concatonated with a space string and position 2 object with key lastName
console.log(presidents[2]['firstName'] + ' ' + presidents[2]['lastName']);
