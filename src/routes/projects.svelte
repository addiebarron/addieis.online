<script context="module">
  export async function load({ fetch, page }) {
    let projects = [];
    try {
      const res = await fetch("data/projects.json");
      projects = res.ok ? await res.json() : [];
    } catch {
      console.log('No data file.')
    }
    
    return { 
      props: {
        projects,
        sudo: page.query.has("sudo"),
      }
    };
  }
</script>

<script>
  import Project from "$lib/Project.svelte";
  import CreateProjectModal from "$lib/CreateProjectModal.svelte";

  export let projects, sudo;

  let modal_show = false; 
</script>

<svelte:head>
  <title>addie b - projects</title>
</svelte:head>

<div class="projects">
  <div class="projects-grid">
    {#if sudo}
      <button id="create-project-button" on:click={() => {modal_show = true}}>
        +
      </button>
    {/if}
    {#if projects.length}
      {#each projects as project}
        {#if project.show}
          <Project {project} bind:sudo />
        {/if}
      {/each}
    {:else}
      <div class="placeholder">
        No projects.
      </div>
    {/if}
  </div>
</div>

<CreateProjectModal bind:modal_show />

<style lang="scss">
  @import "../styles/theme";

  $grid-gap: 40px;

  .projects {
    overflow-y: scroll;
    height: 100%;
    width: 100%;
    padding: $grid-gap;

    .projects-grid {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, 375px);
      @media only screen and (max-width: 450px) {
        & {
          grid-template-columns: 1fr;
        }
      }
      //justify-content: center;
      gap: $grid-gap;
      max-width: 1520px;
      padding-bottom: 30px;
    }
    #create-project-button {
      height: 250px;
      font-size: 40px;
      color: gainsboro;
      cursor: pointer;
      background-color: white;
      border: solid 1px gainsboro;
      border-radius: 10px;
      &:hover {
        color: grey;
        border-color: grey;
      }
    }
    .placeholder {
      height: 250px;
      background: rgba(0,0,0,0.1);
      color: rgba(0,0,0,0.4);
      padding-top: 32%;
      line-height: 0;
      text-align: center;
    }
  }
</style>
