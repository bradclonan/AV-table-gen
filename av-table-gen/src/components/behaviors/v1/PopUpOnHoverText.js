/**
 * Render-less component providing the context on hover text behavior.
 * Designed to be used as a behavior slot of tree component.
 */
import behaviorMixin from './behaviorMixin'

export default {
    name: 'PopUpOnTextHover',
    mixins: [behaviorMixin],

    created() {
        const { on, actions: { setPopUp, resetPopUp } } = this

        on('mouseOverText', (context) => {
            console.log("PopupOnhoverMouseover", context)
        })

        on('mouseLeaveText', () => {
            console.log("mouseLeaveText")
                //resetPopUp()
        })
    }
}