<script>
    import { twMerge } from "tailwind-merge";
    import FormHeader from "@/components/global/booking-form/form-header.svelte";
    import FormStepHeader from "@/components/global/booking-form/form-step-header.svelte";
    import BookingSummary from "@/components/global/booking-form/booking-summary.svelte";
    import PackagesDialog from "@/components/global/booking-form/dialogs/packages-dialog.svelte";
    import { Dialog } from "bits-ui";
    import { Toaster, toast } from "svelte-sonner";
    import { bookingFormData } from "@/store/booking-form.svelte";
    import { packagesData } from "@/store/packages.svelte";

    let { children } = $props();

    let hasPackages = $derived.by(() => {
        let items = bookingFormData.cart.services;
        if (items.length <= 0) return false;

        let isTrue = false;
        items.forEach(item => {
            if (packagesData.filter(p =>
                p.services.filter(s => s.service === item).length >= 0).length > 0
            ) {
                isTrue = true;
            }
        });

        return isTrue;
    });
</script>

<div class="grid grid-rows-[auto_auto_1fr] h-screen gap-3">
    <FormHeader />

    <FormStepHeader />

    <div class="w-[95%] mx-auto max-w-300 border-0 border-green overflow-y-auto pb-12">
        <div class="grid grid-cols-[2fr_1fr] gap-4 w-full h-full">
            <div class="content overflow-y-auto border-gray pr-8">
                {@render children?.()}
            </div>
            <div class="flex">
                <BookingSummary />
            </div>
        </div>
    </div>
</div>

<Toaster position="bottom-right" expand={true} closeButton
    class="[--width:40rem]!"
/>
