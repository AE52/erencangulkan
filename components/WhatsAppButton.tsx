'use client';

import styled from 'styled-components';

const WhatsAppButtonContainer = styled.a`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #25D366;
  color: white;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  z-index: 1000;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }
`;

export default function WhatsAppButton() {
  return (
    <WhatsAppButtonContainer 
      href="https://wa.me/905397440887" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geçin"
    >
      <i className="fab fa-whatsapp"></i>
    </WhatsAppButtonContainer>
  );
} 