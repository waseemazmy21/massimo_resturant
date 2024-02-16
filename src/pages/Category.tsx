import { Link } from 'react-router-dom';
import { pizzas } from '../lib/data';

const Category = () => {
  return (
    <div className="grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3">
      {pizzas.map((item) => (
        <Link
          to={`/products/${item.id}`}
          key={item.id}
          className="p-4 flex flex-col gap-4 justify-between even:bg-fuchsia-50 xsm:even:bg-transparent  xsm:[&:nth-child(4n-1)]:bg-fuchsia-50 xsm:[&:nth-child(4n-2)]:bg-fuchsia-50 md:even:!bg-fuchsia-50 md:odd:!bg-transparent"
        >
          <img src={item.imageURL} className="w-full  object-cover" alt="" />

          <div className="flex items-center justify-between font-bold">
            <h1 className="uppercase text-red-500">{item.title}</h1>
            <h2 className="text-sm self-end">${item.price}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Category;
