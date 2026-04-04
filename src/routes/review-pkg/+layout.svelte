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
            <div class="flex items-center gap-4">
                <Button.Root
                    class="flex items-center gap-3 py-2 px-5 rounded-sm cursor-pointer bg-border/30 hover:bg-border/80 duration-150 ease-in-out font-medium text-sm text-foreground/80"
                    onclick={() => window.location = './form'}
                >
                    <i class="ph-bold ph-arrow-left text-lg"></i>
                    <span>Back to your cart</span>
                </Button.Root>
                <Button.Root
                    onclick={() => {
                        window.location = './client-info'
                    }}
                    class="grid items-center py-2 px-10 bg-teal/90 rounded-sm cursor-pointer hover:bg-storm-teal duration-150 ease-in-out font-medium text-xs text-background"
                >
                    Continue
                </Button.Root>
            </div>
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
