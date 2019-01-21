export function getTasks() {
  return fetch("https://jsonplaceholder.typicode.com/users/1/todos");
}

export function sendTask(payload) {
  return fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload.task)
  });
}
