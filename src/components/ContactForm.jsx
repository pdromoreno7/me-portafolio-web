import React, { useState } from 'react';
import styled from 'styled-components';

const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--HappyColor);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
    transition: 1s;
    :hover {
      background-color: var(--black);
      color: var(--gray1);
    }
  }
`;

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <>
      <FormStyle
        enctype="text/plain"
        action="https://formsubmit.co/pdromorenodev@gmail.com"
        method="POST"
      >
        <div className="form-group">
          <label htmlFor="name">
            Tu nombre
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="nombre"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Tu Email
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="your@email.com"
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Tu mensaje
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              placeholder="Hola..."
            />
          </label>
        </div>
        <button type="submit">Enviar</button>
      </FormStyle>
    </>
  );
}
