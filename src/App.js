import React from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
// const HatsPage = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <Link to="/topic">Topic</Link>
//       <button
//         onClick={() => {
//           props.history.push("/topic");
//         }}
//       >
//         Topic
//       </button>
//       <h1>HATS PAGE</h1>
//     </div>
//   );
// };

// const TopicList = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>TopicList page</h1>
//       <h3>path: {props.match.path}</h3>
//       <h3>url: {props.match.url}</h3>
//     </div>
//   );
// };

// const TopicListDetail = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h1>TopicListDetail page</h1>
//       <h3>path: {props.match.path}</h3>
//       <h3>url: {props.match.url}</h3>
//     </div>
//   );
// };

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact={true} path="/" component={HomePage} />{" "}
        {/*exact means path should exactly like specified one it has two value true or false, default is true*/}
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
