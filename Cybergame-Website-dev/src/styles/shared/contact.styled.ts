import { styled } from 'styled-components'

export const ContactBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--contact-bg);
  border: var(--contact-border);
  border-radius: 5px;
  padding: 20px;
  height: 70px;
  cursor: pointer;
  p {
    color: var(--contact-text);
  }
  &:hover {
    scale: 1.015;
  }
`
