import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 10fr 9fr;
  gap: 2rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FormContainerStats = styled.div`
  background-color: ${(props) => props.theme.colors["base-card"]};
  padding: 40px;
  border-radius: 6px;
`;

export const Title = styled.h1`
  font: ${(props) => props.theme.typography["baloo-title-xs"]};
  color: ${(props) => props.theme.colors["base-subtitle"]};
  margin-bottom: 1rem;
`;

export const Header = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  margin-bottom: 2rem;

  .text {
    h2 {
      font: ${(props) => props.theme.typography["roboto-r-text-m"]};
      color: ${(props) => props.theme.colors["base-subtitle"]};
    }
    p {
      font: ${(props) => props.theme.typography["roboto-text-s"]};
      color: ${(props) => props.theme.colors["base-text"]};
    }
  }
`;

export const PaymentOptions = styled.div`
  display: flex;
  gap: 1rem;
`;

export const PaymentOption = styled.button`
  padding: 1rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors["base-button"]};
  border-color: transparent;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  p {
    font: ${(props) => props.theme.typography["button-m"]};
    color: ${(props) => props.theme.colors["base-text"]};
    text-transform: uppercase;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const SelectedCoffees = styled.div``;

export const SelectedCoffeesStats = styled.div`
  background-color: ${(props) => props.theme.colors["base-card"]};
  padding: 40px;
  border-radius: 6px 44px;

  .totalPayment {
    display: flex;
    flex-direction: column;
  }
`;

export const TotalItems = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  p {
    font: ${(props) => props.theme.typography["roboto-text-s"]};
    color: ${(props) => props.theme.colors["base-text"]};
  }

  h3 {
    font: ${(props) => props.theme.typography["roboto-b-text-l"]};
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }
`;
