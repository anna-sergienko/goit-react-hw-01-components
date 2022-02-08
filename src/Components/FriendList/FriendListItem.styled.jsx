import styled from '@emotion/styled';

export const Item = styled.li`
  width: 300px;
  height: 80px;
  margin: 0 auto;
  margin-bottom: 10px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background-color: #f5f5dc;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 20px;
  background: ${props => (props.status ? '#00FA00' : '#FC1423')};
`;

export const Avatar = styled.img`
  height: auto;
  border: 1px solid #ccc;
  margin-right: 20px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

export const Name = styled.p`
  font-size: 25px;
  font-weight: 400;
`;
