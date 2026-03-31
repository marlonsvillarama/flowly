<script>
    import { bookingFormData } from "@/store/booking-form.svelte";
    import { packagesData } from "@/store/packages.svelte";
    import { servicesData } from "@/store/services.svelte";
    import { Button, Dialog, Separator } from "bits-ui";
    import PackageItem from "../package-item.svelte";
    import PackageDialogItem from "./package-dialog-item.svelte";

    let itemPackages = $derived.by(() => {
        console.log('bookingFormData items', bookingFormData.cart.services);
        console.log('packagesData', packagesData);
        let packages = packagesData.filter(p => p.services.filter(s => bookingFormData.cart.services.indexOf(s.service) >= 0).length > 0)
            .map(p => {
                return {
                    ...p,
                    services: p.services.map(s => {
                        return {
                            ...s,
                            ...servicesData.find(d => d.id === s.service)
                        };
                    })
                }
            });
        // let packages = packagesData[0].services.filter(s => s.service.toString() === '1').length > 0;
        console.log('packages', packages);

        return packages;
    });
</script>

<div class="grid gap-4 grid-rows-[auto_1fr]">
    <div class="grid gap-3">
        <div class="flex items-center justify-between">
            <h1 class="text-xl font-semibold text-foreground">Packages</h1>
            <Dialog.Close class="text-xs py-2 px-4 border rounded-sm">Close</Dialog.Close>
        </div>
        <Separator.Root class="h-0.5 bg-teal-dark" />
    </div>
    <div class="content overflow-scroll">
        <div class="items grid gap-4 mb-4">
        {#each itemPackages as item}
            <PackageItem {item} />
        {/each}
        </div>
    </div>
</div>