export default function Login() {
  return (
    <>
      <form>
        <fieldset style={{ width: "250px" }}>
          <legend>Log in</legend>
          <label>
            Username{" "}
            <input
              type="text"
              name="username"
              placeholder="Type in username"
            ></input>
          </label>
          <label>
            Password&nbsp;{" "}
            <input
              type="password"
              name="password"
              placeholder="Type in password"
            ></input>
            <br></br>
            <br></br>
            <button style={{ float: "right" }}>Login</button>
            <button type="reset" style={{ float: "right" }}>
              Reset
            </button>
          </label>
        </fieldset>
      </form>
    </>
  );
}