import { Button, Form } from 'antd'
import { styled, css } from 'styled-components'

export const CardMenu = styled.button`
  background: var(--card-menu-bg);
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  max-width: 350px;
  height: 100px;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  border-radius: 8px;
  margin: auto;
  border: none;
  overflow: hidden;
  border: 1px solid var(--card-menu-border);
  h1 {
    font-size: 24px;
    font-weight: 600;
    color: var(--card-menu-text);
    background: var(--card-menu-text);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  svg {
    background: var(--card-menu-svg-bg);
    border: var(--card-menu-svg-border);
    color: var(--card-menu-svg);
    min-width: 60px;
    height: 60px;
    border-radius: 50%;
    color: var(--card-menu-svg);
    transition: 0.5s;
    padding: 12px;
    margin-left: 14px;
    animation: scale-in 0.5s forwards;
  }
  &:hover {
    scale: 1.015;
  }
  animation: opacity-in 0.5s forwards;
  @media (max-width: 767.98px) {
    height: 90px;
    h1 {
      font-size: 20px;
    }
    svg {
      min-width: 50px;
      height: 50px;
    }
    padding: 0 24px;
  }
`
export const CardDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--card-detail-bg);
  border: var(--card-detail-border);
  border-radius: 5px;
  padding: 20px;
  li {
    color: var(--card-detail-text) !important;
  }
`
export const CardBank = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--card-bank-bg);
  min-height: 50px;
  border-radius: 5px;
  padding: 20px;
  border: var(--card-bank-border);
  .ant-btn {
    border: var(--bank-copy-btn-border);
    background: var(--bank-copy-btn-bg);
    box-shadow: 0px 4px 4px 0px #00000040;
    span {
      color: var(--bank-copy-btn-text);
      font-weight: 500;
    }
  }
`
export const ButtonBox = styled(Button)`
  height: 40px;
  border-radius: 40px;
  padding: 0 40px;
  box-shadow: 0px 4px 4px 0px #00000040;
  span {
    font-weight: 600;
  }
`
export const GameBox = styled.div<{ $noAnimation?: boolean }>`
  animation: ${(props) => (props.$noAnimation ? css`` : css`slide-in 0.5s forwards`)};
  display: flex;
  justify-content: center;
  .ant-col {
    margin: 0 auto;
    img {
      width: 100%;
      border-radius: 5px;
      max-width: 360px;
      margin: 0 auto;
      cursor: pointer;
      &:hover {
        scale: 1.015;
      }
      transition: 0.1s;
      @media (max-width: 1399.98px) {
        max-width: 300px;
      }
      @media (max-width: 989.98px) {
        max-width: 240px;
      }
    }
  }
`
export const ButtonTransaction = styled(Button)`
  height: 46px;
  border-radius: 46px;
  padding: 0 22px 0 15px;
  border: var(--btn-ts-border);
  font-size: 18px;
  font-weight: 600;
  white-space: nowrap;
  background: var(--btn-ts-bg);
  box-shadow: 0px 4px 4px 0px #00000040;
  h1 {
    color: var(--btn-ts-text);
  }
  .ant-btn-icon {
    border-radius: 50px;
    background: var(--btn-ts-svg-bg);
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      color: var(--btn-ts-svg);
    }
  }
  @media (max-width: 767.98px) {
    height: 40px;
    padding: 0 15px 0 10px;
    font-size: 16px;
  }
`
export const FormBox = styled(Form)`
  padding: 32px 16px;
  background: var(--form-input-bg);
  border-radius: 15px;
  box-shadow: var(--form-input-shadow);
  border: var(--form-input-border);
  margin: 0 auto;
  @media (min-width: 575.98px) {
    width: 24rem;
  }
`
export const FormFilter = styled(Form)`
  margin-bottom: 8px;
  .ant-form-item {
    margin: 0;
    .ant-form-item-control-input {
      .ant-form-item-control-input-content {
        .ant-select,
        .ant-picker,
        .ant-input {
          border-radius: 5px;
        }
      }
    }
  }
  .ant-btn {
    border-radius: 5px;
    height: 34px;
  }
`
