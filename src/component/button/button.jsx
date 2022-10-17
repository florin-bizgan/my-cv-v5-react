import * as S from "./button.style";

const Button = ({ children, textcol, pad, bgcol, color }) => {
  return (
    <S.Button textcol={textcol} padi={pad} back={bgcol} color={color}>
      {/* <span>Icon </span> */}
      <img src="" alt="" srcset="" />
      {children}
    </S.Button>
  );
};

export default Button;
