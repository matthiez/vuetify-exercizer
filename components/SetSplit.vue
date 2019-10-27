<template>
    <v-layout row wrap>
        <v-hover v-for='(s, i) in $root.$exercizer.SPLITS' :key='i'>
            <v-flex
                    :class="`elevation-${hover ? 12 : 2}`"
                    text-xs-center
                    slot-scope="{ hover }">
                <v-btn text @click="onClickSplit(i)">{{s.text}}<br>{{s.subheading}}</v-btn>
            </v-flex>
        </v-hover>

        <v-flex xs12 class='mt-4' text-xs-center>
            <p>
                {{$t('exercizer.setSplit.chooseSplit')}}<br>
                {{$t('exercizer.setSplit.splitExample')}}<br>
                {{$t('exercizer.setSplit.areYouSure')}}
            </p>
        </v-flex>
    </v-layout>
</template>

<script>
    export default {
        methods: {
            onClickSplit(splitIndex) {
                this.$emit('step1', {splitIndex});
            },
        },
    };
</script>