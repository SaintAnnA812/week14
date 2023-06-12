const arr = [
    {
        name: 'Стивен Спилберг',
        career: 'Продюсер, Режиссер, Актер, Сценарист, Монтажер',
        films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
        top_rated_film: 'Список Шиндлера'
    },
    {
        name: 'Кристофер Нолан',
        career: 'Сценарист, Продюсер, Режиссер, Оператор, Монтажер, Актер, Композитор',
        films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
        top_rated_film: 'Начало'
    },
    {
        name: 'Мартин МакДона',
        career: 'Сценарист, Режиссер, Продюсер',
        films: 'https://www.film.ru/person/martin-makdonah',
        top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
        name: 'Алексей Балабанов',
        career: 'Режиссер, Сценарист, Актер, Продюсер',
        films: 'https://www.film.ru/person/aleksey-balabanov',
        top_rated_film: 'Брат'
    },
    {
        name: 'Питер Фаррелли',
        career: 'Продюсер, Режиссер, Сценарист, Актер',
        films: 'https://www.film.ru/person/piter-farrelli',
        top_rated_film: 'Зеленая книга'
    },
    {
        name: 'Юрий Быков',
        career: 'Актер, Режиссер, Сценарист, Композитор, Монтажер, Продюсер',
        films: 'https://www.film.ru/person/yuriy-bykov',
        top_rated_film: 'Дурак'
    },
    {
        name: 'Жан-Марк Валле',
        career: 'Режиссер, Продюсер, Монтажер, Актер, Сценарист',
        films: 'https://www.film.ru/person/zhan-mark-valle',
        top_rated_film: 'Далласский клуб покупателей'
    },
];

arr.forEach(function (item) {


    //Имя
    let olList = document.querySelector("ol.list");
    let elem = document.createElement("li");
    elem.textContent = item.name;
    elem.style.borderTop = '1px solid black';
    olList.appendChild(elem);


    //Карьера
    let elem1 = document.createElement("p");
    elem1.textContent = item.career;
    elem1.style.color = 'white';
    olList.appendChild(elem1);

    //Фильмография
    let elem2 = document.createElement('a');
    elem2.href = item.films;
    elem2.target = 'blank';
    elem2.title = 'Фильмография';
    elem2.textContent = 'Фильмография';
    elem2.style.alignSelf = 'end';
    olList.appendChild(elem2);
})

// Список фильмов
let topFilmsList = arr.map(function (item) {
    return item.top_rated_film;
}
)
let divFilms = document.querySelector('div.films');
let newel = document.createElement('p');
newel.textContent = topFilmsList;
divFilms.appendChild(newel);


//задание со звёздочкой. Моё решение


const arr1 = [1, 2];
const arr2 = [2, 3];
const arr3 = ['a', 'b'];
const arr4 = ['b', 'c'];
const arr5 = ['b', 'e', 'c'];
const arr6 = ['b', 'b', 'e'];
const arr7 = ['b', 'c', 'e'];
const arr8 = ['b', 'e', 'c'];

//[2]
const a = arr1.filter(el => arr2.includes(el));
console.log(a);

//[b]
const b = arr3.filter(el => arr4.includes(el), el => arr5.includes(el));
console.log(b);

//[b,e]
const c = arr7.filter(el => arr6.includes(el), el => arr8.includes(el));
console.log(c);




//задание со звёздочкой. Решение, которое предлагает интернет - оно, видимо, более верное, но я его не понимаю пока
const intersection = (...arrays) => {
    const result = arrays[0].filter((element) => {
        const indexOfElement = arrays[1].indexOf(element);
        if (indexOfElement >= 0) {
            return element;
        }
    });
    if (arrays.length > 2) {
        intersection(result, ...arrays.slice(2, arrays.length));
    }
    return Array.from(new Set(result));
};
console.log(intersection(arr1, arr2)); //[2]
console.log(intersection(arr3, arr4, arr5)) // ['b']
console.log(intersection(arr6, arr7, arr8)) // ['b', 'e']

