// Load all clans
async function loadClans() {
  const { data, error } = await supabase
    .from('clans')
    .select('id,name,privacy');
  if (error) return alert('Error loading clans: ' + error.message);
  const list = document.getElementById('clan-list');
  list.innerHTML = '';
  data.forEach(c => {
    const li = document.createElement('li');
    li.textContent = `${c.name} (${c.privacy})`;
    list.appendChild(li);
  });
}

// Create a new clan
async function createClan() {
  const name = prompt('Clan Name?');
  const privacy = prompt('Privacy (Open / Request / InviteOnly)?');
  if (!name || !privacy) return;
  const user = (await supabase.auth.getUser()).data.user;
  const { error } = await supabase.from('clans').insert([{
    name,
    privacy,
    founder_id: user.id
  }]);
  if (error) return alert('Error creating clan: ' + error.message);
  loadClans();
}
