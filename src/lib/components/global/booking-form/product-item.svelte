<script>
    import { twMerge } from "tailwind-merge";
    import { Button } from "bits-ui";
    import { toast } from "svelte-sonner";
    import { bookingFormData } from "@/store/booking-form.svelte";
    import { productsData } from "@/store/products.svelte";
    // import { onMount } from "svelte";
    // import { categoriesData, servicesData } from "@/store/services.svelte";
    
    let {
        item
    } = $props();

    let priceText = $derived.by(() => {
        return (new Intl.NumberFormat('en-NZ')).format(item.price);
    });

    let selected = $derived(bookingFormData.cart.products.indexOf(item.id) >= 0 || false);
    const addToCart = () => {
        selected = !selected;

        let selectedItem = productsData.find(d => d.id === item.id);
        if (selected === true) {
            bookingFormData.cart.products.push(item.id);
            bookingFormData.cart.products = bookingFormData.cart.products;

            // toast(`Product "${selectedItem.name}" has been added to your cart.`);
            return;
        }

        // console.log('bookingFormData.cart.products', bookingFormData.cart.products);
        let itemIndex = bookingFormData.cart.products.findIndex(d => d === item.id);
        // console.log('itemIndex', itemIndex);
        if (itemIndex < 0) return;

        bookingFormData.cart.products.splice(itemIndex, 1);
        bookingFormData.cart.products = bookingFormData.cart.products;
        // toast(`Product "${selectedItem.name}" has been removed from your cart.`);
    };

    // onMount(() => {
    //     selected = bookingFormData.cart.products.indexOf(item.id) >= 0;
    // });
</script>

<!-- TODO Allow user to input quantity and see subtotal -->
<div
    class={twMerge(
        "grid gap-1 border border-l-8 rounded-sm pt-3 px-4 pb-4 hover:bg-muted/5 transition-all duration-150",
        selected === true ? 'bg-teal-light/30 border-teal/80 border-l-teal/80' : 'border-muted/10 border-l-muted/10'
    )}
>
    <!-- <div class="grid gap-1 text-left"> -->
    <div class="flex items-center justify-between">
        <!-- <span class="text-base font-medium">{service.name}</span> -->
        <!-- <div class="grid gap-1 text-left"> -->
        <!-- <span class="text-base font-medium">{service.name}</span>
        <div class="grid gap-1"> -->
        <span class="font-semibold text-left">{item.name}</span>
        <!-- {#if item.description}
            <span class="text-muted/80 text-left">{item.description}</span>
        {/if} -->
        <div class="flex items-center gap-4">
            <span class="text-base font-semibold text-foreground">${priceText}</span>
            {#if selected}
                <!-- <i class="ph-bold ph-check text-xl"></i> -->
                <Button.Root onclick={addToCart}
                    class="text-xs rounded-full px-4 py-1 bg-red/20 cursor-pointer"
                >Remove</Button.Root>
            {:else}
                <Button.Root onclick={addToCart}
                    class="text-xs rounded-full px-4 py-1 bg-teal-light cursor-pointer"
                >
                    Add
                </Button.Root>
            {/if}
            <!-- <i class="ph-bold ph-{selected ? 'check' : 'plus'} text-xl"></i> -->
        </div>
    </div>
    {#if item.description}
        <p class="text-muted/80 text-left">{item.description}</p>
    {/if}
        <!-- <div class="grid grid-cols-[2fr_1fr] gap-8 items-center">
            <div class="flex gap-2 items-center">
                <i class="ph ph-currency-dollar"></i>
                <span class="font-normal text-foreground/70">{priceText}</span>
            </div> -->
            <!-- <div class="flex gap-2 items-center"> -->
                <!-- <Button.Root
                    class="py-1 pl-px rounded-[50%] h-7.5 w-7.5 border cursor-pointer"
                >
                    <i class="ph-bold ph-plus"></i>
                </Button.Root> -->
                <!-- <span>From</span> -->
                <!-- <div class="flex items-center">
                    <i class="ph ph-currency-dollar"></i>
                    <span class="font-normal text-foreground/70">{priceText}</span>
                </div> -->
            <!-- </div> -->
        <!-- </div> -->
    <!-- </div> -->

    <!-- <i class="ph-bold ph-{selected ? 'check' : 'plus'} text-xl"></i> -->
</div>
