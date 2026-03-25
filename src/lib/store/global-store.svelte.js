export let calendarStore = $state({
    activeSlot: ''
});

export const CalendarStore = () => {
    return {
        get activeSlot () { return calendarStore.activeSlot },

        set activeSlot (value) { calendarStore.activeSlot = value },
    };
};

export const DateTimeStore = {
    toDateString: (dt) => {
        return `${dt.getFullYear()}-${dt.getMonth().toString().padStart(2, '0')}-${dt.getDate().toString().padStart(2, '0')}`;
    },
    toTimeString: (dt) => {
        return dt.toLocaleTimeString([], {
            hour: 'numeric',
            minute: 'numeric'
        });
    },
};

export const SettingsStore = {
    startDay: '0600',
    endDay: '2200',
    startShift: '0830',
    endShift: '1900',
    slotHeight: '4rem',
};
