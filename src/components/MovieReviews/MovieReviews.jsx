import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "/src/services/api.js";
import css from "./MovieReviews.module.css";
import Error from "../Error/Error";
import { PropagateLoader } from "react-spinners";

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await getReviews(movieId);
        setReviews(data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    if (movieId) {
      fetchReviews();
    }
  }, [movieId]);

  return (
    <div className={css.wrapper}>
      {loading && <PropagateLoader color="white" />}
      {error && <Error message={error.message || "Failed to upload file!"} />}
      {reviews.length > 0 ? (
        <ul className={css.list}>
          {reviews.map((review) => (
            <li key={review.id} className={css.item}>
              <h3 className={css.author}>{review.author}</h3>
              <p className={css.revies}>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        !loading && <p className={css.noRevies}>No reviews yet..</p>
      )}
    </div>
  );
};

export default MovieReviews;
