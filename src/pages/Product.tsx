import { useParams } from 'react-router-dom';
import { products } from '../lib/data';
import { numberFormatter } from '../util/number-formatter';
import { useState } from 'react';
import { useShoppingCart } from '../contexts/useShoppingCart';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Product = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const [sizeOption, setSizeOption] = useState<number>(0);
  const { addItem } = useShoppingCart();

  const { id } = useParams();
  const product = id ? products.find((item) => item.id === id, 10) : undefined;

  if (!product) {
    return (
      <div className="container flex-1 flex flex-col justify-center items-center">
        <p className="text-3xl text-slate-600 mb-4">Product Not Found.</p>
        <Link to="/menu" className="text-red-600 hover:underline">
          Check out the Menu
        </Link>
      </div>
    );
  }

  const totalPrice =
    quantity * (product.price + product.options[sizeOption].additionalPrice);

  return (
    <div className="container flex flex-col md:flex-row gap-4 md:gap-8 items-center">
      <img
        src={product.imageURL}
        alt=""
        className="object-cover w-full max-w-sm"
      />

      <div className="text-red-500 flex flex-col gap-4">
        <h2 className="text-xl md:text-2xl font-bold uppercase xl:text-3xl">
          {product.title}
        </h2>
        <p>{product.desc}</p>

        {/* size options */}
        <div className="flex flex-col gap-4">
          <span className="text-xl font-bold">
            {numberFormatter.format(totalPrice)}
          </span>
          <div className="flex gap-4">
            {product.options?.map((option, index) => (
              <button
                key={option.title}
                className={`py-2 px-4 ${
                  index === sizeOption
                    ? 'bg-red-500 text-white'
                    : 'ring-1 ring-red-500'
                }  rounded-md hover:bg-red-500 hover:text-white`}
                onClick={() => setSizeOption(index)}
              >
                {option.title}
              </button>
            ))}
          </div>
        </div>

        {/* quantity */}
        <div className="flex justify-between items-center">
          <div className="flex justify-between w-full p-3 ring-1 ring-red-500">
            <span>Quantity</span>
            <div className="flex gap-4 items-center">
              <button
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity === 1}
              >
                {'<'}
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>{'>'}</button>
            </div>
          </div>
          <button
            className="uppercase w-56 bg-red-500 text-white p-3 ring-1 ring-red-500"
            onClick={() => {
              addItem(
                product.id,
                product.options[sizeOption].title,
                quantity,
                totalPrice
              );
              toast.success(
                `${quantity} ${product.title}(s) added to your cart!`
              );
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
