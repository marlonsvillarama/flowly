<script>
    import { Button, Separator } from "bits-ui";
    import PackageItem from "./package-item.svelte";
    import ServiceItem from "@/components/global/booking-form/service-item.svelte";
    import ServiceSelector from "@/components/global/booking-form/service-selector.svelte";
    import { bookingFormData } from "@/store/booking-form.svelte";
    import { categoriesData, servicesData } from "@/store/services.svelte";
    import { packagesData } from "@/store/packages.svelte";

    let availableCategories = $derived.by(() => {
        let list = categoriesData.filter(c => servicesData.filter(s => s.category === c.id).length > 0);
        return list.map(c => {
            return {
                ...c,
                services: servicesData.filter(s => s.category === c.id)
            };
        })
    });

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

<div class="grid gap-3 relative">
    <!-- <span class="text-lg text-foreground/80 font-semibold">Services</span> -->
    <div class="w-full grid gap-12 overflow-y-auto">
        {#each availableCategories as category}
            <div class="grid gap-3">
                <span class="text-xl text-foreground font-semibold">{category.name}</span>
                {#each category.services as service, i}
                    <ServiceItem {category} {service} />
                {/each}
            </div>
        {/each}

        <!-- <div class="grid gap-3">
            <span class="text-xl text-foreground font-semibold">Packages</span>
            {#each packages as item}
                <PackageItem {item} />
            {/each}
        </div> -->
    </div>
</div>
