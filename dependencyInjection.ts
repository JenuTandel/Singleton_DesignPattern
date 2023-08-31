class UserService {
  // public a: string = "A";
  constructor() {
    console.log("userService");
  }
  sayHi() {
    console.log("Hi");
  }
}
class Component {
  constructor(public user: UserService) {}
}
class MyComponent {
  constructor(public user2: UserService) {}
}

//Angular Dependency Injection
//Injector is responsible for creation of a class instance and inject it into constructor of the object.
class Injector {
  private _container = new Map();

  constructor(private _providers: any[] = []) {
    this._providers.forEach((service) =>
      this._container.set(service, new service())
    );
  }

  get(service: any) {
    const serviceInstance = this._container.get(service);
    if (!serviceInstance) {
      throw new Error("No provider found");
    }
    return serviceInstance;
  }
}

//Use in the application
const providers = [UserService];

const injector = new Injector(providers);
const component = new Component(injector.get(UserService));
const component2 = new MyComponent(injector.get(UserService));
component.user.sayHi();
component2.user2.sayHi();
