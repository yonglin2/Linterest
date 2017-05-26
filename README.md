# Linterest

[Live site][Linterest]

[Linterest]: https://linterest.herokuapp.com/

Linterest is inspired by Pinterest and built using Ruby on Rails and React/Redux.

It is a full-stack web application built on the following:

*  Rails backend
*  React/Redux frontend
*  Postgres RDBMS

![login](./docs/screenshots/login.png)

## Features

#### Masonry
Pins are organized using the [React Masonry Components](https://github.com/eiriklv/react-masonry-component) and are responsive when the window is resized with flex-wrap.

```html
<Masonry className={"pins-index-container"}
elementType={'ul'}
options={masonryOptions}
disableImagesLoaded={false}
updateOnEachImageLoad={false}
>
{pins.map( (pin) => {
  return (
  <PinModal key={ pin.id }
  pin={ pin }>
</PinModal>);
}
)}
</Masonry>
```

#### Pinning

An user can add a pin to their collection, which are categorized by 'boards'. A board cannot have duplicate pins. I check to see if a pin is already pinned to the current board, and does not map that as an option if that's true.

```html
<select className="pin-show-board-select"
  onChange={this.handleChooseBoard}>
  <option key="disabled">Choose board</option>
  {
    currentBoards.map((board) => {
      if (pinned_boards.includes(board.id)) {return;}
      return(
        <option className="pin-show-option"
          key={board.id}
          value={board.id}>{board.title}
        </option>
      );
    })
  }
</select>
```

#### Modals
A pin's show page is opened in a modal for a better view of the image in a pin. It's done using [React Modal](https://github.com/reactjs/react-modal). From the modal, you can click on the user profile picture to go to the user who uploaded the pin.

#### Drag and Drop upload
Users can upload images via drag'n'drop or by clicking in the zone, with [react-dropzone](https://github.com/okonet/react-dropzone).

#### User Profiles and Follows
User's profile provides a live view of their boards, pins, followers and followings. Following a user adds the current user to the user's follower list instantly.

![userprofile](./docs/screenshots/userprofile.png)

## Future Features

### Infinite scroll

Will allow users to keep scrolling to retrieve more content.

### Comments

Leaving comments on pins allows discussion and creates more interactivity.

### Search by content (tags)

Implementing search will let users filter through pins. Creating tags for each pin will allow for a more accurate realtime search.
