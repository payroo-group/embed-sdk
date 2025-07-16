import { render } from '@testing-library/react'
import { test } from 'vitest'
import { EmbedContainer } from '../src'

test('button', () => {
  render(
    <EmbedContainer
      id="test"
      url="https://testing-library/page"
      className="test"
    />,
  )
})
