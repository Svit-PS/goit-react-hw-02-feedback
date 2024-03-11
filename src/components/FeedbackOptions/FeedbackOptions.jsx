import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ arrFeedback, onLeaveFeedback }) => {
  return (
    <>
      {arrFeedback.map(el => (
        <Button
          type="button"
          onClick={() => onLeaveFeedback(String(el).toLowerCase())}
        >
          {el}
        </Button>
      ))}
    </>
  );
};

FeedbackOptions.prototype = {
  arrFeedback: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
