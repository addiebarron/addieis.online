<!-- as of SvelteKit next.119: CANNOT USE SASS IN LAYOUT COMPONENTS -->

<script context="module">
	export function load({ error, status }) {
		return {
			props: {
        status,
        error,
			}
		};
	}
</script>

<script>
  import { fade } from 'svelte/transition';
  import { dev } from "$app/env";

  export let status, error;
</script>


<style lang="scss">
  div.container {
    padding: 20px;
    margin: auto;
    width: 100%;
    max-width: 800px;
    h1 {
      font-weight: 700;
      font-size: 20em;
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
      word-wrap: break-word;
    }
  }
</style>


<svelte:head>
  <title>{status}</title>
</svelte:head>

<div class="container" in:fade>
  <h1>{status}</h1>
  {#if status == 404}
    <p class="user-message" in:fade>There's nothing here!</p>
  {/if}
  <br/>
  {#if dev && error.stack}
    <p class="error-stack">{error.stack}</p>
  {/if}
</div>