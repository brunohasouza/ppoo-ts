import { ECommerceShoppingCart } from './ecommerce-shopping-cart';

export class DiscountStrategy {
    protected discount = 0;

    public getDiscount(cart: ECommerceShoppingCart): number {
        return cart.total;
    }
}
