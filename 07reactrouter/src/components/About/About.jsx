import React from "react";
import { Link } from "react-router-dom";
export default function About() {
  return (
      <div className="py-16 bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTsPBu70sNSEy3toI4pXzlpP_MdLffH2BPBA&s"
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          Our Company is a startup Company
                      </h2>
                      <p className="mt-6 text-gray-600">
                          We aim to make the best products in the dynamic industry like IT. We aim to
                          provide the best output to our consumers
                      </p>
                      <p className="mt-4 text-gray-600">
                         We also moving with the artificial intelligence in our business, and develop products to
                         multiple industries involving IT.
                      </p>
                  </div>
              </div>
          </div>
      </div>
  );
}