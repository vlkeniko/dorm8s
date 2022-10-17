export default function PostCard(props) {
  const wm = props.wm;
  const users = props.users;
  let user, avatar;
  let isBooked = false;
  /* console.log(wms);
   console.log(users); */

  // Lookup the user who has booked (if any)
  //const bookedby = users.filter((user) => user.userid === wms.userid);

  // I want the name of the user that has booked.
  // If no user has booked, show "not booked"
  /* if (bookedby.length !== 0) {
    user = bookedby[0].username;
    avatar = bookedby[0].avatar;
    isBooked = true;
  } else {
    user = "not booked";
    avatar = ""; // could be a default avatar
  } */

  return (
    <section style={{ border: "1px solid black", padding: "15px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>id: {wm.id}</div>
        <div>status: {wm.status}</div>
        <div>booked by: {wm.userid}</div>
        { console.log(wm) }
        {/* <div>brand: {wms.brand}</div> */}
        {/* <div>time: {wms.time}</div> */}
        <div>
        {
        isBooked ? (
        <img src={avatar} alt="person" style={{ width: "50px" }} />
        ):
        (<span>No avatar</span>)
        }
        </div>
        <button>Book</button>
      </div>
    </section>
  );
}
