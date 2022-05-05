// Монстр Лютый
const monster = {
    maxHealth: 10,
    name: "Лютый",
    moves: [
        {
            "name": "Удар когтистой лапой",
            "physicalDmg": 3, // физический урон
            "magicDmg": 0,    // магический урон
            "physicArmorPercents": 20, // физическая броня
            "magicArmorPercents": 20,  // магическая броня
            "cooldown": 0     // ходов на восстановление
        },
        {
            "name": "Огненное дыхание",
            "physicalDmg": 0,
            "magicDmg": 4,
            "physicArmorPercents": 0,
            "magicArmorPercents": 0,
            "cooldown": 3
        },
        {
            "name": "Удар хвостом",
            "physicalDmg": 2,
            "magicDmg": 0,
            "physicArmorPercents": 50,
            "magicArmorPercents": 0,
            "cooldown": 2
        },
    ]
};

// Маг Евстафий
const moves = [
    {
        "name": "Удар боевым кадилом",
        "physicalDmg": 2,
        "magicDmg": 0,
        "physicArmorPercents": 0,
        "magicArmorPercents": 50,
        "cooldown": 0
    },
    {
        "name": "Вертушка левой пяткой",
        "physicalDmg": 4,
        "magicDmg": 0,
        "physicArmorPercents": 0,
        "magicArmorPercents": 0,
        "cooldown": 4
    },
    {
        "name": "Каноничный фаербол",
        "physicalDmg": 0,
        "magicDmg": 5,
        "physicArmorPercents": 0,
        "magicArmorPercents": 0,
        "cooldown": 3
    },
    {
        "name": "Магический блок",
        "physicalDmg": 0,
        "magicDmg": 0,
        "physicArmorPercents": 100,
        "magicArmorPercents": 100,
        "cooldown": 4
    },
];

// 1 графический интерфей
// 2 поключение атак игрока к ГИ 
// 3 подключение атак монстра, как реакция на действия игрока 
// 4 опистаь функцию  взаимозачет урона по броне, и затем по здоровью
// 5 опить кулдаун как функцию и прикрутить CSS свойства


function action(index)  {
    let ul = document.querySelector('ul');
    let move = document.createElement('li');
    move.textContent = moves[index]['name'];
    return ul.append(move);
};

//Здоровье Евстафия
// let heroMaxHealt = document.querySelector('.healthE');
// let healthHero = document.createElement('span')
// healthHero.textContent =  +prompt('Выберерти сложность', '')
// heroMaxHealt.append(healthHero);


//Ходы Евстафия

const heroMoves = document.querySelectorAll('button');
heroMoves.forEach((el, i) => el.addEventListener('click', () => action(i)));



// Здоровье Монстра
let monsterMaxHealt = document.querySelector('.healthM');
let healthMonster = document.createElement('span')
healthMonster.textContent = monster.maxHealth;
monsterMaxHealt.append(healthMonster);

//Ходы  монстра
function mosterMoveSet() {
    let monsterMove = document.createElement('li');
    monsterMove.textContent = monster.moves[0]['name'];
    ul.append(monsterMove);
    }
    






