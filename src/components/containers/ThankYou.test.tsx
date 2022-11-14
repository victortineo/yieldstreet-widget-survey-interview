import { render, screen } from '../../helpers/test-utils'
import { ThankYou } from './ThankYou';

describe('ThankYou', () => {
  it('Should render properly', () => {
    render(<ThankYou />)

    expect(screen.getByTestId('thankyou')).toBeInTheDocument()
  });
})