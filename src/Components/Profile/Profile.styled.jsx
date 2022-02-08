import styled from '@emotion/styled';

export const ProfileBox = styled.div`
  width: 300px;
  margin: 0 auto;
  background-color: #f0f8ff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin-bottom: 50px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 150px;
  heigh: 150px;
  margin: 30px auto;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: #f5f5dc;
`;
export const Name = styled.p`
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: 700;
  color: #022520;
`;

export const Tag = styled.p`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 500;
  color: #02252090;
`;

export const Location = styled(Tag)``;

export const Stats = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 0;
  border: 1px solid #05413780;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  background-color: #f5f5dc;
`;

export const Label = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #000;
`;

export const Quantity = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: #000;
`;
