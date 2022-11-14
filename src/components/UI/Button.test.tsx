import { render, screen, userEvent,  } from '../../helpers/test-utils'
import { Button } from './Button';

describe('Modal', () => {
  it('Should render properly', () => {
    render(<Button onClick={() => false} disabled={false}>oi</Button>)

    expect(screen.getByTestId('button')).toBeInTheDocument()
  });
  it('Should be disabled if disabled prop is true', () => {
    render(<Button onClick={() => false} disabled>oi</Button>)

    expect(screen.getByTestId('button')).toBeDisabled()
  });
  it('Should have red background if negative prop is true', async () => {
    render(<Button onClick={() => false} disabled negative>oi</Button>)
    expect(screen.getByTestId('button')).toHaveClass('bg-red-600')
  });
})