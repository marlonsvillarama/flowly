<script>
    import { twMerge } from "tailwind-merge";
    import { AlertDialog } from "bits-ui";
    import DialogReviewCartNotifications from "./dialog-review-cart-notifications.svelte";
    import BookingCalendar from "../booking-calendar.svelte";
</script>

<AlertDialog.Root>
    <AlertDialog.Trigger
                class="grid items-center py-2 px-10 bg-teal/90 rounded-full cursor-pointer hover:bg-storm-teal duration-150 ease-in-out font-medium text-xs text-background"
    >Continue</AlertDialog.Trigger>
    <AlertDialog.Portal>
        <AlertDialog.Overlay
            class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80"
        />
        <AlertDialog.Content
            class={twMerge(
                "bg-background shadow-popover outline-hidden border py-6 px-7 rounded-lg grid gap-3",
                "fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%]",
                "max-h-[calc(100%-2rem)]",
                "w-full max-w-[calc(100%-2rem)] sm:max-w-300 md:w-full",
                "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
                "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
            )}
        >
            <span class="text-lg font-semibold">Review Cart</span>
            <BookingCalendar />

            <DialogReviewCartNotifications />

            <div class="grid gap-1"></div>

            <div class="flex items-center justify-end gap-4 mt-4">
                <AlertDialog.Cancel
                    class="rounded-full cursor-pointer text-xs text-foreground/80 px-5 py-2 hover:bg-muted/10 transition-all duration-150"
                >Back to Form</AlertDialog.Cancel>
                <AlertDialog.Action
                    class="flex items-center gap-2 py-2 px-10 bg-teal/90 rounded-full cursor-pointer hover:bg-storm-teal duration-150 ease-in-out font-medium text-xs text-background"
                >
                    <span>Continue</span>
                    <i class="ph ph-arrow-right text-lg font-semibold"></i>
                </AlertDialog.Action>
            </div>
        </AlertDialog.Content>
    </AlertDialog.Portal>
</AlertDialog.Root>
