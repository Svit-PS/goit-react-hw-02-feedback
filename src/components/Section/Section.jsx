import PropTypes from 'prop-types';
import { SectionBox } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionBox>
      <h2>{title}</h2>
      {children}
    </SectionBox>
  );
};

Section.prototype = {
  title: PropTypes.string,
  children: PropTypes.array,
};
