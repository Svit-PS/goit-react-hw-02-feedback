import { SectionBox } from './Section.styled';

export const Section = props => {
  return (
    <SectionBox>
      <h2>{props.title}</h2>
      {props.children}
    </SectionBox>
  );
};
