/*
Задание 2
Реализовать класс, описывающий простой маркер. В классе должны
быть следующие компоненты:
 поле, которое хранит цвет маркера;
 поле, которое хранит количество чернил в маркере (в процентах);
 метод для печати (метод принимает строку и выводит текст
соответствующим цветом; текст выводится до тех пор, пока в маркере
есть чернила; один не пробельный символ – это 0,5% чернил в маркере).
Реализовать класс, описывающий заправляющийся маркер,
унаследовав его от простого маркера и добавив метод для заправки маркера.
Продемонстрировать работу написанных методов.
*/

// Класс описывающий простой маркер
class Marker {
    constructor(color, inkPercentage = 100) {
        this.color = color; // Цвет маркера
        this.inkPercentage = inkPercentage; // кол-во чернил в маркере (в процентах)
    }

    // Метод для печати текста соотв цветом
    print(text) {
        let output = '';
        let textLength = 0;

        for (let i = 0; i < text.length && this.inkPercentage > 0; i++) {
            // Проверяем, является ли символ пробелом
            if (text[i] !== ' ') {
                // Если не пробел, расходуем чернила
                if (this.inkPercentage >= 0.5) {
                    this.inkPercentage -= 0.5;
                    textLength++;
                }
            } else {
                // Для пробелов чернила не расходуются
                textLength++;
            }
        }

        output = text.substring(0, textLength);
        // выводим текст соотв цветом в консоль
        console.log(`%c${output}`, `color: ${this.colo}`);
    }
}

// Класс описывающий заправляющийся маркер, унаследованный от простого маркера
class RefillableMarker extends Marker {
    // Метод заправки маркера
    refill (inkAmount = 100) {
        this.inkPercentage += inkAmount;
        // Убедимся, что уровень чернил не превышает 100%
        if (this.inkPercentage > 100) {
            this.inkPercentage = 100;
        }
    }
}

// Создание объекта маркера
const myMarker = new RefillableMarker('blue');

// Демонстрация печати
myMarker.print("Hello, this is a test of the market. We are testing how long the ink will last!");

// Заправка маркера
myMarker.refill();

// Повторная демонстрация после заправки
myMarker.print("After refilling, the marker can print more content like this centence here");