const prompt = require("prompt-sync")();

console.log("1 --> Add Book\n2 ---> Remove Book\n3 --> List Book\n4 --> Exit");
var choice = Number(prompt("Enter the choice : "));
var book = new Array();
while (choice != 4) {
                if (choice == 1) {
                                var book_name = prompt("Enter the book name : ");
                                book.push(book_name);
                } else if (choice == 2) {
                                book.pop();
                } else if (choice == 3) {
                                console.log(book);
                } else {
                                console.log("Invalid Choice");
                }
                choice = Number(prompt("Enter the choice : "))
}
