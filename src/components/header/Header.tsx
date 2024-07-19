import { HeaderContainer, Logo } from "./styles";

interface HeaderProps {
  onClick?: () => void;
}

export const Header = ({ onClick = () => {} }: HeaderProps) => {
  return (
    <HeaderContainer>
      <Logo onClick={onClick}>Live Score</Logo>
    </HeaderContainer>
  );
};
