<script>
    import { Button, Separator } from "bits-ui";
    import { bookingFormData } from "@/store/booking-form.svelte";
    import { categoriesData, servicesData } from "@/store/services.svelte";
    import { twMerge } from "tailwind-merge";

    let cartItems = $derived(servicesData.filter(d => bookingFormData.cart.services.indexOf(d.id) >= 0));
    let cartTotal = $derived(cartItems.reduce((sum, next) => sum + next.price, 0).toFixed(2));
</script>

<Button.Root
    class={twMerge(
        "grid rounded-sm border-3 py-3 px-4 cursor-pointer",
        bookingFormData.activeStep === 'services' ? 'border-teal/80' : 'border-border/40 hover:border-teal-light/80'
    )}
    onclick={() => bookingFormData.activeStep = 'services'}
>
    <div class="flex items-center justify-between">
        <span class="font-normal text-foreground/80">
            You selected {bookingFormData.cart.services.length} service{bookingFormData.cart.services.length === 1 ? '' : 's'}
        </span>
        <span class="text-foreground/80 font-bold py-0.75">${cartTotal}</span>
        <!-- <span class="text-muted font-normal text-left">Subtotal: </span> -->
    </div>
    <!-- <span class="text-xs font-medium text-background bg-teal-dark/80 hover:teal-dark transition-all duration-150 rounded-3xl px-4 py-1">
        Select
    </span> -->
    <!-- {#if cartTotal > 0}
        <span class="text-muted font-normal text-left">Subtotal: <span class="text-foreground/80 font-bold py-0.75">${cartTotal}</span></span>
    {/if} -->
    <!-- {#if cartItems.length > 0}
        <Separator.Root class="h-px bg-border" />

        {#if bookingFormData.date}
            <span class="italic">to do...</span>
        {:else}
            <span class="italic">No date/time set</span>
        {/if}
    {/if} -->
</Button.Root>
