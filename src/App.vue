<!-- App.vue -->
<template>
  <div class="card">
    <Toast />
    <div class="grid">
      <div class="col-12">
        <h1 class="text-center app-title">Медицинская информационная система</h1>
      </div>

      <!-- Список пациентов -->
      <div class="col-12 lg:col-4 md:col-5 mb-3">
        <Card>
          <template #header>
            <div class="flex align-items-center justify-content-center mb-3">
              <Avatar icon="pi pi-users" size="xlarge" class="mr-2" />
              <h2 class="m-0">Пациенты</h2>
            </div>
            <SearchPatient @search="searchPatients" />
          </template>
          <template #content>
            <div class="patients-container">
              <div v-if="filteredPatients.length === 0" class="no-results">
                <i class="pi pi-info-circle" style="font-size: 2rem"></i>
                <p>Пациенты не найдены</p>
              </div>
              <div class="patient-card" v-for="(patient, index) in filteredPatients" :key="index" @click="selectPatient(patient)">
                <div class="patient-info">
                  <h3>{{ patient.fullName }}</h3>
                  <p><strong>Дата рождения:</strong> {{ patient.birthDate }}</p>
                  <p><strong>Номер карты:</strong> {{ patient.cardNumber }}</p>
                </div>
                <Button label="Просмотр планов" icon="pi pi-file" class="p-button-primary" @click.stop="selectPatient(patient)" />
              </div>
            </div>
          </template>
        </Card>
      </div>

      <!-- Планы лечения -->
      <div class="col-12 lg:col-8 md:col-7" v-if="showPlans && selectedPatient">
        <Card>
          <template #header>
            <div class="patient-header">
              <div class="flex align-items-center mb-2">
                <Button 
                  icon="pi pi-arrow-left" 
                  class="p-button-text p-button-rounded back-button" 
                  @click="showPlans = false" 
                  aria-label="Назад к списку"
                />
                <h2 class="m-0 patient-name-header">{{ selectedPatient.fullName }}</h2>
              </div>
            </div>
          </template>
          <template #content>
            <!-- Мобильное представление с кнопками -->
            <div class="mobile-plan-selector" v-if="isMobile">
              <div class="plan-nav-buttons">
                <Button 
                  v-for="(planType, index) in planTypes" 
                  :key="index"
                  :label="planLabels[planType]"
                  :class="['plan-button', { 'p-button-outlined': currentPlan !== planType }]"
                  @click="currentPlan = planType"
                />
              </div>
              
              <div class="plan-content mt-3">
                <div v-if="currentPlan === 'orthodontic'">
                  <h3>Ортодонтический план лечения</h3>
                  <div v-for="(stage, index) in selectedPatient.plans.orthodontic" :key="index">
                    <h4>{{ stage.title }}</h4>
                    <ul>
                      <li v-for="(step, stepIndex) in stage.steps" :key="stepIndex">
                        {{ step }}
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div v-else-if="currentPlan === 'orthopedic'">
                  <h3>Ортопедический план лечения</h3>
                  <div v-for="(stage, index) in selectedPatient.plans.orthopedic" :key="index">
                    <h4>{{ stage.title }}</h4>
                    <ul>
                      <li v-for="(step, stepIndex) in stage.steps" :key="stepIndex">
                        {{ step }}
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div v-else-if="currentPlan === 'therapeutic'">
                  <h3>Терапевтический план лечения</h3>
                  <div v-for="(stage, index) in selectedPatient.plans.therapeutic" :key="index">
                    <h4>{{ stage.title }}</h4>
                    <ul>
                      <li v-for="(step, stepIndex) in stage.steps" :key="stepIndex">
                        {{ step }}
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div v-else-if="currentPlan === 'surgical'">
                  <h3>Хирургический план лечения</h3>
                  <div v-for="(stage, index) in selectedPatient.plans.surgical" :key="index">
                    <h4>{{ stage.title }}</h4>
                    <ul>
                      <li v-for="(step, stepIndex) in stage.steps" :key="stepIndex">
                        {{ step }}
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div class="back-container">
                  <Button 
                    icon="pi pi-arrow-left" 
                    label="Назад к выбору" 
                    class="p-button-secondary mt-3" 
                    @click="showPlans = false"
                  />
                </div>
              </div>
            </div>
            
            <!-- Десктопное представление с табами -->
            <TabView v-else>
              <TabPanel header="Ортодонтический план">
                <div class="plan-content">
                  <h3>Ортодонтический план лечения</h3>
                  <div v-for="(stage, index) in selectedPatient.plans.orthodontic" :key="index">
                    <h4>{{ stage.title }}</h4>
                    <ul>
                      <li v-for="(step, stepIndex) in stage.steps" :key="stepIndex">
                        {{ step }}
                      </li>
                    </ul>
                  </div>
                </div>
              </TabPanel>

              <TabPanel header="Ортопедический план">
                <div class="plan-content">
                  <h3>Ортопедический план лечения</h3>
                  <div v-for="(stage, index) in selectedPatient.plans.orthopedic" :key="index">
                    <h4>{{ stage.title }}</h4>
                    <ul>
                      <li v-for="(step, stepIndex) in stage.steps" :key="stepIndex">
                        {{ step }}
                      </li>
                    </ul>
                  </div>
                </div>
              </TabPanel>

              <TabPanel header="Терапевтический план">
                <div class="plan-content">
                  <h3>Терапевтический план лечения</h3>
                  <div v-for="(stage, index) in selectedPatient.plans.therapeutic" :key="index">
                    <h4>{{ stage.title }}</h4>
                    <ul>
                      <li v-for="(step, stepIndex) in stage.steps" :key="stepIndex">
                        {{ step }}
                      </li>
                    </ul>
                  </div>
                </div>
              </TabPanel>

              <TabPanel header="Хирургический план">
                <div class="plan-content">
                  <h3>Хирургический план лечения</h3>
                  <div v-for="(stage, index) in selectedPatient.plans.surgical" :key="index">
                    <h4>{{ stage.title }}</h4>
                    <ul>
                      <li v-for="(step, stepIndex) in stage.steps" :key="stepIndex">
                        {{ step }}
                      </li>
                    </ul>
                  </div>
                </div>
              </TabPanel>
            </TabView>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import { patientsList } from './data/mockData.js';
import SearchPatient from './components/SearchPatient.vue';

export default {
  components: {
    SearchPatient
  },
  data() {
    return {
      showPlans: false,
      selectedPatient: null,
      patients: patientsList,
      searchText: '',
      isMobile: false,
      currentPlan: 'orthodontic',
      planTypes: ['orthodontic', 'orthopedic', 'therapeutic', 'surgical'],
      planLabels: {
        orthodontic: 'Ортодонтический',
        orthopedic: 'Ортопедический',
        therapeutic: 'Терапевтический',
        surgical: 'Хирургический'
      }
    };
  },
  computed: {
    filteredPatients() {
      if (!this.searchText) {
        return this.patients;
      }
      
      const query = this.searchText.toLowerCase();
      return this.patients.filter(patient => 
        patient.fullName.toLowerCase().includes(query) || 
        patient.cardNumber.toLowerCase().includes(query) ||
        patient.birthDate.includes(query)
      );
    }
  },
  methods: {
    selectPatient(patient) {
      this.selectedPatient = patient;
      this.showPlans = true;
      this.currentPlan = 'orthodontic'; // Сбрасываем на первый план при выборе пациента
      
      // На мобильных устройствах прокручиваем к планам лечения
      if (window.innerWidth < 768) {
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }, 100);
      }
    },
    searchPatients(query) {
      this.searchText = query;
      if (this.filteredPatients.length === 0) {
        this.showPlans = false;
      }
    },
    checkScreenSize() {
      this.isMobile = window.innerWidth < 768;
    }
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize);
  }
};
</script>

<style>
.patients-container {
  max-height: 70vh;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 0.5rem;
}

.patient-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  margin-bottom: 1rem;
}

.patient-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}

.patient-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.plan-content {
  padding: 1rem;
}

h3 {
  color: #2196F3;
  margin-bottom: 1rem;
}

h4 {
  color: #0D47A1;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}

ul {
  padding-left: 1.5rem;
}

li {
  margin-bottom: 0.5rem;
}

/* Настройка скроллбара */
.patients-container::-webkit-scrollbar {
  width: 6px;
}

.patients-container::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.patients-container::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 10px;
}

.patients-container::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.no-results {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  color: #666;
  text-align: center;
}

/* Адаптивные стили */
@media screen and (max-width: 768px) {
  .app-title {
    font-size: 1.8rem;
  }
  
  .patient-name-header {
    font-size: 1.2rem;
    text-align: center;
  }
  
  .patient-card {
    padding: 0.8rem;
  }
  
  .plan-content {
    padding: 0.5rem;
  }
  
  .patients-container {
    max-height: 50vh;
  }
  
  .patient-header {
    position: relative;
    width: 100%;
  }
  
  .back-button {
    margin-right: 0.5rem;
  }
  
  .mobile-plan-selector .plan-nav-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .mobile-plan-selector .plan-button {
    flex: 1 1 auto;
    min-width: calc(50% - 0.5rem);
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0.5rem;
  }
  
  .mobile-plan-selector .back-container {
    display: flex;
    justify-content: center;
    margin-top: 1.5rem;
  }
  
  /* Оптимизация вкладок для мобильных */
  :deep(.p-tabview-nav) {
    display: flex;
    flex-wrap: wrap;
  }
  
  :deep(.p-tabview-nav li) {
    margin-bottom: 0.5rem;
  }
  
  :deep(.p-tabview-title) {
    font-size: 0.9rem;
  }
}

/* Настройки для очень маленьких экранов */
@media screen and (max-width: 480px) {
  .app-title {
    font-size: 1.5rem;
  }
  
  h3 {
    font-size: 1.2rem;
  }
  
  h4 {
    font-size: 1.1rem;
  }
  
  :deep(.p-tabview-title) {
    font-size: 0.8rem;
    white-space: nowrap;
  }
}
</style>