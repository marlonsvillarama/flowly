<script>
    import { packagesData } from "@/store/packages.svelte";
    import { servicesData } from "@/store/services.svelte";

    let { item } = $props();
    let itemServices = $derived.by(() => {
        item.services.map(d => {
            return {
                ...d,
                
            };
        });
    });
</script>

<div class="grid gap-3 rounded-sm border-l-8 bg-teal-light/30 border-teal/80">
    <span class="title text-lg font-bold"></span>
</div>