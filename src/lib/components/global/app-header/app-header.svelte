<script>
    import GlobalSearch from "./global-search.svelte";
</script>

<div class="app-header grid grid-cols-[160px_1fr_160px] justify-between items-center px-4 py-1 border-teal-light border-b">
    <a href="#" class="logo">Flow<span>ly</span></a>
    <div class="flex items-center justify-center gap-12">
        <GlobalSearch />
        <!-- <a href="#">Calendar</a>
        <a href="#">Clients</a>
        <a href="#">Services</a>
        <a href="#">Resources</a>
        <a href="#">Settings</a> -->
    </div>
    <a href="#waitlist" class="nav-cta">Join Waitlist</a>
</div>

<style>
/* .app-header { */
    /* display: grid;
    grid-template-columns: 160px 1fr 160px;
    justify-content: space-between;
    align-items: center; */
    /* padding: 20px 48px; ----- */
    /* padding: 0.25rem 1rem;
    background: rgba(253,252,251,0.88);
    backdrop-filter: blur(12px); */
    /* border-bottom: 1px solid rgba(58,155,142,0.12); */
/* } */
.logo {
    font-family: 'Fraunces', serif;
    font-weight: 600;
    font-size: 26px;
    color: var(--charcoal);
    letter-spacing: -0.5px;
    text-decoration: none;
}
.logo span { color: var(--teal); }
.global-search {
    border: 1px solid var(--teal);
    padding: 0.25rem 1.25rem;
    width: 300px;
}
/* .main-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
} */
.nav-cta {
    background: var(--teal);
    color: white;
    border: none;
    padding: 10px 22px;
    border-radius: 100px;
    font-family: 'DM Sans', sans-serif;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    text-decoration: none;
    transition: background 0.2s, transform 0.15s;
}
nav .nav-cta:hover { background: var(--teal-dark); transform: translateY(-1px); }
</style>