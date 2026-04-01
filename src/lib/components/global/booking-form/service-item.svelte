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
        "grid gap-1 border border-l-8 rounded-sm pt-3 px-4 pb-4 hover:bg-muted/5 transition-all duration-150",
        selected === true ? 'bg-teal-light/30 border-teal/80 border-l-teal/80' : 'border-muted/10 border-l-muted/10'
    )}
>
    <div class="flex items-center justify-between">
        <span class="text-base font-medium">{service.name}</span>
        <div class="flex items-center gap-4">
            <span class="text-base font-semibold text-foreground">${priceText}</span>
            {#if selected}
                <!-- <i class="ph-bold ph-check text-xl"></i> -->
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
    <div class="grid gap-1 text-left">
        <div class="flex gap-2 items-center">
            <i class="ph ph-hourglass"></i>
            <span class="font-normal text-foreground/70">Around {service.duration} minutes</span>
        </div>
    </div>

    <!-- {#if selected}
        <div class="grid grid-cols-2 gap-2">
                <div class="flex gap-2 items-center">
                    <i class="ph ph-calendar-blank"></i>
                    <span class="font-normal text-foreground/70">3 April 2026</span>
                </div>
                <div class="flex gap-2 items-center">
                    <i class="ph ph-clock-afternoon"></i>
                    <span class="font-normal text-foreground/70">2:00 PM</span>
                </div>
        </div>
    {/if} -->
</div>

<!-- <AlertDialog.Root bind:open={isDialogOpen}>
    <AlertDialog.Portal>
        <AlertDialog.Overlay
            class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80"
        />
        <AlertDialog.Content
            class={twMerge(
                "bg-background shadow-popover outline-hidden border py-6 px-7 rounded-lg grid gap-3",
                "fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%]",
                "w-full max-w-[calc(100%-2rem)] sm:max-w-200 md:w-full",
                "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
                "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
            )}
        >
            <span class="text-lg font-semibold">{service.name}</span>
            <BookingCalendar />

            <div class="flex items-center justify-between mt-4">
                <AlertDialog.Action
                    class="grid items-center py-2 px-15 bg-teal/90 rounded-full cursor-pointer hover:bg-storm-teal duration-150 ease-in-out font-medium text-xs text-background"
                    onclick={addToCart}
                >Add to cart</AlertDialog.Action>
                <AlertDialog.Cancel
                    class="rounded-full cursor-pointer text-xs text-foreground/80 px-5 py-2 hover:bg-muted/10 transition-all duration-150"
                >Cancel</AlertDialog.Cancel>
            </div>
        </AlertDialog.Content>
    </AlertDialog.Portal>
</AlertDialog.Root> -->
