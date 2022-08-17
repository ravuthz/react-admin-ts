import '@testing-library/jest-dom';

import React from 'react';
import { render, screen } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';

import { ThemeProvider, ThemeContext, useThemeCtx } from './Theme'

describe('ThemeProvider', () => {
  const initialValue = {
    state: 0
  };

  const wrapper = ({ children }: any) => (
    <ThemeProvider value={initialValue}>
      {children}
    </ThemeProvider>
  );

  test('render Theme1Consumer from Theme1Context', () => {
    const Theme1Consumer: React.FC = (props: any) => {
      return (
        <ThemeContext.Consumer>
          {value => (
            <>
              <h1>Theme1Consumer</h1>
              <pre>{JSON.stringify(value, null, 2)}</pre>
              <pre>{JSON.stringify(props, null, 2)}</pre>
            </>
          )}
        </ThemeContext.Consumer>
      );
    };

    render(<Theme1Consumer />, { wrapper })
    expect(screen.getByText(/ThemeConsumer/)).toBeInTheDocument();
  })

  test('use useTheme1Ctx and update state', () => {
    const { result } = renderHook(() => useThemeCtx(), { wrapper });

    expect(result.current.state).toBe(initialValue.state);
    expect(result.current.hasState()).toBe(initialValue.state !== undefined);

    act(() => {
      result.current.setState(1);
    });
    expect(result.current.state).toBe(1);

    act(() => {
      result.current.clearState();
    });
    expect(result.current.state).toBe(undefined);
    expect(result.current.hasState()).toBe(false);
  })
});
