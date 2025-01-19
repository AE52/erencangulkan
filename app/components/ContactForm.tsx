'use client';

import React, { Suspense } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styled from 'styled-components';

const FormContainer = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #2C3E50;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #8B7355;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #8B7355;
  }
`;

const SubmitButton = styled.button`
  background: #8B7355;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s ease;
  width: 100%;

  &:hover {
    background: #6B5744;
  }
`;

function ContactFormContent() {
  const { language } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme mantığı
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        <Label>{language === 'tr' ? 'Ad Soyad' : 'Full Name'}</Label>
        <Input type="text" required />
      </FormGroup>
      <FormGroup>
        <Label>{language === 'tr' ? 'E-posta' : 'Email'}</Label>
        <Input type="email" required />
      </FormGroup>
      <FormGroup>
        <Label>{language === 'tr' ? 'Telefon' : 'Phone'}</Label>
        <Input type="tel" required />
      </FormGroup>
      <FormGroup>
        <Label>{language === 'tr' ? 'Mesajınız' : 'Your Message'}</Label>
        <TextArea required />
      </FormGroup>
      <SubmitButton type="submit">
        {language === 'tr' ? 'Gönder' : 'Send'}
      </SubmitButton>
    </FormContainer>
  );
}

export default function ContactForm() {
  return (
    <Suspense fallback={<div>Form yükleniyor...</div>}>
      <ContactFormContent />
    </Suspense>
  );
} 