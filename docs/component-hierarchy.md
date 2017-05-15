## Component Hierarchy

**AuthFormContainer**
  - LoginForm ("/login")
  - SignupForm ("signup")

**HomeContainer** (IndexRoute and path "/")

  - **NavBarContainer**
    + Logo
    + User Image

  - **SearchContainer** (bonus, "/search")
    + Search

  - **PinsContainer** ("/pins")
    + PinIndex
    + NewPin
    + PinDetail

  - **BoardsContainer** ("/boards")
    + BoardDetail
    + NewBoard
    + EditBoard

  - **UserContainer**
    + UserDetail
    + Logout
    - **BoardsContainer**
      + BoardDetail
      + NewBoard
      + EditBoard
    - **PinsContainer**
      + NewPin
      + PinDetail
    - **FollowsContainer**
      + followers
      + followees


## Routes

|Path                         | Component           |
|-----------------------------|---------------------|
| "/signup"                   | "AuthFormContainer" |
| "/login"                    | "AuthFormContainer" |
| "/"                         | "HomeContainer"     |
| "/search/"                  | "SearchContainer"   |
| "/boards/"                  | "BoardsContainer"   |
| "/boards/:boardId"          | "BoardDetail"       |
| "/boards/new"               | "NewBoard"          |
| "/boards/:boardId/edit"     | "EditBoard"         |
| "/pins/"                    | "PinsContainer"     |
| "/pins/:pinId"              | "PinDetail"         |
| "/pins/new"                 | "NewPin"            |
| "/users/:id"                | "UserContainer"     |
| "/users/:userId/followers"  | "FollowsContainer"  |
| "/users/:userId/followees"  | "FollowsContainer"  |
