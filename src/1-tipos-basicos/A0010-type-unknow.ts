//unknow é como o any, porém mais seguro
let x: unknown;

x = 100;
x = 'Luiz';
x = 900;
x = '10';
const y = 800;

if (typeof x === 'number') console.log(x + y);
//console.log(x + y) só é possivel com any
//unknow te força a fazer a checagem de tipos