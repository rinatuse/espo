<!-- src/components/PatientsDashboard.vue -->
<template>
    <div class="patients-dashboard">
      <div class="grid">
        <div class="col-12 mb-4">
          <div class="welcome-banner">
            <i class="pi pi-home welcome-icon"></i>
            <div class="welcome-text">
              <h2>Добро пожаловать в медицинскую систему</h2>
              <p>Выберите пациента из списка для просмотра планов лечения</p>
            </div>
          </div>
        </div>
        
        <!-- Основная статистика -->
        <div class="col-12 md:col-6 lg:col-3 mb-3">
          <div class="statistic-card">
            <i class="pi pi-users statistic-icon"></i>
            <div class="statistic-content">
              <h3 class="statistic-title">Всего пациентов</h3>
              <div class="statistic-value">{{ totalPatients }}</div>
            </div>
          </div>
        </div>
        
        <div class="col-12 md:col-6 lg:col-3 mb-3">
          <div class="statistic-card">
            <i class="pi pi-heart statistic-icon"></i>
            <div class="statistic-content">
              <h3 class="statistic-title">Проходят лечение</h3>
              <div class="statistic-value">{{ activeTreatments }}</div>
            </div>
          </div>
        </div>
        
        <div class="col-12 md:col-6 lg:col-3 mb-3">
          <div class="statistic-card">
            <i class="pi pi-calendar statistic-icon"></i>
            <div class="statistic-content">
              <h3 class="statistic-title">Приемов сегодня</h3>
              <div class="statistic-value">4</div>
            </div>
          </div>
        </div>
        
        <div class="col-12 md:col-6 lg:col-3 mb-3">
          <div class="statistic-card">
            <i class="pi pi-check-circle statistic-icon"></i>
            <div class="statistic-content">
              <h3 class="statistic-title">Завершили лечение</h3>
              <div class="statistic-value">{{ completedTreatments }}</div>
            </div>
          </div>
        </div>
        
        <!-- Статистика по типам лечения -->
        <div class="col-12 mb-4">
          <h3 class="section-title">
            <i class="pi pi-chart-bar mr-2"></i>
            Статистика по типам лечения
          </h3>
          <div class="grid">
            <div class="col-12 md:col-3">
              <div class="treatment-stat-card orthodontic">
                <div class="treatment-stat-title">Ортодонтия</div>
                <div class="treatment-stat-value">{{ treatmentStats.orthodontic }}</div>
              </div>
            </div>
            <div class="col-12 md:col-3">
              <div class="treatment-stat-card orthopedic">
                <div class="treatment-stat-title">Ортопедия</div>
                <div class="treatment-stat-value">{{ treatmentStats.orthopedic }}</div>
              </div>
            </div>
            <div class="col-12 md:col-3">
              <div class="treatment-stat-card therapeutic">
                <div class="treatment-stat-title">Терапия</div>
                <div class="treatment-stat-value">{{ treatmentStats.therapeutic }}</div>
              </div>
            </div>
            <div class="col-12 md:col-3">
              <div class="treatment-stat-card surgical">
                <div class="treatment-stat-title">Хирургия</div>
                <div class="treatment-stat-value">{{ treatmentStats.surgical }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { patientsList } from '../data/mockData.js';
  
  export default {
    name: 'PatientsDashboard',
    data() {
      return {
        patients: patientsList
      };
    },
    computed: {
      totalPatients() {
        return this.patients.length;
      },
      activeTreatments() {
        // В реальном приложении будет логика определения активных лечений
        // Сейчас просто имитируем, что 75% пациентов в активном лечении
        return Math.floor(this.totalPatients * 0.75);
      },
      completedTreatments() {
        // Для демонстрации предположим, что завершили лечение
        // остальные 25% от общего числа пациентов
        return this.totalPatients - this.activeTreatments;
      },
      treatmentStats() {
        // Подсчет количества пациентов по типам лечения
        const stats = {
          orthodontic: 0,
          orthopedic: 0, 
          therapeutic: 0,
          surgical: 0
        };
        
        this.patients.forEach(patient => {
          if (patient.plans.orthodontic && patient.plans.orthodontic.length > 0) {
            stats.orthodontic++;
          }
          if (patient.plans.orthopedic && patient.plans.orthopedic.length > 0) {
            stats.orthopedic++;
          }
          if (patient.plans.therapeutic && patient.plans.therapeutic.length > 0) {
            stats.therapeutic++;
          }
          if (patient.plans.surgical && patient.plans.surgical.length > 0) {
            stats.surgical++;
          }
        });
        
        return stats;
      }
    }
  };
  </script>
  
  <style scoped>
  .patients-dashboard {
    padding: 1rem;
  }
  
  .welcome-banner {
    display: flex;
    align-items: center;
    background-color: #e3f2fd;
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  }
  
  .welcome-icon {
    font-size: 2.5rem;
    color: #2196F3;
    margin-right: 1rem;
  }
  
  .welcome-text h2 {
    color: #0D47A1;
    margin: 0 0 0.5rem 0;
  }
  
  .welcome-text p {
    margin: 0;
    color: #424242;
  }
  
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
  
  .treatment-stat-card.orthodontic {
    border-top-color: #2196F3;
  }
  
  .treatment-stat-card.orthopedic {
    border-top-color: #4CAF50;
  }
  
  .treatment-stat-card.therapeutic {
    border-top-color: #FF9800;
  }
  
  .treatment-stat-card.surgical {
    border-top-color: #F44336;
  }
  
  .treatment-stat-title {
    color: #757575;
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
  
  .treatment-stat-value {
    font-size: 1.8rem;
    font-weight: bold;
    color: #212121;
  }
  
  @media screen and (max-width: 768px) {
    .welcome-banner {
      padding: 1rem;
      flex-direction: column;
      text-align: center;
    }
    
    .welcome-icon {
      margin-right: 0;
      margin-bottom: 0.5rem;
    }
    
    .statistic-card {
      padding: 1rem;
    }
    
    .statistic-icon {
      font-size: 1.5rem;
    }
    
    .statistic-value {
      font-size: 1.5rem;
    }
    
    .treatment-stat-card {
      padding: 1rem;
      margin-bottom: 1rem;
    }
    
    .treatment-stat-value {
      font-size: 1.5rem;
    }
  }
  </style>