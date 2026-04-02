<script>
    import { Button, Separator } from "bits-ui";
    import { bookingFormData, packagesForReview } from "@/store/booking-form.svelte";
    import { packagesData } from "@/store/packages.svelte";
    import { servicesData } from "@/store/services.svelte";
    // import { onMount } from "svelte";

    bookingFormData.cart.services = [ 1, 5, 6 ];
    let services = $derived(bookingFormData.cart.services.map(id => servicesData.find(s => s.id === id)));
    console.log('services', services);

    bookingFormData.cart.packages = [ 1, 2 ];
    let packages = $derived(bookingFormData.cart.packages.map(id => packagesData.find(p => p.id === id)));
    console.log('packages', packages);
    
    // let items = $derived(bookingFormData.cart.packages);
    // onMount(() => {
    //     let packages = packagesForReview();
    // });

    const getServicePackages = (serviceId) => {
        let output = packages.filter(p => p.services.filter(s => s.service === serviceId).length > 0);
        console.log(`getServicePackages serviceId = ${serviceId}; output`, output);
        return output;
    };

    const hasMatchingPackages = (serviceId) => {
        let output = getServicePackages(serviceId).length > 0;
        console.log(`hasMatchingPackages output`, output);
        return output;
    };

    const usePackage = (serviceId, packageId) => {};
</script>

<div class="grid gap-5 w-full px-8">
    {#each services as service, serviceIndex}
        {#if hasMatchingPackages(service.id)}
            <div class="grid grid-cols-[2fr_3fr] gap-8 hover:bg-sand/20 px-2 py-2 rounded-sm transition-all duration-150">
                <span class="text-base font-medium text-foreground">{service.name}</span>
                <div class="grid gap-2">
                    {#each getServicePackages(service.id) as pkg, pkgIndex}
                        <div class="border border-l-8 rounded-sm border-border/50 border-l-teal-dark py-3 px-4 flex items-center justify-between bg-background">
                            <span class="font-semibold">{pkg.name}</span>
                            <Button.Root onclick={() => usePackage(service.id, pkg.id)}
                                class="text-xs rounded-full px-4 py-1 bg-teal-light hover:bg-teal/50 cursor-pointer transition-all duration-150"
                            >Use this package instead</Button.Root>
                        </div>
                    {/each}
                </div>
            </div>
            {#if serviceIndex < services.length - 1}
                <Separator.Root class="h-px bg-muted/30 w-full" />
            {/if}
        {/if}
    {/each}
</div>