export async function refreshToken() {
  const refreshToken = localStorage.getItem("refreshToken");
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refreshToken: refreshToken }),
  };
  const response = await fetch("http://localhost:3001/token", options);
  if (!response.ok) {
    return false;
  }
  const accessToken = await response.json();
  localStorage.setItem("accessToken", accessToken);
  return true;
}
