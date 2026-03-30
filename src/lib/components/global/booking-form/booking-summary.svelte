<script>
    import { Button, Separator } from "bits-ui";
    import BookingSummaryDatetime from "./booking-summary-datetime.svelte";
    import BookingSummaryProducts from "./booking-summary-products.svelte";
    import BookingSummaryServices from "./booking-summary-services.svelte";
    import { bookingFormData } from "@/store/booking-form.svelte";
    import { categoriesData, servicesData } from "@/store/services.svelte";


    let selectedDate = $derived.by(() => {});
</script>

<div class="w-full flex flex-col items-start gap-3">
    <h2 class="text-lg font-semibold">Booking Summary</h2>

    <div class="grid gap-4 w-full">
        <BookingSummaryServices />

        <BookingSummaryDatetime />

        <BookingSummaryProducts />

        <!-- <div class="grid rounded-sm border border-teal-dark py-3 px-4">
            <div class="flex items-center justify-between">
                {#if bookingFormData.cart.items.length > 0}
                    <span class="font-bold text-foreground/80">Appointment Date/Time</span>
                {:else}
                    <span class="font-bold text-foreground/80">Appointment Date/Time</span>
                {/if}
                <Button.Root
                    class="text-xs font-medium text-background bg-teal-dark/80 hover:teal-dark transition-all duration-150 cursor-pointer rounded-3xl px-4 py-1"
                    onclick={() => bookingFormData.activeStep = 0}
                >
                    Update
                </Button.Root>
            </div>
        </div> -->

        {#if (bookingFormData.cart.items.length > 0 && bookingFormData.date && bookingFormData.timeStart) || bookingFormData.cart.products.length > 0}
        <Button.Root
            class="grid items-center py-3 px-15 bg-teal/90 rounded-4xl cursor-pointer hover:bg-storm-teal duration-150 ease-in-out font-semibold text-base text-background"
            onclick={() => alert('done!')}
        >
            Submit Form
        </Button.Root>
        {/if}
    </div>
</div>