<template>
  <div class="hero container flex flex-col items-center justify-center min-h-screen">
    <UPageCard
      :ui="{ footer: 'mt-8' }"
      orientation="horizontal"
      reverse
      spotlight
      spotlight-color="primary"
      description="Turning your ideas into impactful designs"
    >
      <template #title>
        <p class="text-xs text-blue-400/80 mb-3 font-medium tracking-widest uppercase">
          Full-Stack Developer
        </p>
      </template>

      <template #header>
        <h1 class="text-2xl md:text-3xl font-semibold  mb-2 tracking-tight">
          Trevor Okwirri
        </h1>
      </template>

      <template #footer>
        <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
          <NuxtLink
            to="tel:+254795008730"
            class="pulse-blue px-6 py-2.5 rounded-full bg-transparent border border-blue-500/60 text-blue-400 text-sm font-medium hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 flex items-center justify-center md:justify-start gap-2 group w-full md:w-auto"
          >
            Let's talk
            <UIcon
              name="i-lucide-arrow-right"
              class="size-5 group-hover:translate-x-0.5 transition-transform text-blue-400"
            />
          </NuxtLink>

          <div class="flex gap-6 justify-center md:justify-start">
            <NuxtLink
              v-for="(contact) in contacts"
              :key="contact.label"
              :href="contact.href"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-blue-400 transition-colors duration-300 hover:scale-110 transform"
              :title="contact.label"
            >
              <UIcon
                :name="contact.icon"
                class="size-5"
              />
            </NuxtLink>
          </div>
        </div>
      </template>

      <NuxtImg
        src="/photo.png"
        alt="Profile"
        fill
        class="object-cover  fade-blend  fade-opacity w-full h-48 md:h-full max-h-[360px]"
      />
    </UPageCard>
  </div>
</template>

<script setup lang="ts">
const contacts = [
  {
    icon: 'i-tabler-brand-whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/+254795008730'
  },
  {
    icon: 'i-lucide-mail',
    label: 'Email',
    href: 'mailto:trevorokwirri@gmail.com'
  },
  {
    icon: 'i-lucide-globe',
    label: 'Website',
    href: '/'
  }
]
</script>

<style scoped>
.hero {
  background-image: url('/Cover.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

h1 {
  font-family: Poppins, sans-serif;
}

.fade-blend {
 --mask-t: linear-gradient(to bottom, transparent 0%, white 15%, white 85%, transparent 100%);
            --mask-l: linear-gradient(to right, transparent 0%, white 15%, white 85%, transparent 100%);
            -webkit-mask-image: var(--mask-t), var(--mask-l);
            mask-image: var(--mask-t), var(--mask-l);
            -webkit-mask-composite: intersect;
            mask-composite: intersect;
}

.fade-opacity {
  opacity: 0;
  transform: scale(1.02);
  animation: fadeIn 1.5s ease forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: scale(1.02);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
