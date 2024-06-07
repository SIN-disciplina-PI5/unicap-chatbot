import styled from "styled-components";

const breakpoints = {
  mobile: "768px",
  tablet: "1024px",
};

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
  @media (max-width: ${breakpoints.tablet}) {
  }
`;
export const ContainerImg = styled.div`
  margin-top: 1px;
  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
  }
`;
export const Imgportal = styled.img`
    width: 100%;
    @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
  }
`
export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: 15%;
  margin-top: 2rem;
  margin-bottom: 3rem;

  @media (max-width: ${breakpoints.mobile}) {
    width: 90%;
    font-size: 14px;
    margin-left: 5%;
  }
`;
export const Imgqrcode = styled.img`
  @media (max-width: ${breakpoints.mobile}) {
    width: 90%;
  }
  @media (max-width: ${breakpoints.tablet}) {
    width: 90%;
  }
`;
