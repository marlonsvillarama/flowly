<script>
    // import { Button } from "bits-ui";
    // import ServiceSelector from "@/components/global/booking-form/service-selector.svelte";
    import BookingCalendar from "@/components/global/booking-form/booking-calendar.svelte";
    import ProductList from "@/components/global/booking-form/product-list.svelte";
    import ServiceList from "@/components/global/booking-form/service-list.svelte";
    import { bookingFormData } from "@/store/booking-form.svelte";

    // let {
    //     children
    // } = $props();
</script>

{#if bookingFormData.activeStep === 0}
    <ServiceList />
{:else if bookingFormData.activeStep === 1}
    <BookingCalendar />
{:else if bookingFormData.activeStep === 2}
    <ProductList />
{:else if bookingFormData.activeStep === 3}
    step 3
{/if}
