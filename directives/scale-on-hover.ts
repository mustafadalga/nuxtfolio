export default {
    mounted(el) {
        el.addEventListener('mouseover', () => {
            el.style.transform = "scale(1.05)";
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = "scale(1)";
        });
    }
};