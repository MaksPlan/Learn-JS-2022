// function CreatePostCard(from, to) {
//     this.from = from;
//     this.to = to;
//     this.show = function() {
//         return `${this.from}, ${this.to}`
//     }
// };

// CreatePostCard.prototype.changeProps = function (newFrom, newTo) {
//     this.from = newFrom;
//     this.to = newTo;
// };

// const myPostCard = new CreatePostCard(me, NN);

// console.log(myPostCard);

// changeProps(u, Krd); 


class People {
    constructor (props) {
        this.name = props.name;
        this.surname = props.surname;
    };
    getFullName() {
        return `I'm ${this.name} ${this.surname}`
    };
};


class Worker extends People {
    constructor(props) {
        super(props);
        this.rate  = props.rate;
        this.day = props.day;
  
    };

    getSalary(rate, day) {
       return this.day*this.rate;
    };
};


const workOne = new Worker({
    name: 'Vasya',
    surname: 'Ivanov',
    day: 30,
    rate: 5000
})

class Boss extends Worker {
    constructor(props) {
        super(props);
        this.workers = props.workers;
        super.getSalary = () => this.day*this.rate*this.workers;
    };
    
};

const myBoss = new Boss({
    name: 'Dima',
    surname: 'Petrov',
    day: 1,
    rate: 10000,
    workers: 5
})

console.log(myBoss.getSalary()); 

//3
class Worker {
    #name;
    #surename;
    #rate;
    #days;

    constructor(props) {
        this.#name = props.name;
        this.#surename = props.surename;
        this.#rate = props.rate;
        this.#days = props.days;
    };
get getName() {
    return this.#name;
};
get getSurename() {
    return this.#surename;
};
get getdays() {
    return this.#days;
};
get getRate() {
    return this.rate;
}
}