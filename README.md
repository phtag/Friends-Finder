# Friends-Finder

Week 13 homework assignment


### Overview
This project uses Node.js and Express to create a server to host users searching for friends that match their preferences. It provides a web-based frontend where users can fill out their name, provide a picture of themselves and answer a survey of questions and submit this information to search for the friend that most closely matches their survery question answers. After submitting their information, users are provided with the name and picture of the friend most closely matching their preferences.

The server code is implemented in node.js using Express. The server services both html and api routes. The html routes send html files to the client browser based on user actions.

The api serves routes for:
* getting a JSON formatted list of all possible friends on the site
* posting information about the current user

NOTE: This project is referenced on my portfolio page at [my portfolio](https://phtag.github.io/Updated-portfolio/)

### Purpose
The purpose of this assignment is to learn how to use JavaScript in conjunction with Node.js to interface with a mySQL database. 

### Getting Started
To play the game, you will need to copy the package.json file for this project to your root node.js directory and install NPM packages for:
* Inquirer
* mySQL

After installing this packages, copy all of the files from the repository to your node.js root node. You will be running the store programs using the BamazonCustomer.js, BamazonManager.js, and BamazonSupervisor.js files in node.js. 

### Customers
[Bamazon store demo video](https://github.com/phtag/Bamazon/blob/master/images/Bamazon-customer-demo.gif)
For the customer program, customers can:
* View the existing collection of products available in the store
* Purchase products

Purchases consist of a selected product which is done by ID and a purchase quantity. When the purchase is made, the program updates the database to reflect both the reduced inventory level for the selected product and the increased total sales for that product.

![Customer program Screenshot](/images/Bamazon-customer-screenShot.jpg)

### Managers
[Bamazon store demo video](https://github.com/phtag/Bamazon/blob/master/images/Bamazon-manager-demo.gif)
For the manager program, managers can:
* View all products
* View a listing of all products having inventory levels below 5 
* Add inventory to products
* Add new products to the store

![Customer program Screenshot](/images/Bamazon-manager-screenShot.jpg)

### Supervisors
[Bamazon store demo video](https://github.com/phtag/Bamazon/blob/master/images/Bamazon-supervisor-demo.gif)
For the supervisor program, supervisors can:
* View product sales by department
* Create new departments

![Customer program Screenshot](/images/Bamazon-supervisor-screenShot.jpg)

This project is maintained by Peter Tag
