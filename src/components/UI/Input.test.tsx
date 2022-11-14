import { render, screen } from '../../helpers/test-utils'
import { InputLabel } from './Input';

describe('Input', () => {
  it('Should render properly', () => {
    render(<InputLabel id="name" label='name' required />)

    expect(screen.getByTestId('input-label')).toBeInTheDocument()
  });
  it('Text should be red if has an error and error be visible', () => {
    render(<InputLabel id="name" label='name' error="has error" required />)

    expect(screen.getByTestId('input-label')).toHaveClass('text-red-400')
    expect(screen.getByTestId('error-label')).toHaveTextContent('has error')
  });

  it('If required label should include an "*"', () => {
    render(<InputLabel id="name" label='name' required />)

    expect(screen.getByTestId('input-label')).toHaveTextContent('name *')
  });
  it('If not required label should not include an "*"', () => {
    render(<InputLabel id="name" label='name' required={false} />)

    expect(screen.getByTestId('input-label')).not.toHaveTextContent('name *')
  });
})