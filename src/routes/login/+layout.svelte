<script>
    let { children } = $props();
</script>

<div class="flex justify-center items-center min-h-screen">
    {@render children?.()}
</div>