const assert = require('assert');
const core = require('./es6');

describe('es6', () => {
    describe('#fioToName', () => {
        it('ФИО в Имя Фамилия корректно', () => {
            assert.strictEqual(core.fioToName('Иванов Иван Иванович'), 'Иван Иванов');
        });

        it('ФИ в Имя Фамилия', () => {
            assert.strictEqual(core.fioToName('Петров Петр'), 'Петр Петров');
        });
    });

    describe('#filterUnique', () => {
        it('массив с уникальными равен сам себе', () => {
            assert.deepStrictEqual(core.filterUnique([1, 2, 3]), [1, 2, 3]);
        });

        it('массив с неуникальными отфильтрован', () => {
            assert.deepStrictEqual(core.filterUnique([1, 1, 1, 1]), [1]);
        });

        it('пустой массив', () => {
            assert.deepStrictEqual(core.filterUnique([]), []);
        });
    });

    describe('#calculateSalaryDifference', () => {
        it('считает разницу корректно', () => {
            assert.strictEqual(core.calculateSalaryDifference([1, 2, 3]), 3);
        });

        it('на пустой массив возвращается falsy значение', () => {
            assert.strictEqual(!!core.calculateSalaryDifference([]), false);
        });
    });

    describe('#Dictionary', () => {
        it('экземпляр класса создается', () => {
            const dic = new core.Dictionary();

            // TODO
            assert.strictEqual(!!dic, true);
        });

        it('слово добавляется в словарь', () => {
            const dic = new core.Dictionary();
            dic.addWord('apple', 'a fruit');
            assert.strictEqual(dic.hasWord('apple'), true);
        });

        it('выдаёт определение слова', () => {
            const dic = new core.Dictionary();
            dic.addWord('apple', 'a fruit');
            const definition = dic.getDefinition('apple');
            assert.strictEqual(definition, 'a fruit');
        });

        it('проверяет, есть ли слово в словаре', () => {
            const dic = new core.Dictionary();
            dic.addWord('book', 'a written or printed work');
            const exists = dic.hasWord('book');
            const notExists = dic.hasWord('test');
            assert.strictEqual(exists, true);
            assert.strictEqual(notExists, false);
        });

        it('удаляет слово', () => {
            const dic = new core.Dictionary();
            dic.addWord('apple', 'a fruit');
            dic.removeWord('apple');
            assert.strictEqual(dic.hasWord('apple'), false);
        });

        it('возвращает все слова из словаря', () => {
            const dic = new core.Dictionary();
            dic.addWord('apple', 'a fruit');
            dic.addWord('book', 'a written or printed work');
            dic.addWord('computer', 'an electronic device for storing and processing data');
            const allWords = dic.getAllWords();
            assert.deepStrictEqual(allWords, ['apple', 'book', 'computer']);
        });
    });
});