class Shape{
    constructor(id,x,y){        
        this.id=id;
        this.move(x,y);
    }
    move(x,y){
        this.x=x;
        this.y=y;
    }   
    display(){
        console.log("Shape: "+this.id,this.x,this.y);
    }

    toString () {
        return `Shape(${this.id})`;
    }
}

var shape = new Shape("id_Shape",20,30);
shape.display();


//Inheritance
class Circle extends Shape {
    constructor (id, x, y, radius) {
        super(id, x, y);
        this.radius = radius;
    }
    toString () {
        return "Circle > " + super.toString();
    }
    static defaultCircle () {
        return new Circle("id_Circle_Static", 0, 0, 100);
    }
}

class Rectangle extends Shape {
    constructor (id, x, y, width, height) {
        super(id, x, y);
        this.width  = width;
        this.height = height;
    }
    toString () {
        return "Rectangle > " + super.toString();
    }
    static defaultRectangle () {
        return new Rectangle("id_Rectangle_Static", 0, 0, 100, 100);
    }
    //Getter Setters
    set width  (width)  { this._width = width;               }
    get width  ()       { return this._width;                }
    set height (height) { this._height = height;             }
    get height ()       { return this._height;               }
    get area   ()       { return this._width * this._height; }

}

let circle = new Circle("id_Circle",40,50,0.5);
console.log("Circle: "+circle);
//Base Class Access
console.log("Base Class: "+circle.toString());
//Static Memeber
console.log("Static Memeber: "+Circle.defaultCircle());


let rectangle = new Rectangle("id_Rectangle",40,50,5,5);
console.log("Rectangle: "+rectangle);
//Base Class Access
console.log("Base Class: "+rectangle.toString());
//Static Memeber
console.log("Static Memeber: "+Rectangle.defaultRectangle());
//Getter Setter
console.log(rectangle.area);
