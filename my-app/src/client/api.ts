const apiUrl = "https://jsonplaceholder.typicode.com/users";

export const getUsers = fetch(apiUrl)
    .then((response) => response.json());

export const addUser = (username: string, phone: string, website: string) => fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify({
        username,
        phone,
        website,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
}).then((response) => response.json());