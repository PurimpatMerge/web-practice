import { css, styled } from 'styled-components'

import { imageList } from '@/components/Home/ezrich/configs/images'

export const TitleEx = styled.div`
  background: var(--main-color);
  border-radius: 15px;
  padding: 0.5rem;
  gap: 10px;
  display: flex;
  align-items: center;

  width: 200px;
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 500px) {
    font-size: 16px;
    width: fit-content;
    padding: 0.25rem 1rem;
  }
`
export const BannerWrap = styled.div<{ $bg: string }>`
  background: url(${(props) => props.$bg}) no-repeat center;
  background-size: cover;
  min-height: 600px;
  .banner {
    animation: moveUpDown 4s infinite alternate ease-in-out;
  }
  .title {
    color: #efb92b;
    font-size: 1.5rem;
    padding-bottom: 1.5rem;
    text-align: center;
  }
  .text {
    text-align: justify;
    font-size: 18px;
    font-weight: 300;
  }

  @media (max-width: 500px) {
    .title {
      padding-top: 1.5rem;
    }
    .text {
      text-align: center;
      font-size: 14px;
    }
  }
`
export const ProfileInfoBox = styled.div`
  padding: 8px 0;
  .name-credit-box {
    display: flex;
    gap: 16px;
    padding-right: 16px;
    overflow: hidden;
    &:first-child {
      border-right: 1px solid var(--white-color);
    }
    > div {
      min-height: 30px;
      display: flex;
      align-items: center;
      svg {
        color: var(--profile-credit-svg);
        margin-right: 4px;
      }
    }
    p {
      color: var(--profile-credit-text);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
  .logout-translate-box {
    display: flex;
    gap: 4px;
  }
  .ant-btn {
    height: 30px;
    width: 30px;
    background: var(--profile-credit-btn-bg);
    border-radius: 5px;
    padding: 0;
    border-color: var(--profile-credit-btn-border);
    svg,
    span {
      color: var(--profile-credit-btn-text) !important;
    }
  }
`
export const MenuMobile = styled.div`
  background: var(--background-linear);
  box-shadow: 0 4px 4px 0 #00000040;
  .header-menu {
    height: 60px;
    svg {
      width: 30px;
      height: 30px;
      background-color: var(--white-color);
      border-radius: 5px;
      cursor: pointer;
      z-index: 600;
    }
    .sidebar {
      top: 60px;
      left: 0;
      position: fixed;
      background-color: var(--white-color);
      width: 0;
      height: 100vh;
      z-index: 500;
      transition: 0.3s;
      overflow: hidden;
      padding: 20px 0;
      opacity: 0;
      &.active {
        width: 100vw;
        padding: 20px 20px;
        opacity: 1;
      }
      li {
        border: 1px solid transparent;
        color: var(--black-color);
        white-space: nowrap;
        padding: 8px;
        font-weight: 500;
        transition: 0.5s;
        &:hover {
          color: var(--main-color);
          border-radius: 5px;
          border: 1px solid var(--main-color);
        }
        &.active {
          color: var(--main-color);
        }
      }
    }
  }
`
export const HeaderCard = styled.div<{ $bg: string }>`
  z-index: 1000;
  backdrop-filter: blur(6px);
  img {
    cursor: pointer;
    &:hover {
      scale: 1.015;
    }
  }
  @media (max-width: 767.98px) {
    position: sticky;
    top: -60px;
  }
`
export const HeaderWrapper = styled.div`
  background: var(--background-linear);
  padding: 0.25rem 0;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btn-zone {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`
export const MenuLogin = styled.div`
  box-shadow: 0px 4px 4px 0px #00000040;
  .ant-row {
    height: 90px;
  }
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    gap: 24px;
    border-radius: 50px;
    li {
      height: 100%;
      font-size: 18px;
      font-weight: 600;
      color: var(--white-color);
      cursor: pointer;
      white-space: nowrap;
      transition: 0.2s;
      display: flex;
      align-items: center;
      &.active {
        position: relative;
        background: var(--btn-linear);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 100%;
          background-color: var(--white-color);
        }
      }
      &:hover {
        color: var(--main-color);
      }
    }
  }
`
export const RegisButton = styled.button<{ $regis?: boolean }>`
  display: flex;
  gap: 4px;
  background: ${(props) => (props.$regis ? css`var(--btn-linear-danger)` : css`var(--btn-linear)`)};
  align-items: center;
  padding: 0.25rem;
  border-radius: 40px;
  .inner-card {
    background: var(--black-color);
    border-radius: 40px;
    padding: 0.25rem 1rem;
    font-size: 16px;
    color: white;
    font-weight: 500;
  }
  &:hover {
    scale: 101%;
  }
`
export const SubCard = styled.div`
  border-top: 1px solid var(--main-color);
  background: url(${imageList.header.bg_sub}) no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  padding: 0.5rem;
  border-bottom: 1px solid var(--main-color);

  .item {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    cursor: pointer;

    p {
      color: var(--white-color);
    }
    .active {
      color: var(--main-color);
    }

    &:hover {
      p {
        color: var(--main-color);
      }
    }
  }
  @media (max-width: 800px) {
    gap: 30px;
  }
`
export const TextSlide = styled.div<{ $bg?: string; $color?: string }>`
  ${(props) =>
    props.$bg &&
    css`
      background: ${props.$bg};
    `}
  p {
    color: ${(props) => (props.$color ? props.$color : `var(--white-color)`)};
    animation: text-slide 16s linear infinite forwards;
    position: absolute;
    font-weight: 500;
    white-space: nowrap;
    width: 100%;
  }
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  overflow: hidden;
  width: 100%;
  @keyframes text-slide {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-30%);
    }
  }
`
export const Wrapper = styled.div<{ $isLogin?: boolean }>`
  background: ${(props) => (props.$isLogin ? css`var(--body-login)` : css`var(--body-img)`)} no-repeat fixed center
    center;
  overflow-x: hidden;
  background-size: cover;
  height: 100vh;
`
export const TitleCard = styled.div`
  background: var(--main-color);
  text-align: center;
  font-weight: 600;
  color: var(--black-color);
  padding: 0.25rem 0;
  font-size: 18px;
`
export const Box = styled.div`
  min-height: 100vh;
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto;
  .back-btn {
    height: 26px;
    span {
      font-size: 14px;
    }
  }
`
