<script>
    import Settings from '@lucide/svelte/icons/settings';
    import Button from "$lib/components/ui/button/button.svelte";
</script>

<div class="main-controls">
    <Button><Settings /></Button>
</div>

<style>
    .main-controls {
        border-bottom: 1px solid rgba(58,155,142,0.12);
        padding: 0.25rem 1rem;
    }
</style>