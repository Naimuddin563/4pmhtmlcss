
class Fruits
{
    taste; color;  static c=5;
    constructor(a,b)
    {
        this.taste = a;
        this.color=b;
    }
    getData ()
    {
        console.log(this.taste+" "+this.color)
    }
}
class Vegetables extends Fruits
{
    isHealthy;
    constructor(a,b,c)
    {
        super(a, b);
        this.isHealthy = c;
    }
}
let x= new Vegetables("good","green",true)
console.log(typeof Fruits);
x.getData()
let obj = new Fruits("good","yellow");
obj.getData()
console.log(Fruits.c)
let obj1 = new Fruits("bad", "red");
obj1.getData();




