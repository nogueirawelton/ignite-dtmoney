import styled from "styled-components";
import { darken, transparentize } from 'polished';

export const Container = styled.form`
  h2 {
    color: var(--text-title);
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: .25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
     color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0. 1.5rem;
    height: 4rem;
    background: var(--green);
    color: #fff;
    border-radius: 0.25rem;
    border: none;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 1.5rem;
    transition: filter .3s;

    &:hover {
      filter: brightness(.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: .5rem;
`

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33cc95',
  red: '#e52e4d'
}

export const RadioBox = styled.button<RadioBoxProps>`
   height: 4rem;
    border: 1px solid #d7d7d7;
    background: ${({ isActive, activeColor }) => isActive ? transparentize(.9, colors[activeColor]) : 'transparent'};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    transition: border-color .3s;

    &:hover {
      border-color: ${darken(.1, '#d7d7d7')}
    }

    img {
      width: 28px;
      height: 28px;
    }

    span {
      display: inline-block;
      font-size: 1rem;
      color: var(--text-title);
    }
`