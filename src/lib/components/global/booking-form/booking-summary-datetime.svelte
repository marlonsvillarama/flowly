<script>
    import { twMerge } from "tailwind-merge";
    import { Button } from "bits-ui";
    import { bookingFormData } from "@/store/booking-form.svelte";
    import { servicesData } from "@/store/services.svelte";

    let totalDuration = $derived(bookingFormData.cart.items.reduce((sum, next) => sum + next.duration, 0));
    let dateDisplay = $derived.by(() => {
        if (!bookingFormData.date) { return ''; }
        
        let dt = new Date(bookingFormData.date);
        return dt.toLocaleDateString('en-NZ', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    });
    let timeDisplay = $derived.by(() => {
        if (!bookingFormData.timeStart) { return ''; }

        let now = new Date();
        let dt = new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate(),
            parseInt(bookingFormData.timeStart.slice(0, 2)),
            parseInt(bookingFormData.timeStart.slice(2))
        );
        return dt.toLocaleTimeString('en-NZ', {
            hour: 'numeric',
            hour12: true,
            minute: 'numeric'
        });
    });
    let durationDisplay = $derived.by(() => {
        if (bookingFormData.cart.items.length <= 0) { return ''; }

        let services = servicesData.filter(s => bookingFormData.cart.items.indexOf(s.id) >= 0);
        console.log('services', services);
        let total = services.reduce((sum, next) => sum + next.duration, 0);
        let hours = Math.floor(total / 60);
        let minutes = total % 60;

        let arr = [];
        if (hours > 0) {
            arr.push(`${hours} hour${hours > 1 ? 's' : ''}`);
        }
        if (minutes > 0) {
            arr.push(`${minutes} minute${minutes > 1 ? 's' : ''}`);
        }

        return arr.join(' ');
    });
</script>

<Button.Root
    class={twMerge(
        "grid gap-1 rounded-sm border-3 py-3 px-4 cursor-pointer",
        bookingFormData.activeStep === 1 ? 'border-teal/80' : 'border-border/40 hover:border-teal-light/80'
    )}
    onclick={() => bookingFormData.activeStep = 1}
>
    <div class="flex items-center justify-between">
        {#if bookingFormData.date && bookingFormData.timeStart && bookingFormData.timeEnd}
            <div class="flex items-center gap-2">
                <i class="ph ph-calendar-blank text-lg"></i>
                <span class="text-sm">{dateDisplay}</span>
            </div>
        {:else}
            <span class="font-normal text-foreground/80">No selected date</span>
        {/if}
        <div class="text-xs font-medium text-background bg-teal-dark/80 hover:teal-dark transition-all duration-150 cursor-pointer rounded-3xl px-4 py-1">
            Update
        </div>
    </div>
    {#if bookingFormData.timeStart && bookingFormData.timeEnd}
        <div class="flex items-center gap-2">
            <i class="ph ph-clock text-lg"></i>
            <span class="text-sm">{timeDisplay} - <span class="italic text-xs text-foreground/80 font-light">{durationDisplay}</span></span>
        </div>
    {/if}
</Button.Root>
