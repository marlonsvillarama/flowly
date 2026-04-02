<script>
    import { twMerge } from "tailwind-merge";
    import { AlertDialog, Button, Separator } from "bits-ui";
    import { toast } from "svelte-sonner";
    import BookingCalendar from "./booking-calendar.svelte";
    import { bookingFormData } from "@/store/booking-form.svelte";
    import { packagesData } from "@/store/packages.svelte";
    import { servicesData } from "@/store/services.svelte";
    
    let {
        category,
        service
    } = $props();

    let priceText = $derived.by(() => {
        return (new Intl.NumberFormat('en-NZ')).format(service.price);
    });

    // let isDialogOpen = $state(false);
    let selected = $derived(bookingFormData.cart.services.indexOf(service.id) >= 0 || false);
    const triggerClick = () => {
        if (selected === true) {
            removeFromCart();
            return;
        }

        addToCart();
        // isDialogOpen = true;
    };

    const addToCart = () => {
        let selectedItem = servicesData.find(s => s.id === service.id);

        bookingFormData.cart.services.push(service.id);
        bookingFormData.cart.services = [ ...new Set(bookingFormData.cart.services) ];

        // toast(`Item "${selectedItem.name}" has been added to your cart.`);
        // isDialogOpen = false;
        selected = true;
        checkForPackages();
    };

    const removeFromCart = () => {
        selected = false;

        let selectedItem = servicesData.find(s => s.id === service.id);
        let serviceIndex = bookingFormData.cart.services.findIndex(d => d === service.id);
        if (serviceIndex < 0) return;

        bookingFormData.cart.services.splice(serviceIndex, 1);
        bookingFormData.cart.services = [ ...new Set(bookingFormData.cart.services) ];
        // toast(`Item "${selectedItem.name}" has been removed from your cart.`);
        checkForPackages();
    };

    const checkForPackages = () => {
        let items = bookingFormData.cart.services;
        if (items.length <= 0) {
            toast.dismiss();
            bookingFormData.activeToasts = [];
            return;
        }

        if (
            packagesData.filter(p => 
                p.services.filter(s => s.service === service.id).length >= 0
            ).length <= 0
        ) {
            toast.dismiss();
            bookingFormData.activeToasts = [];
            return;
        }

        if (bookingFormData.activeToasts.indexOf('hasPackages') >= 0) return;

        let hasPackagesToast = bookingFormData.toasts.hasPackages;
        bookingFormData.activeToasts.push('hasPackages');
        toast(hasPackagesToast.text, {
            duration: Number.POSITIVE_INFINITY,
            action: {
                label: hasPackagesToast.action,
                onClick: () => bookingFormData.activeStep = 'packages'
            }
        });
    };
</script>

<div
    class={twMerge(
        "grid gap-1 border border-l-8 rounded-sm pt-3 px-5 pb-4 hover:bg-muted/5 transition-all duration-150",
        selected === true ? 'bg-teal-light/30 border-teal/80 border-l-teal/80' : 'border-muted/10 border-l-muted/10'
    )}
>
    <div class="flex items-center justify-between">
        <span class="text-base font-medium">{service.name}</span>
        <span class="text-base font-semibold text-foreground">${priceText}</span>
    </div>
    <!-- <div class="grid gap-1 text-left"> -->
    <div class="flex items-center justify-between">
        <div class="flex gap-2 items-center">
            <i class="ph ph-hourglass"></i>
            <span class="font-normal text-foreground/70">Around {service.duration} minutes</span>
        </div>
        <div class="flex items-center gap-4">
            {#if selected}
                <Button.Root onclick={triggerClick}
                    class="text-xs rounded-full px-4 py-1 bg-red/20 cursor-pointer"
                >Remove</Button.Root>
            {:else}
                <Button.Root onclick={triggerClick}
                    class="text-xs rounded-full px-4 py-1 bg-teal-light cursor-pointer"
                >Add</Button.Root>
            {/if}
        </div>
    </div>
</div>
