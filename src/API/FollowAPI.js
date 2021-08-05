export async function FollowAPI(user, swtich) {
  const followers = `https://api.github.com/users/${user}/followers`;
  const following = `https://api.github.com/users/${user}/following`;

  const res = await fetch(swtich === "following" ? following : followers);
  const data = await res.json();

  return data;
}
