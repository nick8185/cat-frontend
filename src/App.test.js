/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import App from './App'
import React from 'react'

test('renders title', () => {
  render(<App />)
  const linkElement = screen.getByText(/The top 5 most friendly cats/i)
  expect(linkElement).toBeInTheDocument()
})
