class SingletonPattern {
  constructor() {
    const instance = this.constructor.instance;
    if (instance) {
      return instance;
    }
    this.constructor.instance = this;
  }
}

const s1 = new SingletonPattern();
const s2 = new SingletonPattern();

console.log("same instance", s1 == s2);
