<script setup lang="ts"></script>

<template>
  <header>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="mobile-web-app-capable" content="yes" />

    <link rel="manifest" href="/site.webmanifest" />
    <!-- <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#9a0000" /> -->
    <!-- <meta name="msapplication-TileColor" content="#dae1ee" /> -->
    <!-- <meta name="theme-color" content="#dae1ee" /> -->
    <!-- reset.css destyle -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/destyle.css@1.0.15/destyle.css" />
  </header>

  <slot> </slot>

  <footer className="{styles.footer}">
    <span>
      © 2023
      <a href="//www.impl.co.jp/" target="_blank" rel="noreferrer"> @satok </a>
      .
    </span>
    <span>
      <Link href="/privacy">{t.PRIVACY_POLICY}</Link>
    </span>
  </footer>
</template>

<style scoped></style>
