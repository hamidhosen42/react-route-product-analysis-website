import React from 'react';
import useReviews from '../../Hook/useReviews';
import ReviewCart from '../ReviewCart/ReviewCart';
import './CustomReview.css';

const CustomReview = () => {
  const [reviews, setReview] = useReviews();
    return (
      <div>
        <h1 className="text-3xl font-bold mb-10 flex justify-center">Customer Reviews(3)</h1>

        <div className="flex gap-10 columns-3">
          {reviews.slice(0, 3).map((review) => (
            <ReviewCart review={review} key={review.key}></ReviewCart>
          ))}
        </div>

        <button className="mt-10 bg-indigo-600 rounded py-2 font-bold text-cyan-50 px-20">
          See All Reviews
        </button>
      </div>
    );
};

export default CustomReview;