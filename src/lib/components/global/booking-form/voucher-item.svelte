<script>
    import { bookingFormData } from "@/store/booking-form.svelte";
    import { packagesData } from "@/store/packages.svelte";
    import { servicesData } from "@/store/services.svelte";
    import { vouchersData } from "@/store/vouchers.svelte";
    import { AlertDialog, Button, Checkbox, Label, RadioGroup } from "bits-ui";
    import { toast } from "svelte-sonner";
    import { twMerge } from "tailwind-merge";
    import BookingFormDialog from "./dialogs/booking-form-dialog.svelte";

    let { item } = $props();

    let selected = $derived(bookingFormData.cart.vouchers.indexOf(item.id) >= 0 || false);
    const triggerClick = () => {
        if (selected === true) {
            removeFromCart();
            return;
        }

        addToCart();
    };

    const addToCart = () => {
        let selectedItem = vouchersData.find(s => s.id === item.id);

        bookingFormData.cart.vouchers.push(item.id);
        bookingFormData.cart.vouchers = [ ...new Set(bookingFormData.cart.vouchers) ];

        selected = true;
    };

    const removeFromCart = () => {
        let selectedItem = vouchersData.find(d => d.id === item.id);
        let itemIndex = bookingFormData.cart.vouchers.findIndex(d => d === item.id);
        if (itemIndex < 0) return;

        bookingFormData.cart.vouchers.splice(itemIndex, 1);
        bookingFormData.cart.vouchers = [ ...new Set(bookingFormData.cart.vouchers) ];

        selected = false;
    };

    let forWhom = $state('for_me');
</script>

<div
    class={twMerge(
        "flex flex-col justify-between w-full gap-7 border border-l-8 rounded-sm pt-3 px-4 pb-4 hover:bg-muted/5 transition-all duration-150",
        selected === true ? 'bg-teal-light/30 border-teal/80 border-l-teal/80' : 'border-muted/10 border-l-muted/10'
    )}
>
    <div class="grid">
        <div class="flex items-center justify-between">
            <span class="text-base font-medium">{item.name}</span>

            {#if selected}
                <Button.Root onclick={removeFromCart}
                    class="text-xs rounded-full px-4 py-1 bg-red/20 cursor-pointer"
                >Remove</Button.Root>
            {:else}
                <BookingFormDialog
                    contentClass="sm:max-w-122.5"
                    action={{
                        text: 'Add to cart',
                        handler: addToCart
                    }}
                >
                    {#snippet trigger()}
                        <span class="text-xs rounded-full px-4 py-1 bg-teal-light">Add</span>
                    {/snippet}

                    {#snippet content()}
                        <div class="grid">
                            <div class="flex items-center justify-between">
                                <span class="text-lg font-semibold">{item.name}</span>
                                <span class="text-3xl font-semibold">${(new Intl.NumberFormat('en-NZ')).format(item.price)}</span>
                            </div>
                            <p class="text-left text-sm text-foreground/50">{item.description}</p>
                        </div>

                        <RadioGroup.Root bind:value={forWhom}>
                            <Label.Root for="for_me"
                                class="text-sm flex items-center gap-3 cursor-pointer px-4 py-3 rounded-sm hover:bg-border/50">
                                <RadioGroup.Item id="for_me" value="for_me"
                                    class="border-border-input bg-background hover:border-dark-40 data-[state=checked]:border-foreground data-[state=checked]:border-6 size-5 shrink-0 cursor-default rounded-full border transition-all duration-100 ease-in-out"
                                />
                                <span>This voucher is for me</span>
                            </Label.Root>
                            <Label.Root for="for_others"
                                class="text-sm flex items-center gap-3 cursor-pointer px-4 py-3 rounded-sm hover:bg-border/50">
                                <RadioGroup.Item id="for_others" value="for_others"
                                    class="border-border-input bg-background hover:border-dark-40 data-[state=checked]:border-foreground data-[state=checked]:border-6 size-5 shrink-0 cursor-default rounded-full border transition-all duration-100 ease-in-out"
                                />
                                <span>This is a gift for someone else</span>
                            </Label.Root>
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
                    {/snippet}
                </BookingFormDialog>
            {/if}
        </div>
    </div>

    <span class="text-4xl font-semibold text-center">${(new Intl.NumberFormat('en-NZ')).format(item.price)}</span>
    <p class="text-left text-sm text-foreground/50">{item.description}</p>
</div>
