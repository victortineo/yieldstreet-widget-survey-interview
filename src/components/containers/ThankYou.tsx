import { Modal } from "../Modal/Modal";

export const ThankYou = () => <Modal title="" animating={false} footer={<></>}>
  <div data-testid="thankyou" className="flex justify-center items-center p-12">
    Thank you!
  </div>
</Modal>