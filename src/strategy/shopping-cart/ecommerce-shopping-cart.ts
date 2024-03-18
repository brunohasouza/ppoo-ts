import { DiscountStrategy } from './discount-strategy';
import { ECommerceProductProtocol } from './ecommerce-product-protocol';

export class ECommerceShoppingCart {
    private mProducts: ECommerceProductProtocol[] = [];
    private mDiscountStrategy: DiscountStrategy = new DiscountStrategy();

    addProduct(...products: ECommerceProductProtocol[]): void {
        products.forEach((product) => this.mProducts.push(product));
    }

    set discountStrategy(strategy: DiscountStrategy) {
        this.mDiscountStrategy = strategy;
    }

    get products(): ECommerceProductProtocol[] {
        return this.mProducts;
    }

    get total(): number {
        return this.mProducts.reduce((sum, product) => sum + product.price, 0);
    }

    get totalDiscount(): number {
        return this.mDiscountStrategy.getDiscount(this);
    }
}
