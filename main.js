const parent = {
    name: "SHUBHAM",
    printName: function () {
    console.log(this.name);
    },
  };
  const child = Object.create(parent);
  child.printName();

  function Mobile(brand, model, os) {
    this.brand = brand;
    this.model = model;
  this.os = os;
  }
  const myMobile = new Mobile("Samsung", "A11", "Android 12");
  console.log(myMobile.hasOwnProperty("brand"));

  const num1 = [10, 20, 30, 40, 50]; 
    const num2 = [100, 200, 300]; 
  
    Array.prototype.total = function () {
    let sum = 0;
     for (let i = 0; i < this.length; i++) {
       sum += this[i];
    }
    console.log(sum);
    };
  
    num1.total();
    num2.total(); 

    const studentOne = {
        name: "SHUBHAM",
        age: 24,
      };
      studentTwo = Object.create(studentOne);
      studentTwo.birthYear = 2022;
      for (const key in studentTwo) {
        console.log(key);
      }
 