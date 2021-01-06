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

<Nav {segment} />

<main>
  <slot />
</main>

<!-- <Footer /> -->
