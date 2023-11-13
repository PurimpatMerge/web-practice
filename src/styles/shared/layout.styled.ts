import { styled } from 'styled-components'

export const Wrapper = styled.div`
  background: var(--body-bg);
  overflow-x: hidden;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  background-attachment: fixed;
  display: grid;
  grid-template-rows: 1fr auto;
  position: relative;
`
export const HeaderShared = styled.div`
  z-index: 1000;
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
export const FooterCard = styled.div`
  background: var(--footer-bg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px -4px 4px 0px #00000040;
`
export const ContentBodyShared = styled.div`
  > h1 {
    color: var(--page-title);
  }
  padding-top: 20px;
  padding-bottom: 32px;
`
export const VisitorShared = styled.div`
  margin-top: -20px;
  margin-bottom: -32px;
`
export const MenuLogin = styled.div`
  background: var(--header-bg);
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
      color: var(--menu-text);
      cursor: pointer;
      white-space: nowrap;
      transition: 0.2s;
      display: flex;
      align-items: center;
      &.active {
        position: relative;
        background: var(--menu-text-active);
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
          background: var(--menu-line-active);
        }
      }
      &:hover {
        color: var(--menu-text);
      }
    }
  }
  .logo {
    max-height: 80px;
  }
`
export const HeaderMobileShared = styled.div`
  backdrop-filter: blur(6px);
  box-shadow: 0px 4px 4px 0px #00000040;
  .header-mobile-bg {
    background: var(--header-bg);
  }
  .header-menu {
    height: 60px;
    svg {
      width: 30px;
      height: 30px;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 5px;
      cursor: pointer;
      z-index: 600;
    }
    .sidebar {
      top: 60px;
      left: 0;
      position: fixed;
      background: white;
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
        color: #000;
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
  .logo {
    max-height: 50px;
  }
`
export const UserInfo = styled.div`
  padding: 8px 0;
  max-width: 100%;
  .name-credit-box {
    display: flex;
    gap: 16px;
    padding-right: 16px;
    overflow: hidden;
    &:first-child {
      border-right: 1px solid var(--profile-credit-svg);
    }
    > div {
      min-height: 30px;
      display: flex;
      align-items: center;
      svg {
        min-width: 20px;
        color: var(--profile-credit-svg);
        margin-right: 4px;
      }
      &.name-box {
        overflow: hidden;
        p {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
    p {
      color: var(--profile-credit-text);
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
export const FloatingLine = styled.img`
  position: fixed;
  bottom: 50%;
  right: 0;
  transform: translate(-16px, 50%);
  z-index: 500;
  transition: 0.5s;
  width: var(--line-width-desktop);
  cursor: pointer;
  &:hover {
    scale: 1.015;
  }
  @media (max-width: 480px) {
    bottom: 0;
    transform: translate(-16px, -16px);
    width: var(--line-width-mobile);
  }
`
