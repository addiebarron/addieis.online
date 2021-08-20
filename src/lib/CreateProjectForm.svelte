<script>
  export let previewProject;

  let files, imageBase64;

  function handleImageSelect (image) {
    const reader = new FileReader();
    reader.onload = (e) => {
      // preview the base64 image
      previewProject.imageSrc = e.target.result;
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
      action="/api/create"
      method="POST">
  <label for="title">Title</label>
  <input type="text" name="title" bind:value={previewProject.title}>

  <label for="description">Description</label>
  <textarea name="description" rows="2" height="1em" bind:value={previewProject.description}/>

  <label for="url">URL</label>
  <input type="text" name="url" bind:value={previewProject.url}>
  
  <label for="show">
    Show this item? 
    <input type="checkbox" name="show" bind:checked={previewProject.show}>
  </label>
  
  <!-- Image upload -->
  <label for="image">Upload an image</label>
  <input 
    type="file" 
    name="image" 
    accept=".jpg, .jpeg, .png"
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
  }
</style>