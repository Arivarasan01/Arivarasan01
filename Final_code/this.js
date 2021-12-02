function Car(brand) {
    this.brand = brand;
}

Car.prototype.getBrand = function () {
    return this.brand;
}

var car = new Car('Honda');
console.log(car.getBrand());