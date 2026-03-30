<script>
    import { twMerge } from "tailwind-merge";
    import { Button } from "bits-ui";
    import { bookingFormData } from "@/store/booking-form.svelte";

    let { item } = $props();

    const removeFromCart = (id) => {
        let serviceIndex = bookingFormData.cart.items.findIndex(d => d.id === id);
        if (serviceIndex < 0) return;

        bookingFormData.cart.items.splice(serviceIndex, 1);
        bookingFormData.cart.items = bookingFormData.cart.items;
    };
</script>

<Button.Root
    class={twMerge(
        "w-full grid grid-cols-[1fr_auto] gap-8 border border-l-4 rounded-sm pt-3 px-4 pb-4 cursor-pointer hover:bg-muted/5 transition-all duration-150"
    )}
    onclick={() => removeFromCart(item.id)}
>
    <div class="grid gap-1 text-left">
        <span class="font-semibold">{item.name}</span>
        <span class="font-normal text-foreground/50">Around {item.duration} minutes</span>
    </div>

    <i class="ph-bold ph-trash text-xl"></i>
</Button.Root>
