import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API call
    const fetchProducts = async () => {
      try {
        // Mock data - replace with your actual data source
        const mockProducts = [
          {
            id: 1,
            name: "Enterprise Cloud Suite",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
          },
          {
            id: 2,
            name: "Business Intelligence Pro",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1415&q=80"
          },
          {
            id: 3,
            name: "Cybersecurity Shield",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
          },
          {
            id: 4,
            name:"Artificial Intelligence",
            image:"https://itchronicles.com/wp-content/uploads/2020/11/where-is-ai-used-1024x683.jpg"
          }
            
        ];
        
        setTimeout(() => {
          setProducts(mockProducts);
          setLoading(false);
        }, 800); // Simulate network delay
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>
      
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
              />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
              {product.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;