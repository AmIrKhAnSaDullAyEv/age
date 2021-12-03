var name = prompt('Введите свое имя');

var yearOfBirth = +prompt('Введите год своего рождение');

var thisYear = +prompt('Введите нынешний год');

function age() {
    let num = thisYear - yearOfBirth;
    return num;
}

alert(name + ',' + ' Ваш возраст ' + age())