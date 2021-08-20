<script context="module">
  export async function load({ fetch }) {
    const res = await fetch("data/projects.json");
    return { 
      props: {
        projects: await res.json(),
      }
    };
  }
</script>

<script>
  import Project from "$lib/Project.svelte";
  import CreateProjectModal from "$lib/CreateProjectModal.svelte";

  export let projects;

  let projects_creatable = true;
  let modal_show = false; 
</script>

<svelte:head>
  <title>addie b - projects</title>
</svelte:head>

<div class="projects">
  <div class="projects-grid">
    {#each projects as project}
      {#if project.show}
        <Project {project}/>
      {/if}
    {/each}
    {#if projects_creatable}
      <button id="create-project-button" on:click={() => {modal_show = true}}>
        +
      </button>
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
  }
</style>
