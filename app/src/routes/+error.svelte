<!-- as of SvelteKit next.119: CANNOT USE SASS IN LAYOUT COMPONENTS -->

<script>
  import { fade } from 'svelte/transition';
  import { dev } from "$app/environment";
  import { page } from "$app/stores";

  const stackLines = $page.error.stack.split("\n");
</script>


<style lang="scss">
  div.container {
    padding: 20px;
    margin: auto;
    width: 100%;
    max-width: 800px;
    h1 {
      text-align: center;
      font-weight: 700;
      font-size: 15em;
      font-weight: bold;
      color: rgba(0, 0, 0, 0.3);
      margin: auto;
      @media (max-width: 480px) {
        font-size: 10em;
      }
    }
    p.user-message {
     font-style: italic;
    }
    p.error-stack { 
      color: #ff7575;
      background: #333333;
      border-radius: 5px;
      word-wrap: break-word;
      text-indent: -2em;
      padding: 1em;
      padding-left: 3em;
    }
  }
</style>


<svelte:head>
  <title>{$page.status}</title>
</svelte:head>

<div class="container" in:fade|global>
  <h1>{$page.status}</h1>
  {#if $page.status == 404}
    <p class="user-message" in:fade|global>There's nothing here!</p>
  {/if}
  <br/>
  {#if dev && $page.error.stack}
    <p class="error-stack">
      {#each stackLines as line}
         <p>{line}</p>
      {/each}
    </p>
  {/if}
</div>