<script>
    import { twMerge } from "tailwind-merge";
    import { Avatar, Button, Calendar, Dialog, Popover } from "bits-ui";
    import { getLocalTimeZone, today } from "@internationalized/date";
    import Aang from '@/assets/aang.jpg';

    let now = new Date();
    let weekStart = $derived.by(() => {
        let dt = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        dt.setDate(dt.getDate() - dt.getDay());
        return dt;
    });
    let weekStartDisplay = $derived(
        weekStart.toLocaleDateString('en-NZ', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    );
    
    let weekEnd = $derived.by(() => {
        let dt = new Date(now.getFullYear(), now.getMonth(), now.getDate());
        dt.setDate(dt.getDate() + 6 - dt.getDay());
        return dt;
    });
    let weekEndDisplay = $derived(
        weekEnd.toLocaleDateString('en-NZ', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    );

    let selectedDate = $state(today(getLocalTimeZone()));

    const moveToPrev = () => {};

    const moveToNext = () => {};
</script>

<div class="grid grid-cols-2 gap-6 items-start">
    <!-- <span class="text-lg text-foreground/80 font-semibold">Calendar</span> -->

    <!-- <div class="flex items-center justify-between gap-8"> -->
        <!-- <span class="title text-lg text-foreground/80 font-semibold">{weekStartDisplay} to {weekEndDisplay}</span> -->

    <!-- </div> -->
    
    <!-- <div class="flex items-center justify-between"> -->
        <!-- <div class="flex items-center gap-2">
            <Button.Root class="h-10 w-10 text-lg text-center rounded-full cursor-pointer bg-muted/10 hover:bg-muted/30 transition-all duration-150">29</Button.Root>
            <Button.Root class="h-10 w-10 text-lg text-center rounded-full cursor-pointer bg-teal-dark text-background transition-all duration-150">30</Button.Root>
            <Button.Root class="h-10 w-10 text-lg text-center rounded-full cursor-pointer bg-muted/10 hover:bg-muted/30 transition-all duration-150">31</Button.Root>
            <Button.Root class="h-10 w-10 text-lg text-center rounded-full cursor-pointer bg-muted/10 hover:bg-muted/30 transition-all duration-150">1</Button.Root>
            <Button.Root class="h-10 w-10 text-lg text-center rounded-full cursor-pointer bg-muted/10 hover:bg-muted/30 transition-all duration-150">2</Button.Root>
            <Button.Root class="h-10 w-10 text-lg text-center rounded-full cursor-pointer bg-muted/10 hover:bg-muted/30 transition-all duration-150">3</Button.Root>
            <Button.Root class="h-10 w-10 text-lg text-center rounded-full cursor-pointer bg-muted/10 hover:bg-muted/30 transition-all duration-150">4</Button.Root>
        </div> -->
        <Calendar.Root
            class="border-dark-10 bg-background-alt shadow-card rounded-[15px] border p-5.5"
            weekdayFormat="short"
            fixedWeeks={true}
            type="single"
            bind:value={selectedDate}
        >
            {#snippet children({ months, weekdays })}
                <Calendar.Header class="flex items-center justify-between">
                <Calendar.PrevButton
                    class="rounded-9px bg-background-alt hover:bg-muted inline-flex size-10 items-center justify-center active:scale-[0.98] active:transition-all"
                >
                    <i class="ph-bold ph-arrow-left"></i>
                    <!-- <CaretLeft class="size-6" /> -->
                </Calendar.PrevButton>
                <Calendar.Heading class="text-[15px] font-medium" />
                <Calendar.NextButton
                    class="rounded-9px bg-background-alt hover:bg-muted inline-flex size-10 items-center justify-center active:scale-[0.98] active:transition-all"
                >
                    <i class="ph-bold ph-arrow-right"></i>
                    <!-- <CaretRight class="size-6" /> -->
                </Calendar.NextButton>
                </Calendar.Header>
                <div
                class="flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0"
                >
                {#each months as month, i (i)}
                    <Calendar.Grid class="w-full border-collapse select-none space-y-1">
                    <Calendar.GridHead>
                        <Calendar.GridRow class="mb-1 flex w-full justify-between">
                        {#each weekdays as day, i (i)}
                            <Calendar.HeadCell
                            class="text-muted-foreground font-normal! w-10 rounded-md text-xs"
                            >
                            <div>{day.slice(0, 2)}</div>
                            </Calendar.HeadCell>
                        {/each}
                        </Calendar.GridRow>
                    </Calendar.GridHead>
                    <Calendar.GridBody>
                        {#each month.weeks as weekDates, i (i)}
                        <Calendar.GridRow class="flex w-full">
                            {#each weekDates as date, i (i)}
                            <Calendar.Cell
                                {date}
                                month={month.value}
                                class="p-0! relative size-10 text-center text-sm"
                            >
                                <Calendar.Day
                                class="rounded-9px text-foreground hover:border-foreground data-selected:bg-foreground data-disabled:text-foreground/30 data-selected:text-background data-unavailable:text-muted-foreground data-disabled:pointer-events-none data-outside-month:pointer-events-none data-selected:font-medium data-unavailable:line-through group relative inline-flex size-10 items-center justify-center whitespace-nowrap border border-transparent bg-transparent p-0 text-sm font-normal"
                                >
                                <div
                                    class="bg-foreground group-data-selected:bg-background group-data-today:block absolute top-[5px] hidden size-1 rounded-full"
                                ></div>
                                {date.day}
                                </Calendar.Day>
                            </Calendar.Cell>
                            {/each}
                        </Calendar.GridRow>
                        {/each}
                    </Calendar.GridBody>
                    </Calendar.Grid>
                {/each}
                </div>
            {/snippet}
        </Calendar.Root>

        <div class="grid gap-5 grid-rows-[auto_1fr] h-full">
            <div class="flex items-center justify-between">
                <span class="text-base font-medium">Pick a specialist</span>
                <Dialog.Root>
                    <Dialog.Trigger>
                        <div class="flex items-center gap-2 h-9 pr-4 shadow-sm rounded-full bg-teal-light cursor-pointer">
                            <Avatar.Root
                                class="data-[status=loaded]:border-none bg-muted text-foreground/80 h-9 w-9 rounded-full font-medium data-[status=loading]:border-transparent"
                            >
                                <div class="flex h-full w-full items-center justify-center overflow-hidden rounded-full">
                                    <Avatar.Image src={Aang} alt="avatar-aang" />
                                    <Avatar.Fallback class="border-muted border">AA</Avatar.Fallback>
                                </div>
                            </Avatar.Root>
                            <span class="text-sm">Aang</span>
                        </div>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.Overlay
                            class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-muted-foreground/50"
                        />
                        <Dialog.Content class={twMerge(
                            "bg-background shadow-popover outline-hidden border py-6 px-7 rounded-lg grid gap-8",
                            "fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%]",
                            "w-full max-w-[calc(100%-2rem)] sm:max-w-122.5 md:w-full",
                            "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
                            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
                        )}
                        >
                            Choose specialist here...
                        </Dialog.Content>
                    </Dialog.Portal>
                </Dialog.Root>
            </div>
            <div class="grid grid-cols-2 items-start gap-8">
                <div class="grid gap-2">
                    <span class="font-medium">Morning</span>
                    <Button.Root class="rounded-full px-4 py-1 border-border/50 border-2 cursor-pointer hover:bg-border/50 transition-all duration-150">9:00 AM</Button.Root>
                    <Button.Root class="rounded-full px-4 py-1 border-border/50 border-2 cursor-pointer hover:bg-border/50 transition-all duration-150">9:30 AM</Button.Root>
                    <Button.Root class="rounded-full px-4 py-1 border-border/50 border-2 cursor-pointer hover:bg-border/50 transition-all duration-150">10:00 AM</Button.Root>
                    <Button.Root class="rounded-full px-4 py-1 border-border/50 border-2 cursor-pointer hover:bg-border/50 transition-all duration-150">10:30 AM</Button.Root>
                    <Button.Root class="rounded-full px-4 py-1 border-border/50 border-2 cursor-pointer hover:bg-border/50 transition-all duration-150">11:00 AM</Button.Root>
                    <Button.Root class="rounded-full px-4 py-1 border-border/50 border-2 cursor-pointer hover:bg-border/50 transition-all duration-150">11:30 AM</Button.Root>
                </div>
                <div class="grid gap-2">
                    <span class="font-medium">Afternoon</span>
                    <Button.Root class="rounded-full px-4 py-1 border-border/50 border-2 cursor-pointer hover:bg-border/50 transition-all duration-150">1:00 PM</Button.Root>
                    <Button.Root class="rounded-full px-4 py-1 border-border/50 border-2 cursor-pointer hover:bg-border/50 transition-all duration-150">1:30 PM</Button.Root>
                    <Button.Root class="rounded-full px-4 py-1 border-border/50 border-2 cursor-pointer hover:bg-border/50 transition-all duration-150">2:00 PM</Button.Root>
                    <Button.Root class="rounded-full px-4 py-1 border-border/50 border-2 cursor-pointer hover:bg-border/50 transition-all duration-150">2:30 PM</Button.Root>
                    <Button.Root class="rounded-full px-4 py-1 border-border/50 border-2 cursor-pointer hover:bg-border/50 transition-all duration-150">3:00 PM</Button.Root>
                    <Button.Root class="rounded-full px-4 py-1 border-border/50 border-2 cursor-pointer hover:bg-border/50 transition-all duration-150">3:30 PM</Button.Root>
                    <Button.Root class="rounded-full px-4 py-1 border-border/50 border-2 cursor-pointer hover:bg-border/50 transition-all duration-150">4:30 PM</Button.Root>
                    <Button.Root class="rounded-full px-4 py-1 border-border/50 border-2 cursor-pointer hover:bg-border/50 transition-all duration-150">4:30 PM</Button.Root>
                </div>
            </div>
        </div>

        <!-- <div class="flex items-center gap-2">
            <Button.Root class="rounded-[50%] h-9 w-9 hover:bg-muted/10 cursor-pointer transition-all duration-150"
                onclick={moveToPrev}
            >
                <i class="ph-bold ph-arrow-left"></i>
            </Button.Root>
            <Button.Root class="rounded-[50%] h-9 w-9 hover:bg-muted/10 cursor-pointer transition-all duration-150"
                onclick={moveToNext}
            >
                <i class="ph-bold ph-arrow-right"></i>
            </Button.Root>
            <Popover.Root>
                <Popover.Trigger class="rounded-[50%] h-9 w-9 hover:bg-muted/10 cursor-pointer transition-all duration-150"
                    onclick={moveToNext}
                >
                    <i class="ph-bold ph-calendar-blank"></i>
                </Popover.Trigger>
                <Popover.Content class="p-8 bg-background border rounded-sm " align="end">
                    calendar goes here...
                </Popover.Content>
            </Popover.Root>
        </div> -->
    <!-- </div> -->
</div>