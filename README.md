# Jinterest

Jinterest, a Pinterest clone, is a social media application allow users to pin new ideas, discover inspiration through other users' shared images, or anything of interest to boards they have created.

[Visit Live Site](https://jinterest.herokuapp.com/#/)

## Technologies 
* Javascript
* React 
* Redux
* Ruby on Rails
* SCSS
* AWS S3
* Heroku deployment 

## Feactures 
* User Authentication 
* Discover feed 
* Profile 
* Pins 
* Boards 

### User Authentication 
User can create account and login. Using BCrypt gem and SecureRandom module to create user authentication, and validator for input validation.

<img style="max-width: 100%;" height="460" src="https://jinterest-seeds.s3-us-west-1.amazonaws.com/session_form.gif">

### Discover feed 
Masonry layout

<img style="max-width: 100%;" height="460" src="https://jinterest-seeds.s3-us-west-1.amazonaws.com/home.png">

### Profile 
User can select board or pin tag.
```javascript 
render() {
  const { currentUser, user, boards, pins, openModal, closeModal } = this.props;
  const userBoards = boards.filter(board => board.user_id === user.id);
  const userPins = pins.filter(pin => pin.user_id === user.id);

  const contentTabs = [
    <BoardIndexContainer user={user} boards={userBoards}/>,
    <PinIndexContainer selectedPins={userPins}/>
  ];
  const selectedTab = contentTabs[this.state.selectedSwitch];
```

## Coming Soon 
* Follower
* Search bar 


