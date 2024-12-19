import styled from "styled-components";

function Content({ children }) {
  return <ContentContainer>{children}</ContentContainer>;
}

export default Content;

const ContentContainer = styled.div`
  background-color: #ffffff;
  margin: 76px 25px 15px 22px;
  border-radius: 8px;
  min-height: calc(100vh - 60px);
  padding: 16px;
`;
