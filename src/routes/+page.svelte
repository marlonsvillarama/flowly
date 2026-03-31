<script>
    import { Button } from "bits-ui";
    import { Toaster } from "svelte-sonner";
</script>

<div class="p-5 flex gap-3 bg-horizon-blue/10">
    <Button.Root
        class="py-1 px-3 text-sm text-foreground bg-white border rounded-sm cursor-pointer hover:bg-muted/10 hover:shadow-sm"
        onclick={() => window.location = '/app'}
    >
        Application
    </Button.Root>
    <Button.Root
        class="py-1 px-3 text-sm text-foreground bg-white border rounded-sm cursor-pointer hover:bg-muted/10 hover:shadow-sm"
        onclick={() => window.location = '/login'}
    >
        Booking Form
    </Button.Root>
</div>