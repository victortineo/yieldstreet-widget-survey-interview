import { render, screen } from '../../helpers/test-utils'
import { Survey } from '../../models/survey';
import { Summary } from './Summary';

describe('Summary', () => {
  it('Should render properly', () => {
    const props: Survey = {
      name: 'name', email: "email", age: 18, gender: 'male', favoriteBook: 'book', favoriteColors: ['red', 'blue']
    }
    render(<Summary  {...props} />)

    expect(screen.getByTestId('summary')).toBeInTheDocument()
  });
})