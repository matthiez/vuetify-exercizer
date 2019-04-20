<template>
    <div>
        <v-select
                required
                :counter='split'
                :items="days"
                :label="$t('exercizer.setWeekdays.chooseDays')"
                multiple
                v-model="weekdays"
                :rules="[() => weekdays.length > split ? $t('exercizer.setWeekdays.maxReached') : true]"
        ></v-select>

        <v-btn
                color='primary'
                @click='onSetDays'
                :disabled="weekdays.length !== split">
            {{$t('exercizer.ui.next')}}
        </v-btn>
    </div>
</template>

<script>
    export default {
        props: {
            split: Number
        },

        data() {
            return {
                weekdays: [],
                days: ([
                    'exercizer.days.monday',
                    'exercizer.days.tuesday',
                    'exercizer.days.wednesday',
                    'exercizer.days.thursday',
                    'exercizer.days.friday',
                    'exercizer.days.saturday',
                    'exercizer.days.sunday'
                ]).map(d => ({text: this.$t(d), value: d}))
            };
        },

        methods: {
            onSetDays() {
                this.$emit('step2', {weekdays: this.weekdays});
            }
        },
    };
</script>