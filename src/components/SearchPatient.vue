<!-- SearchPatient.vue -->
<template>
  <div class="search-patient-container">
    <div class="custom-search-wrapper">
      <i class="pi pi-search search-icon"></i>
      <InputText 
        v-model="searchQuery" 
        placeholder="Поиск пациента..." 
        class="custom-search-input"
        @input="onSearch" 
      />
      <i 
        v-if="searchQuery" 
        class="pi pi-times clear-icon" 
        @click="clearSearch"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchPatient',
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    onSearch() {
      this.$emit('search', this.searchQuery);
    },
    clearSearch() {
      this.searchQuery = '';
      this.$emit('search', '');
    }
  }
};
</script>

<style scoped>
.search-patient-container {
  margin-bottom: 1.5rem;
  width: 100%;
}

.custom-search-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  padding: 0 12px;
  transition: all 0.3s ease;
  height: 42px;
  width: 100%;
}

.custom-search-wrapper:focus-within {
  box-shadow: 0 0 0 1px #2196F3;
  border-color: #2196F3;
}

.search-icon {
  color: #777;
  font-size: 1rem;
  margin-right: 8px;
  flex-shrink: 0;
}

.custom-search-input {
  flex: 1;
  border: none !important;
  padding: 0 !important;
  font-size: 14px;
  background: transparent;
  height: 100%;
  width: 100%;
}

.custom-search-input:focus {
  outline: none !important;
  box-shadow: none !important;
}

.clear-icon {
  cursor: pointer;
  color: #777;
  font-size: 0.85rem;
  transition: color 0.2s;
  flex-shrink: 0;
}

.clear-icon:hover {
  color: #d32f2f;
}

:deep(.p-inputtext) {
  margin: 0;
  padding: 0;
}

/* Адаптивные стили */
@media screen and (max-width: 480px) {
  .custom-search-wrapper {
    height: 38px;
    padding: 0 8px;
  }
  
  .custom-search-input {
    font-size: 13px;
  }
  
  .search-icon {
    font-size: 0.9rem;
    margin-right: 6px;
  }
}
</style>