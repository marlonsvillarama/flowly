<script>
    import { twMerge } from "tailwind-merge";
    import { Button } from "bits-ui";
    import { bookingFormData } from "@/store/booking-form.svelte";
    import { onMount } from "svelte";
    // import { categoriesData, servicesData } from "@/store/services.svelte";
    
    let {
        item
    } = $props();

    let priceText = $derived.by(() => {
        return (new Intl.NumberFormat('en-NZ')).format(item.price);
    });

    let selected = $state(false);
    const addToCart = (id) => {
        selected = !selected;

        if (selected === true) {
            bookingFormData.cart.products.push(id);
            bookingFormData.cart.products = bookingFormData.cart.products;
            return;
        }

        console.log('bookingFormData.cart.products', bookingFormData.cart.products);
        let itemIndex = bookingFormData.cart.products.findIndex(d => d === id);
        console.log('itemIndex', itemIndex);
        if (itemIndex < 0) return;

        bookingFormData.cart.products.splice(itemIndex, 1);
        bookingFormData.cart.products = bookingFormData.cart.products;
    };

    onMount(() => {
        selected = bookingFormData.cart.products.indexOf(item.id) >= 0;
    });
</script>

<Button.Root
    class={twMerge(
        "grid grid-cols-[2fr_1fr_auto] items-start gap-8 border border-l-8 rounded-sm pt-3 px-4 pb-4 cursor-pointer hover:bg-muted/5 transition-all duration-150",
        selected === true ? 'bg-teal-light/30 border-teal/80 border-l-teal/80' : 'border-muted/10 border-l-muted/10'
    )}
    onclick={() => addToCart(item.id)}
>
    <!-- <div class="grid gap-1 text-left"> -->
    <div class="grid gap-1">
        <span class="font-semibold text-left">{item.name}</span>
        {#if item.description}
            <span class="text-muted/80 text-left">{item.description}</span>
        {/if}
    </div>
        <div class="grid grid-cols-[2fr_1fr] gap-8 items-center">
            <div class="flex gap-2 items-center">
                <i class="ph ph-currency-dollar"></i>
                <span class="font-normal text-foreground/70">{priceText}</span>
            </div>
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
        </div>
    <!-- </div> -->

    <i class="ph-bold ph-{selected ? 'check' : 'plus'} text-xl"></i>
</Button.Root>
