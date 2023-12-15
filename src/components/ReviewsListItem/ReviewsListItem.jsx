import css from "./ReviewsListItem.module.css";
import PropTypes from "prop-types";
export const ReviewsListItem = ({ dataReview }) => {
  return (
    <section className={css.reviewSection}>
      <h3>Author {dataReview.author} </h3>
      <p> {dataReview.content} </p>
    </section>
  );
};
ReviewsListItem.propTypes = {
  dataReview: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};
