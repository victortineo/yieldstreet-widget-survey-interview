import { PropsWithChildren, useState, useEffect, ReactNode } from "react";
import { Button } from "../UI/Button";

type IProps = {
  title: string,
  step?: number,
  animating: boolean,
  onClose?: () => void,
  footer: ReactNode
}

export const Modal = ({ children, title, animating, step, onClose, footer }: PropsWithChildren<IProps>) => {
  const [isLoaded, setLoaded] = useState(false)
  const [isClosing, setClosing] = useState(false)

  useEffect(() => {
    setTimeout(() => setLoaded(true), 1000)
  }, [])

  useEffect(() => {
    if(isClosing) {
      setTimeout(() => {
        onClose?.()
        setClosing(false)
      }, 740)
    }
  }, [isClosing])

  return (
  <div data-testid="modal" className={`fixed right-10 bottom-10 z-50 text-white ${isClosing ? 'animate-closeModal' : null} ${isLoaded ? null : 'animate-openModal'} ${animating ? 'animate-switch' : null}`}>
    <div className="p-4 shadow-xl rounded bg-slate-800 flex flex-col w-96">
      <div className="flex justify-between items-center">
        <h2>{title}</h2>
        {step ? <span data-testid="step-container">{step} / 4</span> : null}
      </div>
      {children}
      <div className="flex justify-end gap-2">
        {onClose ? <Button negative onClick={() => setClosing(true)} disabled={false}>close</Button> : null}
        {footer}
      </div>
    </div>
  </div>
)}