<script>
    import { Button, RadioGroup, Label } from "bits-ui";
    import BookingFormDialog from "./booking-form-dialog.svelte";
    import { twMerge } from "tailwind-merge";
    import { bookingFormData } from "@/store/booking-form.svelte";
    import BookingCalendar from "../booking-calendar.svelte";

    let steps = [
        'will-redeem',
        'select-package',
        'select-service',
        'select-datetime'
    ];
    let activeStep = $state('will-redeem');
    let willRedeem = $state(null);
    let isOpen = $state(false);

    const handleContinue = () => {
        if (activeStep === 'will-redeem') {
            // if (bookingFormData.cart.packages.length > 1)
            activeStep = bookingFormData.cart.packages.length > 0 ? 'select-package' : 'select-datetime';
        }
        else if (activeStep === 'select-package') {
            activeStep = 'select-service';
        }
        else if (activeStep === 'select-service') {
            activeStep = 'select-datetime';
        }
        else {
            isOpen = false;
            activeStep = 'will-redeem';
        }
    };
</script>

<BookingFormDialog
    bind:isOpen={isOpen}
    action={{
        text: 'Continue',
        handler: handleContinue
    }}
    reverseButtons={true}
>
    {#snippet trigger()}
        <span class="grid items-center py-2 px-10 bg-teal/90 rounded-full cursor-pointer hover:bg-storm-teal duration-150 ease-in-out font-medium text-xs text-background"
        >Continue</span>
    {/snippet}

    {#snippet content()}
        {#if activeStep === 'will-redeem'}
            <span>Would you like to redeem a package today?</span>
            <RadioGroup.Root bind:value={willRedeem} class="grid gap-3">
                <!-- <Label.Root for="yes_redeem"
                    class="grid cursor-pointer px-5 py-4 rounded-sm hover:bg-border/50 border"> -->
                    <RadioGroup.Item id="redeem_ys" value="yes_redeem" class={twMerge(
                        "data-[state=checked]:bg-border/80",
                        "grid cursor-pointer px-5 py-4 rounded-sm hover:bg-border/30 border"
                    )}
                    >
                        <span class="text-base text-foreground font-medium">Yes, I will redeem today.</span>
                        <span class="text-xs text-foreground/60">Redeem one or more services from this package today.</span>
                    </RadioGroup.Item>
                    <!-- <span class="text-base text-foreground font-medium">Yes, I will redeem today.</span>
                    <span class="text-xs text-foreground/60">Redeem one or more services from this package today.</span>
                </Label.Root> -->
                <!-- <Label.Root for="for_others"
                    class="text-sm flex items-center gap-3 cursor-pointer px-4 py-3 rounded-sm hover:bg-border/50"> -->
                    <!-- <RadioGroup.Item id="for_others" value="for_others"
                        class="border-border-input bg-background hover:border-dark-40 data-[state=checked]:border-foreground data-[state=checked]:border-6 size-5 shrink-0 cursor-default rounded-full border transition-all duration-100 ease-in-out"
                    /> -->
                    <RadioGroup.Item id="redeem_no" value="redeem_no" class={twMerge(
                        "data-[state=checked]:bg-border/80",
                        "grid cursor-pointer px-5 py-4 rounded-sm hover:bg-border/30 border"
                    )}
                    >
                        <span class="text-base text-foreground font-medium">No, I will redeem later.</span>
                        <span class="text-xs text-foreground/60">Add the packages to your cart and use them later.</span>
                    </RadioGroup.Item>
                    <!-- <span>This is a gift for someone else</span>
                </Label.Root> -->
            </RadioGroup.Root>
        {:else if activeStep === 'select-package' && bookingFormData.cart.packages.length > 0}
            <span>Select a package to redeem</span>
        {:else if activeStep === 'select-service'}
            select service
        {:else if activeStep === 'select-datetime'}
            <BookingCalendar />
        {/if}
    {/snippet}
</BookingFormDialog>
