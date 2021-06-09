import { minimize_bounded } from '../bounded_solver'

test('solver test 1', () => {
    /** Test linear function: (2x -19). */
  const linFunc = (x: number) => { return Math.abs(2*x-19); }

  const result = minimize_bounded(linFunc, [8, 10])

  expect(result.x.toFixed(1)).toBe("9.5")
})

test('solver test 2', () => {
  /** Test polynomial function: (x^2 + 4x - 5). */
  const polyFunc = (x: number) => { return Math.abs(x**2+4*x-5); }
  
  const result = minimize_bounded(polyFunc, [0, 2])

  expect(result.x.toFixed(1)).toBe("1.0")
})