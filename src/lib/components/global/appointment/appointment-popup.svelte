<script>
    import { twMerge } from "tailwind-merge";
    import { Tabs } from "bits-ui";
    let {
        data
    } = $props();

    let selectedTab = $state('summary');
</script>

<div class="grid w-250 py-1 px-3 grid gap-2">
    <h1 class="text-3xl font-logo text-foreground">Appointment Details</h1>

    <Tabs.Root value={selectedTab}>
        <Tabs.List class="border-b-4 border-teal-light border-collapse flex gap-5">
            <Tabs.Trigger value="summary"
                class={twMerge(
                    "py-1 px-4 rounded-t-xs border-t-4 border-transparent cursor-pointer",
                    selectedTab === 'summary' ? 'bg-teal-light border-teal' : 'hover:bg-teal-pale'
                )}
                onclick={() => selectedTab = 'summary'}
            >Summary</Tabs.Trigger>
            <Tabs.Trigger value="notes"
                class={twMerge(
                    "py-1 px-4 rounded-t-xs border-t-4 border-transparent cursor-pointer",
                    selectedTab === 'notes' ? 'bg-teal-light border-teal' : 'hover:bg-teal-pale'
                )}
                onclick={() => selectedTab = 'notes'}
            >Notes</Tabs.Trigger>
            <Tabs.Trigger value="history"
                class={twMerge(
                    "py-1 px-4 rounded-t-xs border-t-4 border-transparent cursor-pointer",
                    selectedTab === 'history' ? 'bg-teal-light border-teal' : 'hover:bg-teal-pale'
                )}
                onclick={() => selectedTab = 'history'}
            >History</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="summary">
            Summary
        </Tabs.Content>
        <Tabs.Content value="notes">
            Notes
        </Tabs.Content>
        <Tabs.Content value="history">
            History
        </Tabs.Content>
    </Tabs.Root>
    {data.text}; start = {!!data.start}; end = {!!data.end}
</div>

<style>
    /* h1 { */
        /* font-family: var(--) */
    /* } */
</style>