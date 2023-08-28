// pages/shop.jsx
import axios from 'axios';

const Shop = ({ products }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-2">
            <img src={product.image} alt={product.title} className="w-full h-32 object-cover" />
            <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
            <p className="text-gray-500">${product.price}</p>
            <div className="flex justify-between mt-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
                Add to Cart
              </button>
              <div className="flex items-center">
                <span className="mr-1">{product.rating.rate}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-yellow-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L10 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.192-3.046-2.971a.75.75 0 01.416-1.28l4.21-.612L9.327 2.418A.75.75 0 0110 2zm1 15a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await axios.get('https://fakestoreapi.com/products');
  const products = response.data;

  return {
    props: {
      products,
    },
  };
}

export default Shop;
