<script>
  import Nav from "../components/Nav.svelte";
  export let segment;
</script>

<style lang="scss" global>
  @import "../styles/global.scss";

  #sapper {
    display: grid;
    grid-template-rows: 70px 1fr;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    main {
      overflow: scroll;
      display: flex;
    }
  }
</style>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;600&display=swap"
    rel="stylesheet" />
</svelte:head>

<Nav {segment} />

<main>
  <slot />
</main>

<!-- <Footer /> -->
