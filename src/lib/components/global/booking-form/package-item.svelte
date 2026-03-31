<script>
    // import { onMount } from "svelte";
    import { bookingFormData } from "@/store/booking-form.svelte";
    import { packagesData } from "@/store/packages.svelte";
    import { servicesData } from "@/store/services.svelte";
    import { Button } from "bits-ui";
    import { toast } from "svelte-sonner";
    import { twMerge } from "tailwind-merge";

    let { item } = $props();

    let originalPrice = $derived(item.services.reduce((sum, next) => sum + (next.count * next.price), 0));
    let selected = $derived(bookingFormData.cart.packages.indexOf(item.id) >= 0 || false);
    const addToCart = () => {
        selected = !selected;

        let selectedItem = packagesData.find(d => d.id === item.id);
        if (selected === true) {
            bookingFormData.cart.packages.push(item.id);
            bookingFormData.cart.packages = [ ...new Set(bookingFormData.cart.packages) ];

            // selectedItem.services.forEach(s => {
            //     let serviceIndex = bookingFormData.cart.services.indexOf(s.service);

            //     if (serviceIndex >= 0) {
            //         bookingFormData.cart.services.splice(serviceIndex, 1);
            //         bookingFormData.cart.services = [ ...new Set(bookingFormData.cart.services) ];
            //     }
            // });

            toast(`Package "${selectedItem.name}" has been added to your cart.`);
            bookingFormData.activeStep = 'packages';
            return;
        }

        let index = bookingFormData.cart.packages.findIndex(d => d === item.id);
        if (index < 0) return;

        bookingFormData.cart.packages.splice(index, 1);
        bookingFormData.cart.packages = [ ...new Set(bookingFormData.cart.packages) ];
        toast(`Package "${selectedItem.name}" has been removed from your cart.`);
    };

    // onMount(() => {
    //     selected = bookingFormData.cart.packages.indexOf(item.id) >= 0;
    // });
</script>

<Button.Root
    class={twMerge(
        "grid w-full gap-1 border border-l-8 rounded-sm pt-3 px-4 pb-4 cursor-pointer hover:bg-muted/5 transition-all duration-150",
        selected === true ? 'bg-teal-light/30 border-teal/80 border-l-teal/80' : 'border-muted/10 border-l-muted/10'
    )}
    onclick={addToCart}
>
    <!-- <div class="grid gap-1 text-left"> -->
        <div class="flex item-center justify-between">
            <span class="text-base font-medium">{item.name}</span>
            {#if selected}
                <i class="ph-bold ph-check text-xl"></i>
            {:else}
                <span class="text-xs rounded-full px-4 py-1 bg-teal-light">Add</span>
            {/if}
        </div>
        <div class="flex items-start justify-between">
            <div class="pl-6">
                {#each item.services as service}
                    <div class="text-left text-xs font-light py-0.5 grid grid-cols-[1rem_auto_1fr] items-center gap-2">
                        <span class="text-sm">{service.count}</span>
                        <i class="ph ph-x"></i>
                        <span>{service.name}</span>
                    </div>
                {/each}
            </div>
            <div class="flex flex-col text-right bg-border/50 px-4 py-2 rounded-sm">
                <div class="">
                    <span class="text-base font-light line-through decoration-2 decoration-foreground">${(new Intl.NumberFormat('en-NZ')).format(originalPrice)}</span>
                    <span class="text-xl font-semibold text-teal-dark">${(new Intl.NumberFormat('en-NZ')).format(item.price)}</span>
                </div>
                <span>You save ${(new Intl.NumberFormat('en-NZ')).format(originalPrice - item.price)}</span>
            </div>
        </div>
    <!-- </div> -->
    <!-- <div class="pl-4">
        <div class="flex items-center gap-2">
        </div>
        <div class="text-xs px-5 py-2 mt-3 bg-sand rounded-full font-medium">Buy this package</div>
    </div> -->
</Button.Root>