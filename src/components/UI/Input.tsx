import { PropsWithChildren } from "react";

interface iInput {
  id: string,
  label: string,
  error?: string,
  required: boolean
}

export const InputLabel = ({ id, label, error, required, children}: PropsWithChildren<iInput>) => <>
  <label data-testid="input-label" htmlFor={id} className={`form-label inline-block mb-2 ${!error ? 'text-gray-300' : 'text-red-400' }`}>{label} {required ? "*" : null}</label>
  {children}
  {error ? <em className="text-red-400 text-sm" data-testid="error-label">{error}</em> : null}
</>

export const inputClass = "form-control block px-3 py-1.5 text-base font-normal text-gray-900 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-900 focus:bg-white focus:border-blue-600 focus:outline-none"