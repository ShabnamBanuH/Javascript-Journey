var obj = {
    name: "Banu",
    age: 33,
    phone: 9876543210,
    address: "Nellore",
    city: "Hyderabad",
    wish: function () {
        console.log("Hello function!!");
    },
    details: function () {
        console.log(
            "Name : " +
                this.name +
                "cAge : " +
                this.age +
                " Phone : " +
                this.phone +
                " Address : " +
                this.address +
                " City : " +
                this.city,
        );
    },
};
console.log(Object.values(obj));
console.log(obj.name);
console.log(obj.wish());
console.log(obj.details());
