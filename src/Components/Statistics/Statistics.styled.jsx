import styled from '@emotion/styled';

export const Container = styled.section`
  width: 300px;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 60px;
  background-color: #fff;
  border: none;
  outline: none;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  padding: 20px 0;
  font-size: 25px;
  font-weight: 600;
  text-align: center;
`;

export const StatsList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 5px 0;
  background-color: #ссс;
`;

export const Label = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #000;
  margin-bottom: 10px;
`;

export const Percentage = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #000;
`;
