import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  grid-template-columns: 10fr 9fr;
  gap: 2rem;

  .inputContainer {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
`;

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
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

export const Input = styled.input`
  display: flex;
  /* width: 434px; */
  padding: 12px;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors["base-button"]};
  background-color: ${(props) => props.theme.colors["base-input"]};
  font: ${(props) => props.theme.typography["roboto-text-s"]};
  color: ${(props) => props.theme.colors["base-text"]};

  &:focus {
    border: 1px solid ${(props) => props.theme.colors["yellow-dark"]};
    transition: border 0.4s ease;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors["base-label"]};
  }
`;

export const PaymentOptions = styled.div`
  display: flex;
  gap: 1rem;
  .active {
    border-color: ${(props) => props.theme.colors.purple};
    background-color: ${(props) => props.theme.colors["purple-light"]};
  }
`;

export const PaymentOption = styled.button`
  padding: 1rem;
  border-radius: 6px;
  background-color: ${(props) => props.theme.colors["base-button"]};
  border: 1px solid transparent;
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

export const SubmitButton = styled.button`
  width: 100%;
  background-color: ${(props) => props.theme.colors.yellow};
  font: ${(props) => props.theme.typography["button-g"]};
  color: ${(props) => props.theme.colors.white};
  text-transform: uppercase;
  padding: 1rem;
  border-radius: 6px;
  border-color: transparent;
  margin-top: 1rem;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors["yellow-dark"]};
    transition: background-color 0.3s ease;
  }

  &:disabled {
    opacity: 0.6;

    &:hover {
      cursor: not-allowed;
      background-color: ${(props) => props.theme.colors["yellow"]};
    }
  }
`;
