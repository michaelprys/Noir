<script setup lang="ts">
import Editor from '@/components/Editor.vue';
import ItemLogo from '@/components/items/ItemLogo.vue';
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();

const toggleDarkMode = useToggle(isDark);
</script>

<template>
    <div class="flex">
        <div class="relative flex min-h-svh w-full max-w-[18.75rem] select-none flex-col justify-center">
            <div class="flex h-full flex-col">
                <div class="flex shrink-0 items-center justify-between px-5 pt-4">
                    <span class="inline-flex items-center gap-2">
                        <ItemLogo />
                    </span>
                    <Button class="mr-1.5" type="button" variant="text" icon="pi pi-search" rounded></Button>
                </div>
                <Button class="mx-5 mt-7" variant="outlined" type="button" icon="pi pi-plus" label="New Note"></Button>
                <div class="overflow-y-auto">
                    <ul class="m-0 list-none p-2">
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
                                class="p-ripple flex cursor-pointer items-center justify-between p-4 text-primary-800 dark:text-primary-500"
                            >
                                <span class="font-medium">Folders</span>
                                <Button
                                    v-ripple="false"
                                    type="button"
                                    variant="text"
                                    icon="pi pi-folder-plus"
                                    rounded
                                ></Button>
                            </div>
                            <ul class="m-0 list-none overflow-hidden p-0">
                                <li>
                                    <a
                                        v-ripple
                                        class="p-ripple flex cursor-pointer items-center rounded p-4 text-primary-800 transition-colors duration-150 hover:bg-primary-500/40 dark:text-primary-400 dark:hover:bg-primary-800"
                                    >
                                        <i class="pi pi-folder mr-2"></i>
                                        <button class="font-medium">Personal</button>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="m-0 list-none p-2">
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
                                class="p-ripple flex cursor-pointer items-center justify-between p-4 text-primary-800 dark:text-primary-500"
                            >
                                <span class="font-medium">More</span>
                            </div>
                            <ul class="m-0 list-none overflow-hidden p-0">
                                <li>
                                    <a
                                        v-ripple
                                        class="p-ripple flex cursor-pointer items-center rounded p-4 text-primary-800 transition-colors duration-150 hover:bg-primary-500/40 dark:text-primary-400 dark:hover:bg-primary-800"
                                    >
                                        <i class="pi pi-bookmark mr-2"></i>
                                        <span class="font-medium">Bookmarks</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        v-ripple
                                        class="p-ripple flex cursor-pointer items-center rounded p-4 text-primary-800 transition-colors duration-150 hover:bg-primary-500/40 dark:text-primary-400 dark:hover:bg-primary-800"
                                    >
                                        <i class="pi pi-trash mr-2"></i>
                                        <span class="font-medium">Trash</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        v-ripple
                                        class="p-ripple flex cursor-pointer items-center rounded p-4 text-primary-800 transition-colors duration-150 hover:bg-primary-500/40 dark:text-primary-400 dark:hover:bg-primary-800"
                                    >
                                        <i class="pi pi-cog mr-2"></i>
                                        <span class="font-medium">Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        v-ripple
                                        class="p-ripple flex cursor-pointer items-center rounded p-4 text-primary-800 transition-colors duration-150 hover:bg-primary-500/40 dark:text-primary-400 dark:hover:bg-primary-800"
                                        @click="toggleDarkMode()"
                                    >
                                        <i class="pi pi-moon mr-2"></i>
                                        <span class="inline-block font-medium">
                                            {{ isDark ? 'Dusk' : 'Dawn' }}
                                        </span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="my-6 flex items-center gap-2 px-5 pt-4">
                <Button class="flex-auto" variant="text" label="Account" icon="pi pi-user"></Button>
                <Button
                    class="flex-auto"
                    pt:root="text-red-600 hover:bg-red-900/10 dark:text-red-300/80"
                    variant="text"
                    label="Logout"
                    icon="pi pi-sign-out"
                    severity="danger"
                ></Button>
            </div>
        </div>
        <div
            class="w-full max-w-[21.875rem] border-x border-primary-600/20 bg-primary-400 dark:border-x dark:border-primary-800/30 dark:bg-primary-950"
        >
            <div class="flex h-full w-full flex-col px-5 pt-6">
                <span class="font-bold text-primary-700 dark:text-primary-400">Personal</span>
                <a
                    v-ripple
                    class="p-ripple mt-4 cursor-pointer items-center rounded bg-primary-500/20 p-4 text-primary-800 transition-colors duration-150 dark:bg-primary-800/30 dark:text-primary-400"
                >
                    <div class="flex items-center justify-between">
                        <div class="font-bold text-primary-700 dark:text-primary-400">Goldshire</div>
                    </div>
                    <div>
                        <div class="text-primary-800 dark:text-primary-500">31/11/2024</div>
                        <div class="text-primary-800 dark:text-primary-400">Goldshire is the second...</div>
                    </div>
                </a>
            </div>
        </div>

        <Editor />
    </div>
</template>
