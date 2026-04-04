<script>
    import { twMerge } from "tailwind-merge";
    import {
        Button,
        Dialog,
        Separator
    } from "bits-ui";

    let isOpenOTP = $state(false);

    const enterOTP = () => {
        isOpenOTP = true;
    };
</script>

<div class="w-120 rounded-xl border-teal-light border grid gap-6 px-9 py-8">
    <!-- <div class="grid gap-1 text-4xl font-serif font-semibold"> -->
        <span class="text-4xl font-serif font-semibold text-charcoal">Flow<span class="text-teal">ly</span></span>

    <!-- </div> -->

    <!-- <div class="hero bg-sand/30 flex h-full gap-4">
        <span>Hero</span>
    </div> -->
    <div class="login grid gap-8 justify-center">
        <!-- <h1 class="text-2xl font-semibold">
            Choose how you want to book
        </h1> -->
        <!-- <div class="grid"> -->
        <!-- <div class="grid gap-6 justify-center"> -->
            <Button.Root
                class="grid items-center py-3 border border-teal-light rounded-4xl cursor-pointer hover:bg-teal-light/30 duration-150 ease-in-out font-semibold w-70"
                onclick={() => window.location = '/form'}
            >
                Book as guest
            </Button.Root>

            <!-- <div class="grid grid-cols-[1fr_auto_1fr] gap-6 items-center">
                <Separator.Root class="bg-border h-px" />
                <span>OR</span>
                <Separator.Root class="bg-border h-px" />
            </div> -->

            <Button.Root
                class="flex gap-3 items-center justify-center py-3 border border-teal-light rounded-4xl cursor-pointer hover:bg-teal-light/30 duration-150 ease-in-out"
                onclick={() => window.location = '/form'}
            >
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: block;" class="h-5">
                    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                    <path fill="none" d="M0 0h48v48H0z"></path>
                </svg>
                <span
                    class="font-medium leading-4"
                >
                    Login with Google
                </span>
            </Button.Root>
        <!-- </div> -->

        <div class="grid grid-cols-[1fr_auto_1fr] gap-6 items-center">
            <Separator.Root class="bg-border h-px" />
            <span>OR</span>
            <Separator.Root class="bg-border h-px" />
        </div>

        <div class="flex flex-col max-w-[80%] mx-auto text-center">
            <span class="pl-0.5 font-light">Enter your mobile number</span>
            <input type="text" class="w-50 border py-2 px-4 rounded-sm">
        </div>

        <Dialog.Root>
            <Dialog.Trigger
                class="grid items-center py-3 w-70 border border-transparent bg-teal/90 rounded-4xl cursor-pointer hover:bg-storm-teal duration-150 ease-in-out font-semibold text-background"
            >
                Log In
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
                    <div class="grid gap-1">
                        <span class="font-semibold">Enter the OTP sent to your mobile number below:</span>
                        <div class="grid grid-cols-6 gap-3">
                            <input type="text" class="text-2xl text-center font-bold py-2 px-1 border rounded-lg">
                            <input type="text" class="text-2xl text-center font-bold py-2 px-1 border rounded-lg">
                            <input type="text" class="text-2xl text-center font-bold py-2 px-1 border rounded-lg">
                            <input type="text" class="text-2xl text-center font-bold py-2 px-1 border rounded-lg">
                            <input type="text" class="text-2xl text-center font-bold py-2 px-1 border rounded-lg">
                            <input type="text" class="text-2xl text-center font-bold py-2 px-1 border rounded-lg">
                        </div>
                    </div>
                    <!-- <div class="bg-white border rounded-sm">test</div> -->
                    <div class="flex items-center justify-center gap-3">
                        <Button.Root
                            class="grid items-center py-3 px-15 border bg-teal/90 rounded-4xl cursor-pointer hover:bg-storm-teal duration-150 ease-in-out font-semibold text-background"
                            onclick={() => window.location = '/location'}
                        >
                            Authenticate
                        </Button.Root>
                        <Button.Root
                            class="grid items-center py-3 px-5 border border-transparent hover:border-teal-light rounded-4xl cursor-pointer duration-150 ease-in-out"
                            onclick={() => window.location = '/form'}
                        >
                            Cancel
                        </Button.Root>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    </div>
</div>
