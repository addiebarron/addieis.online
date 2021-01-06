<script>
  import { fade } from 'svelte/transition';

  export let status;
  export let error;

  const dev = process.env.NODE_ENV === 'development';
</script>

<style lang="scss">
  h1,
  p {
    margin: 0 auto;
  }

  .error-container {
    display: flex;
    flex-direction: column;
    height: 70%;
    width: 100%;
    h1 {
      font-family: 'Major Mono Display';
      font-size: 20em;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.3);
      margin: auto;
    }
    p {
      font-size: 1.5em;
      font-style: italic;
    }
  }

  h1 {
    font-weight: 700;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<div in:fade class="error-container">
  <h1>{status}</h1>
  {#if status == 404}
    <p in:fade>There's nothing here!</p>
  {/if}
</div>

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}
