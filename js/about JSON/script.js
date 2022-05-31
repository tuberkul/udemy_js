'use strict';

const persone = {
    name: 'Alex',
    tel: '+7444444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(persone)); //глубокая копия объекта

clone.parents.mom = 'Ann';

console.log(persone);
console.log(clone);