<script>
    import { twMerge } from "tailwind-merge";
    import { Button, Separator, Tabs } from "bits-ui";
    import { bookingFormData } from "@/store/booking-form.svelte";

    // let steps = [
    //     { id: 'services', label: 'Services' },
    //     { id: 'time', label: 'Calendar' },
    //     { id: 'confirm', label: 'Confirm' }
    // ];

    console.log('bookingFormData.activeStep', bookingFormData.activeStep);

    const gotoStep = (id) => {
        bookingFormData.activeStep = bookingFormData.steps.map(d => d.id).indexOf(id) || 0;
    };
</script>

<div class="flex items-center gap-5">
    {#each bookingFormData.steps as step, i}
        <Button.Root
            class={twMerge(
                "text-sm cursor-pointer border-b-3 border-transparent",
                i > bookingFormData.activeStep ? 'text-muted/60' :
                    (i === bookingFormData.activeStep ? 'text-foreground/80 border-teal' : 'text-foreground/60')
            )}
            onclick={() => gotoStep(step.id)}
        >
            <div class="flex gap-2 items-center">
                {step.label}
            </div>
        </Button.Root>

        {#if i < bookingFormData.steps.length - 1}
            <i class="ph-bold ph-caret-right border-b-4 border-transparent"></i>
        {/if}
    {/each}
</div>