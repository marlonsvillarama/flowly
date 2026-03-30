<script>
    import { twMerge } from "tailwind-merge";
    import { Avatar, Button, Dialog, Popover } from "bits-ui";
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

    const moveToPrev = () => {};

    const moveToNext = () => {};
</script>

<div class="grid gap-8">
    <!-- <span class="text-lg text-foreground/80 font-semibold">Calendar</span> -->

    <div class="flex items-center justify-between gap-8">
        <span class="title text-lg text-foreground/80 font-semibold">{weekStartDisplay} to {weekEndDisplay}</span>

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
                <span class="text-sm">Avatar Aang</span>
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
    
    <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
            <Button.Root class="h-10 w-10 text-lg text-center rounded-full cursor-pointer bg-muted/10 hover:bg-muted/30">29</Button.Root>
            <Button.Root class="h-10 w-10 text-lg text-center rounded-full cursor-pointer bg-teal-dark text-background">30</Button.Root>
            <Button.Root class="h-10 w-10 text-lg text-center rounded-full cursor-pointer bg-muted/10 hover:bg-muted/30">31</Button.Root>
            <Button.Root class="h-10 w-10 text-lg text-center rounded-full cursor-pointer bg-muted/10 hover:bg-muted/30">1</Button.Root>
            <Button.Root class="h-10 w-10 text-lg text-center rounded-full cursor-pointer bg-muted/10 hover:bg-muted/30">2</Button.Root>
            <Button.Root class="h-10 w-10 text-lg text-center rounded-full cursor-pointer bg-muted/10 hover:bg-muted/30">3</Button.Root>
            <Button.Root class="h-10 w-10 text-lg text-center rounded-full cursor-pointer bg-muted/10 hover:bg-muted/30">4</Button.Root>
        </div>

        <div class="flex items-center gap-2">
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
        </div>
    </div>
</div>