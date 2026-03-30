<script>
    import { Button } from "bits-ui";
    import Stepper from "./stepper.svelte";
    import { bookingFormData } from "@/store/booking-form.svelte";

    const moveForward = (inc = true) => {
        bookingFormData.activeStep = bookingFormData.activeStep + (inc === true ? 1 : -1);
    }
</script>

<div class="inner mb-8 w-[95%] mx-auto max-w-300 flex items-center justify-between">
    <Stepper />
    <div class="flex items-center gap-2">
        {#if bookingFormData.activeStep > 0}
            <Button.Root
                class="flex gap-2 items-center py-2 px-5 rounded-4xl cursor-pointer hover:bg-teal-light/50 duration-150 ease-in-out font-medium text-foreground/80 text-sm"
                onclick={() => moveForward(false)}
            >
                <i class="ph-bold ph-arrow-left text-xl"></i>
                <span>Back</span>
            </Button.Root>
        {/if}
    <Button.Root
        class="flex gap-2 items-center py-2 px-5 bg-teal/90 rounded-4xl cursor-pointer hover:bg-storm-teal duration-150 ease-in-out font-medium text-background text-sm"
        onclick={() => moveForward()}
    >
        
        {#if bookingFormData.activeStep === bookingFormData.steps.length - 1}
            <span>Submit Form</span>
        {:else}
            <span>Continue</span>
            <i class="ph-bold ph-arrow-right text-xl"></i>
        {/if}
    </Button.Root>
    </div>
</div>