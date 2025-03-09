<!-- App.vue -->
<template>
  <div class="card">
    <Toast />
    <div class="grid">
      <div class="col-12">
        <h1 class="text-center">Медицинская информационная система</h1>
      </div>

      <div class="col-12 lg:col-4">
        <Card>
          <template #header>
            <div class="flex align-items-center justify-content-center">
              <Avatar icon="pi pi-users" size="xlarge" class="mr-2" />
              <h2 class="m-0">Пациенты</h2>
            </div>
          </template>
          <template #content>
            <div class="patients-container">
              <div class="patient-card" v-for="(patient, index) in patients" :key="index" @click="selectPatient(patient)">
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

      <div class="col-12 lg:col-8" v-if="showPlans && selectedPatient">
        <Card>
          <template #header>
            <div class="flex align-items-center justify-content-center">
              <h2 class="m-0">Планы лечения: {{ selectedPatient.fullName }}</h2>
            </div>
          </template>
          <template #content>
            <TabView>
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

export default {
  data() {
    return {
      showPlans: false,
      selectedPatient: null,
      patients: patientsList
    };
  },
  methods: {
    selectPatient(patient) {
      this.selectedPatient = patient;
      this.showPlans = true;
    }
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
</style>