<script>
    import { twMerge } from "tailwind-merge";
    import FormHeader from "@/components/global/booking-form/form-header.svelte";
    import FormStepHeader from "@/components/global/booking-form/form-step-header.svelte";
    import BookingSummary from "@/components/global/booking-form/booking-summary.svelte";
    import PackagesDialog from "@/components/global/booking-form/dialogs/packages-dialog.svelte";
    import RedeemPackagesDialog from "@/components/global/booking-form/dialogs/redeem-packages-dialog.svelte";
    import { Button, Dialog } from "bits-ui";
    import { Toaster, toast } from "svelte-sonner";
    import { bookingFormData } from "@/store/booking-form.svelte";
    import { hasMatchingPackages, hasRedeemablePackages, packagesForReview, packagesForRedemption } from "@/store/booking-form.svelte";
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

    const resetCart = () => {
        if (confirm("Are you sure you want to do this???") === false) return;

        bookingFormData.cart.services = [];
        bookingFormData.cart.packages = [];
        bookingFormData.cart.vouchers = [];
        bookingFormData.cart.products = [];
    };

    let redeemPackages = $derived(hasRedeemablePackages());
</script>

<div class="grid grid-rows-[auto_auto_1fr] h-screen gap-6">
    <FormHeader />

    <div class="flex items-center justify-between w-[95%] mx-auto max-w-300">
        <FormStepHeader />

        <div class="flex items-center gap-4">
            <Button.Root
                class="py-2 px-4 rounded-sm cursor-pointer duration-150 ease-in-out font-normal text-xs bg-border/20 hover:bg-border/50 text-foreground/80"
                onclick={resetCart}
            >
                Reset
            </Button.Root>

            {#if redeemPackages === true}
                <RedeemPackagesDialog />
            {:else}
                <Button.Root
                    onclick={() => {
                        // console.log('hasMatchingPackages', hasMatchingPackages());
                        // console.log('hasRedeemablePackages', hasRedeemablePackages());
                        // console.log('packagesForReview', packagesForReview());
                        // window.location = getHasMatchingPackages() === true && packagesForReview().length > 0 ? './review-pkg' : './client-info'
                        // window.location = './client-info'
                    }}
                    class="flex items-center gap-2 py-2 px-10 bg-teal/90 rounded-sm cursor-pointer hover:bg-storm-teal duration-150 ease-in-out font-medium text-xs text-background"
                >
                    <span>Continue</span>
                    <i class="ph ph-arrow-right text-lg"></i>
                </Button.Root>
            {/if}
        </div>
    </div>

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
