<script>
  import ProjectForm from "$lib/ProjectForm.svelte";
  import { createEventDispatcher } from "svelte";
  import Project from "./Project.svelte";

  const dispatch = createEventDispatcher();

  export let modalOptions;

  $: ({ type, project } = modalOptions);
</script>

<div id="project-modal" class="overlay">
  <div id="project-editor" class="center">
    <h1>{type} project {project ? `"${project.title}"` : ''}</h1>
    <button id="close-button" on:click={() => dispatch('close')}>×</button>
    <ProjectForm type={modalOptions.type} project={modalOptions.project} />
  </div>
</div>

<style lang="scss">
  @import "../styles/theme";
  #project-editor {
    width: 450px;
    padding: 20px;
    padding-bottom: 30px;
    border-radius: 10px;
    border: solid 1px black;
    background-color: white;
    h1 {
      text-align: center;
      font-size: 20px;
    }
    #close-button {
      position: absolute;
      top: 5px;
      right: 10px;
      border: 0;
      padding: 0;
      background-color: transparent;
      font-size: 20px;
      cursor: pointer;
    }
    .project-preview {
      width: 375px;
      margin: auto;
      padding-top: 10px;
    }
  }
</style>
