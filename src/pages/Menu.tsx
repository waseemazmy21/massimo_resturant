import { menu } from '../lib/data';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="p-8 md:px-12  md:h-[calc(100vh-7rem)] flex flex-col md:flex-row md:items-center">
      {menu.map((category) => (
        <Link
          to={`/menu/${category.slug}`}
          key={category.id}
          className="p-8 flex-1 bg-cover"
          style={{ backgroundImage: `url(${category.imageURL})` }}
        >
          <div className={`text-${category.color} w-1/2`}>
            <h1 className="uppercase font-bold text-2xl">{category.title}</h1>
            <p className="text-sm ">{category.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
