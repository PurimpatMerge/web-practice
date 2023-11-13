import { styled } from 'styled-components'

export const ProfileInfo = styled.div`
  background: var(--profile-info-bg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
  padding: 24px;
  box-shadow: 0px 4px 4px 0px #00000040;
  .ant-form-item {
    .ant-form-item-label {
      border: none;
      background-color: transparent;
      padding-right: 24px;
      label {
        background: var(--profile-info-label);
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        background-clip: text;
        justify-content: flex-end;
        font-weight: 500;
      }
    }
    .ant-form-item-control-input {
      .ant-form-item-control-input-content {
        .ant-input {
          color: var(--profile-info-text) !important;
          border: none !important;
          background: transparent;
        }
      }
    }
  }
  @media (max-width: 575.98px) {
    .ant-form-item {
      .ant-form-item-label {
        label {
          justify-content: flex-start;
        }
      }
    }
  }
`
