import styled from "styled-components";

const breakpoints = {
  mobile: '768px',
  tablet: "1024px",
};
export const ContainerY = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 1rem;
font-size: 2rem;
gap: 2rem;
padding-bottom: 50%;

background-color: #BF8335;
  @media (max-width: ${breakpoints.mobile}) {
    font-size:0.8rem;
    gap: 1.5rem;
  }
  @media (max-width: ${breakpoints.tablet}) {
    gap: 2rem;
    font-size: 1.5rem;
  } 
`;