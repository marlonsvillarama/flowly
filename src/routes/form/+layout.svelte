<script>
    import FormHeader from "@/components/global/booking-form/form-header.svelte";
    import FormStepHeader from "@/components/global/booking-form/form-step-header.svelte";
    import BookingSummary from "@/components/global/booking-form/booking-summary.svelte";

    let { children } = $props();
</script>

<div class="grid grid-rows-[auto_1fr] h-screen">
    <div class="grid gap-6 border-0 border-red">
        <FormHeader />
        <FormStepHeader />
    </div>
    <div class="w-[95%] mb-8 mx-auto max-w-300 border-0 border-green overflow-y-auto">
        <div class="grid grid-cols-[2fr_1fr] gap-6 w-full h-full">
            <div class="content overflow-y-auto border-r border-gray pr-8">
                {@render children?.()}
            </div>
            <div class="flex">
                <BookingSummary />
            </div>
        </div>
    </div>
</div>
