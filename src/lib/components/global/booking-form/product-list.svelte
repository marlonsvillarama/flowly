<script>
    import { Button, Separator } from "bits-ui";
    import ProductItem from "./product-item.svelte";
    import { bookingFormData } from "@/store/booking-form.svelte";
    import { productsData } from "@/store/products.svelte";
</script>

<div class="grid gap-3">
    <span class="text-lg text-foreground/80 font-semibold">Products</span>
    {#each productsData as item}
        <ProductItem {item} />
        <!-- <span class="text-lg text-foreground/80 font-semibold">{product.name}</span> -->
        <!-- {#each category.services as service, i}
            <ServiceItem {category} {service} />
        {/each} -->
    {/each}
</div>
