import { menu } from '../lib/data';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div className="container md:h-[calc(100vh-7rem)] flex flex-col md:flex-row md:items-center">
      {menu.map((item) => (
        <Link
          to={`/menu/${item.category}`}
          key={item.id}
          className="p-8 flex-1 bg-cover"
          style={{ backgroundImage: `url(${item.imageURL})` }}
        >
          <div className={`text-${item.color} w-1/2`}>
            <h1 className="uppercase font-bold text-2xl">{item.title}</h1>
            <p className="text-sm ">{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Menu;
