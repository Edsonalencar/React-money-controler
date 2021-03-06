import styled from "styled-components";
import { darken, transparentize } from "polished";

export const Container = styled.form`
  h2 {
    font-size: 1.5rem;
    color: var(--text-title);
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;

    background: #e7e9ee;
    color: var(--text-body);

    font-size: 1rem;
    font-weight: 400;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    margin-top: 1.5rem;
    font-size: 1rem;
    font-weight: 600;

    border: 0;
    border-radius: 0.25rem;

    background: var(--green);
    color: #fff;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin: 1rem 0;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  red: "#E62E4D",
  green: "#33CC95",
};

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) =>
    props.isActive
      ? transparentize(.8, colors[props.activeColor])
      : "transparent"
  };

  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.2, "#d7d7d7")};
  }

  img {
    margin-right: 0.5rem;
    width: 20px;
    height: 20px;
  }

  span {
    font-size: 1rem;
    color: var(--text-title);
  }
`;
