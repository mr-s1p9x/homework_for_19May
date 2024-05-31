/* 
Задание 1
Реализовать класс ExtendedDate, унаследовав его от стандартного
класса Date и добавив следующие возможности:
 метод для вывода даты (числа и месяца) текстом;
 метод для проверки – это прошедшая дата или будущая (если
прошедшая, то метод возвращает false; если будущая или текущая, то
true);
 метод для проверки – високосный год или нет;
 метод, возвращающий следующую дату.
Создать объект класса ExtendedDate и вывести на экран результаты
работы новых методов.
*/

// Расширяем стандартный класс Date
class ExtendedDate extends Date {
    // Метод для выхода даты текстом
    getDateText() {
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        // Возвращаем строку с названием месяца и числом
        return `${months[this.getMonth()]} ${this.getDate()}`;
    }


    // Метод для проверки, является ли дата прошедшей или будущей
    isFutureOrCurrent() {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Сброс времени до полуночи текущего дня
        // сравниваем с сегодняшней датой
        return this >= today;
    }

    isLeapYear() {
        const year = this.getFullYear();
        // Высокосный год делится нацело на 4, но не на 100, или делится на 400
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    // Метод, возвращающий след дату
    getNextDate() {
        const nextDate = new ExtendedDate(this); // копируем текущий объект даты
        nextDate.setDate(this.getDate() + 1); // добавляем один день
        return nextDate;
    }
}

// Создание объекта класса ExtendDate
const extendDate = new ExtendedDate();

// Тестирование методов
console.log("Date Text:", ExtendedDate.getDate());
console.log("Is Future or Current Date?", ExtendedDate.isFutureOrCurrent());
console.log("Is Leap Year?", ExtendedDate.isLeapYear());
console.log("Next Date:", ExtendedDate.getNextDate().toString());
