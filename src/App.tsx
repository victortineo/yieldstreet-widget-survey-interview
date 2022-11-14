import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import useFormPersist from 'react-hook-form-persist'

import { Button } from "./components/UI/Button"
import { inputClass, InputLabel } from "./components/UI/Input"
import { Modal } from "./components/Modal/Modal"
import { colors, Steps } from "./constants"
import { Colors, Survey } from "./models/survey"
import { Summary } from "./components/containers/Summary"
import { isEmpty } from "./helpers/isEmptyObject"
import { ThankYou } from "./components/containers/ThankYou"
import { FAB } from "./components/containers/FAB"

function App() {
  const [step, setStep] = useState<number>(-1)
  const [submited, setSubmited] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [animating, setAnimating] = useState(false)

  const { register, watch, setValue, formState: { errors }, getValues, setError, clearErrors } = useForm();
  useFormPersist('surveyWidgetFormValues',{
    watch, setValue, storage: window.localStorage
  })

  // initial state load
  useEffect(() => {
    function load() {
      const item = localStorage.getItem('surveyFormSubmmited')
      if(item) {
        return setHidden(true)
      }
      setLoaded(true)
    }
    load()
  }, [])

  // UI effects
  useEffect(() => {
    if(animating) {
      setTimeout(() => setAnimating(false), 1000)
    }
  }, [animating])

  useEffect(() => {
    if(submited) {
      setTimeout(() => setHidden(true), 4000)
    }
  }, [submited])

  // modal submit methods
  const submit = () => {
    setSubmited(true)
    localStorage.setItem('surveyFormSubmmited', 'true')
  }

  const validate = () => {
    const formValues = getValues()
    let hasError = false
    for(let val of Steps[step].inputs) {
      if(val.required) {
        if((Array.isArray(formValues[val.id]) && formValues[val.id].length === 0) || !Array.isArray(formValues[val.id]) && !formValues[val.id]) {
          setError(val.id, {type: 'required', message: "This field is required" })
          hasError = true
        }
      }
    }
    return hasError
  }

  // navigation methods
  const handlePrevious = () => {
    setAnimating(true)
    setTimeout(() => setStep(e => e - 1), 500)
  }

  const handleNext = () => {
    if(validate()) return
    setAnimating(true)
    if(step === 3) {
      return submit()
    }
    setTimeout(() => setStep(e => e + 1), 500)
  }

  // render methods 
  if(!loaded || hidden) return null 

  if(submited) return <ThankYou />

  if(step === -1) {
    return <FAB onClick={() => setStep(0)} />
  }

  return (
    <Modal 
      title={step === 3 ? 'Summary' : Steps[step].title} step={step + 1}
      animating={animating}
      onClose={() => {setStep(-1); clearErrors()}}
      footer={<>
        <Button onClick={handlePrevious} disabled={!isEmpty(errors) || step === 0}>previous</Button>
        <Button onClick={step === 3 ? submit : handleNext} disabled={!isEmpty(errors)}>{step === 3 ? 'submit' : 'next'}</Button>
        </>}
    >
        <div className="flex flex-col p-4">
          { step === 3 ? <Summary {...(getValues() as Survey)} /> : Steps[step].inputs.map(e => 
            <div className="mb-2" key={e.id}>
              <InputLabel
                required={e.required}
                label={e.label}
                id={e.id}
                error={(errors[e.id]?.message as string) || ''}
                >
                {
                  e.type === 'radio' || e.type === 'checkbox' ? (
                    <div className="flex flex-wrap items-center gap-2">
                      {e.options?.map(option => 
                      <React.Fragment key={option}>
                          <input {...register(e.id)} type={e.type} id={`${e.id}_${option}`} value={option} className={`${inputClass} focus:outline-1 focus:outline-cyan-500`} placeholder={e.placeholder} onChange={() => clearErrors(e.id)} />
                          <label htmlFor={`${e.id}_${option}`}>
                            {e.type === 'checkbox' ? <span title={option} className={`inline-block h-8 w-8 ${colors[option as Colors]}`}></span> : option }
                          </label>
                      </React.Fragment>
                      )}
                    </div> 
                  ) : e.type === 'number' ? 
                    <select {...register(e.id)} className={`${inputClass} text-gray-900`} placeholder={e.placeholder} id={e.id} onChange={() => clearErrors(e.id)}>
                      {<option>Your age</option>}
                      {[...Array.from({ length: 100}, (_, i) => i + 1)].map((option) => <option key={`${e.id}_${option}`}>{option}</option>)}
                    </select>
                  : 
                  <input {...register(e.id)} type={e.type} id={e.id} className={`${inputClass} w-full`} placeholder={e.placeholder} onChange={() => clearErrors(e.id)} />
                }
              </InputLabel>
            </div>
        )}
        </div>
    </Modal>
  )
}

export default App
