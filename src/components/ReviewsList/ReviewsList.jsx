import { ReviewsListItem } from "../../components";
import PropTypes from "prop-types";
export const ReviewsList = ({ dataReviews }) => {
  return (
    <ul>
      {dataReviews.map((item) => (
        <ReviewsListItem key={item.id} dataReview={item} />
      ))}
    </ul>
  );
};
ReviewsList.propTypes = {
  dataReviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
