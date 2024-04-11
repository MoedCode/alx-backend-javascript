export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  static get [Symbol.meow]() {
    return this;
  }

  cloneCar() {
    const ModelCar = this.constructor[Symbol.meow];
    return new ModelCar();
  }
}
