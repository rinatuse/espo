<!-- App.vue с кнопкой назад для мобильного представления -->
<template>
  <div class="card">
    <Toast />
    <div class="grid">
      <div class="col-12">
        <div class="header-container">
          <div class="logo-wrapper">
            <img src="../src/assets/espo.jpg" alt="ESPO Logo" class="espo-logo" />
          </div>
          <h1 class="app-title">Медицинская информационная система</h1>
        </div>
      </div>

      <!-- Список пациентов -->
      <div class="col-12 lg:col-4 md:col-5 mb-3" v-if="!isMobile || !showPlans">
        <Card>
          <template #header>
            <div class="flex align-items-center justify-content-center mb-3">
              <Avatar icon="pi pi-users" size="xlarge" class="mr-2" />
              <h2 class="m-0">Пациенты</h2>
            </div>
            <SearchPatient @search="searchPatients" ref="searchPatient" />
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

      <!-- Планы лечения или дашборд -->
      <div class="col-12 lg:col-8 md:col-7" v-if="!isMobile || showPlans">
        <Card v-if="selectedPatient && showPlans">
          <template #header>
            <div class="patient-header">
              <!-- Кнопка назад в верхнем левом углу для мобильного представления -->
              <Button 
                v-if="isMobile"
                icon="pi pi-arrow-left" 
                class="p-button-text mobile-back-button" 
                @click="showPlans = false"
              />
              <h2 class="m-0 patient-name-header">{{ selectedPatient.fullName }}</h2>
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
            
            <!-- Десктопное представление с кастомными табами -->
            <div v-else>
              <div class="custom-tabs">
                <div 
                  v-for="(tab, index) in tabItems" 
                  :key="index"
                  :class="['custom-tab', { 'custom-tab-active': activeTabIndex === index }]"
                  @click="activeTabIndex = index"
                >
                  {{ tab.label }}
                </div>
              </div>
              
              <div class="tab-content-wrapper">
                <!-- Ортодонтический план -->
                <div v-if="activeTabIndex === 0" class="plan-content">
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
                
                <!-- Ортопедический план -->
                <div v-if="activeTabIndex === 1" class="plan-content">
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
                
                <!-- Терапевтический план -->
                <div v-if="activeTabIndex === 2" class="plan-content">
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
                
                <!-- Хирургический план -->
                <div v-if="activeTabIndex === 3" class="plan-content">
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
              </div>
            </div>
          </template>
        </Card>
        
        <!-- Дашборд статистики, если пациент не выбран -->
        <Card v-else>
          <template #header>
            <div class="flex align-items-center justify-content-center mb-3">
              <Avatar icon="pi pi-chart-bar" size="xlarge" class="mr-2" />
              <h2 class="m-0">Статистика</h2>
            </div>
          </template>
          <template #content>
            <PatientsDashboard />
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
// Скрипт не изменяется
import { patientsList } from './data/mockData.js';
import SearchPatient from './components/SearchPatient.vue';
import PatientsDashboard from './components/PatientsDashboard.vue';

export default {
  components: {
    SearchPatient,
    PatientsDashboard
  },
  data() {
    return {
      showPlans: false,
      selectedPatient: null,
      patients: patientsList,
      searchText: '',
      isMobile: false,
      currentPlan: 'orthodontic',
      activeTabIndex: 0,
      tabItems: [
        { label: 'Ортодонтический план', value: 'orthodontic' },
        { label: 'Ортопедический план', value: 'orthopedic' },
        { label: 'Терапевтический план', value: 'therapeutic' },
        { label: 'Хирургический план', value: 'surgical' }
      ],
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
      this.activeTabIndex = 0; // Сбрасываем активную вкладку на первую
      
      // Сбрасываем фильтрацию
      this.searchText = '';
      
      // Сбрасываем поле поиска через ссылку на компонент
      if (this.$refs.searchPatient) {
        this.$refs.searchPatient.resetSearch();
      }
      
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
.header-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.logo-wrapper {
  display: flex;
  align-items: center;
}

.espo-logo {
  height: 40px;
  width: auto;
}

/* Стили для кнопки назад в мобильном представлении */
.patient-header {
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
}

.mobile-back-button {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  padding: 0.5rem;
  min-width: 2.5rem;
  height: 2.5rem;
}

.patient-name-header {
  width: 100%;
  text-align: center;
}

@media screen and (max-width: 768px) {
  .header-container {
    flex-direction: column;
  }
  
  .espo-logo {
    height: 30px;
    margin-bottom: 0.5rem;
  }
}

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

.full-width {
  width: 100%;
}

/* Стили для кастомных вкладок */
.custom-tabs {
  display: flex;
  border-bottom: 1px solid #dee2e6;
  margin-bottom: 1rem;
}

.custom-tab {
  padding: 0.75rem 1.25rem;
  cursor: pointer;
  font-weight: 600;
  margin-right: 0.25rem;
  border: 1px solid #dee2e6;
  border-bottom: none;
  border-radius: 4px 4px 0 0;
  background-color: #f8f9fa;
  color: #495057;
  transition: all 0.3s ease;
}

.custom-tab:hover {
  background-color: #e9ecef;
}

.custom-tab-active {
  background-color: #2196F3;
  color: white;
  border-color: #2196F3;
  border-bottom: none;
}

.tab-content-wrapper {
  border: 1px solid #dee2e6;
  border-top: none;
  padding: 1rem;
  border-radius: 0 0 4px 4px;
}

/* Адаптивные стили */
@media screen and (max-width: 768px) {
  .app-title {
    font-size: 1.8rem;
  }
  
  .patient-name-header {
    font-size: 1.2rem;
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
  
  /* Адаптация кастомных вкладок для мобильных устройств */
  .custom-tabs {
    flex-wrap: wrap;
  }
  
  .custom-tab {
    flex: 1 1 auto;
    font-size: 0.9rem;
    padding: 0.5rem 0.75rem;
    margin-bottom: 0.25rem;
    text-align: center;
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
  
  .custom-tab {
    font-size: 0.8rem;
    padding: 0.5rem;
  }
}

/* Стили для компонента статистики */
.statistic-card {
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  height: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.statistic-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.statistic-icon {
  font-size: 2rem;
  color: #2196F3;
  margin-right: 1rem;
}

.statistic-content {
  flex: 1;
}

.statistic-title {
  color: #757575;
  margin: 0;
  font-size: 0.9rem;
  font-weight: 500;
}

.statistic-value {
  font-size: 1.8rem;
  font-weight: bold;
  color: #212121;
}

.section-title {
  color: #424242;
  margin: 1.5rem 0 1rem 0;
  display: flex;
  align-items: center;
}

.treatment-stat-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 1.2rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
  border-top: 4px solid #ccc;
}

.treatment-stat-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>