export default {
    name: "HighlightOnHover",
    props: ['on', 'action'],

    render: () => null,

    created() {
        this.on("click", (node) => {
            this.actions.hoverNode(node);
        });
    }
};