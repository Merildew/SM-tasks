export async function signUpUser(user, setError) {
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      login: user.login,
      firstName: user.firstName,
      lastName: user.lastName,
      age: user.age,
      pass: user.pass,
      checkedPass: user.checkedPass,
    }),
  };

  const response = await fetch("http://localhost:3001/signup", options);
  if (!response.ok) {
    let validationError = await response.json();
    validationError = validationError.errors;
    setError(validationError);
    throw new Error(validationError.message);
  }
  const data = await response.json();
  return data;
}
