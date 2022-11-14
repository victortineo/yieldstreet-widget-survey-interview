import { Colors, SurveyStep } from "./models/survey";

export const Steps: SurveyStep[] = [
  {
    title: 'Identity',
    inputs: [
      {
        label:"Your Email",
        placeholder:"Enter your email",
        id:"email",
        type:"email",
        required: false
      },
      {
        label:"Your Name",
        placeholder:"Enter your name",
        id:"name",
        type:"",
        required: false
      }
    ]
  },
  {
    title: 'Details',
    inputs: [
      {
        label:"Your age",
        placeholder:"Enter your age",
        id:"age",
        type:"number",
        required: true
      },
      {
        label:"Select your gender",
        placeholder:"Select your gender",
        id:"gender",
        type:"radio",
        options: ['male', 'female', 'other'],
        required: true
      }
    ]
  },
  {
    title: 'Favorites',
    inputs: [
      {
        label:"Your favoite book",
        placeholder:"Enter your favorite book",
        id:"favoriteBook",
        type:"",
        required: true
      },
      {
        label:"Select your favorite colors",
        placeholder:"Enter your favorite colors",
        id:"favoriteColors",
        type:"checkbox",
        options: ['red', 'green', 'blue', 'yellow', 'purple', 'pink', 'gray'],
        required: true
      }
    ]
  }
]

type iColors = {
  [key in Colors]: string;
};

export const colors: iColors = {
  red: 'bg-red-400',
  blue: 'bg-blue-400',
  green: 'bg-green-400',
  yellow: 'bg-yellow-400',
  purple: 'bg-purple-400',
  pink: 'bg-pink-400',
  gray: 'bg-gray-400'
}