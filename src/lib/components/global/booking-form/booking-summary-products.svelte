<script>
    import { twMerge } from "tailwind-merge";
    import { Button } from "bits-ui";
    import { bookingFormData } from "@/store/booking-form.svelte";
    import { productsData } from "@/store/products.svelte";
    import { categoriesData, servicesData } from "@/store/services.svelte";

    let cartProducts = $derived(productsData.filter(d => bookingFormData.cart.products.indexOf(d.id) >= 0));
    let cartTotal = $derived(cartProducts.reduce((sum, next) => sum + next.price, 0).toFixed(2));
</script>

<Button.Root
    class={twMerge(
        "grid rounded-0 border-0 border-l-6 border-transparent py-2 px-6 cursor-pointer",
        bookingFormData.activeStep === 'products' ? 'border-teal/80 bg-teal-light/20' : ''
    )}
    onclick={() => bookingFormData.activeStep = 'products'}
>
        <!-- bookingFormData.activeStep === 'products' ? 'border-teal/80' : 'border-border/40 hover:border-teal-light/80' -->
    <div class="flex items-center justify-between">
        <span class="font-normal text-foreground/80">
            You selected {bookingFormData.cart.products.length} product{bookingFormData.cart.products.length === 1 ? '' : 's'}
        </span>
        <span class="text-foreground/80 font-bold py-0.75">${cartTotal}</span>
        <!-- <div class="text-xs font-medium text-background bg-teal-dark/80 hover:teal-dark transition-all duration-150 cursor-pointer rounded-3xl px-4 py-1">
            Select
        </div> -->
    </div>
    <!-- {#if cartTotal > 0}
        <span class="text-muted font-normal text-left">Subtotal: <span class="text-foreground/80 font-bold py-0.75">${cartTotal}</span></span>
    {/if} -->
</Button.Root>
