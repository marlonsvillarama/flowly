<script>
    import CalendarSidebar from "@/components/global/calendar/calendar-sidebar.svelte";

	let { children } = $props();
</script>

<div class="border-transparent border h-full grid grid-cols-[auto_1fr] gap-4">
    <CalendarSidebar />

    {@render children()}
</div>