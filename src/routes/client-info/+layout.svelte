<script>
    import { Button } from "bits-ui";
    import { Toaster } from "svelte-sonner";
    import { bookingFormData, getHasMatchingPackages } from "@/store/booking-form.svelte";
    import FormHeader from "@/components/global/booking-form/form-header.svelte";

    let { children } = $props();
</script>

<div class="grid grid-rows-[auto_1fr] h-screen gap-3">
    <FormHeader />

    <div class="grid grid-rows-[auto_1fr] gap-5 w-[95%] mb-8 mx-auto max-w-300">
        <div class="flex items-center justify-between">
            <span class="text-2xl text-foreground font-semibold">Enter your details</span>
            {#if getHasMatchingPackages() === true}
                <Button.Root
                    class="flex items-center gap-3 py-2 px-5 rounded-full cursor-pointer bg-border/30 hover:bg-border/80 duration-150 ease-in-out font-medium text-sm text-foreground/80"
                    onclick={() => window.location = './review-pkg'}
                >
                    <i class="ph-bold ph-arrow-left text-lg"></i>
                    <span>Back to package review</span>
                </Button.Root>
            {/if}

            <div class="flex items-center gap-3">
            <Button.Root
                class="flex items-center gap-3 py-2 px-5 rounded-full cursor-pointer bg-border/30 hover:bg-border/80 duration-150 ease-in-out font-medium text-sm text-foreground/80"
                onclick={() => window.location = './form'}
            >
                <i class="ph-bold ph-arrow-left text-lg"></i>
                <span>Back to cart</span>
            </Button.Root>

            <Button.Root
                onclick={() => window.location = getHasMatchingPackages() === true ? './review-pkg' : './client-info'}
                class="grid items-center py-2 px-10 bg-teal/90 rounded-full cursor-pointer hover:bg-storm-teal duration-150 ease-in-out font-medium text-xs text-background"
            >
                Continue
            </Button.Root>
            </div>

        </div>
        <div class="grid grid-cols-[2fr_1fr] gap-2 w-full h-full border border-red">
            {@render children?.()}
        </div>
    </div>
</div>

<Toaster position="bottom-right" expand={true} closeButton
    class="[--width:40rem]!"
/>
