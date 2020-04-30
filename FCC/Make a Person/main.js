class Person {
  constructor(passedName) {
    const parts = passedName.split(' ');
    this.full = passedName;
    this.a = parts[0];
    this.b = parts[1];

    this.getFullName = this.getFullName;
    this.getFirstName = this.getFirstName;
    this.getSecondName = this.getSecondName;
  }

  getFullName() {
    return this.full;
  }

  getFirstName() {
    return this.a;
  }

  getLastName() {
    return this.b;
  }

  setFullName(name) {
    const nameParts = name.split(' ');
    this.full = name;
    this.a = nameParts[0];
    this.b = nameParts[1];
  }

  setFirstName(firstname) {
    this.a = firstname;

    const parts = this.full.split(' ');
    this.full = `${firstname} ${parts[1]}`;
  }

  setLastName(secondName) {
    this.b = secondName;

    const parts = this.full.split(' ');
    this.full = `${parts[0]} ${secondName}`;
  }
}

var bob = new Person('Bob Ross');
bob.setFirstName('name');
console.log(bob.getFullName());
