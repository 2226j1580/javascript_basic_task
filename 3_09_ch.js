
        var book1 = {
            title: "The Hobbit",
            author: "J. R. R. Tolkien"
        };

        var book2 = {
            title: "Northern Lights",
            author: "Philip Pullman"
        };

        console.log(book1.title + " by " + book1.author);
        console.log(book2.title + " by " + book2.author);

        var book3 = {
            title: "To Kill a Mockingbird",
            author: "Harper Lee"
        };

        console.log(book3.title + " by " + book3.author);

        book3.generation = "Classic";
        console.log(book3)

        console.log(book3.title + " by " + book3.author + " (" + book3.generation + ")");
    

