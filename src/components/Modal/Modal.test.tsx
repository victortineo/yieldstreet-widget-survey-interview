import { Modal } from "./Modal";
import { render, screen, userEvent, act } from '../../helpers/test-utils'
import { vi } from "vitest";

describe('Modal', () => {
  it('Should render properly', () => {
    render(<Modal title="Test" animating={false} onClose={() => false} footer={<><div>oi</div></>} />)

    expect(screen.getByText('Test')).toBeInTheDocument()
  });

  it('Should have step if it is given', () => {
    render(<Modal title="Test" step={1} animating={true} onClose={() => false} footer={<><div>oi</div></>} />)
    expect(screen.getByTestId('step-container')).toHaveTextContent('1 / 4')
  });

  it('Should have animate-switch class if animating is true', () => {
    render(<Modal title="Test" animating={true} onClose={() => false} footer={<><div>oi</div></>} />)
    expect(screen.getByTestId('modal')).toHaveClass('animate-switch')
  });

  it('Should have animate-openModal class at first load then remove it', () => {
    vi.useFakeTimers()
    render(<Modal title="Test" animating={true} onClose={() => false} footer={<><div>oi</div></>} />)
    expect(screen.getByTestId('modal')).toHaveClass('animate-openModal')
    act(() => {
      vi.runAllTimers();
    });
    expect(screen.getByTestId('modal')).not.toHaveClass('animate-openModal')
  });
})