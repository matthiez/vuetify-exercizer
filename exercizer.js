export const MUSCLE_GROUPS = [
    {id: 1, text: 'exercizer.muscleGroups.legs', workouts: [[9, 13, 17]]},
    {id: 2, text: 'exercizer.muscleGroups.chest', workouts: [[5, 20]]},
    {id: 3, text: 'exercizer.muscleGroups.biceps', workouts: [[10]]},
    {id: 4, text: 'exercizer.muscleGroups.triceps', workouts: [[15]]},
    {id: 5, text: 'exercizer.muscleGroups.neck', workouts: [[17]]},
    {id: 6, text: 'exercizer.muscleGroups.shoulders', workouts: [[11, 18, 19]]},
    {id: 7, text: 'exercizer.muscleGroups.back', workouts: [[8, 2, 3]]},
    {id: 8, text: 'exercizer.muscleGroups.calves', workouts: [[13]]},
    {id: 9, text: 'exercizer.muscleGroups.abs', workouts: [[16]]},
    {id: 10, text: 'exercizer.muscleGroups.serratusAnterior', workouts: [[24]]},
];

export const SPLITS = [
    {
        id: 2,
        text: '2er-Split',
        subheading: 'für schwer Beschäftigte',
        combos: [
            [
                [mgByText('legs'), mgByText('calves'), mgByText('shoulders'), mgByText('biceps')],
                [mgByText('chest'), mgByText('triceps'), mgByText('back')]
            ]
        ]
    },
    {
        id: 3,
        text: '3er-Split',
        subheading: 'für Normaltrainierende',
        combos: [
            [
                [mgByText('legs'), mgByText('calves')],
                [mgByText('chest'), mgByText('triceps'), mgByText('shoulders')],
                [mgByText('biceps'), mgByText('neck'), mgByText('back')]
            ]
        ]
    },
    {
        id: 4,
        text: '4er-Split',
        subheading: 'für Fortgeschrittene',
        combos: [
            [
                [mgByText('back'), mgByText('calves')],
                [mgByText('neck'), mgByText('shoulders')],
                [mgByText('legs'), mgByText('biceps')],
                [mgByText('chest'), mgByText('triceps')]
            ]
        ]
    },
    {
        id: 5,
        text: '5er-Split',
        subheading: 'für Wettkampfambitionierte',
        combos: [
            [
                [mgByText('back')],
                [mgByText('chest')],
                [mgByText('biceps'), mgByText('shoulders')],
                [mgByText('triceps'), mgByText('neck')],
                [mgByText('legs'), mgByText('calves')]
            ]
        ]
    },
    {
        id: 6,
        text: '6er-Split',
        subheading: 'für Hardcore-Bodybuilder',
        combos: [
            [
                [mgByText('back')],
                [mgByText('chest')],
                [mgByText('biceps'), mgByText('calves')],
                [mgByText('triceps'), mgByText('neck')],
                [mgByText('legs')],
                [mgByText('shoulders')]
            ]
        ]
    }
];

export const EXERCISES = [
    {
        id: 1,
        name: 'exercizer.exercises.seatedLatRaise',
        muscleGroups: [mgByText('back')]
    },
    {
        id: 2,
        name: 'exercizer.exercises.bentOverRow',
        muscleGroups: [mgByText('back')],
    },
    {
        id: 3, name: 'exercizer.exercises.standingLatRaise',
        muscleGroups: [mgByText('back')],
    },
    {
        id: 4,
        name: 'exercizer.exercises.tBarRow',
        muscleGroups: [mgByText('back')]
    },
    {
        id: 5,
        name: 'exercizer.exercises.dumbbellBenchPress',
        muscleGroups: [
            mgByText('chest'),
            mgByText('triceps'),
        ]
    },
    {
        id: 6,
        name: 'exercizer.exercises.benchPress',
        muscleGroups: [
            mgByText('chest'),
            mgByText('triceps'),
        ]
    },
    {
        id: 7,
        name: 'exercizer.exercises.chins',
        muscleGroups: [mgByText('back')]
    },
    {
        id: 8,
        name: 'exercizer.exercises.deadlift',
        muscleGroups: [
            mgByText('back'),
            mgByText('neck'),
            mgByText('legs'),
        ]
    },
    {
        id: 9,
        name: 'exercizer.exercises.squat',
        muscleGroups: [mgByText('legs')]
    },
    {
        id: 10,
        name: 'exercizer.exercises.bicepsCurl',
        muscleGroups: [mgByText('biceps')]
    },
    {
        id: 11,
        name: 'exercizer.exercises.shrugs',
        muscleGroups: [mgByText('neck'), mgByText('shoulders')]
    },
    {
        id: 12,
        name: 'exercizer.exercises.dumbbellShoulderPress',
        muscleGroups: [mgByText('shoulders'), mgByText('neck'), mgByText('triceps')]
    },
    {
        id: 13,
        name: 'exercizer.exercises.seatedCalveRaises',
        muscleGroups: [mgByText('calves')]
    },
    {
        id: 14,
        name: 'exercizer.exercises.frenchPress',
        muscleGroups: [mgByText('triceps')]
    },
    {
        id: 15,
        name: 'exercizer.exercises.dips',
        muscleGroups: [mgByText('triceps'), mgByText('shoulders')]
    },
    {
        id: 16,
        name: 'exercizer.exercises.crunches',
        muscleGroups: [mgByText('abs'),]
    },
    {
        id: 17,
        name: 'exercizer.exercises.romanianDeadlift',
        muscleGroups: [
            mgByText('legs'),
            mgByText('neck'),
            mgByText('back'),
        ]
    },
    {
        id: 18,
        name: 'exercizer.exercises.standingSideLateralRaise',
        muscleGroups: [
            mgByText('shoulders'),
        ]
    },
    {
        id: 19,
        name: 'exercizer.exercises.frontRaise',
        muscleGroups: [
            mgByText('shoulders'),
        ]
    },
    {
        id: 20,
        name: 'exercizer.exercises.cableFlies',
        muscleGroups: [
            mgByText('chest'),
            mgByText('shoulders'),
        ]
    },
    {
        id: 21,
        name: 'exercizer.exercises.standingCalveRaise',
        muscleGroups: [mgByText('calves')]
    },
    {
        id: 22,
        name: 'exercizer.exercises.militaryPress',
        muscleGroups: [mgByText('shoulders'), mgByText('neck'), mgByText('triceps')]
    },
    {
        id: 23,
        name: 'exercizer.exercises.legPress',
        muscleGroups: [mgByText('legs'), mgByText('calves')]
    },
    {
        id: 24,
        name: 'exercizer.exercises.dumbbellPullOvers',
        muscleGroups: [mgByText('back'), mgByText('chest'), mgByText('triceps'), mgByText('serratusAnterior')]
    },
];

function mgByText(text) {
    const key = `exercizer.muscleGroups.${text}`;

    return MUSCLE_GROUPS.filter(({text}) => text === key)[0];
}