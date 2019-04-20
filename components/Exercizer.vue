<template>
    <v-card dark>
        <v-stepper v-model="stepper">
            <v-stepper-header>
                <v-stepper-step
                        :complete="stepper > 1"
                        step="1">
                    {{$t('exercizer.stepper.split')}}
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step
                        :complete="stepper > 2"
                        step="2">
                    {{$t('exercizer.stepper.days')}}
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step
                        :complete="stepper > 3"
                        step="3"
                        :weekdays="weekdays">
                    {{$t('exercizer.stepper.combo')}}
                </v-stepper-step>

                <v-divider></v-divider>

                <v-stepper-step
                        :complete="stepper > 4"
                        step="4">
                    {{$t('exercizer.stepper.schedule')}}
                </v-stepper-step>
            </v-stepper-header>

            <v-stepper-items>
                <v-stepper-content step="1">
                    <set-split
                            @step1='onSetSplit'></set-split>
                </v-stepper-content>

                <v-stepper-content step="2">
                    <set-weekdays
                            @step2='onSetWeekdays'
                            :split="split.id"></set-weekdays>
                </v-stepper-content>

                <v-stepper-content step="3">
                    <set-combo
                            @step3='onSetCombo'
                            :combos="split.combos"
                            :weekdays="weekdays"></set-combo>
                </v-stepper-content>

                <v-stepper-content step="4">
                    <set-exercises
                            v-if="weekdays.length && combo.length"
                            :weekdays="weekdays"
                            :combo="combo"></set-exercises>
                </v-stepper-content>
            </v-stepper-items>
        </v-stepper>
    </v-card>
</template>

<script>
    import SetSplit from './SetSplit';
    import SetWeekdays from './SetWeekdays';
    import SetCombo from './SetCombo';
    import SetExercises from './SetExercises';

    export default {
        components: {SetExercises, SetCombo, SetWeekdays, SetSplit},

        data() {
            return {
                weekdays: [],
                stepper: 1,
                split: {},
                combo: [],
            };
        },

        methods: {
            onSetSplit({splitIndex}) {
                this.split = this.$root.$exercizer.SPLITS[splitIndex];

                this.stepper = 2;
            },

            onSetWeekdays({weekdays}) {
                this.weekdays = weekdays;

                this.stepper = 3;
            },

            onSetCombo({comboIndex}) {
                this.combo = this.split.combos[comboIndex];

                this.stepper = 4;
            }
        }
    };
</script>