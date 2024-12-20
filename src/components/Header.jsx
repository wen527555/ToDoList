import styled from "styled-components";
import { useTranslation } from "react-i18next";
function Header() {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <HeaderContainer>
      <MenuIcon />
      <HeaderTitle>{t("todo_list")}</HeaderTitle>
      <LanguageSwitcher>
        <LanguageButton
          disabled={i18n.language === "zh"}
          onClick={() => changeLanguage("zh")}
        >
          中文
        </LanguageButton>
        <LanguageButton
          disabled={i18n.language === "en"}
          onClick={() => changeLanguage("en")}
        >
          English
        </LanguageButton>
      </LanguageSwitcher>
      <SettingIcon />
    </HeaderContainer>
  );
}

export default Header;

function MenuIcon() {
  return (
    <MenuContainer>
      <svg
        width="18"
        height="12"
        viewBox="0 0 18 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 12V10H18V12H0ZM0 7V5H18V7H0ZM0 2V0H18V2H0Z"
          fill="#E8EAED"
        />
      </svg>
    </MenuContainer>
  );
}

function SettingIcon() {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.3 20L6.9 16.8C6.68333 16.7167 6.47917 16.6167 6.2875 16.5C6.09583 16.3833 5.90833 16.2583 5.725 16.125L2.75 17.375L0 12.625L2.575 10.675C2.55833 10.5583 2.55 10.4458 2.55 10.3375V9.6625C2.55 9.55417 2.55833 9.44167 2.575 9.325L0 7.375L2.75 2.625L5.725 3.875C5.90833 3.74167 6.1 3.61667 6.3 3.5C6.5 3.38333 6.7 3.28333 6.9 3.2L7.3 0H12.8L13.2 3.2C13.4167 3.28333 13.6208 3.38333 13.8125 3.5C14.0042 3.61667 14.1917 3.74167 14.375 3.875L17.35 2.625L20.1 7.375L17.525 9.325C17.5417 9.44167 17.55 9.55417 17.55 9.6625V10.3375C17.55 10.4458 17.5333 10.5583 17.5 10.675L20.075 12.625L17.325 17.375L14.375 16.125C14.1917 16.2583 14 16.3833 13.8 16.5C13.6 16.6167 13.4 16.7167 13.2 16.8L12.8 20H7.3ZM9.05 18H11.025L11.375 15.35C11.8917 15.2167 12.3708 15.0208 12.8125 14.7625C13.2542 14.5042 13.6583 14.1917 14.025 13.825L16.5 14.85L17.475 13.15L15.325 11.525C15.4083 11.2917 15.4667 11.0458 15.5 10.7875C15.5333 10.5292 15.55 10.2667 15.55 10C15.55 9.73333 15.5333 9.47083 15.5 9.2125C15.4667 8.95417 15.4083 8.70833 15.325 8.475L17.475 6.85L16.5 5.15L14.025 6.2C13.6583 5.81667 13.2542 5.49583 12.8125 5.2375C12.3708 4.97917 11.8917 4.78333 11.375 4.65L11.05 2H9.075L8.725 4.65C8.20833 4.78333 7.72917 4.97917 7.2875 5.2375C6.84583 5.49583 6.44167 5.80833 6.075 6.175L3.6 5.15L2.625 6.85L4.775 8.45C4.69167 8.7 4.63333 8.95 4.6 9.2C4.56667 9.45 4.55 9.71667 4.55 10C4.55 10.2667 4.56667 10.525 4.6 10.775C4.63333 11.025 4.69167 11.275 4.775 11.525L2.625 13.15L3.6 14.85L6.075 13.8C6.44167 14.1833 6.84583 14.5042 7.2875 14.7625C7.72917 15.0208 8.20833 15.2167 8.725 15.35L9.05 18ZM10.1 13.5C11.0667 13.5 11.8917 13.1583 12.575 12.475C13.2583 11.7917 13.6 10.9667 13.6 10C13.6 9.03333 13.2583 8.20833 12.575 7.525C11.8917 6.84167 11.0667 6.5 10.1 6.5C9.11667 6.5 8.2875 6.84167 7.6125 7.525C6.9375 8.20833 6.6 9.03333 6.6 10C6.6 10.9667 6.9375 11.7917 7.6125 12.475C8.2875 13.1583 9.11667 13.5 10.1 13.5Z"
        fill="white"
      />
    </svg>
  );
}

const HeaderContainer = styled.header`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  display: flex;
  height: 56px;
  background-color: #0071ff;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  color: #ffff;
  padding: 10px 18px 9px 19px;
`;

const MenuContainer = styled.div`
  margin-right: 22px;
`;

const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: 400;
  line-height: 29.05px;
  flex: 1;
  text-align: left;
`;

const LanguageSwitcher = styled.div`
  cursor: pointer;
  display: flex;
  gap: 10px;
  margin-right: 10px;
`;

const LanguageButton = styled.button`
  background: ${({ disabled }) => (disabled ? "#ECECEC" : "#0071ff")};
  border: 1px solid white;
  color: ${({ disabled }) => (disabled ? "#000000" : "#ffff")};
  padding: 5px 10px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  border-radius: 5px;
  width: 70px;
`;