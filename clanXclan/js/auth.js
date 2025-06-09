async function redirectIfLoggedIn() {
  const { data: { user } } = await supabase.auth.getUser();
  if (user) window.location.href = 'clan.html';
}

async function redirectIfNotLoggedIn() {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) window.location.href = 'login.html';
}
