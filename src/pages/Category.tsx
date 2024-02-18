import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { products } from '../lib/data';

const Category = () => {
  const { category } = useParams();
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-1 xsm:grid-cols-2 md:grid-cols-3">
      {products
        .filter((p) => p.category === category)
        .map((item) => (
          <Link
            to={`/products/${item.id}`}
            key={item.id}
            className="p-4 flex flex-col gap-4 justify-between even:bg-fuchsia-50 xsm:even:bg-transparent  xsm:[&:nth-child(4n-1)]:bg-fuchsia-50 xsm:[&:nth-child(4n-2)]:bg-fuchsia-50 md:even:!bg-fuchsia-50 md:odd:!bg-transparent"
          >
            <img src={item.imageURL} className="w-full  object-cover" alt="" />

            <div className="flex items-center justify-between gap-4 font-bold">
              <h2 className="text-xl uppercase text-red-500">{item.title}</h2>
              <p className="text-sm ">${item.price}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Category;
