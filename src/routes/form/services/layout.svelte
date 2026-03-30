<script>
    import { Button } from "bits-ui";
    import ServiceSelector from "@/components/global/booking-form/service-selector.svelte";
    import ShoppingCart from "@/components/global/booking-form/booking-summary.svelte";

    let {
        children
    } = $props();

    const moveToCalendar = () => {};
</script>

{@render children()?.()}
<!-- <div class="grid grid-rows-[auto_1fr] gap-4 border border-red w-full h-full"> -->
<!-- <div class="grid grid-cols-[3fr_2fr] gap-6 w-full h-full">
    <div class="content overflow-y-auto border-r border-gray pr-8">
        <-- <div class="h-250"> --
        {@render children?.()}
        <-- </div> --
    </div> -->
    <!-- <div class="flex items-center justify-between gap-6 text-2xl"> -->
        <!-- <span class="font-normal text-foreground/60">Booking Form</span>
        <i class="ph ph-caret-right text-sm"></i> -->
        <!-- <span class="font-semibold text-foreground/80">Choose Services</span> -->
        <!-- <ServiceSelector /> -->
        <!-- <Button.Root
            class="grid items-center py-2 px-15 bg-teal/90 rounded-4xl cursor-pointer hover:bg-storm-teal duration-150 ease-in-out font-semibold text-background text-sm"
            onclick={moveToCalendar}
        >Continue</Button.Root> -->
    <!-- </div> -->
    <!-- <div class="grid grid-cols-[3fr_2fr] gap-6">
        <div class="content overflow-y-auto h-300"> -->
            <!-- <div class="h-[1000px]"> -->
            <!-- {@render children?.()} -->
            <!-- </div> -->
        <!-- </div> -->
    <!-- <div class="flex">
        <ShoppingCart />
    </div> -->
        <!-- <div class="border border-red">sidebar</div> -->
    <!-- </div> -->
<!-- </div> -->
