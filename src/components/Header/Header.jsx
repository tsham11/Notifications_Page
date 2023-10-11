import styled from "styled-components";

function Header({ count, markRead }) {
  return (
    <Nav>
      <Hd>
        <h1>Notifications</h1>
        <Num>{count}</Num>
      </Hd>
      <Button onClick={markRead}>Mark all as read</Button>
    </Nav>
  );
}

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 74px;
  margin-bottom: 24px;
  @media (min-width: 1440px) {
    justify-content: space-between;
    gap: 356px;
    margin-bottom: 31px;
  }
`;

const Hd = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  h1 {
    color: #1c202b;
    font-size: 20px;
    font-weight: 800;
  }

  @media (min-width: 1440px) {
    gap: 11px;
    h1 {
      font-size: 24px;
    }
  }
`;

const Num = styled.div`
  width: 32px;
  height: 25px;
  padding: 1px 11px 4px;
  border-radius: 6px;
  background: #0a327b;
  color: #fff;
  font-size: 16px;
  font-weight: 800;
`;

const Button = styled.button`
  color: #5e6778;
  border: none;
  background: none;
  width: 101px;
  text-align: right;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    color: #0a327b;
    cursor: pointer;
  }
  @media (min-width: 1440px) {
    width: 116px;
    font-size: 16px;
  }
`;

export default Header;
