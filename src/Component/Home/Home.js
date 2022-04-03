import React from 'react';

const Home = () => {
    return (
      <div className="mt-10">
        <div className="columns-2">
          <div className="p-5 sm:order-2">
            <h1 className="text-5xl font-bold">Your next phone</h1>
            <h1 className="text-5xl font-bold text-indigo-600">
              Your best phone
            </h1>
            <p className="flex justify-center text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
              dolore in quas, obcaecati aut quisquam alias, vel repellat modi
              excepturi pariatur culpa eligendi voluptate? Blanditiis dolor modi
              voluptates placeat dolorum!
            </p>
            <button className="mt-5 bg-indigo-200 rounded p-3 font-bold">
              Live Demo
            </button>
          </div>
          <div className="sm:order-1">
            <img
              className=" h-90"
              src="https://www.imglegacyhotel.com/wp-content/uploads/2018/10/legacy-hotel-23.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default Home;