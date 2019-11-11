/*
1.
____________________________________________________________________________

primitív adattipusok:

number
let a = 1;
console.log(a);

number(float);
let a1 = 1.67;
console.log(a1)

Aritmetikai műveletek:
+ --> let a = 1; let b = 2; return a+b;
- --> let a = 6; let b = 2; return a-b;
* --> let a = 14; let b = 2; return a*b;
/ --> let a = 8; let b = 2; return a/b;
% --> let a = 14; let b = 8; return a%b;

boolean
let b = true;
console.log(b) 

String
let word = 'hi';
console.log(word);

összetett adattípusok: tömb, mátrix, objectek

tömb:
let a = [1,2,3,4,'szo'];
console.log(g);
 
object:
let a = {
    elso: 1,
    masodik: 2,
    harmadik: true};


matrix: (tömben tömb)
const matrix2 = [[0, 1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]];


2.
____________________________________________________________________________
referencia szerinti: a paraméterek amiket átadunk és azon módosításokat végzünk akkor az a hívó paramétert
is módosítja. pl tömböknél mikor 2 tömböt módosítunk de visszaadni csak egy értéket tudunk.
példa:
let arr = [];
let a = (arr) => {
arr.push('valami');
};
fgv(arr);
console.log(arr)

érték szerinti: a referencia ellentéte azaz nem érintik az eredeti értékünket. az egyszerű adattípusok

const ertek = (a) => {
a = 2;
};
let b = 1;
fgv(b);



3. összeadás tétele:
____________________________________________________________________________

const osszegzes = (arr) => {
  let a = 0;
  for (let i = 0; i < arr.length; i++) {
    a += arr[i];
  }
  return a;
};

4. megszámlálás tétele
____________________________________________________________________________

const szamlalo = (vizsgalandoElem, arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === vizsgalandoElem) {
    count++;
    }
  }
  return count;
};

5. switch
____________________________________________________________________________

let checkThisWord = 'haho';

const check = (checkThisWord) => {

switch (checkThisWord) {
  case 1: console.log('egy');
    break;
  case haho: console.log('kettő');
    break;
  case 'hello': console.log('három');
    break;
  default:
    console.log('pizza');
}
};


6. metszet
____________________________________________________________________________
const metszet = (arr1, arr2) => {
  const belsoArr = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
    if (arr1[i] === arr2[i]) {
    belsoArr.push(arr1[i]);
    break;
    }
    }
  }
  return belsoArr;
};

7. modul
____________________________________________________________________________

const osszeg = (a,b) =>{
return a+b;
};

const kivonas = (a,b) =>{
return a-b;
};

const osztas = (a,b) =>{
return a/b;
};

const szorzas = (a,b) =>{
return a*b;
};

module.exports = {
  osszeg: osszeg,
  kivonas: kivonas,
  osztas: osztas,
  szorzas: szorzas
}
Mivel egy file-ba kell írni a tesztet ezért ez esetben 
ha meg akarom hívni akkor ahhoz kell tudnom a file nevét amire hivatkozhatok,
pl ha a fenti * / + - az aritmetika.js akkor ahol meg akarom hívni ahhoz a köv. kell
let muvelet = require(./aritmetika.js);
innentől kezdve meg tudom hívni pl a szorzast mint: muvelet.szorzas(4,5);

8. prg

const arr2d = (a,b) => {
  let c = [];let k = 1;
  for (let i = 0; i < a; i++) {
   
    for (let j = 0; j < b; j++) {
      c.push(k * 2);
     // c[i] = new Array(b);
      k++;
    }
  }
return c;
    };

    console.log(arr2d(3,3));
*/

