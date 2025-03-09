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
              <Avatar icon="pi pi-user" size="xlarge" class="mr-2" />
              <h2 class="m-0">Пациенты</h2>
            </div>
          </template>
          <template #content>
            <div class="patient-card" @click="selectPatient(patient)">
              <div class="patient-info">
                <h3>{{ patient.fullName }}</h3>
                <p><strong>Дата рождения:</strong> {{ patient.birthDate }}</p>
                <p><strong>Номер карты:</strong> {{ patient.cardNumber }}</p>
              </div>
              <Button label="Просмотр планов" icon="pi pi-file" class="p-button-primary" @click="showPlans = true" />
            </div>
          </template>
        </Card>
      </div>

      <div class="col-12 lg:col-8" v-if="showPlans">
        <Card>
          <template #header>
            <div class="flex align-items-center justify-content-center">
              <h2 class="m-0">Планы лечения: {{ patient.fullName }}</h2>
            </div>
          </template>
          <template #content>
            <TabView>
              <TabPanel header="Ортодонтический план">
                <div class="plan-content">
                  <h3>Ортодонтический план лечения</h3>
                  <div v-for="(stage, index) in patient.plans.orthodontic" :key="index">
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
                  <div v-for="(stage, index) in patient.plans.orthopedic" :key="index">
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
                  <div v-for="(stage, index) in patient.plans.therapeutic" :key="index">
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
                  <div v-for="(stage, index) in patient.plans.surgical" :key="index">
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
export default {
  data() {
    return {
      showPlans: false,
      patient: {
        fullName: "Иванов Иван Иванович",
        birthDate: "01.01.1990",
        cardNumber: "МК-12345",
        plans: {
          orthodontic: [
            {
              title: "1. Подготовительный этап",
              steps: [
                "Санация полости рта (лечение кариеса, заболеваний пародонта)",
                "Профессиональная гигиена полости рта",
                "Обучение пациента правилам гигиены с брекет-системой",
                "При необходимости: удаление зубов по плану лечения",
                "При необходимости: установка временных ортодонтических мини-имплантатов"
              ]
            },
            {
              title: "2. Фиксация брекет-системы",
              steps: [
                "Адгезивная подготовка поверхности зубов",
                "Позиционирование и фиксация брекетов согласно прописи",
                "Установка первой дуги (обычно тонкая круглая NiTi)",
                "Фиксация дуги в пазах брекетов (лигатуры/замки)",
                "Инструктаж пациента по уходу за системой"
              ]
            },
            {
              title: "3. Этап нивелирования и выравнивания",
              steps: [
                "Последовательная смена дуг от тонких круглых к более толстым",
                "Устранение ротаций и скученности зубов",
                "Коррекция вертикального положения зубов",
                "Выравнивание зубной дуги",
                "Периодичность активаций: каждые 4-6 недель"
              ]
            }
          ],
          orthopedic: [
            {
              title: "1. Диагностический этап",
              steps: [
                "Анализ окклюзии и артикуляции",
                "Оценка состояния твёрдых тканей зубов",
                "Рентгенологическое обследование",
                "Изготовление диагностических моделей",
                "Фотопротокол"
              ]
            },
            {
              title: "2. Подготовительный этап",
              steps: [
                "Санация полости рта",
                "Профессиональная гигиена",
                "Эндодонтическое лечение (при необходимости)",
                "Подготовка опорных зубов под протезирование"
              ]
            },
            {
              title: "3. Ортопедическое лечение",
              steps: [
                "Получение оттисков и изготовление временных конструкций",
                "Примерка каркасов/конструкций",
                "Фиксация постоянных ортопедических конструкций",
                "Окклюзионная коррекция"
              ]
            }
          ],
          therapeutic: [
            {
              title: "1. Диагностический этап",
              steps: [
                "Оценка жалоб пациента",
                "Визуальный осмотр и зондирование",
                "Рентгенологическое обследование",
                "Определение индексов гигиены и состояния тканей пародонта",
                "Постановка диагноза"
              ]
            },
            {
              title: "2. Лечебный этап",
              steps: [
                "Профессиональная гигиена полости рта",
                "Лечение кариеса и его осложнений",
                "Эндодонтическое лечение",
                "Лечение заболеваний пародонта",
                "Восстановление анатомической формы зубов"
              ]
            },
            {
              title: "3. Профилактический этап",
              steps: [
                "Рекомендации по индивидуальной гигиене",
                "Подбор средств гигиены",
                "Назначение контрольных осмотров",
                "Профилактика рецидивов"
              ]
            }
          ],
          surgical: [
            {
              title: "1. Предоперационная подготовка",
              steps: [
                "Комплексное обследование пациента",
                "Консультации смежных специалистов",
                "Лабораторные исследования",
                "Подготовка операционного поля",
                "Планирование хирургического вмешательства"
              ]
            },
            {
              title: "2. Оперативное вмешательство",
              steps: [
                "Удаление зубов по показаниям",
                "Проведение хирургических манипуляций",
                "Установка имплантатов (при необходимости)",
                "Костная пластика (при необходимости)",
                "Пластика мягких тканей"
              ]
            },
            {
              title: "3. Послеоперационный период",
              steps: [
                "Медикаментозная терапия",
                "Контрольные осмотры",
                "Снятие швов",
                "Реабилитационные мероприятия",
                "Подготовка к последующим этапам лечения"
              ]
            }
          ]
        }
      }
    };
  },
  methods: {
    selectPatient(patient) {
      this.showPlans = true;
    }
  }
};
</script>

<style>
.patient-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;
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
</style>

