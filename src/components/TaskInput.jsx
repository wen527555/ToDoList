import { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Spinner } from "../styles/Spinner";

function TaskInput({ onAdd }) {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      alert("請輸入內容！");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      onAdd(inputValue);
      setInputValue("");
      setLoading(false);
    }, 2000);
  };

  const handleValueChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      {loading && (
        <FormOverlay>
          <Spinner />
        </FormOverlay>
      )}
      <Input
        type="text"
        placeholder="請輸入要完成的事項..."
        value={inputValue}
        onChange={handleValueChange}
      />
      <AddTaskButton loading={loading} />
    </FormWrapper>
  );
}

export default TaskInput;

TaskInput.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

function AddTaskButton({ loading }) {
  return (
    <ItemAdd type="submit" disabled={loading}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 17H13V13H17V11H13V7H11V11H7V13H11V17ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22ZM12 20C14.2333 20 16.125 19.225 17.675 17.675C19.225 16.125 20 14.2333 20 12C20 9.76667 19.225 7.875 17.675 6.325C16.125 4.775 14.2333 4 12 4C9.76667 4 7.875 4.775 6.325 6.325C4.775 7.875 4 9.76667 4 12C4 14.2333 4.775 16.125 6.325 17.675C7.875 19.225 9.76667 20 12 20Z"
          fill="#0071FF"
        />
      </svg>
    </ItemAdd>
  );
}
AddTaskButton.propTypes = {
  loading: PropTypes.bool.isRequired,
};

const FormWrapper = styled.form`
  display: flex;
  margin-top: auto;
  position: relative;
`;

const FormOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 10;
`;

const Input = styled.input`
  flex: 1;
  padding: 6px 12px;
  border: 1px solid #cccccc;
  border-radius: 4px;
`;

const ItemAdd = styled.button`
  margin-left: 8px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
