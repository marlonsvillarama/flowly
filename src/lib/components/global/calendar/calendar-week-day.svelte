<script>
    import { twMerge } from 'tailwind-merge';
    import {
        CalendarStore,
        DateTimeStore,
        SettingsStore
    } from '@/store/global-store.svelte';
    import {
        Button,
        Dialog,
        Separator
    } from "bits-ui";
    import { toast } from "svelte-sonner";
    import CalendarWeekDaySlot from './calendar-week-day-slot.svelte';

    let {
        date = new Date(),
        onclickslot
    } = $props();
    
    let calendarStore = CalendarStore();

    let now = new Date();
    let timeSlots = $derived.by(() => {
        let dayStart = new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            parseInt(SettingsStore.startDay.slice(0, 2)),
            parseInt(SettingsStore.startDay.slice(2))
        );
        let shiftStart = new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            parseInt(SettingsStore.startShift.slice(0, 2)),
            parseInt(SettingsStore.startShift.slice(2))
        );
        let dayEnd = new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            parseInt(SettingsStore.endDay.slice(0, 2)),
            parseInt(SettingsStore.endDay.slice(2))
        );
        let shiftEnd = new Date(
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            parseInt(SettingsStore.endShift.slice(0, 2)),
            parseInt(SettingsStore.endShift.slice(2))
        );

        let slots = [];
        let dt = new Date(dayStart.getFullYear(), dayStart.getMonth(), dayStart.getDate(), dayStart.getHours(), dayStart.getMinutes());
        do {
            let obj = {
                disabled: dt < shiftStart || dt >= shiftEnd,
                end: dt === shiftEnd,
                start: dt === shiftStart,
                today: DateTimeStore.toDateString(dt) === DateTimeStore.toDateString(now),
                value: new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), dt.getHours(), dt.getMinutes())
            }
            obj.text = `${DateTimeStore.toDateString(obj.value)} ${DateTimeStore.toTimeString(obj.value)}`;
            slots.push(obj);
            dt.setMinutes(dt.getMinutes() + 30);
        } while (dt < dayEnd);

        return slots;
    });

    const clickSlot = (ts) => {
        if (ts.disabled) { return; }

        calendarStore.activeSlot = ts;
        onclickslot();
    };
</script>

<div class="wd-wrapper border-none border">
    {#each timeSlots as ts, i}
        {#if i > 0}
            <Separator.Root class={twMerge(
                "h-px p-0",
                ts.disabled === false && ts.text.indexOf(':30') >= 0 ? 'bg-border/20' : 'bg-border/50'
            )} />
        {/if}

        <CalendarWeekDaySlot data={ts} />
    {/each}
</div>
