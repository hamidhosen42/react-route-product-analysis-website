import React from 'react';

const ReviewCart = (props) => {
    const{name,img,title,rating}=props.review;
    return (
      <div className="shadow-lg rounded-2xl w-[250px] bg-white p-4">
        <h1>{name}</h1>
      </div>
    );
};

export default ReviewCart;