<script>
  import {colors} from "$lib/store"

  let files, imageBase64, color;

  function handleImageSelect (image) {
    const reader = new FileReader();
    reader.onload = async (e) => {
      imageBase64 = e.target.result.split(',')[1];
    };
    reader.readAsDataURL(image);
  };

  async function handleFormSubmit(e) {
    e.target.elements['image'].disabled = true;
  }

  $: if (files) handleImageSelect(files[0])

</script>

<form id="project-form"
      on:submit={handleFormSubmit}
      action="/api/project/create"
      method="POST">
  <label for="title">Title</label>
  <input type="text" name="title" required>

  <label for="description" required>Description</label>
  <textarea name="description" rows="2" height="1em"/>

  <label for="url">URL</label>
  <input type="text" name="url" required pattern="https?:\/\/.*" />

  <label for="show">
    Show this item? 
    <input type="checkbox" name="show" checked={true}/>
  </label>

  <label for="color">
    Color:
    <div class="color-preview" style="background-color: {color};"></div>
    <select bind:value={color} name="color" >
      {#each colors as colorOption}
        <option value={colorOption}>{colorOption}</option>
      {/each}
    </select>
  </label>
  
  
  <!-- Image upload -->
  <label for="image">Upload an image</label>
  <input 
    type="file" 
    name="image" 
    accept=".jpg, .jpeg, .png"
    required
    bind:files
  >

  <input type="hidden" name="imageBase64" bind:value={imageBase64}>

  <button type="submit">Create</button>
</form>


<style lang="scss">
  #project-form {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    input, button, label, textarea {
      padding: 1px;
      margin: 2px 0;
      resize: none;
    }
    button {
      width: min(50%, 200px);
      margin: 10px auto 0 auto;
      padding: 2px;
      cursor: pointer;
    }
    select {
      display: inline;
    }
    .color-preview {
      display: inline-block;
      position:relative;
      top: 3px;
      height: 1em;
      width: 1em;
    }
  }
</style>