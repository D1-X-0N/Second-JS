"use strict";


let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2


d = b++;
alert(d); //ответ: 1



c = 2 + ++a;
alert(c); //ответ: 5


d = 2 + b++;
alert(d); //ответ: 4
alert(a); //3
alert(b); //3
