<script setup lang="ts">
import ItemLogo from '@/components/items/ItemLogo.vue';
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();

const toggleDarkMode = useToggle(isDark);
</script>

<template>
    <section class="relative flex min-h-svh items-center justify-center">
        <div class="container">
            <ItemLogo />

            <Button
                class="!absolute right-5 top-5"
                variant="text"
                icon="pi pi-moon"
                rounded
                @click="toggleDarkMode()"
            ></Button>

            <div class="relative mx-auto flex max-w-96 flex-col items-center justify-center">
                <div class="mr-auto">
                    <h1 class="text-h2 font-bold text-primary-700 dark:text-primary-100">
                        Your sanctuary of quiet reflection
                    </h1>
                    <h2 class="mt-1 text-h3 text-primary-700 dark:text-primary-400">Log in to your Noir account</h2>
                </div>

                <div
                    class="my-6 w-full before:absolute before:h-[1px] before:w-full before:bg-primary-700 before:content-['']"
                ></div>

                <Form class="flex w-full flex-col gap-4">
                    <div class="flex flex-col gap-1">
                        <InputText name="email" type="text" placeholder="Email" fluid />
                        <Message severity="error" size="small" variant="simple"></Message>
                    </div>
                    <div class="flex flex-col gap-1">
                        <InputText name="password" type="password" placeholder="Password" fluid />
                        <Message severity="error" size="small" variant="simple"></Message>
                    </div>
                    <Button
                        pt:root="bg-primary-600/80 text-primary-50 dark:bg-primary-800 hover:bg-primary-600/95 dark:text-primary-200 dark:hover:bg-primary-700/75"
                        type="submit"
                        label="Submit"
                        outlined
                    />
                </Form>
                <RouterLink
                    class="mr-auto mt-5 text-primary-800 transition-colors hover:text-primary-950 dark:text-primary-100 hover:dark:text-primary-emphasis"
                    to="/"
                    >Forgot your password?</RouterLink
                >
                <p class="mt-6 text-center text-primary-700 dark:text-primary-400">
                    Welcome to Noir! Here, your thoughts, emotions, and dreams find clarity and peace.
                </p>
            </div>
        </div>
    </section>
</template>
