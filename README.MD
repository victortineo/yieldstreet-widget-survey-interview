# Embbedable Widget Survey app
> `Copy & paste solution`

#### Getting started
  Add the follow script tag to the bottom of the body in your HTML file
  ```
    <script src="https://00f74ba44b2aeafc6ce282af74d6a7e117efb5d1d1-apidata.googleusercontent.com/download/storage/v1/b/widget-survey/o/survey.js.js?jk=AFshE3VMhUqA7iIaVosOldyVfOm_Due7NYajc3bsA99CRGVMY2orIidb4LvY38cIVrBtjq5suc-JBrvGYQ1AKz572RtG1Ao978eNu05zIJJKjOh2rxRMOw7XkCC0fSs1TZUAsZ5bKAX70g1NidVPNLlcJGep0Wlz53QaFt2a6jKRZfS8CFr10rQgQKqwvroYoxV6HBmVra-Zu8Z6ps3qrhTlpJQD1wj9kZpZR58i_L_UkCp1Kfz_721G7u0TQ93sIzzLCQ-8QNiIjS7zahzP71wsVLW4jf6tFR-zmuHcL5FSPEWA037veABfPA6r8qK6C1zxfPOGZIx1EzWNiQhiwzltpaPsblgtZIy74TRmjYrDZdBS5SwxYWWVfLY-cwAXc4YbJhs5ompe9bmEow7Ia8WuNAPe8l2oYu8kNTOZhz_9FBQ9qYxWf1KaC1vLrPukPyoRmtVZ6vERMmSpnzgbULsS-NaXmceeY3_r3qIqaL5VTWb07rQylN8ussd1qnhYbCb55fgzHd70VAeJMoGmkwNqbkmkSB1ehwK28SKW7BVSP2SiJxgLgBqIp2ELnfqhTQ_7CW52jI0YNopu0RxaWig1J6waxJIZDaAiuGJgULnI1gdlML7TgQksNOnuy_39RfkrxvquU6Dlr3ypU2W-Qa-gga6U-vZaG1A9U74VuPNczJCb1L8Yz5ACEcTj4FH5YX-yHoqlF9aJ1VZQTdX5NVFanvN4QxXdMkkJbDKQlnhu-Q5vEbtJCyH1oOzz9aAArBp_2zMqI0BV2OuUZOStHU0MIvJbskwJbWc2xIdFvwKl0unNTnyZKZwRKFv3Ba5D2hxPQhejSGDPbdSFfN-z6py4XcTjq3ADU2ww2o39mca3LPxWO2mHU5_ob3Z8VUV8bhNCjziIU0QeBhdRwnJv4-ksGKWyvpB6n1xbJEe5b_jTlsThFhFMZJPWoRS3IPgOCbO5o0N09d4NLrAhhBI5Vqcp7wn6Em5f3RjQKG5jHt6kj3hcnzjXx_lWTVk-PpX200G4EnqlAJn3ouQKPnShY80YUMkwGBQn_XYIZjeE2LE_8Ub2XhUdDuWZYAX0xS4YGbntYOMf-vPQipGh7XREirGNFGqeOkbtgsbitpGE758B73YougbaRYh7Sxr-RpFU_BPEHGWxeeywQ8mGpOESn_8_ePQy&isca=1"></script>
  ```

  * once submited you'll not be able to see the widget. If you wanna try it again open your browser developer console and do the following command: `localStorage.clear()` and reload the page

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
