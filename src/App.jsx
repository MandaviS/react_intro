//JSX
import User from "./components/user";
function App() {
  return( <div>
    <h1>Users</h1>
    <User name="hello" description="hii" />
  </div> );
};

export default App;

//props: properties or parameters in react
//props => data passed from one component to another
//states => A set of data that an individual component holds