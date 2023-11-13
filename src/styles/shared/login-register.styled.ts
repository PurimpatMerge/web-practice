import { Button, Input } from 'antd'
import { styled, css } from 'styled-components'

export const RegisterProgress = styled.div<{ $step: number }>`
  display: flex;
  justify-content: space-between;
  position: relative;
  p {
    width: 50px;
    height: 50px;
    background-color: var(--progress-bg);
    z-index: 1;
    border-radius: 50%;
    font-size: 20px;
    font-weight: 900;
    color: var(--progress-text);
    border: 2px solid var(--progress-border);
    display: flex;
    align-items: center;
    justify-content: center;
    ${({ $step }) =>
      $step === 1
        ? css`
            &:first-child {
              color: var(--progress-text-active);
              border: 2px solid var(--progress-border-active);
              background: var(--progress-bg-active);
            }
          `
        : css`
            &:last-child {
              color: var(--progress-text-active);
              border: 2px solid var(--progress-border-active);
              background: var(--progress-bg-active);
            }
          `}
  }
  &::after {
    position: absolute;
    content: '';
    background-color: var(--progress-line);
    height: 1px;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 50%;
  }
`
export const OTPInputEx = styled(Input)`
  border: 1px solid var(--secondary-color);
  width: 52px;
  height: 64px;
  border-radius: 3px !important;
  text-align: center;
  font-size: 32px;
  font-weight: 700;
  @media (max-width: 480px) {
    width: 40px;
    height: 50px;
    font-size: 22px;
  }
`
export const LineLoginBtn = styled(Button)`
  border-radius: 5px;
  background: #39cd00;
  border: none;
  width: 100%;
`
