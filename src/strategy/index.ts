import { DefaultDiscount } from './shopping-cart/default-discount';
import { ECommerceShoppingCart } from './shopping-cart/ecommerce-shopping-cart';
import { NewDiscount } from './shopping-cart/new-discount';

const shoppingCart = new ECommerceShoppingCart();

shoppingCart.addProduct({ name: 'Produto 01', price: 100 });
shoppingCart.addProduct({ name: 'Produto 02', price: 100 });
shoppingCart.addProduct({ name: 'Produto 03', price: 100 });

shoppingCart.discountStrategy = new DefaultDiscount();
console.log(
    `[Default Discount] Total: ${shoppingCart.total} | With Discount: ${shoppingCart.totalDiscount}`,
);

shoppingCart.discountStrategy = new NewDiscount();
console.log(
    `[New Discount] Total: ${shoppingCart.total} | With Discount: ${shoppingCart.totalDiscount}`,
);
