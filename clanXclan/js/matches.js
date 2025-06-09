async function loadMatches() {
  const season = document.getElementById('seasonSelect').value;
  const { data } = await supabase
    .from('matches')
    .select(/* existing fields */)
    .eq('season', season)
    ...
}
