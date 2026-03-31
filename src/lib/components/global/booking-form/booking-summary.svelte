<script>
    import { twMerge } from "tailwind-merge";
    import { AlertDialog, Button, Dialog, Separator } from "bits-ui";
    // import BookingCalendar from "./booking-calendar.svelte";
    import BookingSummaryAmounts from "./booking-summary-amounts.svelte";
    import BookingSummaryDatetime from "./booking-summary-datetime.svelte";
    import BookingSummaryPackages from "./booking-summary-packages.svelte";
    import BookingSummaryProducts from "./booking-summary-products.svelte";
    import BookingSummaryServices from "./booking-summary-services.svelte";
    import BookingSummaryVouchers from "./booking-summary-vouchers.svelte";
    import DialogReviewCart from "./dialogs/dialog-review-cart.svelte";
    // import { bookingFormData } from "@/store/booking-form.svelte";
    // import { servicesData } from "@/store/services.svelte";
    // import { packagesData } from "@/store/packages.svelte";
    // import { vouchersData } from "@/store/vouchers.svelte";
    // import { productsData } from "@/store/products.svelte";

    /* let subTotal = $derived.by(() => {
        let total = 0;

        let services = bookingFormData.cart.services.map(d => servicesData.find(s => s.id === d) || {});
        console.log('services', services);
        total += services.reduce((sum, next) => sum + (next.price || 0), 0);

        let packages = bookingFormData.cart.packages.map(d => packagesData.find(s => s.id === d) || {});
        console.log('packages', packages);
        total += packages.reduce((sum, next) => sum + (next.price || 0), 0);

        let vouchers = bookingFormData.cart.vouchers.map(d => vouchersData.find(s => s.id === d) || {});
        console.log('vouchers', vouchers);
        total += vouchers.reduce((sum, next) => sum + (next.price || 0), 0);

        let products = bookingFormData.cart.products.map(d => productsData.find(s => s.id === d) || {});
        console.log('products', products);
        total += products.reduce((sum, next) => sum + (next.price || 0), 0);

        console.log('total', total);
        return total;
    });

    let taxTotal = $derived(subTotal * 0.15);
    let cartTotal = $derived(subTotal + taxTotal); */

    const resetCart = () => {
        if (confirm("Are you sure you want to do this???") === false) return;

        bookingFormData.cart.services = [];
        bookingFormData.cart.packages = [];
        bookingFormData.cart.vouchers = [];
        bookingFormData.cart.products = [];
    };
</script>

<div class="w-full flex flex-col items-start gap-3">
    <h2 class="text-lg font-semibold">Your Cart</h2>

    <div class="grid py-2 w-full border rounded-lg">
        <BookingSummaryServices />
        <BookingSummaryPackages />
        <BookingSummaryVouchers />
        <BookingSummaryProducts />

        <Separator.Root class="h-px bg-border border-l-6 border-transparent px-6 my-2" />

        <BookingSummaryAmounts />

        <div class="flex items-center justify-between border-l-6 border-transparent px-6 pb-4">
<!--  -->
            <!-- <Button.Root
                class="grid items-center py-2 px-10 bg-teal/90 rounded-full cursor-pointer hover:bg-storm-teal duration-150 ease-in-out font-medium text-xs text-background"
                onclick={() => alert('done!')}
            >
                Continue
            </Button.Root> -->
            <Button.Root
                class="grid items-center py-2 px-4 rounded-full cursor-pointer duration-150 ease-in-out font-normal text-xs bg-border/20 hover:bg-border/50 text-foreground/80"
                onclick={resetCart}
            >
                Reset Cart
            </Button.Root>
            <DialogReviewCart />
        </div>
    </div>
</div>