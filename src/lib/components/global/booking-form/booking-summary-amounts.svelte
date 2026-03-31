<script>
    import { Separator } from "bits-ui";
    import { bookingFormData } from "@/store/booking-form.svelte";
    import { servicesData } from "@/store/services.svelte";
    import { packagesData } from "@/store/packages.svelte";
    import { vouchersData } from "@/store/vouchers.svelte";
    import { productsData } from "@/store/products.svelte";

    let subTotal = $derived.by(() => {
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
    let cartTotal = $derived(subTotal + taxTotal);
</script>

<div
    class="grid gap-3 rounded-0 border-l-6 border-transparent py-3 px-6 cursor-pointer",
>
<!-- "grid gap-2 px-4 my-3"         -->
    <div class="flex items-center justify-between border-2 border-transparent">
        <span class="text-sm text-foreground/80">Subtotal</span>
        <span class="text-sm text-foreground/80">${subTotal.toFixed(2)}</span>
    </div>
    <div class="flex items-center justify-between border-2 border-transparent">
        <span class="text-sm text-foreground/80">Tax (GST)</span>
        <span class="text-sm text-foreground/80">${taxTotal.toFixed(2)}</span>
    </div>
    <!-- <Separator.Root class="h-px bg-border" /> -->
    <div class="flex items-center justify-between border-2 border-transparent">
        <span class="text-sm text-foreground/80 uppercase">Total</span>
        <span class="text-lg text-foreground/80 font-semibold">${cartTotal.toFixed(2)}</span>
    </div>
</div>
