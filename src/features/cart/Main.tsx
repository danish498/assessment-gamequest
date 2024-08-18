"use client";

import { Icons } from "@/assets/icons";
import { Button } from "@/components/ui/button";

import { products } from "@/data/product";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

import { useRouter } from "next/navigation";
import { deleteItems, getTotalCartPrice } from "./service/cartSlice";
import { helper } from "@/utils/helper";

const Cart = () => {
  const router = useRouter();

  const { cart } = useAppSelector((state) => state.cartItem);
  const dispatch = useAppDispatch();

  const totalPrice = useAppSelector(getTotalCartPrice);
  const shipping = helper.calculateShipping(totalPrice);
  const tax = helper.calculateTax(totalPrice);
  const finalPrice = totalPrice + shipping + tax;

  const handleCheckout = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
  };

  const handleRemoveItemClick = (id: number) => {
    dispatch(deleteItems(id));
  };

  if (cart.length < 0) {
    return (
      <>
        <div className="flex flex-col justify-center items-center gap-4 mt-60">
          <p>There are nothing in your cart</p>

          <Button onClick={() => router.push("/products")}>
            Continue Shopping
          </Button>
        </div>
      </>
    );
  }

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24 max-w-2xl lg:max-w-7xl">
      <h1 className="font-bold font-press text-3xl text-secondary sm:text-4xl tracking-tight">
        GameQuest Cart
      </h1>
      <form className="lg:items-start lg:gap-x-12 xl:gap-x-16 lg:grid lg:grid-cols-12 mt-12">
        <section aria-labelledby="cart-heading" className="lg:col-span-7">
          <h2 id="cart-heading" className="sr-only">
            Items in your shopping cart
          </h2>

          <ul
            role="list"
            className="border-gray-200 border-t border-b divide-y divide-gray-200"
          >
            {cart.map((product, productIdx) => (
              <li key={product.id} className="flex py-6 sm:py-10">
                <div className="flex-shrink-0">
                  <img
                    src={product.image}
                    alt="product-iamge"
                    className="rounded-md w-24 sm:w-48 h-24 sm:h-48 object-center object-cover"
                  />
                </div>

                <div className="flex flex-col flex-1 justify-between ml-4 sm:ml-6">
                  <div className="relative sm:gap-x-6 sm:grid sm:grid-cols-2 pr-9 sm:pr-0">
                    <div>
                      <div className="flex justify-between">
                        <h3 className="text-sm">
                          <p className="font-medium hover:text-gray-800">
                            {product.name}
                          </p>
                        </h3>
                      </div>
                      <p className="mt-1 font-medium text-sm">
                        {product.totalPrice}
                      </p>
                    </div>

                    <div className="mt-4 sm:mt-0 sm:pr-9">
                      <label className="sr-only">
                        Quantity, {product.name}
                      </label>

                      <p>{product.quantity}</p>

                      <div className="top-0 right-0 absolute">
                        <button
                          type="button"
                          className="inline-flex -m-2 p-2 text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Remove</span>
                          <Icons.x
                            className="w-5 h-5"
                            aria-hidden="true"
                            onClick={() => handleRemoveItemClick(product.id)}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Order summary */}
        <section
          aria-labelledby="summary-heading"
          className="lg:col-span-5 bg-gray-50 mt-16 lg:mt-0 px-4 py-6 sm:p-6 lg:p-8 rounded-lg"
        >
          <h2
            id="summary-heading"
            className="font-medium text-gray-900 text-lg"
          >
            Order summary
          </h2>

          <dl className="space-y-4 mt-6">
            <div className="flex justify-between items-center">
              <dt className="text-gray-600 text-sm">Subtotal</dt>
              <dd className="font-medium text-gray-900 text-sm">
                ${totalPrice.toFixed(2)}
              </dd>
            </div>
            <div className="flex justify-between items-center border-gray-200 pt-4 border-t">
              <dt className="flex items-center text-gray-600 text-sm">
                <span>Shipping estimate</span>
                <a
                  href="#"
                  className="flex-shrink-0 ml-2 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">
                    Learn more about how shipping is calculated
                  </span>
                  <Icons.questionMark className="w-5 h-5" aria-hidden="true" />
                </a>
              </dt>
              <dd className="font-medium text-gray-900 text-sm">
                ${shipping.toFixed(2)}
              </dd>
            </div>
            <div className="flex justify-between items-center border-gray-200 pt-4 border-t">
              <dt className="flex text-gray-600 text-sm">
                <span>Tax estimate</span>
                <a
                  href="#"
                  className="flex-shrink-0 ml-2 text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">
                    Learn more about how tax is calculated
                  </span>
                  <Icons.questionMark className="w-5 h-5" aria-hidden="true" />
                </a>
              </dt>
              <dd className="font-medium text-gray-900 text-sm">
                ${tax.toFixed(2)}
              </dd>
            </div>
            <div className="flex justify-between items-center border-gray-200 pt-4 border-t">
              <dt className="font-medium text-base text-gray-900">
                Order total
              </dt>
              <dd className="font-medium text-base text-gray-900">
                ${finalPrice.toFixed(2)}
              </dd>
            </div>
          </dl>

          <div className="mt-6">
            <Button
              // type="submit"
              className="w-full text-gray-100"
              onClick={handleCheckout}
            >
              Checkout
            </Button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Cart;
