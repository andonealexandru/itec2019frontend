<template>
<div class="signin">
    <div class="form-wrapper">
    <form @submit.prevent="handleSubmit">
    <div class="form-item">
      <label for="name"></label>
      <input v-model="form.name" type="text" name="name" required="required" placeholder="Object" />
    </div>
    <div class="form-item">
      <label for="description"></label>
      <input v-model="form.description" type="text" name="description" required="required" placeholder="Description" />
    </div>
    <div class="form-item">
      <label for="unit"></label>
      <input v-model="form.unit" type="text" name="unit" required="required" placeholder="Unit" />
    </div>
    <div class="form-item">
      <label for="unitPrice"></label>
      <input v-model="form.unitPrice" type="text" name="unitPrice" required="required" placeholder="Unit price" />
    </div>
    <div class="form-item">
      <label for="availableUnits"></label>
      <input v-model="form.unit" type="text" name="availableUnits" required="required" placeholder="Available units" />
    </div>
    </form>
    <div class="form-footer">
    <div class="button-panel" @click="addObject">
    <button class="button">Add Object</button></div>
    </div>
    </div>
</div>
</template>
<script>
export default {
  name: 'addProduct',
  data () {
    return {
      form: {
        name: '',
        description: '',
        unit: '',
        unitPrice: '',
        availableUnits: ''
      }
    }
  },
  methods: {
    addObject () {
    }
  }

}
</script>
<style>
/* Fonts */
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400);

/* fontawesome */
@import url(http://weloveiconfonts.com/api/?family=fontawesome);
[class*="fontawesome-"]:before {
  font-family: 'FontAwesome', sans-serif;
}

/* Simple Reset */
* { margin: 0; padding: 0; box-sizing: border-box; }

/* body */
body {
  background: #cccccc;
  color: #5e5e5e;
  font: 400 87.5%/1.5em 'Open Sans', sans-serif;
}
/* Form Layout */
.form-wrapper {
  background:#ffffff;
  margin: 3em auto;
  padding: 0 1em;
  max-width: 370px;
}
form {
  padding: 0 1.5em;
}

.form-item {
  margin-bottom: 0.75em;
  width: 100%;
}

.form-item input {
  background: #fafafa;
  border: none;
  border-bottom: 2px solid #e9e9e9;
  color: #666;
  font-family: 'Open Sans', sans-serif;
  font-size: 1em;
  height: 50px;
  transition: border-color 0.3s;
  width: 100%;
}

.form-item input:focus {
  border-bottom: 2px solid #c0c0c0;
  outline: none;
}

.button-panel {
  margin: 2em 0 0;
  width: 100%;
}

.button-panel .button {
  background: #17a2b7;
  border: none;
  color: #fff;
  cursor: pointer;
  height: 50px;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2em;
  letter-spacing: 0.05em;
  text-align: center;
  text-transform: uppercase;
  transition: background 0.3s ease-in-out;
  width: 100%;
}

.button:hover {
  background: #117888;
}

.form-footer {
  font-size: 1em;
  padding: 2em 1.5em;
  text-align: center;
}

.form-footer a {
  color: #8c8c8c;
  text-decoration: none;
  transition: border-color 0.3s;
}

.form-footer a:hover {
  border-bottom: 1px dotted #8c8c8c;
}
</style>
