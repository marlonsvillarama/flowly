<script>
    import { Button } from "bits-ui";
    import { toast } from 'svelte-sonner';

    const showToast = () => {
        toast('Event has been createdz.');
    };
</script>

<div class="px-4 py-1 border-teal-light border-b bg-teal-pale">
    <Button.Root
        class="cursor-pointer border rounded-sm py-1 px-2 flex items-center bg-background transition-all duration-150 hover:shadow-sm"
        onclick={showToast}
    >
        <i class="ph ph-gear"></i>
        Test
    </Button.Root>
</div>

<style>
    /* .main-controls {
        border-bottom: 1px solid rgba(58,155,142,0.12);
        padding: 0.25rem 1rem;
    } */
</style>