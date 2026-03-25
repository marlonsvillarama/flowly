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
    import AppointmentPopup from '../appointment/appointment-popup.svelte';

    let {
        data,
        onclickslot
    } = $props();
</script>

<Dialog.Root>
    <Dialog.Trigger class={
        twMerge(
            "h-8 w-full border-none",
            `cursor-${data.disabled === true ? 'not-allowed' : 'pointer'}`,
            data.disabled === true ? 'bg-ring/10' : 'hover:bg-border/20'
        )
    }>&nbsp;</Dialog.Trigger>
    <Dialog.Portal>
        <Dialog.Overlay
            class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/20"
        />
        <Dialog.Content
            class={twMerge(
                "rounded-sm bg-background shadow-popover outline-hidden fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%] border max-h-[80%] overflow-y-hidden",
                "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
            )}
        >
            <AppointmentPopup {data} />
        </Dialog.Content>
    </Dialog.Portal>
</Dialog.Root>
