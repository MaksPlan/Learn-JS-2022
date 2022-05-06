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

//Деструктуризация статов Лютого
const {maxHealth: monsterHealth, name, moves: monsterMoveSet} = monster
const [claw, fireBreath, tail] = monsterMoveSet
function destructMoveSet(index) {
    const {name,
        physicalDmg: phDmg,
        magicDmg: mgDmg,
        physicArmorPercents: phArmor,
        magicArmorPercents: mgArmor
        } = moves[index]

       let stats = [phDmg, mgDmg, phArmor, mgArmor]
        return stats;
}
function countDamage(damage, armor) {
    let result = damage - armor;
    result > 0 ? result : result = 0;
    return result;
}
// Здоровье Монстра
let monsterDiv = document.querySelector('.healthM');
let healthMonster = document.createElement('span')
healthMonster.textContent = monsterHealth;
monsterDiv.append(healthMonster);

//Здоровье Евстафия
let heroMaxHealt = document.querySelector('.healthE');
let healthHero = document.createElement('span')
healthHero.textContent =  +prompt('Выберерти сложность', '')
let heroEvstf = healthHero.textContent;
heroMaxHealt.append(healthHero);

let openToAttack = true; //на героя возможно напасть
//Ходы Евстафия
function action(index)  {
    let ul = document.querySelector('ul');
    let move = document.createElement('li');
    move.textContent = moves[index]['name'];
    ul.append(move);
   }
const heroMoves = document.querySelectorAll('button');
let heroStats = heroMoves.forEach((el, i) => el.addEventListener('click', () => {
    action(i);
    openToAttack = false;
    let result = destructMoveSet(i);
   return result;
}))

//Ходы монстра

function actionMonster(index)  {
        let ul = document.querySelector('ul');
        let move = document.createElement('li');
        move.textContent = monster.moves[index]['name'];
        ul.append(move);
        let monsterStats = destructMoveSet(index);
        return monsterStats;
};
//ИИ игры // heroStep //

do {
    let im = Math.floor(Math.random()*(3));//Выбор удара
    if (openToAttack) {
   

      let monsterStep = actionMonster(im);//retutn [monsterStats]
      let phDamageForHero = countDamage(monsterStep[0], heroStats[2]);//damage armor
      let phDamageForMonster = countDamage(heroStats[0], monsterStep[2]);
      let mgDamageForHero = countDamage(monsterStep[1], heroStats[3]);
      let mgDamageForMonster = countDamage(heroStats[1], monsterStep[3]);
      monsterHealth = +monsterHealth - (phDamageForMonster + mgDamageForMonster) 
     heroEvstf = +heroEvstf - (phDamageForHero + mgDamageForHero)
     monsterDiv.append(monsterHealth);
     heroMaxHealt.append(heroEvstf);
    }; 
   

} while (+monsterDiv.textContent > 0 && +heroMaxHealt.textContent > 0) 















