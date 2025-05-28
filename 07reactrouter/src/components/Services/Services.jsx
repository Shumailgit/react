import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Services() {
const [services, setServices] = useState([]);
const [loading, setLoading] = useState(true);
useEffect(() => {
    // Simulating API call
    const fetchServices = async () => {
      try {
        // Mock data - replace with your actual services
        const mockServices = [
          {
            id: 1,
            name: "IT Consulting",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
          },
          {
            id: 2,
            name: "Cloud Migration",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1415&q=80"
          },
          {
            id: 3,
            name: "Managed IT",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
          },
          {
            id: 4,
            name: "Software Development",
            image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
          }
        ];
        
        setTimeout(() => {
          setServices(mockServices);
          setLoading(false);
        }, 800);
      } catch (error) {
        console.error("Error fetching services:", error);
        setLoading(false);
      }
    };

    fetchServices();
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
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
        <h1 className="text-4xl font-bold text-center mb-12">These are the services we provide 
        in our company</h1>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => (
          <div key={service.id} className="group relative">
            <div className="aspect-square overflow-hidden rounded-lg bg-gray-200">
              <img
                src={service.image}
                alt={service.name}
                className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
              />
            </div>
            <h3 className="mt-4 text-lg font-medium text-gray-900 text-center">
              {service.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services