export type Colors = 'red' | 'green' | 'blue' | 'yellow' | 'purple' | 'pink' | 'gray'
 
export interface Survey {
  name?: string,
  email?: string,
  age: number,
  gender: "male" | "female" | "other",
  favoriteBook: string,
  favoriteColors: Colors[],
}

interface SurveyInput {
  label: string,
  placeholder?: string,
  id: string,
  type: '' | 'email' | 'checkbox' | 'number' | 'radio',
  options?: string[]
  required: boolean
}

export interface SurveyStep {
  title: string,
  inputs: SurveyInput[]
}