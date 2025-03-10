// mockData.js
export const patientsList = [
    {
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
    },
    {
        fullName: "Петров Петр Петрович",
        birthDate: "15.05.1985",
        cardNumber: "МК-23456",
        plans: {
            orthodontic: [
                {
                    title: "1. Подготовительный этап",
                    steps: [
                        "Санация полости рта",
                        "Профессиональная гигиена полости рта",
                        "Обучение пациента правилам гигиены"
                    ]
                },
                {
                    title: "2. Основное лечение",
                    steps: [
                        "Установка элайнеров",
                        "Контроль каждые 2 недели",
                        "Последовательная смена капп"
                    ]
                }
            ],
            orthopedic: [
                {
                    title: "1. Диагностический этап",
                    steps: [
                        "Анализ окклюзии",
                        "Рентгенологическое обследование",
                        "Изготовление моделей"
                    ]
                },
                {
                    title: "2. Лечебный этап",
                    steps: [
                        "Подготовка зубов под коронки",
                        "Временные коронки",
                        "Установка постоянных конструкций"
                    ]
                }
            ],
            therapeutic: [
                {
                    title: "1. Лечение кариеса",
                    steps: [
                        "Удаление кариозных тканей",
                        "Восстановление зубов пломбами",
                        "Полировка пломб"
                    ]
                }
            ],
            surgical: [
                {
                    title: "1. Удаление зубов",
                    steps: [
                        "Удаление зубов мудрости",
                        "Медикаментозная терапия",
                        "Контрольные осмотры"
                    ]
                }
            ]
        }
    },
    {
        fullName: "Сидорова Анна Михайловна",
        birthDate: "23.11.1992",
        cardNumber: "МК-34567",
        plans: {
            orthodontic: [
                {
                    title: "1. Диагностика",
                    steps: [
                        "КЛКТ",
                        "Фотопротокол",
                        "Снятие слепков"
                    ]
                },
                {
                    title: "2. Лечение",
                    steps: [
                        "Установка брекет-системы",
                        "Активации каждые 4 недели",
                        "Ретенционный период"
                    ]
                }
            ],
            orthopedic: [
                {
                    title: "1. Протезирование",
                    steps: [
                        "Имплантация",
                        "Установка абатментов",
                        "Протезирование на имплантатах"
                    ]
                }
            ],
            therapeutic: [
                {
                    title: "1. Эндодонтическое лечение",
                    steps: [
                        "Лечение пульпита",
                        "Пломбирование каналов",
                        "Восстановление коронковой части"
                    ]
                },
                {
                    title: "2. Профилактика",
                    steps: [
                        "Профессиональная гигиена",
                        "Фторирование эмали",
                        "Контрольные осмотры"
                    ]
                }
            ],
            surgical: [
                {
                    title: "1. Хирургическое лечение",
                    steps: [
                        "Удаление кисты",
                        "Резекция верхушки корня",
                        "Послеоперационное наблюдение"
                    ]
                }
            ]
        }
    },
    {
        fullName: "Козлов Дмитрий Андреевич",
        birthDate: "05.07.1978",
        cardNumber: "МК-45678",
        plans: {
            orthodontic: [
                {
                    title: "1. Подготовка",
                    steps: [
                        "Консультация ортодонта",
                        "Диагностика",
                        "Составление плана лечения"
                    ]
                }
            ],
            orthopedic: [
                {
                    title: "1. Диагностика",
                    steps: [
                        "Осмотр",
                        "Рентген",
                        "Составление плана"
                    ]
                }
            ],
            therapeutic: [
                {
                    title: "1. Лечение",
                    steps: [
                        "Профгигиена",
                        "Лечение кариеса",
                        "Отбеливание"
                    ]
                }
            ],
            surgical: [
                {
                    title: "1. Операции",
                    steps: [
                        "Удаление зубов",
                        "Имплантация",
                        "Наблюдение"
                    ]
                }
            ]
        }
    },
    {
        fullName: "Морозова Екатерина Сергеевна",
        birthDate: "12.03.1995",
        cardNumber: "МК-56789",
        plans: {
            orthodontic: [
                {
                    title: "1. Брекеты",
                    steps: [
                        "Консультация",
                        "Установка",
                        "Коррекция"
                    ]
                }
            ],
            orthopedic: [
                {
                    title: "1. Коронки",
                    steps: [
                        "Подготовка",
                        "Установка",
                        "Коррекция"
                    ]
                }
            ],
            therapeutic: [
                {
                    title: "1. Терапия",
                    steps: [
                        "Лечение кариеса",
                        "Лечение каналов",
                        "Контроль"
                    ]
                }
            ],
            surgical: [
                {
                    title: "1. Хирургия",
                    steps: [
                        "Удаление",
                        "Имплантация",
                        "Наблюдение"
                    ]
                }
            ]
        }
    }
];