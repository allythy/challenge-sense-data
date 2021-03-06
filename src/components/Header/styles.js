import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    background-color: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    @media (max-width: 320px) {
      padding: 0 0.5rem;
    }
  }
`;

export const Title = styled.span`
  font-size: 2rem;
  font-weight: 600;
  color: var(--shape);

  @media (max-width: 375px) {
    font-size: 1.8rem;
  }
`;
