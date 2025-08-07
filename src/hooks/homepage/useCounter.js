import { renderHook, act } from '@testing-library/react';
import useCounter from './useCounter';

describe('useCounter', () => {
  it('should initialize count to 0', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
  });

  it('should update val and increment by new val', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(5);
      result.current.increment();
    });
    expect(result.current.count).toBe(5);
  });

  it('should increment by 1 if val is not set', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  it('should allow multiple increments', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
      result.current.increment();
    });
    expect(result.current.count).toBe(2);
  });
});