<script>
    import { Button } from "bits-ui";

    let {
        children
    } = $props();
</script>

<div class="flex items-center justify-between gap-3 text-2xl">
    <!-- <span class="font-normal text-foreground/60">Booking Form</span>
    <i class="ph ph-caret-right text-sm"></i> -->
    <span class="font-semibold text-foreground/80">Choose Services</span>
    <Button.Root>Next</Button.Root>
</div>
<div class="content overflow-y-auto">
    <div class="h-[1000px]">
    {@render children?.()}
    </div>
</div>

<!-- <div class="grid gap-4">
    <div class="flex items-center justify-between">
        <h1 class="text-2xl font-semibold">Choose Services</h1>
        <button onclick={() => window.location = '../calendar'}>Next</button>
    </div>
</div> -->
