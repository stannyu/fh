# FindHotel Front-end Engineer Assignment

Thanks for applying for the Front-end Engineer position at FindHotel!

This coding challenge will serve as the first step in the hiring process, the goal is to show case how you work and if it is decided to proceed with the process, will be the starting point of our technical interview.

There are two parts to the challenge, the first is developing the visual components of a supplied design. The second part is about how you implement, test and explain business logic.

## Time to spend on the assignment

We don't assign a fixed time deadline for it, but after you’ve read the assignment, please let us know when you’re planning to complete it. We usually suggest spending between 3-4 hours on the assignment. After you complete the assignment we'll review it internally and if we evaluate it to be positive, we'll schedule a technical interview to discuss the results together. As said, feel free to make some concessions under time pressure, just let us know what parts you've focused on most.

## Technology and Frameworks

This project is based on React as that is what we use here at FindHotel, however this is not a hard requirement. If you prefer to use another technology, feel free to set up the assignment with your tools of choice.

We use Redux at FindHotel, but again you're free to choose any information management technology you'd like.

Finally, we prefer to use a typed dialect such as TypeScript or Flow, so it is a plus for you to showcase the use of it, but you are allowed to use any JS flavor.

Styling can be done via CSS, or a CSS-in-JS framework of your choice (we use https://github.com/emotion-js/emotion).

## The assignment

Please note for this assignment you are not required to build any server side logic, you can build all logic in the client-side.
Build the application in a responsive way, so it will adapt to different phone screen sizes.

### Part 1: Building the supplied UI based on the designs

Please see the following screenshots for the designs to build. We provided a sample [JSON file](src/sample-hotel-data.json) that you can use to render the room cards.

Room Selection Screen | Room Basket Overlay
-|-
![Room Selection](1-room-selection.png "Room Selection Screen") | ![Room Basket Overlay](2-room-basket-overlay.png "Room Basket Overlay")


### Part 2: Implementing business logic

In the supplied designs you see there are two pieces of business logic to implement. The first is filtering of rooms based on their properties. You can implement this filtering completely on the client side.

The other logic you're required to build is the "room basket" concept. Please keep the following requirements in mind:

* The user can add maximum of 5 rooms of a type to a basket
* In the basket view, when removing the last of a room type, it should remove the room from the basket.
* The room should keep state to show whether it is in a basket or not. Clicking the check mark of an already selected room should remove it from the basket.

It is recommended to write automated tests (unit or integration) to verify and document the business logic.

### Bonus points

* Build a swipeable image gallery in the hotel card.
* Prepare your application to work with different languages (i18n).
* Implement a scaled up version for tablet / desktop devices. Note there is no design supplied, so you'll need to use your imagination if you go this route.

## The sample project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
