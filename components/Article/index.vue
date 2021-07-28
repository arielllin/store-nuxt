<template>
  <div class="w-full">
    <div class="text-center mb-7">
      <!-- tag -->
      <div class="text-main mb-4">{{ articleTags }}</div>
      <!-- title -->
      <div class="text-3xl py-2">{{ articleTitle }}</div>
      <!-- whitter -->
      <div class="mt-2 text-sm">March 30, 2018 , by {{ articleWritter }} , {{ articleComments }} Comments</div>
    </div>
    <!-- video -->
    <!-- <video controls class="mb-6">
      <source src="movie.mp4" type="video/mp4">
    </video> -->
    <div class="mb-6 aspect-w-6 aspect-h-3">
      <img class="w-full object-cover" :src="articleImg">
    </div>
    <!-- content -->
    <div class="text-gray text-left">How did the hand pies look? Did you love the brownies? How many choux did you eat in one sitting? Yes, these are the things I think about. So today, after creating a gorgeous selection of our favorites for a client to send as a new year’s gift, I was given a gift of my own: direct feedback from the recipients of the pastries.</div>
    <div class="mt-2 text-main text-left cursor-pointer">Continue Reading ...</div>
    <!-- button -->
    <div class="my-9 border-t border-lightGray" />
  </div>
</template>

<script>
export default {
  name: 'Article',
  props: {
    articleTags: {
      type: String,
      default: ''
    },
    articleTitle: {
      type: String,
      default: ''
    },
    articleDate: {
      type: String,
      default: ''
    },
    articleWritter: {
      type: String,
      default: ''
    },
    articleComments: {
      type: Number,
      default: 0
    },
    articleImg: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
video {
  width: 100%;
  height: auto;
}
</style>
