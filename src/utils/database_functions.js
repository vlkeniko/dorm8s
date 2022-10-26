export let endpoint = "https://dorm8s-default-rtdb.europe-west1.firebasedatabase.app";

export async function getFromEndpoint(url) {
  const response = await fetch(url);
  const data = await response.json();
  let result = Object.keys(data).map((key) => ({
    id: key,
    ...data[key],
  }));
  return result;
}

/* MANAGING USERS */
/* Get one user's data */
export async function getUser(id) {
  const res = await fetch(`${endpoint}/Users/${id}.json`);
  const data = await res.json();
  console.log(data);
  return data;
}

/* Create a user */
export async function createUser(user) {
  const res = await fetch(`${endpoint}/Users.json`, {
    method: "POST",
    body: JSON.stringify(user),
  });

  console.log(res);
}

/* Update a user's data */
export async function updateUser(id, user) {
  const res = await fetch(`${endpoint}/Users/${id}.json`, {
    method: "PUT",
    body: JSON.stringify(user),
  });

  console.log(res);
}

/* Delete a user */
export async function deleteUser(id) {
  const res = await fetch(`${endpoint}/Users/${id}.json`, {
    method: "DELETE",
  });

  console.log(res);
}

/* MANAGING WASHING MACHINES */
/* Get one wm's data */
export async function getWM(id) {
  const res = await fetch(`${endpoint}/WashingMachines/${id}.json`);
  const data = await res.json();
  console.log(data);
  return data;
}

/* Create a wm */
export async function createWM(wm) {
  const res = await fetch(`${endpoint}/WashingMachines.json`, {
    method: "POST",
    body: JSON.stringify(wm),
  });

  console.log(res);
}

/* Update a wm's data */
export async function updateWM(id, wm) {
  const res = await fetch(`${endpoint}/WashingMachines/${id}.json`, {
    method: "PUT",
    body: JSON.stringify(wm),
  });

  console.log(res);
}

/* Delete a wm */
export async function deleteWM(id) {
  const res = await fetch(`${endpoint}/WashingMachines/${id}.json`, {
    method: "DELETE",
  });

  console.log(res);
}

/* MANAGING KITCHEN ITEMS */
/* Get one item's data */
export async function getItem(id) {
  const res = await fetch(`${endpoint}/Items/${id}.json`);
  const data = await res.json();
  console.log(data);
  return data;
}

/* Create an item */
export async function createItem(item) {
  const res = await fetch(`${endpoint}/Items.json`, {
    method: "POST",
    body: JSON.stringify(item),
  });

  console.log(res);
}

/* Update an item's data */
export async function updateItem(id, item) {
  const res = await fetch(`${endpoint}/Items/${id}.json`, {
    method: "PUT",
    body: JSON.stringify(item),
  });

  console.log(res);
}

/* Delete an item */
export async function deleteItem(id) {
  const res = await fetch(`${endpoint}/Items/${id}.json`, {
    method: "DELETE",
  });

  console.log(res);
}

/* MANAGING LEASES */
/* Get one lease's data */
export async function getLease(id) {
  const res = await fetch(`${endpoint}/Leases/${id}.json`);
  const data = await res.json();
  console.log(data);
  return data;
}

/* Create a lease */
export async function createLease(lease) {
  const res = await fetch(`${endpoint}/Leases.json`, {
    method: "POST",
    body: JSON.stringify(lease),
  });

  console.log(res);
}

/* Update a lease's data */
export async function updateLease(id, lease) {
  const res = await fetch(`${endpoint}/Leases/${id}.json`, {
    method: "PUT",
    body: JSON.stringify(lease),
  });

  console.log(res);
}

/* Delete a lease */
export async function deleteLease(id) {
  const res = await fetch(`${endpoint}/Leases/${id}.json`, {
    method: "DELETE",
  });

  console.log(res);
}
