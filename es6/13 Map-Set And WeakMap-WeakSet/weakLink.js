//WeakSet is a special kind of Set that does not prevent JavaScript from removing its items from memory. WeakMap is the same thing for Map.
//JavaScript engine stores a value in memory while it is reachable (and can potentially be used).

let isMarked = new WeakSet();
let attachedData = new WeakMap();

class Node {
    constructor(id) {
        this.id = id;
    }
    mark() {
        isMarked.add(this);
    }
    unmark() {
        isMarked.delete(this);
    }
    marked() {
        return isMarked.has(this);
    }
    set data(data) {
        attachedData.set(this, data);
    }
    get data() {
        return attachedData.get(this);
    }
}

let foo = new Node("foo");
console.log(JSON.stringify(foo));
foo.mark();
foo.data = "bar";
console.log(foo.data);
console.log(JSON.stringify(foo));
console.log(isMarked.has(foo));
console.log(attachedData.has(foo));
foo = null ;
console.log(attachedData.has(foo));
console.log(isMarked.has(foo));
