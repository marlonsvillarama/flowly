<script>
    import { AlertDialog, Button, Separator } from "bits-ui";
    import BookingCalendar from "./booking-calendar.svelte";
    import BookingFormDialog from "./dialogs/booking-form-dialog.svelte";
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
    <div class="flex items-center justify-between">
        <span class="font-normal text-foreground/80">
            {bookingFormData.cart.services.length} <i class="ph ph-x text-xs"></i> service{bookingFormData.cart.services.length === 1 ? '' : 's'}
        </span>
        <!-- You selected -->
        <span class="text-foreground/80 font-bold py-0.75">${cartTotal}</span>
    </div>

    {#if bookingFormData.cart.services.length > 0}
        <BookingFormDialog
            contentClass="sm:max-w-250"
            triggerClass="underline font-medium"
            action={{
                text: 'Confirmz',
                handler: () => alert('dfff')
            }}
        >
            {#snippet header()}
                <span class="text-lg font-semibold">Appointment Date & Timez</span>
            {/snippet}

            {#snippet trigger()}
                <div class="flex items-center gap-1 justify-end">
                    <i class="ph-bold ph-info text-xl" style="color:var(--color-amber);"></i>
                    <span>Set appointment date & time</span>
                </div>
            {/snippet}

            {#snippet content()}
                <BookingCalendar />
            {/snippet}
        </BookingFormDialog>
    {/if}
</div>
