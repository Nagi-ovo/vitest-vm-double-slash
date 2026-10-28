import { expect, test } from 'vitest'
import { darken } from 'khroma'

test('khroma loads', () => {
  expect(darken('#ffffff', 50)).toBe('hsl(0, 0%, 50%)')
})
