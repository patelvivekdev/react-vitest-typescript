it('fetches the user 1', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

  expect(response.status).toBe(200);
  expect(response.statusText).toBe('OK');

  const user = await response.json();

  expect(user.id).toEqual(1);
  expect(user.name).toEqual('Leanne Graham');
});

it('fetches the user 2', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/2');

  expect(response.status).toBe(200);
  expect(response.statusText).toBe('OK');

  const user = await response.json();

  expect(user.id).toEqual(2);
  expect(user.name).toEqual('Ervin Howell');
});
