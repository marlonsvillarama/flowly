<script>
    import { bookingFormData } from "@/store/booking-form.svelte";
    import { packagesData } from "@/store/packages.svelte";
    import { servicesData } from "@/store/services.svelte";
    import { vouchersData } from "@/store/vouchers.svelte";
    import { Button } from "bits-ui";
    import { toast } from "svelte-sonner";
    import { twMerge } from "tailwind-merge";

    let { item } = $props();

    // let selected = $state(false);
    // const selectPackage = () => {
    //     bookingFormData.cart.packages.push(item.id);
    //     bookingFormData.cart.packages = [ ...new Set(bookingFormData.cart.packages) ];
    //     let services = item.services.map(s => s.service);
    // };

    let selected = $derived(bookingFormData.cart.vouchers.indexOf(item.id) >= 0 || false);
    const addToCart = () => {
        selected = !selected;

        let selectedItem = vouchersData.find(d => d.id === item.id);
        if (selected === true) {
            bookingFormData.cart.vouchers.push(item.id);
            bookingFormData.cart.vouchers = [ ...new Set(bookingFormData.cart.vouchers) ];

            toast(`Voucher "${selectedItem.name}" has been added to your cart.`);
            return;
        }

        let index = bookingFormData.cart.vouchers.findIndex(d => d === item.id);
        if (index < 0) return;

        bookingFormData.cart.vouchers.splice(index, 1);
        bookingFormData.cart.vouchers = [ ...new Set(bookingFormData.cart.vouchers) ];
        toast(`Vouchers "${selectedItem.name}" has been removed from your cart.`);
    };
</script>

<!-- TODO Show dialog on click -->
<!-- Option #1: For me -->
<!-- Option #2: Gift for someone -->

<Button.Root
    class={twMerge(
        "flex flex-col justify-between w-full gap-7 border border-l-8 rounded-sm pt-3 px-4 pb-4 cursor-pointer hover:bg-muted/5 transition-all duration-150",
        selected === true ? 'bg-teal-light/30 border-teal/80 border-l-teal/80' : 'border-muted/10 border-l-muted/10'
    )}
    onclick={addToCart}
>
    <div class="grid">
        <div class="flex items-center justify-between">
            <span class="text-base font-medium">{item.name}</span>
            <!-- <span class="title font-serif text-lg font-semibold">{item.name}</span> -->
            {#if selected}
                <i class="ph-bold ph-check text-xl"></i>
            {:else}
                <span class="text-xs rounded-full px-4 py-1 bg-teal-light">Add</span>
            {/if}
            <!-- <div class="flex items-center gap-2">
                <span class="text-lg font-semibold">${(new Intl.NumberFormat('en-NZ')).format(item.price)}</span>
            </div> -->
        </div>
    </div>

    <!-- <div class="flex items-center justify-between">
        <span class="text-base font-medium">{item.name}</span> -->
        <!-- <span class="title font-serif text-lg font-semibold">{item.name}</span> -->
        <!-- <i class="ph-bold ph-{selected ? 'check' : 'plus'} text-xl"></i> -->
        <!-- <div class="flex items-center gap-2">
            <span class="text-lg font-semibold">${(new Intl.NumberFormat('en-NZ')).format(item.price)}</span>
        </div> -->
    <!-- </div> -->
    <span class="text-4xl font-semibold">${(new Intl.NumberFormat('en-NZ')).format(item.price)}</span>
    <p class="text-left text-sm text-foreground/50">{item.description}</p>
    <!-- <div>
        <p class="text-left text-sm text-foreground/50">{item.description}</p> -->
        <!-- <span class="font-serif italic">Includes:</span> -->
        <!-- <ul> -->
            <!-- {#each item.services as service} -->
                <!-- {#if bookingFormData.cart.items.indexOf(service.id) >= 0} -->
                <!-- <li class={twMerge(
                    "text-left text-xs font-light px-3 py-1 flex items-center justify-between rounded-full border border-transparent",
                    bookingFormData.cart.services.indexOf(service.id) >= 0 ? 'font-semibold border-sand-dark' : ''
                )}>
                    <div class="">
                        <i class="ph ph-check pr-2"></i>
                        <span>{service.name}</span>
                    </div>
                    <div>
                        <i class="ph ph-x"></i>
                        <span class="text-sm">{service.count}</span>
                    </div>
                </li> -->
                <!-- {/if} -->
            <!-- {/each} -->
        <!-- </ul> -->
        <!-- <div class="text-xs px-5 py-2 mt-3 bg-sand rounded-full font-medium">Buy this package</div> -->
    <!-- </div> -->
</Button.Root>