"use strict";
        /**
         * The sum of two numbers
         * @param {number} 
         * @param {number}
         * @returns {number}
        */
        function sum(num1, num2) {
            return num1 + num2;
        }

        /**
         * the difference between two numbers
         * @param {number} 
         * @param {number}
         * @returns {number}
        */
        function minus(num1, num2) {
            return num1 - num2;
        }

        /**
         * the product of two numbers
         * @param {number} 
         * @param {number}
         * @returns {number}
        */
        function multiplication(num1, num2) {
            return num1 * num2;
        }

        /**
         * quotient of two numbers
         * @param {number} 
         * @param {number}
         * @returns {number}
        */
        function division(num1, num2) {
            return num1 / num2;
        }

        /**
         * quotient of two numbers
         * @param {number} 
         * @param {number}
         * @param {string} math_operation
         * @returns {number}
        */
        function mathOperation(arg1, arg2, operation) {  //number 5
            switch(operation) {
                case "плюс":
                    return sum(arg1, arg2);
                case "минус":
                    return minus(arg1, arg2);
                case "умножение":
                    return multiplication(arg1, arg2);
                case "деление":
                    return division(arg1, arg2);
                default:
                    alert("Нет таких значений");    
            }
        }


        let a = Number(prompt("Введите 1 число"));
        let b = Number(prompt("Введите 2 число"));
        let oper = prompt("Введите название операции");
        alert("Сумма чисел: " + sum(a, b));
        alert("Разность чисел: " + minus(a, b));
        alert("Произведение чисел: " + multiplication(a, b));
        alert("Частное чисел: " + division(a, b));
        alert("Результат выбранной вами операции: " + mathOperation(a, b, oper));