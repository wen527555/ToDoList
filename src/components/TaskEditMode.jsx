import styled from "styled-components";
import PropTypes from "prop-types";

function EditMode({ onSave, onCancel, editText, onChange }) {
  return (
    <EditContainer>
      <EditInput type="text" value={editText} onChange={onChange} />
      <ButtonWrapper>
        <EditButton onClick={onSave}>Save</EditButton>
        <EditButton onClick={onCancel}>Cancel</EditButton>
      </ButtonWrapper>
    </EditContainer>
  );
}

export default EditMode;

EditMode.propTypes = {
  onSave: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  editText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

const EditContainer = styled.div`
  border-radius: 8px;
  height: 50px;
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px;
  border: 1px solid #000000;
`;

const EditInput = styled.input`
  flex: 1;
  padding: 5px;
  border: none;
  outline: none;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

const EditButton = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  background-color: #0071ff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #ececec;
    color: black;
  }
`;
