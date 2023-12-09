<!-- as of SvelteKit next.119: CANNOT USE SASS IN LAYOUT COMPONENTS -->

<script>
  import Nav from "$lib/Nav.svelte";
  import { page } from '$app/stores';
</script>

<style lang="scss" global>
  @use "../styles/global";

  #svelte {
    main {
      overflow: scroll;
      display: flex;
    }
    display: grid;
    grid-template-rows: 70px 1fr;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
</style>

<Nav path={$page.url.pathname} />

<main>
  <slot />
</main>
