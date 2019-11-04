<template>
    <div id="set_weekdays">
        <v-select
                :menu-props="{contentClass: 'exercizer-weekdays'}"
                :counter='split'
                :items="days.map(d => ({text: this.$t(d), value: d}))"
                :label="$t('exercizer.setWeekdays.chooseDays')"
                multiple
                :rules="rules"
                v-model="weekdays"
                chips
                deletable-chips
                clearable
                open-on-clear
        ></v-select>

        <v-btn
                @click='onSetDays'
                color='primary'
                :disabled="weekdays.length !== split">
            {{$t('exercizer.ui.next')}}
        </v-btn>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator'
    import {WeekdayEvent} from "@/types";

    @Component
    export default class SetWeekdays extends Vue {
        days: string[] = [
            'exercizer.days.monday',
            'exercizer.days.tuesday',
            'exercizer.days.wednesday',
            'exercizer.days.thursday',
            'exercizer.days.friday',
            'exercizer.days.saturday',
            'exercizer.days.sunday'
        ];
        @Prop() split!: number;
        weekdays: string[] = [];

        get rules() {
            return [() => this.weekdays.length > this.split ? this.$t('exercizer.setWeekdays.maxReached') : true];
        }

        onSetDays() {
            this.$emit('set-weekdays', {weekdays: this.weekdays} as WeekdayEvent);
        }
    }
</script>