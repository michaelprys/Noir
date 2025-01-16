<script setup lang="ts">
// import IconCopyright from '@/components/icons/IconCopyright.vue'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-vue-next'
</script>

<template>
    <section class="min-h-svh flex items-center justify-center">
        <RouterLink class="absolute top-0 left-0" :to="{ name: 'login' }">
            <img class="object-cover m-5" src="@img/logo.webp" width="68" height="38" alt="Logo"
        /></RouterLink>
        <div class="max-w-96 mx-auto flex relative flex-col items-center justify-center">
            <div class="mr-auto">
                <h1 class="text-h2 font-bold">
                    Simplicity<br />
                    is the key to brilliance
                </h1>
                <h2 class="text-h3 mt-1 text-muted-foreground">Log in to your Noir account</h2>
            </div>
            <div
                class="before:content-[''] before:w-full before:h-[0.1px] before:bg-muted-light before:absolute my-5 w-full"
            ></div>
            <form class="flex flex-col w-full" action="#">
                <label for="email">Email</label>
                <input
                    class="mt-2 rounded-md bg-primary p-3 border border-muted-light"
                    type="email"
                    name="email"
                    placeholder="Enter your email address..."
                />
                <label class="mt-4" for="email">Password</label>
                <input
                    class="mt-2 rounded-md bg-primary p-3 border border-muted-light"
                    type="email"
                    name="email"
                    placeholder="Enter your password..."
                />
                <RouterLink class="mt-2 mr-auto text-muted-light hover:text-muted-foreground transition-colors" to="/"
                    >Forgot your password?</RouterLink
                >
                <button class="bg-primary py-2 mt-6 rounded-md border border-primary hover:bg-hover transition-colors">
                    Continue
                </button>
            </form>
            <p class="mt-6 text-muted-foreground text-center">
                Welcome to Noir! Here, your ideas, tasks, and projects become clearer and more organized. Start building
                your ideal workflow.
            </p>
            <!-- <span class="text-muted-light mt-2 flex items-center gap-2"><IconCopyright /> 2025 Noir, Inc.</span> -->
        </div>
    </section>
</template>
