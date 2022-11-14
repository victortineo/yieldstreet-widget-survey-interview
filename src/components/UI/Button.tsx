import { PropsWithChildren } from "react";

interface iButton{
  onClick: () => void,
  disabled: boolean,
  negative?: boolean
}

export const Button = ({ children, onClick, disabled, negative }: PropsWithChildren<iButton>) => (
  <button
    type="button"
    className={`inline-block px-6 py-2.5 disabled:bg-gray-200 ${negative ? "bg-red-600" : "bg-emerald-600"} disabled:text-gray-700 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md disabled:hover:bg-gray-300 ${negative ? "hover:bg-red-700" : "bg-emerald-700"} hover:shadow-lg disabled:focus:bg-gray-300 ${negative ? "focus:bg-red-700" : "bg-emerald-700"} focus:shadow-lg focus:outline-none focus:ring-0 ${negative ? "active:bg-red-700" : "bg-emerald-800"} disabled:active:bg-gray-400 active:shadow-lg transition duration-150 ease-in-out disabled:bg-gray`}
    onClick={onClick}
    disabled={disabled}
    data-testid="button"
    >{children}
  </button>
)