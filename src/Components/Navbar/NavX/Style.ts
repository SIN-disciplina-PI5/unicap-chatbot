import styled from "styled-components";
const breakpoints = {
  mobile: '768px',
  tablet: "1024",
};


export const ContainerX = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 0.5rem;
`;
export const Nav1 = styled.nav`
  width: 100%;
  display: flex;
  padding: 0rem 4rem 0.3rem 2rem;
  gap: 4rem;
  justify-content: end;
  align-items: center;
  font-size: 0.8rem;
  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
   gap: 1rem;
   font-size: 10px;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
   
  }
`;
export const ContainerNav2 = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: #660012;
  color: white;
  padding: 0.8rem;
  box-sizing: border-box;

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    font-size: 10px;
    align-items: center;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 110%;
   
  }
`;
export const Nav2 = styled.img`
  display: flex;
 @media (max-width: ${breakpoints.mobile}) {
    width: 100px;
    align-items: center;
  }
  @media (max-width: ${breakpoints.tablet}) {
    align-items: center;
  }
`;

export const Nav2Rigth = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
  }
  @media (max-width: ${breakpoints.tablet}) {
   
  }
`;

export const StDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const Contrast = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: xx-large;
  padding: 0;
  margin: 0;
  background-color: white;
  color: #660012;
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;
