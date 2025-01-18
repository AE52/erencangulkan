'use client';

import { useState } from 'react';
import styled from 'styled-components';
import { useLanguage } from '@/context/LanguageContext';

const FormContainer = styled.form`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
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
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  color: #000000;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #8B7355;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
  color: #000000;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #8B7355;
  }
`;

const SubmitButton = styled.button`
  background-color: #8B7355;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6d5a43;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Message = styled.div<{ $isError?: boolean }>`
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  background-color: ${props => props.$isError ? '#ffebee' : '#e8f5e9'};
  color: ${props => props.$isError ? '#c62828' : '#2e7d32'};
`;

export default function ContactForm() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('');
    setError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'c347bd69-0c04-48ac-bd02-54bf6386d0d1',
          ...formData,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus(language === 'tr' ? 'Mesajınız başarıyla gönderildi!' : 'Your message has been sent successfully!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setError(language === 'tr' ? 'Bir hata oluştu. Lütfen tekrar deneyin.' : 'An error occurred. Please try again.');
      }
    } catch (_) {
      setError(language === 'tr' ? 'Bir hata oluştu. Lütfen tekrar deneyin.' : 'An error occurred. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="name">
          {language === 'tr' ? 'Ad Soyad' : 'Full Name'}
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">
          {language === 'tr' ? 'E-posta' : 'Email'}
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="phone">
          {language === 'tr' ? 'Telefon' : 'Phone'}
        </Label>
        <Input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="message">
          {language === 'tr' ? 'Mesajınız' : 'Your Message'}
        </Label>
        <TextArea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </FormGroup>

      <SubmitButton type="submit">
        {language === 'tr' ? 'Gönder' : 'Send'}
      </SubmitButton>

      {status && <Message>{status}</Message>}
      {error && <Message $isError>{error}</Message>}
    </FormContainer>
  );
} 