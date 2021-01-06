<script context="module">
  import Project from "../components/Project.svelte";

  export async function preload(page, session) {
    const apiURL = session.CMS_API_URL;
    const res = await this.fetch(apiURL + "/portfolio-items"); // served from strapi
    const projects = await res.json();

    projects.forEach((project) => {
      project.imagePath = apiURL;
      // Node <=12
      if (project.image) {
        if (project.image.formats) {
          if (project.image.formats.medium) {
            project.imagePath += project.image.formats.medium.url;
          } else {
            project.imagePath += project.image.url;
          }
        } else {
          project.imagePath += project.image.url;
        }
      } else {
        project.imagePath = null;
      }
      // Node >=14
      // project.imagePath += project.image.formats?.medium?.url || project.image.url;
    });

    projects.reverse(); // CMS weirdness

    return { projects };
  }
</script>

<script>
  export let projects;
</script>

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
  }
</style>

<svelte:head>
  <title>addie b - projects</title>
</svelte:head>

<div class="projects">
  <div class="projects-grid">
    {#each projects as project}
      {#if project.show}
        <Project {project} />
      {/if}
    {/each}
  </div>
</div>
