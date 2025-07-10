import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const whatsappNumber = '9884545006';
  const whatsappMessage = `Hi! I'm interested in buying the product, shall we discuss the price?: ${product.name}`;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{product.description}</p>

        <a
          href={`https://wa.me/91${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12.04 2.003c-5.522 0-10 4.477-10 10a9.944 9.944 0 0 0 1.373 5.025l-1.43 5.227 5.36-1.406a9.972 9.972 0 0 0 4.697 1.188h.001c5.523 0 10-4.478 10-10s-4.477-10-10-10zm0 18.004c-1.523 0-3.03-.408-4.355-1.18l-.312-.182-3.178.833.847-3.1-.203-.32a7.958 7.958 0 0 1-1.244-4.254c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.293-5.575c-.236-.118-1.393-.688-1.609-.767-.216-.08-.374-.118-.531.118-.157.236-.61.767-.748.924-.138.157-.276.177-.512.059-.236-.118-.998-.368-1.9-1.173-.703-.626-1.177-1.399-1.315-1.636-.138-.236-.015-.363.103-.48.106-.106.236-.276.354-.413.118-.138.157-.236.236-.394.08-.157.04-.295-.02-.413-.059-.118-.531-1.282-.728-1.752-.192-.46-.388-.398-.531-.398h-.453c-.138 0-.354.05-.54.236s-.708.692-.708 1.686c0 .993.725 1.953.826 2.09.102.138 1.429 2.18 3.467 3.057 2.038.877 2.038.585 2.406.55.369-.035 1.206-.49 1.377-.964.171-.473.171-.877.12-.964-.052-.087-.197-.138-.433-.256z" />
          </svg>
          Contact
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
