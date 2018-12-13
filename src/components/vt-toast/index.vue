<style src="./style.css"></style>

<script>
    import Vue from 'vue'
    import plugin from './plugin'

    let count, instances, Component

    count = 0
    instances = {}
    Component =  {
        props: {
            type: String,
            text: {
                type: String
            },
            visible: {
                type: Boolean,
                required: true
            },
            time: {
                type: [Number, String],
                default: 2000
            }
        },
        data() {
            return {
                uuid: 0,
                timerId: 0
            }
        },
        render(h) {
            return (
                <transition name="ui-toast-fade">
                    <div class="ui-toast" v-show={this.visible} data-uuid={this.uuid}>
                        <div class="ui-toast__container">
                            <svg version="1.1" class="ui-toast__icon ui-toast__icon--success" viewBox="0 0 200 200" v-show={this.type == 'success'}>
                                <path fill="#ffffff" d="M33.3 104.9l7.1-9.8 38.1 26.8 87.4-72 8.4 7.1-95.8 93.1-45.2-45.2z" />
                            </svg>
                            <svg version="1.1" class="ui-toast__icon ui-toast__icon--error" viewBox="0 0 200 200" v-show={this.type == 'error'}>
                                <path fill="#ffffff" d="M159.9 144.4l-46.1-48.1 46-48L148 36.4l-48 46.1-48-46.1-11.9 11.9 46 48-46 48L52 156.2l47.9-46.1 48.1 46.1 11.9-11.8zM100 96.3z" />
                            </svg>
                            <svg version="1.1" class="ui-toast__icon ui-toast__icon--warn" viewBox="0 0 200 200" v-show={this.type == 'warn'}>
                                <path fill="#ffffff" d="M100 153.3c8.6 0 15.5 6.9 15.5 15.5s-6.9 15.5-15.5 15.5-15.5-6.9-15.5-15.5 6.9-15.5 15.5-15.5zm8.7-13.9H91.3c-2.1 0-2.3-1.8-2.3-4L87.4 33.6c0-2.1 1.7-3.9 3.9-3.9h17.4c2.1 0 3.9 1.7 3.9 3.9L111 135.4c0 2.1-.2 4-2.3 4z" />
                            </svg>
                            <p class={{ "ui-toast__text": true, "ui-toast__text--tip": this.type }}>{this.text}</p>
                        </div>
                    </div>
                </transition>
            )
        },
        watch: {
            visible(val) {
                if (val) {
                    for (let item of [...document.querySelectorAll('.toast')]) {
                        let instance = instances[item.dataset.uuid]

                        if (instance && instance.visible && instance !== this) {
                            instance.$emit('hide')
                            clearTimeout(instance.timerId)
                        }
                    }

                    instances[this.uuid = `toast${++count}`] = this
                    this.timerId = setTimeout(this.$emit.bind(this, 'hide'), Number(this.time))
                } else {
                    this.$emit('hide')
                    clearTimeout(this.timerId)
                    delete instances[this.uuid]
                }
            }
        }
    }

    Vue.use(plugin, Component)

    export default Component
</script>