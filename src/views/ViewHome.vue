<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import { ref } from 'vue';

const visible = ref(true);

const isDark = useDark({ selector: 'body' });

const toggleDarkMode = useToggle(isDark);
</script>

<template>
    <div class="flex min-h-svh">
        <div class="card flex flex-col max-w-[18.75rem] w-full bg-primary dark:bg-primary-950 justify-center">
            <div class="flex flex-col h-full">
                <div class="flex items-center justify-between px-5 pt-4 shrink-0">
                    <span class="inline-flex items-center gap-2">
                        <RouterLink class="mr-auto" :to="{ name: 'login' }">
                            <img
                                class="object-cover invert dark:invert-0"
                                src="@img/logo.webp"
                                width="68"
                                height="38"
                                alt="Logo"
                        /></RouterLink>
                    </span>
                    <Button class="mr-2" type="button" variant="text" icon="pi pi-search"></Button>
                </div>
                <Button
                    class="mx-5 mt-7"
                    severity="contrast"
                    variant="outlined"
                    type="button"
                    icon="pi pi-plus"
                    label="New Note"
                ></Button>
                <div class="overflow-y-auto">
                    <ul class="list-none p-2 m-0">
                        <li>
                            <div
                                v-ripple
                                v-styleclass="{
                                    selector: '@next',
                                    enterFromClass: 'hidden',
                                    enterActiveClass: 'animate-slidedown',
                                    leaveToClass: 'hidden',
                                    leaveActiveClass: 'animate-slideup',
                                }"
                                class="p-4 flex items-center justify-between text-surface-700 dark:text-surface-400 cursor-pointer p-ripple"
                            >
                                <span class="font-medium">Folders</span>
                                <Button type="button" variant="text" icon="pi pi-folder-plus"></Button>
                            </div>
                            <ul class="list-none p-0 m-0 overflow-hidden">
                                <li>
                                    <a
                                        v-ripple
                                        class="flex items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple"
                                    >
                                        <i class="pi pi-folder mr-2"></i>
                                        <button class="font-medium" @click="visible = true">Personal</button>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="list-none p-2 m-0">
                        <li>
                            <div
                                v-ripple
                                v-styleclass="{
                                    selector: '@next',
                                    enterFromClass: 'hidden',
                                    enterActiveClass: 'animate-slidedown',
                                    leaveToClass: 'hidden',
                                    leaveActiveClass: 'animate-slideup',
                                }"
                                class="p-4 flex items-center justify-between text-surface-700 dark:text-surface-400 cursor-pointer p-ripple"
                            >
                                <span class="font-medium">More</span>
                            </div>
                            <ul class="list-none p-0 m-0 overflow-hidden">
                                <li>
                                    <a
                                        v-ripple
                                        class="flex items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple"
                                    >
                                        <i class="pi pi-bookmark mr-2"></i>
                                        <span class="font-medium">Bookmarks</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        v-ripple
                                        class="flex items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple"
                                    >
                                        <i class="pi pi-trash mr-2"></i>
                                        <span class="font-medium">Trash</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        v-ripple
                                        class="flex items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple"
                                    >
                                        <i class="pi pi-cog mr-2"></i>
                                        <span class="font-medium">Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        v-ripple
                                        class="flex items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-100 dark:text-surface-0 dark:hover:bg-surface-800 duration-150 transition-colors p-ripple"
                                        @click="toggleDarkMode()"
                                    >
                                        <i class="pi pi-moon mr-2"></i>
                                        <span class="inline-block font-medium">
                                            Theme: {{ isDark ? 'Abyss' : 'Storm' }}
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="flex items-center gap-2 px-5 pt-4 my-6">
                <Button
                    class="flex-auto"
                    variant="outlined"
                    label="Account"
                    icon="pi pi-user"
                    severity="contrast"
                    outlined
                ></Button>
                <Button
                    class="flex-auto dark:text-primary-200"
                    variant="text"
                    label="Logout"
                    icon="pi pi-sign-out"
                    severity="danger"
                ></Button>
            </div>
        </div>
        <div class="max-w-[21.875rem] w-full bg-primary-600 dark:bg-primary-900">
            <div class="flex flex-col h-full px-5 pt-6 w-full">
                <span class="font-medium text-primary-100">Personal</span>
                <a
                    v-ripple
                    class="mt-4 dark:bg-surface-800 items-center cursor-pointer p-4 rounded text-surface-700 hover:bg-surface-400 bg-surface-500 dark:text-surface-0 dark:hover:bg-surface-700 duration-150 transition-colors p-ripple"
                >
                    <div class="text-primary-100 font-bold">My plans for the future</div>
                    <div>
                        <div class="text-primary-200 dark:text-primary-400">31/11/2024</div>
                        <div class="text-primary-100">Next year I want to...</div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>
