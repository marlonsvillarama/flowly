<script>
    import { Button } from "bits-ui";
    import { bookingFormData } from "@/store/booking-form.svelte";
    import { categoriesData, servicesData } from "@/store/services.svelte";

    let cartItems = $derived(servicesData.filter(d => bookingFormData.cart.items.indexOf(d.id) >= 0));
    let cartTotal = $derived(cartItems.reduce((sum, next) => sum + next.price, 0));
</script>

<div class="grid rounded-sm border border-teal-dark py-3 px-4">
    <div class="flex items-center justify-between">
        <span class="font-normal text-foreground/80">
            You selected {bookingFormData.cart.items.length} service{bookingFormData.cart.items.length === 1 ? '' : 's'}
        </span>
        <Button.Root
            class="text-xs font-medium text-background bg-teal-dark/80 hover:teal-dark transition-all duration-150 cursor-pointer rounded-3xl px-4 py-1"
            onclick={() => bookingFormData.activeStep = 0}
        >
            Select
        </Button.Root>
    </div>
    {#if cartTotal > 0}
        <span class="text-muted font-normal">Subtotal: <span class="text-foreground/80 font-bold py-0.75">${cartTotal}</span></span>
    {/if}
</div>
