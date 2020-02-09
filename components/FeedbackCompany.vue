<template>
  <div id="feedback-company" class="hidden-xs visible-md">
    <div v-if="allRating.status == 'success'" class="skip-content" style="display:block">
      <div itemscope itemtype="http://schema.org/WebPage">
        <div itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating">
          <a :href="allRating.link"  class="feedback-company-href" target="_blank">
            <div class="total-block-stars-medium">
              <span class="feedback-company-background" :style="`width: ${allRating.percentage}`"></span>
            </div>
            <span class="rating-span" itemprop="ratingValue">{{ allRating.score }}/{{ allRating.score_max }}</span>
            <div class="reviews-count" itemprop="ratingCount">{{ allRating.total_reviews }} {{ $t('reviews') }}</div>
          </a>
        </div>
      </div>
    </div>
    <div v-else class="skip-content" style="display:none"/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'FeedbackCompany',
  computed: {
    ...mapGetters({
      allRating: 'feedback-company/allRating'
    })
  },
  methods: {
    ...mapActions({
      fetchRating: 'feedback-company/fetchRating'
    })
  },
  async mounted () {
    this.fetchRating()
  }
}
</script>
<style lang="scss" scoped>
  .skip-content{
    font-size: 12px;
    padding: 0 15px 0 10px;
    line-height: 16px;
    text-align: left;
  }
  .total-block-stars-medium{
    display: inline-block;
    height: 28px;
    width: 151px;
    background: url(stars-colorful-medium-empty.png) no-repeat;
  }
  .feedback-company-href{
    color: #333;
  }
  .a.underline:after, a:not(.no-underline):hover:after{
    background-color: initial;
  }
  .feedback-company-background{
    font-size: 28px;
    padding-left: 5px;
    display: block;
    height: 28px;
    background: url(stars-colorful-medium-filling.png) no-repeat
  }
  .rating-span{
    float: left;
    font-size: 20px;
    padding-left: 5px;
  }
  .reviews-count{
    float: right;
    padding-right: 5px;
    font-size: 14px;
  }
  .feedback-company-href:hover{
    color: #00b298;
  }
</style>
