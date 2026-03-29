<script>
    import { Popover } from "bits-ui";
    import Stepper from "./stepper.svelte";
    import { bookingFormData } from "@/store/booking-form.svelte";
</script>

<div class="wrapper border-b border-teal-light bg-background fixed top-0 left-0 right-0 z-100">
    <div class="inner pt-5 pb-4 w-[95%] mx-auto max-w-300 flex items-start justify-between">
        <div class="grid gap-2">
            <h1 class="text-4xl font-semibold text-teal-dark">{bookingFormData.company.name}</h1>
            <Stepper />
        </div>
        <div class="hello flex flex-col gap-1 items-end justify-right">
            <span class="text-lg">
                {#if bookingFormData.client}
                    Welcome back, <span class="font-semibold">{bookingFormData.client.name.first}</span>!
                {:else}
                    Hello, there!
                {/if}
            </span>
            <Popover.Root>
                <Popover.Trigger class="flex items-center gap-2 cursor-pointer py-1 px-4 rounded-4xl bg-teal hover:bg-teal-dark text-background transition-all duration-150">
                    <!-- <span>View your cart</span> -->
                    <!-- <div class="flex items-center gap-1 py-1 px-4 rounded-4xl bg-teal hover:bg-teal-dark text-background transition-all duration-150"> -->
                        <i class="ph ph-shopping-cart-simple text-xl"></i>
                        <span class="text-lg font-medium">{bookingFormData.cart.items.length}</span>
                    <!-- </div> -->
                </Popover.Trigger>
            </Popover.Root>
        </div>
    </div>
</div>