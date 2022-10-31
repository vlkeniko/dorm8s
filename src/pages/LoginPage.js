import { useEffect, useState } from "react";
import { useNavigate, Route } from "react-router-dom";
import Nav from "../components/Nav";

export function forceHomePage(time) {
  setTimeout(() => {
    window.location.href = "/home"
  }, time)
}

// 📁 pages/HomePage.js
export default function LoginPage() {
  // Defines initial states of data values
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Fetch is run to get list of users from
  // users.json file in public folder
  const getUsers = () => {
    fetch(
      "https://dorm8s-default-rtdb.europe-west1.firebasedatabase.app/Users.json"
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        let result = Object.keys(myJson).map((key) => ({
          id: key,
          ...myJson[key],
        }));
        setUsers(result);
      });
  };

  console.log(users);

  useEffect(() => {
    getUsers();
  }, []);

  // When the form is submitted, an object is created (formData)...
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      username: username,
      password: password,
    };

    // Check to see if all fields were filled. If not, show an
    // error message. If everything is good, loop though the
    // list of users to find a match. If match, navigate to wash
    // overview and transfer user information as props.
    const validForm = formData.username && formData.password;

    if (validForm) {
      for (const user of users) {
        if (
          formData.username === user.username &&
          formData.password === user.password
        ) {
          console.log("bingo");
          const currentuser = {
            id: user.id,
            username: user.username,
          };

          localStorage.setItem("loggedinid", JSON.stringify(user.id));
          localStorage.setItem("loggedinname", JSON.stringify(user.username));
          localStorage.setItem("loggedinbalance", JSON.stringify(user.balance));
          navigate(`/${JSON.stringify(currentuser)}`);
        } else {
          setErrorMessage("Incorrect password or username");
        }
      }
    } else {
      setErrorMessage("Please, fill in all fields.");
    }
  }

  if (JSON.parse(localStorage.getItem("loggedinname")) === null) {
    return (
      <>
        <h1 className="header-title">Log in</h1>
        <form onSubmit={handleSubmit}>
          <fieldset style={{ width: "250px" }} className="login-form">
            <label>
              <p>Username</p>
              <input
                type="text"
                name="username"
                placeholder="Type in username"
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </label>

            <label>
              <p>Password</p>
              <input
                type="password"
                name="password"
                placeholder="Type in password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <br></br>
              <br></br>
              <p>{errorMessage}</p>
              <button style={{ float: "right" }}>Login</button>
              <button type="reset" style={{ float: "right" }}>
                Reset
              </button>
            </label>
          </fieldset>
        </form>

        <p>name, password</p>
        <Nav />
      </>
    );
  }
  else {
    return (
      <>
        <h2>You are now logged in.</h2>
        {forceHomePage(1500)}
        <Nav />
        
      </>
    );
  }
}
