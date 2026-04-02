<script>
    import { twMerge } from "tailwind-merge";
    import { AlertDialog } from "bits-ui";

    let {
        isOpen = $bindable(false),
        header,
        trigger,
        triggerClass,
        content,
        contentClass,
        action,
        cancel,
        reverseButtons = false
    } = $props();
</script>

<AlertDialog.Root bind:open={isOpen}>
    <AlertDialog.Trigger class={twMerge(
        "cursor-pointer",
        triggerClass
    )}>
        {@render trigger?.()}
    </AlertDialog.Trigger>

    <AlertDialog.Portal>
        <AlertDialog.Overlay
            class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-border/80"
        />
        <AlertDialog.Content
            class={twMerge(
                "bg-background shadow-popover outline-hidden border py-6 px-7 rounded-lg grid gap-3",
                "fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%]",
                "max-w-[calc(100%-2rem)] sm:max-w-122.5 md:w-full",
                "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
                "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
                contentClass
            )}
        >
            {@render header?.()}

            {@render content?.()}

            <div class={twMerge(
                "flex items-center justify-between mt-4",
                reverseButtons === true ? 'flex-row-reverse' : ''
            )}>
                {#if action}
                    <AlertDialog.Action
                        class="grid items-center py-2 px-15 bg-teal/90 rounded-full cursor-pointer hover:bg-storm-teal duration-150 ease-in-out font-medium text-xs text-background"
                        onclick={action.handler || (() => {})}
                    >{action.text}</AlertDialog.Action>
                {/if}
                <AlertDialog.Cancel
                    class="rounded-full cursor-pointer text-xs text-foreground/80 px-5 py-2 hover:bg-muted/10 transition-all duration-150"
                >Cancel</AlertDialog.Cancel>
            </div>
        </AlertDialog.Content>
    </AlertDialog.Portal>
</AlertDialog.Root>
