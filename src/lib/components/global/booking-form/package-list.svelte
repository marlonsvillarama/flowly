<script>
    import { Button, Separator } from "bits-ui";
    import ProductItem from "./product-item.svelte";
    import PackageItem from "./package-item.svelte";
    import { bookingFormData } from "@/store/booking-form.svelte";
    import { packagesData } from "@/store/packages.svelte";
    import { servicesData } from "@/store/services.svelte";

    let packages = $derived.by(() => {
        return packagesData.map(p => {
            return {
                ...p,
                services: p.services.map(svc => {
                    return {
                        ...svc,
                        ...servicesData.find(s => s.id === svc.service)
                    };
                })
            }
        });
    });
</script>

<div class="grid gap-3">
    <span class="text-xl text-foreground font-semibold">Packages</span>
    {#each packages as item}
        <PackageItem {item} />
    {/each}
</div>
