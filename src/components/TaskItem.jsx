import styled from "styled-components";
import PropTypes from "prop-types";

function TaskItem({ tasks, onDelete, onToggle }) {
  return (
    <>
      {tasks.map((task) => (
        <ItemContainer
          key={task.id}
          isDeleting={task.isDeleting}
          completed={task.completed}
        >
          <ItemCheck
            type="Checkbox"
            checked={task.completed}
            completed={task.completed}
            onChange={() => onToggle(task.id)}
          />
          <ItemText completed={task.completed}>{task.text}</ItemText>
          <DeleteIcon onClick={() => onDelete(task.id)} />
        </ItemContainer>
      ))}
    </>
  );
}

export default TaskItem;

TaskItem.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

function DeleteIcon({ onClick }) {
  return (
    <ItemDelete onClick={onClick} aria-label="刪除" title="刪除">
      <svg
        width="16"
        height="18"
        viewBox="0 0 16 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 18C2.45 18 1.97917 17.8042 1.5875 17.4125C1.19583 17.0208 1 16.55 1 16V3H0V1H5V0H11V1H16V3H15V16C15 16.55 14.8042 17.0208 14.4125 17.4125C14.0208 17.8042 13.55 18 13 18H3ZM13 3H3V16H13V3ZM5 14H7V5H5V14ZM9 14H11V5H9V14Z"
          fill="#CC4900"
        />
      </svg>
    </ItemDelete>
  );
}

DeleteIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const ItemContainer = styled.div`
  border-radius: 8px;
  height: 38px;
  width: 100%;
  margin: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px auto;
  background-color: ${({ isDeleting }) => (isDeleting ? "#f0f0f0" : "#fff")};
  border: 1px solid ${(props) => (props.completed ? "#16CB4C" : "#000000")};
  opacity: ${({ isDeleting }) => (isDeleting ? 0.5 : 1)};
  transition: all 0.5s ease;
  &:hover {
    background-color: #ececec;
  }
`;

const ItemCheck = styled.input.attrs(() => ({
  type: "checkbox",
}))`
  width: 16px;
  height: 16px;
  margin-left: 18px;
  border: 1px solid ${(props) => (props.completed ? "#16CB4C" : "#000000")};
`;

const ItemText = styled.p`
  font-size: 15px;
  font-weight: 400;
  text-align: left;
  flex: 1;
  margin-left: 16px;
  color: ${(props) => (props.completed ? "#16CB4C" : "#000000")};
`;

const ItemDelete = styled.button`
  cursor: pointer;
  margin-right: 10px;
`;
