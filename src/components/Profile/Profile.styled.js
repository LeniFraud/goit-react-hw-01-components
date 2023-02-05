import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 600px;
  margin: 0 auto;
  overflow: hidden;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
`;

export const Avatar = styled.img`
  width: 250px;
  margin-bottom: 30px;
  border-radius: 50%;
  border: 1px solid rgb(233, 233, 233);
`;

export const Name = styled.p`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 32px;
  letter-spacing: 1px;
  color: #333333;
`;

export const Tag = styled.p`
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 24px;
  color: #838383;
`;

export const Location = styled.p`
  font-weight: 500;
  font-size: 24px;
  color: #838383;
`;

export const ProfileStats = styled.ul`
  display: flex;
`;

export const Stat = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% / 3);
  padding: 35px 0;
  background-color: #f8f8f8;
  border: 1px solid #ececec;
`;

export const Label = styled.span`
  margin-bottom: 10px;
  font-size: 20px;
  color: #838383;
`;

export const Quantity = styled.span`
  font-weight: 700;
  font-size: 30px;
  color: #333333;
`;
