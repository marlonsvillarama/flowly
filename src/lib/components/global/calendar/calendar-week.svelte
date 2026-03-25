<script>
    import { CalendarStore } from "@/store/global-store.svelte";
    import {
        Dialog,
        Separator
    } from "bits-ui";
    import CalendarWeekDay from "./calendar-week-day.svelte";

    let {
        date = new Date()
    } = $props();
    let calendarStore = CalendarStore();

    let weekRange = $derived.by(() => {
        let arr = [];
        let weekStart = new Date(date.getFullYear(), date.getMonth(), date.getDate());
        weekStart.setDate(weekStart.getDate() - date.getDay());

        let dt = new Date(weekStart.getFullYear(), weekStart.getMonth(), weekStart.getDate());
        let count = 0;

        do {
            dt.setDate(dt.getDate() + 1);
            arr.push(new Date(dt.getFullYear(), dt.getMonth(), dt.getDate()));
            count++;
        } while (count < 7);

        return arr;
    });

    let isDialogOpen = $state(false);
    const showDialog = () => {
        let activeSlot = calendarStore.activeSlot;
        if (!activeSlot) { return }

        console.log('activeSlot', activeSlot);
        isDialogOpen = true;
    };

    // const setOpenDialog = (open) => {
    //     isDialogOpen = open;
    // }
</script>

<div class="h-full w-full grid grid-rows-[auto_1fr] gap-2 pb-2">
    <div class="w-full grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr]">
        {#each weekRange as weekDay, i}
            <div class="py-1 px-3 flex items-center justify-between">
                <span class="text-sm">{weekDay.toLocaleDateString('en-NZ', { weekday: 'short' })}</span>
                <div class="py-1 h-9 w-9 rounded-[50%] bg-teal-light text-lg flex align-center justify-center">{weekDay.getDate()}</div>
            </div>
            
            {#if i < weekRange.length - 1}
            <Separator.Root orientation="vertical" class="w-px shrink-0 bg-transparent" />
            {/if}
        {/each}
    </div>
    <div class="h-full w-full grid grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] overflow-y-auto">
        {#each weekRange as weekDay, i}
            <CalendarWeekDay date={weekDay} onclickslot={showDialog} />
            
            {#if i < weekRange.length - 1}
            <Separator.Root orientation="vertical" class="w-px shrink-0 bg-border" />
            {/if}
        {/each}
    </div>
</div>
