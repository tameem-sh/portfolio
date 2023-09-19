<template>
    <section>
        <VContainer>
            <div class="title-container">
                <h4 data-aos="writing-animation">Take a coffee and let's chat...</h4>
            </div>
            <div class="contact">
                <form @submit.prevent="sendEmail" data-aos="fade-right">
                    <input
                        type="text"
                        ref="name"
                        name="from_name"
                        placeholder="Your Name"
                        @blur="checkText(name)"
                    />

                    <input
                        type="text"
                        ref="email"
                        name="reply_to"
                        placeholder="Your Email"
                        @blur="checkEmail(email)"
                    />
                    
                    <textarea
                        name="message"
                        ref="message"
                        cols="30"
                        rows="6"
                        placeholder="Message..."
                        @blur="checkText(message)"
                    />
                    
                    <button type="submit">Send</button>
                </form>
                <div class="contact-details" data-aos="fade-left">
                    <h5>Contact me :</h5>
                    <div>
                        <Icon icon="ph:phone-duotone" class="icon" />
                        Phone :
                        <br />
                        <a href="tel:+963936581830">+963-936581830</a>
                    </div>
                    <div>
                        <Icon icon="ph:whatsapp-logo-duotone" class="icon" />
                        whatsapp :
                        <br />
                        <a href="https://wa.me/963936581830" target="_blank">+963-936581830</a>
                    </div>
                    <div>
                        <Icon icon="ph:envelope-open-duotone" class="icon" />
                        Email :
                        <br />
                        <a href="mailto:tameem.alshtaiwi@gmail.com" target="_blank">tameem.alshtaiwi@gmail.com</a>
                    </div>
                </div>
            </div>
        </VContainer>
    </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import emailjs from "emailjs-com";

import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-default.css';

const $toast = useToast();

const name = ref("");
const email = ref("");
const message = ref("");

const sendEmail = (e) => {
    try {
        if(e.srcElement[0].value && e.srcElement[1].value && e.srcElement[2].value) {
            emailjs.sendForm(
                "service_rqxk86h",
                "template_yxcre36",
                e.target,
                "rjDFuZKwKH66TJ_Nm",
            ).then( response => {
                if (response.status == 200) {
                    e.srcElement[0].value = "";
                    e.srcElement[1].value = "";
                    e.srcElement[2].value = "";
    
                    $toast.success('Message sent !..', { duration: 10000 });
                }
            })
        }
        else {
            throw new Error
        }
    } catch {
        $toast.error('Message not sent !..', { duration: 10000 });
    }
}

const checkText = e => {
    if(!e.value) {
        e.classList.add("error");
    }
    else {
        e.classList.remove("error");
    }
}

const checkEmail = e => {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    if(!re.test(e.value)) {
        e.classList.add("error");
    }
    else {
        e.classList.remove("error");
    }
}
</script>

<style lang="scss" scoped>
section {
    background: rgba($test-bg, 0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-block: 6rem;
    overflow: hidden;

    .title-container {
        width: fit-content;
        margin-inline: auto;
        
        h4 {
            color: $white-color;
            letter-spacing: $letter-spacing;
            text-wrap: nowrap;
            overflow: hidden;
        }
    }

    .contact {
        margin-top: 3rem;
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 2rem;

        input,
        textarea {
            width: 100%;
            padding: 0.75rem;
            margin-bottom: 1.25rem;
            background: $card-bg;
            border-radius: $border-radius;
            color: $white-color;
            resize: none;
            cursor: url(@images/cursor/text.svg), pointer;
    
            &::placeholder {
                color: $light-gray-color;
            }
    
            &:focus {
                outline: none;
                box-shadow: 0px 0px 11px 4px $sky-color;
            }

            &.error {
                box-shadow: 0px 0px 11px 4px $red-color;
            }
        }
    
        button {
            background-color: $sky-color;
            color: $white-color;
            padding: 12px 20px;
            border: none;
            border-radius: $border-radius;
            cursor: url(@images/cursor/pointer.svg), pointer;
    
            &:hover {
                background-color: rgba($sky-color, 0.8);
            }
        }

        .contact-details {
            color: $white-color;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            background: $card-bg;
            height: fit-content;
            padding: 1rem;
            border-radius: $border-radius;
            
            h5 {
                letter-spacing: $letter-spacing;
            }

            div {
                .icon {
                    margin-inline-end: 0.25rem;
                    color: $sky-color;
                    width: 1.5rem;
                    height: 1.5rem;
                }

                a {
                    color: $light-gray-color;
                    text-decoration: underline;
                    padding: 0.5rem 0 0 1rem;
                    cursor: url(@images/cursor/pointer.svg), pointer;
                }
            }
        }
    }
}

@media screen and (max-width: 1024px ) {
    section {
        margin-top: 4.5rem !important;
        
        .contact {
            margin-top: 1rem !important;
        }
    }
}
@media screen and (max-width: 768px ) {
    .contact {
        flex-direction: column !important;
    }
}
@media screen and (max-width: 425px ) {
    form {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
    }
}
@media screen and (max-width: 370px ) {
    h4 {
        text-wrap: wrap !important;
    }

    a {
        word-wrap: break-word;
    }
}
</style>

<style lang="scss">
.v-toast__item {
    border-radius: $border-radius;
    cursor: url(@images/cursor/pointer.svg), pointer;
    
    &.v-toast__item--error {
        background-color: $red-color;
        color: $white-color;
    }
    
    &.v-toast__item--success {
        background-color: $green-color;
        color: $gray-color;
    }
}
</style>