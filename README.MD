# Embbedable Widget Survey app
> `Copy & paste solution`

### Project structure
#### Building

  This project was built on top of Vite and it was the tool of choice because of the type of the project as it is lightweight and it's simple to compile everything into a single file thanks for it's use of rollup on the background.

#### Scripts
  - `yarn` - installs all the dependencies
  - `yarn dev` - run the project locally in dev mode
  - `yarn build` - build widget into the dist folder
  - `yarn test` - Launches the vitest test runner
  - `yarn coverage` - Shows the test coverage of the project and outputs it into an UI in the coverage folder

#### Folder organization
  - Components - All the UI components separated in the following folders:
    - UI - Components that don't have any logic in it that is not related of UI (ex: button)
    - Containers - Components that render a step state of the survey
    - All other components should have their own folder
  - helpers - utility functions
  - models - typescript types and interfaces
  - test - vitest setup


#### Built with
  - ⚛️ [React](https://reactjs.org/)  -  JavaScript library for user interfaces
  - 🃏 [Vitest](https://vitest.dev/) - Unit Testing
  - 🐙 [React-testing-library](https://testing-library.com/docs/react-testing-library/) - React render testing
  - 📝 [React Hook Form](https://react-hook-form.com/) - Lightweight form handling tool
  - 🌬️ [tailwindcss](https://tailwindcss.com/) - A utility CSS Framework for UI composing

#### Development choices
  To build the survey and it's contents I decided to create all the content inside an object within the `constants.ts` file. This may not be the best solution as it less readable than HTML and it removes some flexibility for animations. A different approach would be to have all the steps of the survey to be in their own containers using `React.forwardref` in order to use React-hook-form input handling

#### Improvements
  - Add testing for APP
  - Thank you step animation is not good
  - because I ended up using an object instead of components to build the UI the HTML can look a little confusing, changing would probably be a better approach
