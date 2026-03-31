<script>
    import { Button, Separator } from "bits-ui";
    import VoucherItem from "./voucher-item.svelte";
    // import ProductItem from "./product-item.svelte";
    import { bookingFormData } from "@/store/booking-form.svelte";
    import { vouchersData } from "@/store/vouchers.svelte";
    // import { productsData } from "@/store/products.svelte";
</script>

<div class="grid gap-3">
    <span class="text-lg text-foreground/80 font-semibold">Vouchers</span>
    <div class="grid grid-cols-2 gap-6 auto-rows-auto">
    {#each vouchersData as item}
        <VoucherItem {item} />
        <!-- <ProductItem {item} /> -->
        <!-- <span class="text-lg text-foreground/80 font-semibold">{product.name}</span> -->
        <!-- {#each category.services as service, i}
            <ServiceItem {category} {service} />
        {/each} -->
    {/each}
    </div>
</div>
