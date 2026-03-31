<script>
    import { AlertDialog, Button, Separator } from "bits-ui";
    import BookingCalendar from "./booking-calendar.svelte";
    import { bookingFormData } from "@/store/booking-form.svelte";
    import { categoriesData, servicesData } from "@/store/services.svelte";
    import { twMerge } from "tailwind-merge";

    let cartItems = $derived(servicesData.filter(d => bookingFormData.cart.services.indexOf(d.id) >= 0));
    let cartTotal = $derived(cartItems.reduce((sum, next) => sum + next.price, 0).toFixed(2));
</script>

<div
    class={twMerge(
        "grid gap-1 rounded-0 border-0 border-l-6 border-transparent py-2 px-6",
        bookingFormData.activeStep === 'services' ? 'border-teal/80 bg-teal-light/20' : ''
    )}
>
    <!-- onclick={() => bookingFormData.activeStep = 'services'} -->
        <!-- bookingFormData.activeStep === 'services' ? 'border-teal/80' : 'border-border/40 hover:border-teal-light/80' -->
    <div class="flex items-center justify-between">
        <span class="font-normal text-foreground/80">
            You selected {bookingFormData.cart.services.length} service{bookingFormData.cart.services.length === 1 ? '' : 's'}
        </span>
        <span class="text-foreground/80 font-bold py-0.75">${cartTotal}</span>
        <!-- <span class="text-muted font-normal text-left">Subtotal: </span> -->
    </div>

    {#if bookingFormData.cart.services.length > 0}
    <div class="flex items-center gap-1 justify-end">
        <i class="ph-bold ph-info text-xl" style="color:var(--color-amber);"></i>
<AlertDialog.Root>
    <AlertDialog.Trigger class="cursor-pointer underline font-medium">Set appointment date & time</AlertDialog.Trigger>
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
            <span class="text-lg font-semibold">Appointment Date & Time</span>
            <BookingCalendar />

            <div class="flex items-center justify-between mt-4">
                <AlertDialog.Action
                    class="grid items-center py-2 px-15 bg-teal/90 rounded-full cursor-pointer hover:bg-storm-teal duration-150 ease-in-out font-medium text-xs text-background"
                >Update Appointment</AlertDialog.Action>
                <AlertDialog.Cancel
                    class="rounded-full cursor-pointer text-xs text-foreground/80 px-5 py-2 hover:bg-muted/10 transition-all duration-150"
                >Cancel</AlertDialog.Cancel>
            </div>
        </AlertDialog.Content>
    </AlertDialog.Portal>
</AlertDialog.Root>
        <!-- <span class="underline font-medium">Set appointment date & time</span> -->
    </div>
    {/if}
    <!-- <span class="text-xs font-medium text-background bg-teal-dark/80 hover:teal-dark transition-all duration-150 rounded-3xl px-4 py-1">
        Select
    </span> -->
    <!-- {#if cartTotal > 0}
        <span class="text-muted font-normal text-left">Subtotal: <span class="text-foreground/80 font-bold py-0.75">${cartTotal}</span></span>
    {/if} -->
    <!-- {#if cartItems.length > 0}
        <Separator.Root class="h-px bg-border" />

        {#if bookingFormData.date}
            <span class="italic">to do...</span>
        {:else}
            <span class="italic">No date/time set</span>
        {/if}
    {/if} -->
</div>
