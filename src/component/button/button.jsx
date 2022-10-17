import * as S from "./button.style";

const Button = ({ children, textcol, pad, bgcol, color }) => {
  return (
    <S.Button textcol={textcol} padi={pad} color={color}>
      <img src="https://cdn-icons-png.flaticon.com/512/51/51092.png" width="20px" alt=""/>
      {/* <span class="cv-arrow-down"></span> */}
      {children}
    </S.Button>
  );
};

export default Button;
