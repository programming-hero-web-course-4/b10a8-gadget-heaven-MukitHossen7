/* eslint-disable react/prop-types */
const Card = ({ product }) => {
  console.log(product);
  const { product_image, price, product_title } = product;
  return (
    <div>
      <div className="card bg-base-100 shadow-lg p-6 rounded-xl">
        <figure className="rounded-xl">
          <img
            src={product_image}
            alt="product"
            className="h-60 w-full object-cover rounded-xl pb-6"
          />
        </figure>
        <div className="">
          <h2 className="font-semibold text-xl pb-3">{product_title}</h2>
          <p className="font-medium text-gray-500">Price : {price}k</p>
          <div className="mt-4">
            <button className="border-2 border-[#9538E2] px-5 py-3 rounded-full font-semibold text-[#9538E2]">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;