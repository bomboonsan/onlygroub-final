function formatDateToThai(dateString) {
    const date = new Date(dateString);
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
        // weekday: 'long'
    };
    return new Intl.DateTimeFormat('th-TH', options).format(date);
}

export { formatDateToThai as f };
