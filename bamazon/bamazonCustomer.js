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
            )
        };
        selectProduct();
    });
}

// =================== function to allow user to select an item to purchase        
function selectProduct() {
    inquirer
        .prompt([{
                name: "chosenItem",
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
                name: "chosenQuantity",
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
            const chosenItem = answer.chosenItem;
            const chosenQuantity = answer.chosenQuantity;
            connection.query(query, [chosenItem, chosenQuantity], function (err, res) {
                console.log(
                    // '\n------------' +
                    '\nYou selected Item Id: ' +
                    chosenItem +
                    '\n-------' +
                    '\nYou would like to purchase ' +
                    chosenQuantity +
                    ' of that item.'
                )
            });
            checkInventory(chosenItem, chosenQuantity);
        });

}


// ============================= function to check the inventory of the DB

function checkInventory(item, quantity) {
    connection.query('SELECT stock_quantity FROM products WHERE item_id =' + item, function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            var productInventory = res[i].stock_quantity;

            if (productInventory < quantity) {
                console.log('Insufficient Quantity! We only have ' + productInventory + ' of that product available');
                notEnoughStock();
            } else if (productInventory >= quantity) {
                placeOrder(productInventory, item, quantity);
            }
        }

    });

}


//====================== function if there is not enough stock to fulfill order
function notEnoughStock() {
    inquirer.prompt([{
        name: 'notEnough',
        type: 'list',
        message: 'Would you like to place another order?',
        choices: ['Yes', 'No']
    }]).then (function (answers) {
        if (answers.notEnough === 'Yes' ){
            runSearch();
        } else if (answers.notEnough === 'No') {
            connection.end();
            console.log('Goodbye');
            break;
        }
    })
}

//======================= function to place the order and update stock quantity DB
function placeOrder(stockQuantity, units, itemId) {
    let stockQuantity = stockQuantity - units;
    connection.query("UPDATE products SET stock_quantity =" + stockQuantity + ' WHERE item_id =' + itemId, function(err, res) {
        if (err) throw err;
        totalPurchase(chosenID, chosenQuantity);
    });
}

// ============================ function to show the user the total cost of their purchase
function totalPurchase(chosenID, chosenQuantity) {
    connection.query('SELECT price FROM products WHERE item_id =' + chosenID, function(err, res) {
        let itemPrice = res[0].price;
        let totatlPrice = (itemPrice * chosenQuantity);
        console.log('Thank you for your purchase. \nThe total of your order is: ' + '$' + totatlPrice);
        runSearch();
    })
}

