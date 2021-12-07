import { isValid } from '../src/dependency'
import { add } from '../src/example'
jest.mock('../src/dependency')

describe('Test example', () => {
  function setupSuccess() {
    const mockInput = {
      a: 2,
      b: 2
    }

    const mockValidate = isValid as jest.Mock
    mockValidate.mockReturnValue(true)

    return {
      mockInput,
      mockValidate,
    }
  }

  it('test-for-frank', async () => {
    // Arrange
    const { mockInput, mockValidate } = setupSuccess()

    // Act
    const result = add(mockInput.a, mockInput.b)

    // Assert
    expect(mockValidate).toHaveBeenCalledWith(mockInput.a)
    expect(mockValidate).toHaveBeenCalledWith(mockInput.b)
    expect(result).toBe(4)
  })
})
