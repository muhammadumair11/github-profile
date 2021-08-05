export async function ProfileAPI(input) {
  const res = await fetch(`https://api.github.com/users/${input}`);
  const data = await res.json();

  return data;
}
