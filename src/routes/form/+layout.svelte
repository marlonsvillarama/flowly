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

<div class="grid grid-rows-[auto_1fr] h-screen gap-2">
    <div class="grid gap-3 border-0 border-red">
        <FormHeader />
        <FormStepHeader />
    
        <!-- {#if hasPackages}
        <div class="flex items-center justify-between w-[95%] mx-auto max-w-300 border-l-8 border-sand-dark bg-sand/50 rounded-sm px-4 py-3 mb-2">
            <div class="flex items-center gap-1">
                <i class="ph-bold ph-info text-lg"></i>
                <span class="font-normal">One or more services you selected come with a package. Care to take a look?</span>
            </div>
            <Dialog.Root>
                <Dialog.Trigger
                    class="text-background py-2 px-6 bg-teal-dark/90 hover:bg-teal-dark rounded-full cursor-pointer"
                >
                    See packages
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay
                        class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-muted-foreground/50"
                    />
                    <Dialog.Content class={twMerge(
                        "bg-background shadow-popover outline-hidden border py-6 px-7 rounded-lg grid gap-8 overflow-y-scroll",
                        "fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%]",
                        "w-full max-w-[calc(100%-2rem)] sm:max-w-150 md:w-full max-h-[80%]",
                        "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
                        "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
                    )}
                    >
                        <PackagesDialog />
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
        {/if} -->
    </div>

    <div class="w-[95%] mb-8 mx-auto max-w-300 border-0 border-green overflow-y-auto">
        <div class="grid grid-cols-[2fr_1fr] gap-6 w-full h-full">
            <div class="content overflow-y-auto border-gray pr-8">
                {@render children?.()}
            </div>
            <div class="flex">
                <BookingSummary />
            </div>
        </div>
    </div>
</div>

<Toaster position="top-center" closeButton duration={4000} />
