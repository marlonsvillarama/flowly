<script>
    import { bookingFormData } from "@/store/booking-form.svelte";
    import { packagesData } from "@/store/packages.svelte";
    import { servicesData } from "@/store/services.svelte";
    import { Button } from "bits-ui";
    import { twMerge } from "tailwind-merge";

    let { item } = $props();

    const selectPackage = () => {
        bookingFormData.cart.packages.push(item.id);
        bookingFormData.cart.packages = [ ...new Set(bookingFormData.cart.packages) ];

        item.services.map(s => s.service).forEach(s => {
            let index = bookingFormData.cart.services.indexOf(s);
            bookingFormData.cart.services.splice(index, 1);
            bookingFormData.cart.services = bookingFormData.cart.services;
        });
    };
</script>

<Button.Root class="grid gap-2 rounded-sm border-2 border-sand/50 border-l-8 hover:bg-sand/10 hover:border-sand p-4 py-3 cursor-pointer"
    onclick={selectPackage}
>
    <div class="flex items-center justify-between">
        <span class="title font-serif text-lg font-semibold">{item.name}</span>
        <div class="flex items-center gap-2">
            <span class="text-lg font-semibold">${(new Intl.NumberFormat('en-NZ')).format(item.price)}</span>
        </div>
    </div>
    <div class="pl-4">
        <ul>
            {#each item.services as service}
                <li class={twMerge(
                    "text-left text-xs font-light px-3 py-1 flex items-center justify-between rounded-full border border-transparent",
                    bookingFormData.cart.services.indexOf(service.id) >= 0 ? 'font-semibold border-sand-dark' : ''
                )}>
                    <div class="">
                        <i class="ph ph-check pr-2"></i>
                        <span>{service.name}</span>
                    </div>
                    <div>
                        <i class="ph ph-x"></i>
                        <span class="text-sm">{service.count}</span>
                    </div>
                </li>
            {/each}
        </ul>
        <div class="text-xs px-5 py-2 mt-3 bg-sand rounded-full font-medium">Buy this package</div>
    </div>
</Button.Root>