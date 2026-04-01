<script>
    import { bookingFormData } from "@/store/booking-form.svelte";
    import { packagesData } from "@/store/packages.svelte";
    import { servicesData } from "@/store/services.svelte";
    import { vouchersData } from "@/store/vouchers.svelte";
    import { AlertDialog, Button, Checkbox, Label, RadioGroup } from "bits-ui";
    import { toast } from "svelte-sonner";
    import { twMerge } from "tailwind-merge";

    let { item } = $props();

    // let selected = $state(false);
    // const selectPackage = () => {
    //     bookingFormData.cart.packages.push(item.id);
    //     bookingFormData.cart.packages = [ ...new Set(bookingFormData.cart.packages) ];
    //     let services = item.services.map(s => s.service);
    // };

    let selected = $derived(bookingFormData.cart.vouchers.indexOf(item.id) >= 0 || false);
    const triggerClick = () => {
        if (selected === true) {
            removeFromCart();
            return;
        }

        addToCart();
        // isDialogOpen = true;
    };

    const addToCart = () => {
        let selectedItem = vouchersData.find(s => s.id === item.id);

        bookingFormData.cart.vouchers.push(item.id);
        bookingFormData.cart.vouchers = [ ...new Set(bookingFormData.cart.vouchers) ];

        // toast(`Item "${selectedItem.name}" has been added to your cart.`);
        // isDialogOpen = false;
        selected = true;
        // selected = !selected;

        // let selectedItem = vouchersData.find(d => d.id === item.id);
        // if (selected === true) {
        //     bookingFormData.cart.vouchers.push(item.id);
        //     bookingFormData.cart.vouchers = [ ...new Set(bookingFormData.cart.vouchers) ];

        //     toast(`Voucher "${selectedItem.name}" has been added to your cart.`);
        //     return;
        // }

        // let index = bookingFormData.cart.vouchers.findIndex(d => d === item.id);
        // if (index < 0) return;

        // bookingFormData.cart.vouchers.splice(index, 1);
        // bookingFormData.cart.vouchers = [ ...new Set(bookingFormData.cart.vouchers) ];
        // toast(`Vouchers "${selectedItem.name}" has been removed from your cart.`);
    };

    const removeFromCart = () => {
        let selectedItem = vouchersData.find(d => d.id === item.id);
        let itemIndex = bookingFormData.cart.vouchers.findIndex(d => d === item.id);
        if (itemIndex < 0) return;

        bookingFormData.cart.vouchers.splice(itemIndex, 1);
        bookingFormData.cart.vouchers = [ ...new Set(bookingFormData.cart.vouchers) ];
        selected = false;

        // toast(`Voucher "${selectedItem.name}" has been removed from your cart.`);
    };

    let forWhom = $state('for_me');
</script>

<!-- TODO Show dialog on click -->
<!-- Option #1: For me -->
<!-- Option #2: Gift for someone -->

<div
    class={twMerge(
        "flex flex-col justify-between w-full gap-7 border border-l-8 rounded-sm pt-3 px-4 pb-4 hover:bg-muted/5 transition-all duration-150",
        selected === true ? 'bg-teal-light/30 border-teal/80 border-l-teal/80' : 'border-muted/10 border-l-muted/10'
    )}
>
    <div class="grid">
        <div class="flex items-center justify-between">
            <span class="text-base font-medium">{item.name}</span>
            <!-- <span class="title font-serif text-lg font-semibold">{item.name}</span> -->
            {#if selected}
                <!-- <i class="ph-bold ph-check text-xl"></i> -->
                <Button.Root onclick={removeFromCart}
                    class="text-xs rounded-full px-4 py-1 bg-red/20 cursor-pointer"
                >Remove</Button.Root>
            {:else}
                <AlertDialog.Root>
                    <AlertDialog.Trigger class="text-xs rounded-full px-4 py-1 bg-teal-light cursor-pointer">
                        Add
                    </AlertDialog.Trigger>
                    <AlertDialog.Portal>
                        <AlertDialog.Overlay
                            class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80"
                        />
                        <AlertDialog.Content
                            class={twMerge(
                                "bg-background shadow-popover outline-hidden border py-6 px-7 rounded-lg grid gap-2",
                                "fixed left-[50%] top-[50%] z-50 translate-x-[-50%] translate-y-[-50%]",
                                "w-full max-w-[calc(100%-2rem)] sm:max-w-122.5 md:w-full",
                                "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
                                "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95"
                            )}
                        >
                            <div class="grid">
                                <div class="flex items-center justify-between">
                                    <span class="text-lg font-semibold">{item.name}</span>
                                    <span class="text-3xl font-semibold">${(new Intl.NumberFormat('en-NZ')).format(item.price)}</span>
                                </div>
                                <p class="text-left text-sm text-foreground/50">{item.description}</p>
                            </div>

                            <RadioGroup.Root bind:value={forWhom}>
                                <!-- <div class="flex items-center gap-1"> -->
                                    <Label.Root for="for_me"
                                        class="text-sm flex items-center gap-3 cursor-pointer px-4 py-3 rounded-sm hover:bg-border/50">
                                        <RadioGroup.Item id="for_me" value="for_me"
                                            class="border-border-input bg-background hover:border-dark-40 data-[state=checked]:border-foreground data-[state=checked]:border-6 size-5 shrink-0 cursor-default rounded-full border transition-all duration-100 ease-in-out"
                                        />
                                        <span>This voucher is for me</span>
                                    </Label.Root>
                                <!-- </div> -->
                                <!-- <div class="flex items-center gap-1"> -->
                                    <Label.Root for="for_others"
                                        class="text-sm flex items-center gap-3 cursor-pointer px-4 py-3 rounded-sm hover:bg-border/50">
                                        <RadioGroup.Item id="for_others" value="for_others"
                                            class="border-border-input bg-background hover:border-dark-40 data-[state=checked]:border-foreground data-[state=checked]:border-6 size-5 shrink-0 cursor-default rounded-full border transition-all duration-100 ease-in-out"
                                        />
                                        <span>This is a gift for someone else</span>
                                    </Label.Root>
                                <!-- </div> -->
                            </RadioGroup.Root>

                            {#if forWhom === 'for_others'}
                            <div class="grid gap-3 ml-12 mb-3">
                                <div class="fld grid">
                                    <Label.Root for="gift_name"
                                        class="text-sm text-foreground">
                                        Name
                                    </Label.Root>
                                    <input type="text" id="gift_name" for="gift_name"
                                        class="rounded-sm border border-border/50 px-3 py-2 w-[90%]">
                                </div>
                                <div class="fld grid">
                                    <Label.Root for="gift_email"
                                        class="text-sm text-foreground">
                                        Email address
                                    </Label.Root>
                                    <input type="email" id="gift_email" name="gift_email"
                                        class="rounded-sm border border-border/50 px-3 py-2 w-[90%]">
                                </div>
                            </div>
                            {/if}
                            <!-- <BookingCalendar /> -->

                            <div class="flex items-center justify-between mt-4">
                                <AlertDialog.Action
                                    class="grid items-center py-2 px-15 bg-teal/90 rounded-full cursor-pointer hover:bg-storm-teal duration-150 ease-in-out font-medium text-xs text-background"
                                    onclick={addToCart}
                                >Add to cart</AlertDialog.Action>
                                <AlertDialog.Cancel
                                    class="rounded-full cursor-pointer text-xs text-foreground/80 px-5 py-2 hover:bg-muted/10 transition-all duration-150"
                                >Cancel</AlertDialog.Cancel>
                            </div>
                        </AlertDialog.Content>
                    </AlertDialog.Portal>
                </AlertDialog.Root>

                <!-- <Button.Root onclick={triggerClick}
                    class="text-xs rounded-full px-4 py-1 bg-teal-light cursor-pointer"
                >Add</Button.Root> -->
            {/if}
            <!-- <div class="flex items-center gap-2">
                <span class="text-lg font-semibold">${(new Intl.NumberFormat('en-NZ')).format(item.price)}</span>
            </div> -->
        </div>
    </div>

    <!-- <div class="flex items-center justify-between">
        <span class="text-base font-medium">{item.name}</span> -->
        <!-- <span class="title font-serif text-lg font-semibold">{item.name}</span> -->
        <!-- <i class="ph-bold ph-{selected ? 'check' : 'plus'} text-xl"></i> -->
        <!-- <div class="flex items-center gap-2">
            <span class="text-lg font-semibold">${(new Intl.NumberFormat('en-NZ')).format(item.price)}</span>
        </div> -->
    <!-- </div> -->
    <span class="text-4xl font-semibold">${(new Intl.NumberFormat('en-NZ')).format(item.price)}</span>
    <p class="text-left text-sm text-foreground/50">{item.description}</p>
    <!-- <div>
        <p class="text-left text-sm text-foreground/50">{item.description}</p> -->
        <!-- <span class="font-serif italic">Includes:</span> -->
        <!-- <ul> -->
            <!-- {#each item.services as service} -->
                <!-- {#if bookingFormData.cart.items.indexOf(service.id) >= 0} -->
                <!-- <li class={twMerge(
                    "text-left text-xs font-light px-3 py-1 flex items-center justify-between rounded-full border border-transparent",
                    bookingFormData.cart.services.indexOf(service.id) >= 0 ? 'font-semibold border-sand-dark' : ''
                )}>
                    <div class="">
                        <i class="ph ph-check pr-2"></i>
                        <span>{service.name}</span>
                    </div>
                    <div>
                        <i class="ph ph-x"></i>
                        <span class="text-sm">{service.count}</span>
                    </div>
                </li> -->
                <!-- {/if} -->
            <!-- {/each} -->
        <!-- </ul> -->
        <!-- <div class="text-xs px-5 py-2 mt-3 bg-sand rounded-full font-medium">Buy this package</div> -->
    <!-- </div> -->
</div>
