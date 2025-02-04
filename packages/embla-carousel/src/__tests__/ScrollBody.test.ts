import { ScrollBody } from '../components/ScrollBody'
import { Vector1D } from '../components/Vector1d'
import { mathSign } from '../components/utils'

const targetPositive = Vector1D(10)
const targetNegative = Vector1D(-10)
const initialLocation = 0
const location = Vector1D(initialLocation)
const scrollBody = ScrollBody(location, 10, 1)

beforeEach(() => {
  location.set(initialLocation)
})

describe('ScrollBody', () => {
  describe('Seeks target in a', () => {
    test('Positive direction when target is positive', () => {
      scrollBody.seek(targetPositive).update()
      expect(location.get()).toBeGreaterThan(initialLocation)
    })

    test('Negative direction when target is negative', () => {
      scrollBody.seek(targetNegative).update()
      expect(location.get()).toBeLessThan(initialLocation)
    })
  })

  describe('Direction is', () => {
    test('1 when it seeks a positive target', () => {
      scrollBody.seek(targetPositive).update()
      expect(scrollBody.direction()).toBe(mathSign(targetPositive.get()))
    })

    test('-1 when it seeks a negative target', () => {
      scrollBody.seek(targetNegative).update()
      expect(scrollBody.direction()).toBe(mathSign(targetNegative.get()))
    })
  })

  describe('Settle is', () => {
    test('True when diff to given target is <= 0.001', () => {
      location.set(9.999)
      expect(scrollBody.settle(targetPositive)).toBe(true)
    })

    test('False when diff to given target is > 0.001', () => {
      location.set(9.99)
      expect(scrollBody.settle(targetPositive)).toBe(false)
    })
  })
})
