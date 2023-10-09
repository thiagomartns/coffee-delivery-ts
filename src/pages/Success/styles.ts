import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SuccessTitle = styled.h1`
  font: ${(props) => props.theme.typography["baloo-title-l"]};
  color: ${(props) => props.theme.colors["yellow-dark"]};
`;

export const SuccessParag = styled.p`
  font: ${(props) => props.theme.typography["roboto-b-text-l"]};
  color: ${(props) => props.theme.colors["base-subtitle"]};
`;
