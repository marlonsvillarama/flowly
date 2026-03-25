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