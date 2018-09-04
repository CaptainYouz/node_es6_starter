class Hello {
  speak() {
    return new Promise(resolve => resolve('i am groot'));
  }
}


const ex = new Hello();

ex.speak().then(word => console.log(word))