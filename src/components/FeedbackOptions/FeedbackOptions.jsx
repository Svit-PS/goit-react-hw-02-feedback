import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ text, onLeaveFeedback }) => {
  return (
    <>
      <Button
        type="button"
        onClick={() => onLeaveFeedback(String(text).toLowerCase())}
      >
        {' '}
        {text}{' '}
      </Button>
    </>
  );
};

FeedbackOptions.prototype = {
  text: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
