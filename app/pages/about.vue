<script setup lang="ts">
import { computed } from 'vue'
import { z } from 'zod'
import type { TimelineItem } from '@nuxt/ui'

const experienceItemSchema = z.object(
  {
    date: z.date(),
    position: z.string(),
    company: z.object(
      {
        name: z.string(),
        url: z.string(),
        logo: z.string(),
        color: z.string()
      }
    )
  }
)

type experienceItemType = z.infer<typeof experienceItemSchema>

const { global } = useAppConfig()

const { data: stack } = await useAsyncData(
  'stack',
  () => queryCollection('stack').first()
)

const { data: page } = await useAsyncData(
  'about',
  () => queryCollection('about').first()
)

if (!page.value)
  throw createError(
    {
      statusCode: 404,
      statusMessage: 'Page not found',
      fatal: true
    }
  )

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description
})

const experienceItems = computed<TimelineItem[]>(() => {
  const experience = (page.value as any)?.body?.experience as { items: experienceItemType[] } | undefined
  if (!experience?.items) return []
  return experience.items.map(
    (item: experienceItemType): TimelineItem => ({
      date: item.date,
      title: item.position,
      description: item.company.name,
      icon: item.company.logo
    })
  )
})
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
      orientation="horizontal"
      headline="A few words about me"
      :ui="{
        container: 'lg:flex sm:flex-row items-center',
        title: '!mx-0 text-left',
        description: '!mx-0 text-left',
        links: 'justify-start'
      }"
    >
      <UColorModeAvatar
        class="sm:rotate-4 size-36 rounded-lg ring ring-default ring-offset-3 ring-offset-(--ui-bg)"
        :light="global.picture?.light!"
        :dark="global.picture?.dark!"
        :alt="global.picture?.alt!"
        size="128"
      />
    </UPageHero>
    <MDC
      :value="
        page.body.languages"
      unwrap="p"
      class="px-8"
    />
    <UPageSection
      :ui="{
        container: '!pt-0'
      }"
      headline="Work Experience"
    >
      <UTimeline
        :ui="{ item: 'sm:even:flex-row-reverse sm:even:-translate-x-[calc(100%-2rem)] sm:even:text-right' }"
        class="translate-x-0 sm:translate-x-[calc(50%-1rem)]"
        size="xl"
        :items="experienceItems"
      />
    </UPageSection>
    <Divider />
    <UPageSection
      :ui="{
        container: '!pt-0'
      }"
      headline="Tech Stack"
      description=" Some of the software and technologies I use on a daily basis"
    >
      <div class="flex flex-wrap gap-4">
        <SpotlightCard
          v-for="item in stack!.items"
          :key="item.name"
          white
        >
          <NuxtLink
            :to="item.link"
            target="_blank"
            :aria-label="item.name + ' link'"
            class="flex gap-2 p-6"
          >
            <UIcon
              :name="item.icon"
              class="size-9"
              :font-controlled="false"
              :alt="item.name + ' logo'"
              :aria-label="item.name + ' logo'"
            />
          </NuxtLink>
        </SpotlightCard>
      </div>
    </UPageSection>
  </UPage>
</template>
