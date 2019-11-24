<template>
  <b-dropdown id="dropdown-grouped" text="Categories" class="m-2">
    <b-dropdown-group id="dropdown-group-1" header="Foods">
      <b-dropdown-item-button>Meats</b-dropdown-item-button>
      <b-dropdown-item-button>Dairy products</b-dropdown-item-button>
      <b-dropdown-item-button>Vegetables</b-dropdown-item-button>
      <b-dropdown-item-button>Fruits</b-dropdown-item-button>
    </b-dropdown-group>
    <b-dropdown-group id="dropdown-group-1" header="Artisanal Items">
      <b-dropdown-item-button>Pottery</b-dropdown-item-button>
      <b-dropdown-item-button>Decorations</b-dropdown-item-button>
      <b-dropdown-item-button>Textiles</b-dropdown-item-button>
    </b-dropdown-group>
    <b-dropdown-group id="dropdown-group-1" header="Others">
      <b-dropdown-item-button>Tools</b-dropdown-item-button>
      <b-dropdown-item-button>Leather</b-dropdown-item-button>
      <b-dropdown-item-button>Clothing</b-dropdown-item-button>
    </b-dropdown-group>
  </b-dropdown>
</template>
<script>
export default {
}
</script>
