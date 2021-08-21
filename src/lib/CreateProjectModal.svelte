<script>
  import Project from "$lib/Project.svelte";
  import CreateProjectForm from "$lib/CreateProjectForm.svelte";

  import { ProjectData } from '$lib/store';
  
  export let modal_show
  
  let previewProject = new ProjectData();
</script>

{#if modal_show}
  <div id="create-project-modal" class="overlay">
    <div id="project-editor" class="center">
 
      <button id="close-button" on:click={() => {modal_show = false}}>×</button>

      <!-- Project creation form -->
      <CreateProjectForm bind:previewProject />

    </div>
  </div>
{/if}

<style lang="scss">
  @import "../styles/theme";
    #project-editor {
      width: 450px;
      padding: 20px;
      padding-bottom: 30px;
      border-radius: 10px;
      border: solid 1px black;
      background-color: white;
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