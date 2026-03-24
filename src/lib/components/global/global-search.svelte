<script>
    import Search from '@lucide/svelte/icons/search';
</script>

<div class="search-wrapper">
    <Search size={16} />
    <input type="text" placeholder="Search..."/>
</div>

<style>
    .search-wrapper {
        border: 1px solid var(--teal);
        border-radius: 4px;
        padding: 0.375rem 0.375rem;
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    input[type=text] {
        border: 0;
        outline: 0;
        font-size: 0.875rem;
        width: 20rem;
    }
</style>