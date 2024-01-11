"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно (а местами и нужно) дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    const parts = fio.split(' ');
    const name = parts[1];
    const surname = parts[0];
    return `${name} ${surname}`;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    return [...new Set(array)];
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
function calculateSalaryDifference(array) {
    if (array.length === 0) {
        return 0;
    }

    const maxSalary = Math.max.apply(null, array);
    const minSalary = Math.min.apply(null, array);

    if (minSalary === maxSalary) {
        return 0;
    }

    return maxSalary / minSalary;
}

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    constructor() {
        this.dictionary = new Map();
    }

    // Добавление слова в словарь
    addWord(key, value) {
        if (typeof key === 'string' && typeof value === 'string' && key.trim() !== '' && value.trim() !== '') {
            this.dictionary.set(key, value);
        } else {
            throw new Error('Ключ и значение должны быть строками и не могут быть пустыми.');
        }
    }

    // Получение значения по ключу
    getDefinition(key) {
        return this.dictionary.get(key);
    }

    // Проверка наличия слова в словаре
    hasWord(key) {
        return this.dictionary.has(key);
    }

    // Удаление слова из словаря
    removeWord(key) {
        return this.dictionary.delete(key);
    }

    // Получение всех слов в словаре
    getAllWords() {
        return Array.from(this.dictionary.keys());
    }
}


module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
