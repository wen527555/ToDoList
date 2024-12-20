import styled from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";
import TaskEditMode from "./TaskEditMode";

function TaskItem({ tasks, onDelete, onToggle, onEdit }) {
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEditClick = (task) => {
    setEditingTaskId(task.id);
    setEditText(task.text);
  };

  const handleSaveClick = () => {
    if (!editText.trim()) {
      alert("請勿空白！");
      return;
    }
    onEdit(editingTaskId, editText);
    setEditingTaskId(null);
  };

  const handleCancelClick = () => {
    setEditingTaskId(null);
    setEditText("");
  };

  const handleChangeText = (e) => {
    setEditText(e.target.value);
  };

  return (
    <>
      {tasks.map((task) => (
        <>
          {editingTaskId === task.id ? (
            <TaskEditMode
              editText={editText}
              onChange={handleChangeText}
              onSave={handleSaveClick}
              onCancel={handleCancelClick}
            />
          ) : (
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
              <ItemEdit onClick={() => handleEditClick(task)} />
              <ItemDelete onClick={() => onDelete(task.id)} />
            </ItemContainer>
          )}
        </>
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
  onEdit: PropTypes.func.isRequired,
};

function ItemDelete({ onClick }) {
  return (
    <IconWrapper onClick={onClick} aria-label="刪除" title="刪除">
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
    </IconWrapper>
  );
}

ItemDelete.propTypes = {
  onClick: PropTypes.func.isRequired,
};

function ItemEdit({ onClick }) {
  return (
    <IconWrapper onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="18"
        viewBox="0 0 25 25"
      >
        <path d="M 20.09375 0.25 C 19.5 0.246094 18.917969 0.457031 18.46875 0.90625 L 17.46875 1.9375 L 24.0625 8.5625 L 25.0625 7.53125 C 25.964844 6.628906 25.972656 5.164063 25.0625 4.25 L 21.75 0.9375 C 21.292969 0.480469 20.6875 0.253906 20.09375 0.25 Z M 16.34375 2.84375 L 14.78125 4.34375 L 21.65625 11.21875 L 23.25 9.75 Z M 13.78125 5.4375 L 2.96875 16.15625 C 2.71875 16.285156 2.539063 16.511719 2.46875 16.78125 L 0.15625 24.625 C 0.0507813 24.96875 0.144531 25.347656 0.398438 25.601563 C 0.652344 25.855469 1.03125 25.949219 1.375 25.84375 L 9.21875 23.53125 C 9.582031 23.476563 9.882813 23.222656 10 22.875 L 20.65625 12.3125 L 19.1875 10.84375 L 8.25 21.8125 L 3.84375 23.09375 L 2.90625 22.15625 L 4.25 17.5625 L 15.09375 6.75 Z M 16.15625 7.84375 L 5.1875 18.84375 L 6.78125 19.1875 L 7 20.65625 L 18 9.6875 Z"></path>
      </svg>
    </IconWrapper>
  );
}

ItemEdit.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const ItemContainer = styled.div`
  border-radius: 8px;
  height: 38px;
  width: 100%;
  margin-bottom: 16px;
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
  appearance: none;
  -webkit-appearance: none;
  background-color: transparent;

  &:checked::after {
    content: "";
    display: block;
    width: 6px;
    height: 10px;
    border: solid #16cb4c;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    position: relative;
    left: 3px;
    bottom: 0px;
  }
`;

const ItemText = styled.p`
  font-size: 15px;
  font-weight: 400;
  text-align: left;
  flex: 1;
  margin-left: 16px;
  color: ${(props) => (props.completed ? "#16CB4C" : "#000000")};
`;

const IconWrapper = styled.button`
  cursor: pointer;
  margin-right: 10px;
`;
