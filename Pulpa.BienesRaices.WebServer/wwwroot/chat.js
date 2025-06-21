export function scrollToBotton(element) {
    try {
        if (element) {
            element.scrollTo({
                top: element.scrollHeight,
                behavior: 'smooth'
            });
        }
    } catch (e) {
        console.error('Error scrolling to bottom:', e);
    }
}
