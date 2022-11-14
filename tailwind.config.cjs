/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        successSubmissionBg: {
          from: { "clip-path": "inset(100% 0 0 100%)" },
          to: { "clip-path": "inset(0 0 0 0)" }
        },
        switch: {
          "0%": { opacity: 1, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(.95)" },
          "100%": { opacity: 1, transform: "scale(1)" }
        },
        openModal: {
          "0%": {
            maxHeight: "5rem",
            maxWidth: "5rem",
            borderRadius: '100%',
            overflow: 'hidden',
            right: '5rem',
            bottom: '5rem',
          },
          "50%": {
            borderRadius: '0%',
            overflow: 'hidden',
          },
          "100%": {
            maxHeight: "20rem",
            maxWidth: "30rem",
            right: '2.5rem',
            bottom: '2.5rem',
          }
        },
        closeModal: {
          "0%": {
            maxHeight: "20rem",
            maxWidth: "30rem",
            right: '2.5rem',
            bottom: '2.5rem',
            overflow: 'hidden',
          },
          "50%": {
            borderRadius: '0%',
          },
          "100%": {
            maxHeight: "5rem",
            maxWidth: "5rem",
            borderRadius: '100%',
            overflow: 'hidden',
            right: '5rem',
            bottom: '5rem',
          },
        }
      },
      animation:{
        successSubmissionBg: "successSubmissionBg 1.2s cubic-bezier(.25, 1, .30, 1) both",
        switch: "switch .5s",
        openModal: "openModal .75s",
        closeModal: "closeModal .75s"
      }
    },
  },
  plugins: [],
}
