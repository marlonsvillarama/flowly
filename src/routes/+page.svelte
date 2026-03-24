<script>
    import { Button } from "bits-ui";

    const clickButton = () => {
        alert('clicked');
    };
</script>

<main class="p-9">
    <Button.Root
        onclick={clickButton}
        class="text-sm cursor-pointer py-2 px-4 border-none rounded-sm shadow hover:bg-sand/50 transition-all duration-150 ease-in-out">
        test
    </Button.Root>
</main>

<style>
</style>