import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;
  table {
    width: 100%;
    border-spacing: 0 0.5rem;
  }

  th {
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }

  td {
    padding: 1rem 2rem;
    border: 0;
    background-color: var(--shape);
    border-radius: 0.25rem;
  }

  span {
    cursor: pointer;
  }

  .withdraw {
    color: var(--red);
  }

  .deposit {
    color: var(--green);
  }

  @media (max-width: 600px) {
    thead {
      overflow: hidden;
      position: absolute;
      width: 1px;
    }

    tr {
      border-bottom: 3px solid #ddd;
      display: block;
      margin-bottom: 0.625em;
    }

    td {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: 0.8em;
      text-align: right;
      font-size: 1rem;

      &:before {
        content: attr(data-label);
        float: left;
        font-weight: bold;
        text-transform: uppercase;
      }
    }
  }
`;
