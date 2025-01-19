<script setup lang="ts">
import IconBold from '@/components/icons/IconBold.vue';
import IconChevronDown from '@/components/icons/IconChevronDown.vue';
import IconImage from '@/components/icons/IconImage.vue';
import IconItalic from '@/components/icons/IconItalic.vue';
import IconListOrdered from '@/components/icons/IconListOrdered.vue';
import IconListUnordered from '@/components/icons/IconListUnordered.vue';
import IconQuote from '@/components/icons/IconQuote.vue';
import IconUnderline from '@/components/icons/IconUnderline.vue';
import Image from '@tiptap/extension-image';
import Underline from '@tiptap/extension-underline';
import StarterKit from '@tiptap/starter-kit';
import { Editor, EditorContent } from '@tiptap/vue-3';
import { onBeforeUnmount, onMounted, ref } from 'vue';

const editor = ref(null);

const menuHeadings = ref();
const menuNoteOptions = ref();

const headings = ref([
    {
        label: 'Headings',
        items: [
            {
                label: 'Default',
                command: () => editor.value.chain().focus().toggleHeading({ level: 6 }).run(),
            },
            {
                label: 'H3',
                command: () => editor.value.chain().focus().toggleHeading({ level: 3 }).run(),
            },
            {
                label: 'H2',
                command: () => editor.value.chain().focus().toggleHeading({ level: 2 }).run(),
            },
            {
                label: 'H1',
                command: () => editor.value.chain().focus().toggleHeading({ level: 1 }).run(),
            },
        ],
    },
]);
const noteOptions = ref([
    {
        label: 'Action',
        items: [
            {
                label: 'Add to favorites',
                icon: 'pi pi-star',
            },
            {
                label: 'Remove note',
                icon: 'pi pi-trash',
            },
        ],
    },
]);

const toggleHeading = (event) => {
    menuHeadings.value.toggle(event);
};
const toggleNoteOptions = (event) => {
    menuNoteOptions.value.toggle(event);
};

const addImage = () => {
    const url = window.prompt('Enter image URL');
    if (url) {
        editor.value?.chain().focus().setImage({ src: url }).run();
    }
};

onMounted(() => {
    editor.value = new Editor({
        extensions: [StarterKit, Underline, Image],
        editorProps: {
            attributes: {
                class: 'lg:prose-lg xl:prose-2xl focus:outline-none max-w-none [&_ol]:list-decimal [&_ul]:list-disc min-h-[33.125rem] max-h-[33.125rem] h-full text-h3 overflow-y-auto overflow-y-auto [&::-webkit-scrollbar]:w-3.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-primary-500 dark:[&::-webkit-scrollbar-track]:bg-transparent dark:[&::-webkit-scrollbar-thumb]:bg-primary-800 [&::-webkit-scrollbar-thumb]:cursor-default pr-10 leading-8',
            },
        },
        content: `<p>
        Goldshire is the second human town that most human characters visit during their adventures. Goldshire is centrally located just southwest of Northshire and has most low level class trainers and some profession trainers. Besides a blacksmith it has the first Inn that most human characters will encounter — the Lion's Pride Inn.

Goldshire has roads that lead to Stormwind City to the northwest, Northshire Abbey to the northeast, Westfall to the west, and Lakeshire (Redridge Mountains zone) to the east. Its prime location makes it an important trade town. Travelers, merchants, adventurers, Stormwind guards, and priests from the abbey all stop and make regular visits to the town on their way to and from Stormwind, usually enjoying the hospitality of the Lion's Pride Inn, one of the most respectable ale houses in Azeroth.

Marshal Dughan of the Stormwind Guard is in charge of the security of town and its surrounding areas. Many refugees from Westfall move to Goldshire and Elwynn Forest in an attempt to escape the Defias Brotherhood. It is considered a village by Stormwind standards.

Just south of Goldshire are located the Fargodeep Mine, The Maclure Vineyards, and The Stonefield Farm. To the east is Crystal Lake. Centuries ago, throughout the Eastern Kingdoms, the disparate human nations flourished, among them the smallest and most isolated of the kingdoms was Stormwind who found prosperity through the farmsteads that dotted the surrounding fertile region. As its population grew, small towns sprang up in the nearby regions, notably Goldshire in Elwynn Forest.[3]

During the Gnoll War, the village was attacked by the Redridge gnolls.[4]

First War
WCOnH logo This section concerns content related to Warcraft: Orcs & Humans.
During the First War, Goldshire and Moonbrook were the final two towns to fall to the old Horde prior to the razing of Stormwind City, as the goal of the orc Warchief was to sever the lifeline between King Llane and his people in preparation of the sack of Stormwind Keep.[5]
      </p>`,
    });
});

onBeforeUnmount(() => {
    editor.value.destroy();
});
</script>

<template>
    <div v-if="editor" class="container">
        <section class="relative px-16 pb-6 pt-16">
            <div class="flex items-center justify-between">
                <h1 class="text-h1 font-bold">Goldshire</h1>
                <Button
                    type="Button"
                    variant="text"
                    icon="pi pi-ellipsis-v"
                    rounded
                    @click="toggleNoteOptions"
                ></Button>
                <Menu ref="menuNoteOptions" :model="noteOptions" :popup="true" />
            </div>

            <div class="relative text-primary-600 dark:text-primary-400">
                <div class="mt-8 flex items-center gap-16">
                    <div class="flex w-full max-w-24 items-center">
                        <i class="pi pi-calendar mr-6" style="font-size: 1.2rem"></i>
                        <span class="font-bold">Date</span>
                    </div>
                    <span class="font-bold underline underline-offset-[3px]">21/06/2022</span>
                </div>
                <div
                    class="py-5 before:absolute before:h-[1px] before:w-full before:bg-primary-600 before:content-[''] dark:before:bg-primary-800"
                ></div>
            </div>
            <div class="relative text-primary-600 dark:text-primary-400">
                <div class="flex items-center gap-16">
                    <div class="flex w-full max-w-24 items-center">
                        <i class="pi pi-folder mr-6" style="font-size: 1.2rem"></i>
                        <span class="font-bold">Folder</span>
                    </div>
                    <span class="font-bold underline underline-offset-[3px]">Personal</span>
                </div>
                <div
                    class="pb-4 pt-8 before:absolute before:h-[1px] before:w-full before:bg-primary-600 before:content-[''] dark:before:bg-primary-800"
                ></div>
            </div>
            <div class="flex items-center gap-7">
                <div>
                    <Button
                        @click="toggleHeading"
                        aria-haspopup="true"
                        aria-controls="heading_menuHeadings"
                        variant="text"
                        size="small"
                    >
                        <span class="text-h3 font-bold text-primary-600 dark:text-primary-400">Text</span>
                        <IconChevronDown class="text-primary-700 dark:text-primary-400" />
                    </Button>
                    <Menu ref="menuHeadings" :model="headings" :popup="true" />
                </div>

                <div class="flex">
                    <Button
                        @click="editor.chain().focus().toggleBold().run()"
                        :disabled="!editor.can().chain().focus().toggleBold().run()"
                        :class="{ 'is-active': editor.isActive('bold') }"
                        variant="text"
                        size="small"
                    >
                        <IconBold class="text-primary-700 dark:text-primary-400" />
                    </Button>
                    <Button
                        @click="editor.chain().focus().toggleItalic().run()"
                        :disabled="!editor.can().chain().focus().toggleItalic().run()"
                        :class="{ 'is-active': editor.isActive('italic') }"
                        variant="text"
                        size="small"
                    >
                        <IconItalic class="text-primary-700 dark:text-primary-400" />
                    </Button>
                    <Button
                        @click="editor.chain().focus().toggleUnderline().run()"
                        :class="{ 'is-active': editor.isActive('underline') }"
                        variant="text"
                        size="small"
                    >
                        <IconUnderline class="text-primary-700 dark:text-primary-400" />
                    </Button>
                </div>
                <div class="flex">
                    <Button
                        @click="editor.chain().focus().toggleBlockquote().run()"
                        :class="{ 'is-active': editor.isActive('blockquote') }"
                        variant="text"
                        size="small"
                    >
                        <IconQuote class="text-primary-700 dark:text-primary-400" />
                    </Button>
                    <Button @click="addImage" variant="text" size="small" class="add-image-btn"
                        ><IconImage class="text-primary-700 dark:text-primary-400"
                    /></Button>
                </div>
                <div class="flex">
                    <Button
                        @click="editor.chain().focus().toggleBulletList().run()"
                        :class="{ 'is-active': editor.isActive('bulletList') }"
                        variant="text"
                        size="small"
                    >
                        <IconListUnordered class="text-primary-700 dark:text-primary-400" />
                    </Button>
                    <Button
                        @click="editor.chain().focus().toggleOrderedList().run()"
                        :class="{ 'is-active': editor.isActive('orderedList') }"
                        variant="text"
                        size="small"
                    >
                        <IconListOrdered class="text-primary-700 dark:text-primary-400" />
                    </Button>
                </div>
            </div>
            <div
                class="relative w-full py-4 before:absolute before:h-[1px] before:w-full before:bg-primary-600 before:content-[''] dark:before:bg-primary-800"
            ></div>
        </section>
        <EditorContent class="px-16" :editor="editor" />
    </div>
</template>
