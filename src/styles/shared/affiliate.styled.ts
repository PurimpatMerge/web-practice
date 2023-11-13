import { styled } from 'styled-components'

export const LinkRecom = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background: var(--recom-bg);
  min-height: 50px;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  border: var(--recom-border);
  p {
    &:first-child {
      color: var(--recom-label);
    }
    color: var(--recom-text);
  }
  .ant-btn {
    background: var(--bank-copy-btn-bg);
    box-shadow: 0px 4px 4px 0px #00000040;
    padding: 0 20px;
    span {
      color: var(--bank-copy-btn-text);
      font-weight: 500;
    }
  }
  @media (max-width: 767.98px) {
    flex-direction: column;
    gap: 8px;
  }
`
export const CardReport = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: var(--card-report-bg);
  border: var(--card-report-border);
  min-height: 50px;
  border-radius: 5px;
  padding: 20px;
  animation: slide-in 0.5s forwards;
  p {
    color: var(--card-report-text);
  }
  h1 {
    color: var(--card-report-number);
    background: var(--card-report-number);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    font-size: 30px;
    line-height: 36px;
    font-weight: 700;
  }
`
