import { vi } from 'vitest';
import { render, screen, userEvent } from '../../helpers/test-utils'
import { FAB } from './FAB'

describe('FAB', () => {
  it('Should render properly', () => {
    render(<FAB onClick={() => false }/>)

    expect(screen.getByTestId('FAB')).toBeInTheDocument()
  });
  it('Should call function whenever clicked', async () => {
    const mock = vi.fn()
    render(<FAB onClick={mock}/>)

    await userEvent.click(screen.getByTestId('FAB'))

    expect(mock).toHaveBeenCalled()
  })
})