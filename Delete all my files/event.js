const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial',(num1,num2) => {
    console.log(num1+num2);
});
eventEmitter.emit('tutorial', 12,5);

class Person extends EventEmitter{
    constructor(name){
        super();
        this._name = name;
    }
    get name(){
        return this._name;
    }
}
let ed = new Person('Ed');
let edd = new Person('Edd');
ed.on('name',()=>{
    console.log('my name is ' + ed.name);
});
edd.on('name',()=>{
    console.log('my name is ' + edd.name);
});
ed.emit('name');
edd.emit('name');