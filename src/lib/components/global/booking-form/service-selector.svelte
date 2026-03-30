<script>
    import { twMerge } from "tailwind-merge";
    import { Button } from "bits-ui";
    import { bookingFormData } from "@/store/booking-form.svelte";
    import { servicesData } from "@/store/services.svelte";
    import { onMount } from "svelte";

    let activeIndex = $state(0);
    const moveToNext = () => {
        activeIndex = servicesData.indexOf(servicesData.find(s => s.name === bookingFormData.activeCategory));
        console.log(`moveToNext BEFORE = ${activeIndex}`, bookingFormData.activeCategory);
        activeIndex++;
        activeIndex = activeIndex >= servicesData.length ? servicesData.length - 1 : activeIndex;
        bookingFormData.activeCategory = servicesData.find(s => s.id === activeIndex).name;
        console.log(`moveToNext AFTER = ${activeIndex}`, bookingFormData.activeCategory);
    };
    const moveToPrev = () => {
        activeIndex = servicesData.indexOf(servicesData.find(s => s.name === bookingFormData.activeCategory));
        console.log(`moveToPrev BEFORE = ${activeIndex}`, bookingFormData.activeCategory);
        activeIndex--;
        activeIndex = activeIndex < 0 ? 0 : activeIndex;
        bookingFormData.activeCategory = servicesData.find(s => s.id === activeIndex).name;
        console.log(`moveToPrev AFTER = ${activeIndex}`, bookingFormData.activeCategory);
    };

    onMount(() => {
        bookingFormData.activeCategory = bookingFormData.activeCategory || servicesData[0].name;
    });
</script>

<div class="grid grid-cols-[1fr_auto] items-center gap-6">
    <div class="flex items-center gap-3 w-full overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {#each servicesData as category}
        <Button.Root
            class={twMerge(
                "text-sm text-foreground/80 font-semibold px-4 py-2 rounded-sm hover:bg-muted/5 cursor-pointer transition-all duration-150",
                category.name === bookingFormData.activeCategory ? 'bg-teal-light/80 hover:bg-teal-light' : ''
            )}
        >{category.name}</Button.Root>
        {/each}
    </div>
    <div class="flex items-center gap-1">
        <Button.Root
            class="rounded-[50%] w-8 h-8 hover:bg-muted/20 grid items-center text-center cursor-pointer transition-all duration-150"
            onclick={moveToPrev}
        >
            <i class="ph ph-caret-left text-sm font-semibold"></i>
        </Button.Root>
        <Button.Root
            class="rounded-[50%] w-8 h-8 hover:bg-muted/20 grid items-center text-center cursor-pointer transition-all duration-150"
            onclick={moveToNext}
        >
            <i class="ph ph-caret-right text-sm font-semibold"></i>
        </Button.Root>
    </div>
</div>