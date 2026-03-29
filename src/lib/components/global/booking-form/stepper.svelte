<script>
    import { twMerge } from "tailwind-merge";
    import { Button, Separator, Tabs } from "bits-ui";
    import { bookingFormData } from "@/store/booking-form.svelte";

    let steps = [
        { id: 'services', label: 'Services' },
        { id: 'time', label: 'Calendar' },
        { id: 'confirm', label: 'Confirm' }
    ];
</script>

<div class="flex items-center gap-5">
    {#each steps as step, i}
        <Button.Root
            class={twMerge(
                "text-md font-medium cursor-pointer",
                i > bookingFormData.activeStep ? 'text-muted/80' : 'text-foreground/80 font-semibold'
            )}
        >
            <div class="flex gap-2 items-center">
                {step.label}
            </div>
        </Button.Root>

        {#if i < steps.length - 1}
            <i class="ph ph-caret-right"></i>
        {/if}
    {/each}
</div>