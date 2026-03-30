<script>
    import { Button } from "bits-ui";
    import { bookingFormData } from "@/store/booking-form.svelte";
    import { categoriesData, servicesData } from "@/store/services.svelte";
    import { twMerge } from "tailwind-merge";

    let cartItems = $derived(servicesData.filter(d => bookingFormData.cart.items.indexOf(d.id) >= 0));
    let cartTotal = $derived(cartItems.reduce((sum, next) => sum + next.price, 0));
</script>

<Button.Root
    class={twMerge(
        "grid rounded-sm border-3 py-3 px-4 cursor-pointer",
        bookingFormData.activeStep === 0 ? 'border-teal/80' : 'border-border/40 hover:border-teal-light/80'
    )}
    onclick={() => bookingFormData.activeStep = 0}
>
    <div class="flex items-center justify-between">
        <span class="font-normal text-foreground/80">
            You selected {bookingFormData.cart.items.length} service{bookingFormData.cart.items.length === 1 ? '' : 's'}
        </span>
        <span class="text-xs font-medium text-background bg-teal-dark/80 hover:teal-dark transition-all duration-150 rounded-3xl px-4 py-1">
            Select
        </span>
    </div>
    {#if cartTotal > 0}
        <span class="text-muted font-normal text-left">Subtotal: <span class="text-foreground/80 font-bold py-0.75">${cartTotal}</span></span>
    {/if}
</Button.Root>
