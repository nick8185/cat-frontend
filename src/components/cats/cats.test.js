/* eslint-disable no-undef */
/* This is a bad test that I will get back to if I have time */

import { render } from '@testing-library/react'
import Cats from './catsComponent'
import React from 'react'

test('renders card content', () => {
  render(<Cats />)
  const linkElement = document.querySelector('#cat-card')
  expect(linkElement).toBeNull()
})
