<script>
    import { Button, Popover } from "bits-ui";
    import Stepper from "./stepper.svelte";
    import { bookingFormData } from "@/store/booking-form.svelte";
</script>

<!-- <div class="wrapper border-b border-teal-light bg-background fixed top-0 left-0 right-0 z-100"> -->
<div class="wrapper border-none border-teal-light bg-background mb-2">
    <div class="inner pt-5 pb-1 w-[95%] mx-auto max-w-300 flex items-center justify-between">
        <!-- <div class="grid gap-0"> -->
            <h1 class="text-3xl font-semibold text-teal-dark">{bookingFormData.company.name}</h1>
            <!-- <Stepper /> -->
        <!-- </div> -->
        <!-- <div class="hello grid gap-2 text-right items-end justify-right"> -->
            <span class="text-md">
                {#if bookingFormData.client}
                    Welcome back, <span class="font-semibold">{bookingFormData.client.name.first}</span>!
                {:else}
                    Hello, there!
                {/if}
            </span>
            <!-- <div class="flex items-center gap-4">
                <Button.Root class="cursor-pointer px-4 py-1 border-2 border-teal-light rounded-4xl text-sm font-medium hover:bg-teal-light/50 transition-all duration-150">
                    Add products
                </Button.Root>
                <Popover.Root>
                    <Popover.Trigger class="flex items-center gap-2 cursor-pointer py-1 px-4 rounded-4xl border-2 border-teal-light hover:bg-teal-light/50 transition-all duration-150">
                        <i class="ph ph-shopping-cart-simple text-lg"></i>
                        <span class="text-sm font-semibold">{bookingFormData.cart.items.length}</span>
                    </Popover.Trigger>
                </Popover.Root>
            </div> -->
        <!-- </div> -->
    </div>
    <div class="w-[95%] mx-auto max-w-300 flex items-center justify-between">
        <div class="flex items-center gap-3">
            <span class="text-sm text-foreground/60 italic">Shop 105, The Plaza, Palmerston North</span>
            <Button.Root class="text-blue-700 underline cursor-pointer">Change location</Button.Root>
        </div>
        <div class="flex items-center gap-4">
            <span></span>
        </div>
    </div>
</div>
