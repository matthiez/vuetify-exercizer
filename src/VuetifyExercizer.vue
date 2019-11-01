<template>
    <v-card dark>
        <v-stepper v-model="stepper">
            <v-stepper-header>
                <v-stepper-step editable :complete="stepper > 1" step="1">
                    {{$t('exercizer.stepper.split')}}
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step editable :complete="stepper > 2" step="2">
                    {{$t('exercizer.stepper.days')}}
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step editable :complete="stepper > 3" step="3" :weekdays="weekdays">
                    {{$t('exercizer.stepper.combo')}}
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step editable :complete="stepper > 4" step="4">
                    {{$t('exercizer.stepper.schedule')}}
                </v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
                <v-stepper-content step="1">
                    <set-split @set-split='onSetSplit'></set-split>
                </v-stepper-content>

                <v-stepper-content step="2">
                    <set-weekdays @set-weekdays='onSetWeekdays'
                                  :split="split ? split.id : null"></set-weekdays>
                </v-stepper-content>

                <v-stepper-content step="3">
                    <set-combo @set-combo='onSetCombo'
                               :combos="split ? split.combos : []"
                               :weekdays="weekdays"></set-combo>
                </v-stepper-content>

                <v-stepper-content step="4">
                    <set-exercises v-if="combo" :weekdays="weekdays" :combo="combo"></set-exercises>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </v-card>
</template>

<script lang="ts">
    import {Vue, Component, Provide} from 'vue-property-decorator'
    import SetExercises from '@/components/SetExercises.vue';
    import SetSplit from "@/components/SetSplit.vue";
    import SetWeekdays from "@/components/SetWeekdays.vue";
    import SetCombo from "@/components/SetCombo.vue";
    import {MuscleGroups} from "@/lib/MuscleGroups";
    import {Exercises} from "@/lib/Exercises";
    import {Splits} from "@/lib/Splits";
    import {Combo, ComboEvent, Split, SplitEvent, WeekdayEvent, IExercizer} from "@/types";

    @Component({
        components: {SetExercises, SetCombo, SetWeekdays, SetSplit}
    })
    export default class VuetifyExercizer extends Vue {
        weekdays: string[] = [];
        stepper: number = 1;
        split: Split | null = null;
        combo: Combo | null = null;

        @Provide() exercizer: IExercizer = {
            MUSCLE_GROUPS: MuscleGroups,

            EXERCISES: Exercises,

            SPLITS: Splits
        };

        onSetSplit({splitIndex}: SplitEvent): void {
            this.split = this.exercizer.SPLITS[splitIndex];

            this.stepper = 2;
        }

        onSetWeekdays({weekdays}: WeekdayEvent): void {
            this.weekdays = weekdays;

            this.stepper = 3;
        }

        onSetCombo({comboIndex}: ComboEvent): void {
            if (this.split) {
                this.combo = this.split.combos[comboIndex];

                this.stepper = 4;
            }
        }
    }
</script>