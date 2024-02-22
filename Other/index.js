const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  console.log("this in a event", this);
});

const person1 = {
  name: "praveen",
  age: 26,
  sayHello: function () {
    console.log(this);
    // return this.name;
  },
};

const person2 = {
  name: "Balaji",
};

// console.log(person1.sayHello());
// console.log(person1.sayHello.call(person2));
// console.log(person1.sayHello.apply(person2));
// const bindPerson = person1.sayHello.bind(person2);
// console.log(bindPerson());

function a() {
  console.log(this);
}

setTimeout(person1.sayHello, 0);

var box = {
  color: "green", // 1
  position: 1, // 2
  clickMe: function () {
    // 3
    document.querySelector("body").addEventListener("click", function () {
      var str =
        "This is box number " + this.position + " and it is " + this.color; // 4
      alert(str);
    });
  },
};

box.clickMe();
