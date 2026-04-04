<script>
    import { Button, Separator } from "bits-ui";
    import { bookingFormData, packagesForReview } from "@/store/booking-form.svelte";
    import { packagesData } from "@/store/packages.svelte";
    import { servicesData } from "@/store/services.svelte";
    // import { onMount } from "svelte";

    bookingFormData.cart.services = [ 1, 6 ];
    let services = $derived(bookingFormData.cart.services.map(id => servicesData.find(s => s.id === id)));
    console.log('services', services);

    bookingFormData.cart.packages = [ 1, 2 ];
    let packages = $derived(bookingFormData.cart.packages.map(id => packagesData.find(p => p.id === id)));
    console.log('packages', packages);
    
    // let items = $derived(bookingFormData.cart.packages);
    // onMount(() => {
    //     let packages = packagesForReview();
    // });

    const getServicePackages = () => {
        let list = bookingFormData.cart.services;
        let output = packages.filter(p => p.services.filter(s => list.includes(s.service)).length > 0)
            .map(p => {
                return {
                    ...p,
                    services: p.services.map(s => {
                        return {
                            ...s,
                            ...servicesData.find(svc => s.service === svc.id)
                        }
                    })
                };
            })
        console.log(`getServicePackages; output`, output);
        return output;
    };

    const packageMatchingServices = (pkg) => {
        let output = [];
        bookingFormData.cart.services.forEach(svc => {
            let addService = pkg.services.find(s => s.service === svc);
            if (addService) {
                output.push(addService);
            }
        });
        // return pkg.services.filter(p => p.services.map(s => s.id).includes(bookingFormData.cart.services));
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
    <!-- {#each services as service, serviceIndex}
        {#if hasMatchingPackages(service.id)} -->
            <!-- <div class="grid grid-cols-[2fr_3fr] gap-8 hover:bg-sand/20 px-2 py-2 rounded-sm transition-all duration-150">
                <span class="text-base font-medium text-foreground">{service.name}</span>
            </div>
            {#if serviceIndex < services.length - 1}
                <Separator.Root class="h-px bg-muted/30 w-full" />
            {/if} -->
        <!-- {/if}
    {/each} -->
    <div class="grid gap-4">
        {#each getServicePackages() as pkg, pkgIndex}
            <div class="border border-l-8 rounded-sm border-border/50 border-l-teal-dark py-3 px-4 bg-background grid gap-6">
                <div class="grid grid-cols-[2fr_3fr_auto]">
                    <div class="flex flex-col gap-1">
                        <span class="text-base font-semibold">{pkg.name}</span>
                        <div class="grid gap-1.5">
                            {#each pkg.services as service}
                            <div class="grid grid-cols-[2rem_auto_1fr] items-center gap-1 text-xs text-foreground/80">
                                <span class="text-right">{service.count}</span>
                                <i class="ph ph-x"></i>
                                <span>{service.name}</span>
                            </div>
                            {/each}
                        </div>
                    </div>

                    <div class="flex flex-col gap-1.5 items-start rounded-sm bg-border/30 px-3 py-1.5">
                        <span class="font-semibold">This package can replace the following services you booked:</span>
                        <div class="grid gap-1.5">
                            {#each packageMatchingServices(pkg) as service}
                            <!-- <div class="grid grid-cols-[2rem_1fr] items-center gap-1 text-xs text-foreground/80"> -->
                                <!-- <span class="text-right">{service.count}</span> -->
                                <!-- <i class="ph ph-x text-right"></i> -->
                                <span class="ml-6 text-xs text-foreground/80">{service.name}</span>
                            <!-- </div> -->
                            {/each}
                        </div>
                        <span class="mt-6">Total savings: $120</span>
                    </div>
                </div>
                <div class="flex items-center justify-end gap-2 text-right">
                    <Button.Root onclick={() => usePackage(pkg.id)}
                        class="flex text-xs font-medium rounded-full px-4 py-2 bg-teal-light hover:bg-teal/30 cursor-pointer transition-all duration-150 border border-transparent"
                    >Buy this package and use today</Button.Root>
                    <Button.Root onclick={() => usePackage(pkg.id)}
                        class="flex text-xs rounded-full px-4 py-2 bg-border/20 hover:bg-border/50 cursor-pointer transition-all duration-150 border"
                    >Add to cart and redeem later</Button.Root>
                </div>
                
            </div>
        {/each}
    </div>
</div>