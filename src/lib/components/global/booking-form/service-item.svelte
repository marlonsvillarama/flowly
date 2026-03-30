<script>
    import { twMerge } from "tailwind-merge";
    import { Button } from "bits-ui";
    import { bookingFormData } from "@/store/booking-form.svelte";
    import { onMount } from "svelte";
    // import { categoriesData, servicesData } from "@/store/services.svelte";
    
    let {
        category,
        service
    } = $props();

    let priceText = $derived.by(() => {
        return (new Intl.NumberFormat('en-NZ')).format(service.price);
    });

    let selected = $state(false);
    const addToCart = (category, service) => {
        selected = !selected;

        if (selected === true) {
            bookingFormData.cart.items.push(service);
            bookingFormData.cart.items = bookingFormData.cart.items;
            return;
        }

        let serviceIndex = bookingFormData.cart.items.findIndex(d => d === service);
        if (serviceIndex < 0) return;

        bookingFormData.cart.items.splice(serviceIndex, 1);
        bookingFormData.cart.items = bookingFormData.cart.items;
    };

    onMount(() => {
        selected = bookingFormData.cart.items.indexOf(service.id) >= 0;
    });
</script>

<Button.Root
    class={twMerge(
        "grid grid-cols-[1fr_auto] gap-8 border border-l-8 rounded-sm pt-3 px-4 pb-4 cursor-pointer hover:bg-muted/5 transition-all duration-150",
        selected === true ? 'bg-teal-light/30 border-teal/80 border-l-teal/80' : 'border-muted/10 border-l-muted/10'
    )}
    onclick={() => addToCart(category.id, service.id)}
>
    <div class="grid gap-1 text-left">
        <span class="font-semibold">{service.name}</span>
        <div class="grid grid-cols-[2fr_1fr] gap-8 items-center">
            <div class="flex gap-2 items-center">
                <i class="ph ph-clock"></i>
                <span class="font-normal text-foreground/70">Around {service.duration} minutes</span>
            </div>
            <div class="flex gap-2 items-center">
                <!-- <span>From</span> -->
                <div class="flex items-center">
                    <i class="ph ph-currency-dollar"></i>
                    <span class="font-normal text-foreground/70">{priceText}</span>
                </div>
            </div>
        </div>
    </div>

    <i class="ph-bold ph-{selected ? 'check' : 'plus'} text-xl"></i>
</Button.Root>
