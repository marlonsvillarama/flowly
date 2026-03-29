<script>
    import FormHeader from "@/components/global/booking-form/form-header.svelte";
    let { children } = $props();
</script>

<div class="">
    <FormHeader />
    <div class="w-[95%] mx-auto max-w-300 h-screen pt-29 grid grid-rows-[auto_1fr] gap-2">
        <!-- <div class="title text-3xl">Booking Form</div>
        <div class="content overflow-y-auto border border-red">
            <div class="h-[1000px]"> -->
            {@render children?.()}
            <!-- </div> -->
        <!-- </div> -->
    </div>
</div>
