<script>
    import { Button } from "bits-ui";
    import { Toaster } from "svelte-sonner";
    import FormHeader from "@/components/global/booking-form/form-header.svelte";

    let { children } = $props();
</script>

<div class="grid grid-rows-[auto_auto_1fr] h-screen gap-3">
    <FormHeader />

    <div class="grid grid-rows-[auto_1fr] gap-3 w-[95%] mb-8 mx-auto max-w-300">
        <div class="flex items-center justify-between">
            <span class="text-2xl text-foreground font-semibold">Services & Packages</span>
            <Button.Root
                class="flex items-center gap-3 py-2 px-5 rounded-full cursor-pointer bg-border/30 hover:bg-border/80 duration-150 ease-in-out font-medium text-sm text-foreground/80"
                onclick={() => window.location = './form'}
            >
                <i class="ph-bold ph-arrow-left text-lg"></i>
                <span>Select items</span>
            </Button.Root>
        </div>
        <div class="flex items-center gap-2 px-4 py-4 rounded-xs bg-sand/50 border-l-8 border-sand-dark">
            <i class="ph-bold ph-info text-lg"></i>
            <span>The packages you selected also contain some of the services you selected. Please see below.</span>
        </div>
        <div class="w-full h-full mt-3">
            {@render children?.()}
        </div>
    </div>
</div>

<Toaster position="bottom-right" expand={true} closeButton
    class="[--width:40rem]!"
/>
