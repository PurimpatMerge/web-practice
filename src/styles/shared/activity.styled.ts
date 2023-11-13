import { styled } from 'styled-components'

export const Wheel = styled.div`
  margin-top: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px 0px #00000040;
  border-radius: 50%;
  width: 500px;
  height: 500px;
  margin: 60px auto;
  border: 10px solid #fff;
  .pin {
    width: 90px;
    height: 90px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    z-index: 1;
    transform: translateX(0);
    margin-top: -60px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      color: #da4545;
    }
  }
  .ant-btn {
    height: 160px;
    width: 160px;
    border-radius: 50%;
    position: absolute;
    z-index: 1;
    background-color: var(--secondary-color);
    border: 14px solid #fff;
    span {
      color: #fff;
      font-size: 30px;
      font-weight: 600;
    }
    box-shadow: 0px 4px 4px 0px #00000040;
  }
  .circle-container {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 50%;
    transition: 0s ease-out;
    transform: rotate(22.5deg);
    .pie {
      position: absolute;
      width: 100%;
      height: 100%;
      clip-path: polygon(50% 50%, 100% 0, 100% 50%);
      display: flex;
      align-items: center;
      justify-content: center;
      p {
        margin-bottom: 120px;
        margin-left: 300px;
        z-index: 1;
        font-size: 32px;
        font-weight: 600;
        transform: rotate(-22.5deg);
      }
      &:nth-child(1) {
        transform: rotate(0deg);
      }
      &:nth-child(2) {
        transform: rotate(45deg);
      }
      &:nth-child(3) {
        transform: rotate(90deg);
      }
      &:nth-child(4) {
        transform: rotate(135deg);
      }
      &:nth-child(5) {
        transform: rotate(180deg);
      }
      &:nth-child(6) {
        transform: rotate(225deg);
      }
      &:nth-child(7) {
        transform: rotate(270deg);
      }
      &:nth-child(8) {
        transform: rotate(315deg);
      }
    }
  }
  animation: opacity-in 0.5s forwards;
  @media (max-width: 767.98px) {
    width: 250px;
    height: 250px;
    border-width: 5px;
    margin: 30px auto;
    .pin {
      margin-top: -50px;
      scale: 0.5;
    }
    .ant-btn {
      scale: 0.5;
      span {
        color: var(--text-color);
        font-size: 30px;
        font-weight: 600;
      }
    }
    .circle-container {
      .pie {
        p {
          margin-bottom: 60px;
          margin-left: 150px;
          scale: 0.5;
        }
      }
    }
  }
`
