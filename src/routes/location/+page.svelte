<script>
    import { Button } from "bits-ui";
    let locations = [
        {
            id: 1,
            name: 'Perfect Nails & Beauty',
            address: {
                street: '111 Queen Street',
                suburb: 'Masterton',
                city: 'Masterton',
                region: 'Wellington',
                zip: '5810'
            }
        },
        {
            id: 2,
            name: 'Deluxe Nails & Spa',
            address: {
                street: 'Shop 105, The Plaza',
                city: 'Palmerston North',
                region: 'Manawatu-Whanganui',
                zip: '4410'
            }
        },
    ];
</script>

<div class="w-120 grid gap-4">
    <span class="text-2xl font-semibold text-foreground">Select a location</span>
    
    {#each locations as location}
        <Button.Root onclick={() => window.location = '/form'}
            class="grid gap-1 px-9 py-8 w-full rounded-xl border-2 border-border/50 cursor-pointer hover:border-teal-dark hover:bg-teal-light/50 transition-all duration-150"
        >
            <span class="text-xl font-semibold text-foreground">{location.name}</span>
            <span class="text-sm text-foreground/50">
                {location.address.street}
                {#if location.address.suburb}
                    , {location.address.suburb}
                {/if}
            </span>
            <span class="text-sm text-foreground/50">
                {location.address.city}
                {#if location.address.region}
                    , {location.address.region}
                {/if}
                {location.address.zip}
            </span>
        </Button.Root>
    {/each}
</div>