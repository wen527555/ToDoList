import styled from "styled-components";
import PropTypes from "prop-types";

function ProgressBar({ tasks }) {
  const completed = tasks.filter((task) => task.completed).length;
  const total = tasks.length;
  return (
    <ProgressContainer>
      進度：{completed}/{total}
    </ProgressContainer>
  );
}

export default ProgressBar;

ProgressBar.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

const ProgressContainer = styled.div`
  font-size: 15px;
  font-weight: 400;
`;
