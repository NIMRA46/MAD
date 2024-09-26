// Shopping Cart as an empty array
let cart = [];
/* 
1. Function to Add Items to the Cart
   - Takes productId, productName, quantity, and price as parameters.
   - Pushes the product object to the cart array.
*/
const addItemToCart = (productId, productName, quantity, price) => {
    const product = {
        productId,
        productName,
        quantity,
        price
    };
    cart.push(product);
    console.log(`Added ${productName} to the cart.`);
};
/* 
2. Function to Remove Items from the Cart by productId 
   - Finds the index of the product in the cart using the productId.
   - Removes the product using splice method if it exists in the cart.
*/
const removeItemFromCart = (productId) => {
    const index = cart.findIndex(item => item.productId === productId);
    if (index !== -1) {
        console.log(`Removed ${cart[index].productName} from the cart.`);
        cart.splice(index, 1);
    } else {
        console.log(`Product with ID ${productId} not found in the cart.`);
    }
};
/* 
3. Function to Update Item Quantity 
   - Updates the quantity of a product based on its productId.
   - Uses map to create a new array with the updated product quantity.
*/
const updateItemQuantity = (productId, newQuantity) => {
    cart = cart.map(item => item.productId === productId ? 
        { ...item, quantity: newQuantity } : item);
    console.log(`Updated quantity for Product ID ${productId} to ${newQuantity}.`);
};
/* 
4. Function to Calculate Total Cost of the Cart
   - Uses the reduce method to calculate the total price based on quantity and price.
*/
const calculateTotalCost = () => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    console.log(`Total Cost: $${total.toFixed(2)}`);
    return total;
};
/* 
5. Function to Display Cart Summary 
   - Uses map to display each product's name, quantity, and total price for that product.
   - Filters out products with zero quantity.
*/
const displayCartSummary = () => {
    const validCartItems = cart.filter(item => item.quantity > 0);
    if (validCartItems.length > 0) {
        validCartItems.map(item => 
            console.log(`${item.productName} - Quantity: ${item.quantity}, Total Price: $${(item.price * item.quantity).toFixed(2)}`)
        );
    } else {
        console.log("Your cart is empty.");
    }
};
/* 
6. Bonus: Apply Discount Code
   - Applies a discount to the total cost based on the provided discount percentage.
*/
const applyDiscount = (discountPercentage) => {
    const totalCost = calculateTotalCost();
    const discountAmount = totalCost * (discountPercentage / 100);
    const discountedTotal = totalCost - discountAmount;
    console.log(`Discount Applied: ${discountPercentage}%`);
    console.log(`Total after Discount: $${discountedTotal.toFixed(2)}`);
    return discountedTotal;
};
// Example usage of the cart feature
addItemToCart(1, 'Apple', 2, 1.5);      // Adds 2 Apples at $1.5 each
addItemToCart(2, 'Banana', 3, 0.75);    // Adds 3 Bananas at $0.75 each
addItemToCart(3, 'Orange', 1, 2);       // Adds 1 Orange at $2 each
displayCartSummary();                    // Displays the cart summary
updateItemQuantity(2, 5);                // Updates Banana quantity to 5
removeItemFromCart(1);                   // Removes Apple from the cart
displayCartSummary();                    // Displays updated cart summary
calculateTotalCost();                    // Calculates total cost of items
applyDiscount(10);                       // Applies a 10% discount
