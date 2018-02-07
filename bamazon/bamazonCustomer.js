// ================================require npm packages
const mysql = require('mysql');
const inquirer = require('inquirer')

// ====================================== connect to the bamazonDB
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazonDB"
});

connection.connect(function (err) {
    if (err) throw err;
    runSearch();
});

// ================ function to initiate inquirer and user options
function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "Welcome to bamazon. Would you like to see what items are available?",
            choices: [
                "See current available items",
                "I changed my mind. Exit this search"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {
                case "See current available items":
                    readProducts();
                    break;

                case "I changed my mind. Exit this search":
                    connection.end();
                    console.log('Goodbye');
                    break;
            }
        });
}

// ====================== function that will list all the items in the DB
function readProducts() {
    console.log('Showing all products...\n');
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(
                "Item Id: " +
                res[i].item_id +
                " || Product Name: " +
                res[i].product_name +
                " || Department: " +
                res[i].department_name +
                " || Price: " +
                res[i].price +
                " || Quantity Available: " +
                res[i].stock_quantity
            )};
        selectProduct();
    });
}

// =================== function to allow user to select an item to purchase        
function selectProduct() {
    inquirer
        .prompt([
            {
                name: "purchase",
                type: "input",
                message: "Type the Item Id Number of the product you would like to purchase: ",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            },
            {
                name: "quantity",
                type: "input",
                message: "What quantity of that item would you like to purchase? ",
                validate: function (value) {
                    if (isNaN(value) === false) {
                        return true;
                    }
                    return false;
                }
            }
        ])
        .then(function (answer) {
            var query = "SELECT * FROM products WHERE ?";
            connection.query(query, [answer.purchase, answer.quantity], function (err, res) {
                for (var i = 0; i < res.length; i++) {
                    console.log(
                        "Item Id: " +
                        res[i].item_id +
                        " || Product Name: " +
                        res[i].product_name +
                        " || Department: " +
                        res[i].department_name +
                        " || Price: " +
                        res[i].price
                    );
                }
                placeOrder();
            });
        });
}

// ============================== function to place order and update DB
// function placeOrder() {
//     console.log("Completing your order ...\n");
//     var query = connection.query(
//         "UPDATE products SET ? WHERE ?",
//         [
//             {
//                 quantity: 100
//             },
//             {
//                 flavor: "Rocky Road"
//             }
//         ],
//         function (err, res) {
//             console.log(res.affectedRows + " products updated!\n");
//             // Call deleteProduct AFTER the UPDATE completes
//             deleteProduct();
//         }
//     );

//     // logs the actual query being run
//     console.log(query.sql);
// }

// function deleteProduct() {
//     console.log("Deleting all strawberry icecream...\n");
//     connection.query(
//         "DELETE FROM products WHERE ?",
//         {
//             flavor: "strawberry"
//         },
//         function (err, res) {
//             console.log(res.affectedRows + " products deleted!\n");
//             // Call readProducts AFTER the DELETE completes
//             readProducts();
//         }
//     );
// }

//============================= this function is the one I will probably end up using 

function placeOrder() {
    // query the database for all items being auctioned
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;
        inquirer
            .prompt([
                {
                    name: "purchaseChoice",
                    type: "rawlist",
                    choices: function () {
                        var choiceArray = [];
                        for (var i = 0; i < results.length; i++) {
                            choiceArray.push(results[i].item_id);
                        }
                        return choiceArray;
                    },
                    message: "What item would you like to purchase?  "
                },
                {
                    name: "quantity",
                    type: "input",
                    message: "What quantity of that item would you like to purchase? "
                }
            ])
            .then(function (answer) {
                // get the information of the chosen item
                var chosenItem;
                // for (var i = 0; i < results.length; i++) {
                //     if (results[i].item_id === answer.item_id) {
                //         chosenItem = results[i];
                //     }
                // }

                // determine if there is enough quantity to fulfill the order
                if (chosenItem.stock_quantity < parseInt(answer.stock_quantity)) {
                    connection.query(
                        "UPDATE stock_quantity SET ? WHERE ?",
                        [
                            {
                                stock_quantity: answer.quantity
                            },
                            {
                                item_id: chosenItem.purchaseChoice
                            }
                        ],
                        function (error) {
                            if (error) throw err;
                            console.log('Order placed successfully!');
                            // create a function to show the user the total cost of their purchase 
                        }
                    );
                }
                else {
                    // there aren't enough items in stock to fulfill the order
                    console.log('Insufficient Quantity! Please make a new purchase');
                    // runSearch();
                }
            });
    });
}

// ============================ function to show the user the total cost of their purchase
// function totalPurchase() {
//     // runSearch();
// }



