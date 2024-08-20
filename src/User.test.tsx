it('fetches the user info', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

  expect(response.status).toBe(200);
  expect(response.statusText).toBe('OK');

  const user = await response.json();

  expect(user.id).toEqual(1);
  expect(user.name).toEqual('Leanne Graham');
});
