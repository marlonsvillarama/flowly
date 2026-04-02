<script>
    import BookingCalendar from "@/components/global/booking-form/booking-calendar.svelte";
    import PackagesList from "@/components/global/booking-form/package-list.svelte";
    import ProductList from "@/components/global/booking-form/product-list.svelte";
    import ServiceList from "@/components/global/booking-form/service-list.svelte";
    import VoucherList from "@/components/global/booking-form/voucher-list.svelte";
    import { bookingFormData } from "@/store/booking-form.svelte";
</script>

{#if bookingFormData.activeStep === 'services'}
    <ServiceList />
{:else if bookingFormData.activeStep === 'packages'}
    <PackagesList />
{:else if bookingFormData.activeStep === 'vouchers'}
    <VoucherList />
{:else if bookingFormData.activeStep === 'products'}
    <ProductList />
{/if}
