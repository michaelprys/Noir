<script setup lang="ts"></script>

<template>
    <section class="min-h-svh flex items-center justify-center">
        <RouterLink class="absolute top-0 left-0" :to="{ name: 'login' }">
            <img class="object-cover m-5" src="@img/logo.webp" width="68" height="38" alt="Logo"
        /></RouterLink>
        <div class="max-w-96 mx-auto flex relative flex-col items-center justify-center">
            <div class="mr-auto">
                <h1 class="text-h2 font-bold text-primary-100">Your sanctuary of quiet reflection</h1>
                <h2 class="text-h3 mt-1 text-muted-color">Log in to your Noir account</h2>
            </div>

            <div
                class="before:content-[''] before:w-full before:h-[1px] before:bg-emphasis my-6 before:absolute w-full"
            ></div>

            <Form class="flex flex-col gap-4 w-full">
                <div class="flex flex-col gap-1">
                    <InputText name="email" type="text" placeholder="Email" fluid />
                    <Message severity="error" size="small" variant="simple"></Message>
                </div>
                <div class="flex flex-col gap-1">
                    <InputText name="password" type="password" placeholder="Password" fluid />
                    <Message severity="error" size="small" variant="simple"></Message>
                </div>
                <Button type="submit" severity="secondary" label="Submit" />
            </Form>
            <RouterLink class="mt-5 mr-auto text-primary-100 hover:text-primary-emphasis transition-colors" to="/"
                >Forgot your password?</RouterLink
            >
            <p class="mt-6 text-center text-muted-color">
                Welcome to Noir! Here, your thoughts, emotions, and dreams find clarity and peace.
            </p>
        </div>
    </section>
</template>
