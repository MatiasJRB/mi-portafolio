<template>
  <q-page class="row justify-center">
    <div
      class="bg-dark q-ma-sm col-md-8 col-xs-12 col-sm-12"
      :style="mobile ? 'margin-top:70px' : ''"
      v-if="projectToShow"
    >
      <div v-if="projectToShow.iframe" class="full-width full-height">
        <iframe
          :src="projectToShow.iframe"
          frameborder="0"
          allowfullscreen
          class="full-width full-height"
        ></iframe>
      </div>
      <div v-else>
        <div :class="mobile ? '' : 'q-mx-md'">
          <div class="text-white q-pa-lg">
            <div class="row">
              <div class="text-caption">{{ projectToShow.date }}</div>
            </div>
            <div class="text-h6">
              {{ projectToShow.title }}
            </div>
            <div>
              <q-badge
                outlined
                text-color="white"
                :label="'Status: ' + projectToShow.status"
              />
            </div>
            <div class="text-white">
              <div v-html="projectToShow.description">
                <!-- {{descripcion}} -->
              </div>
            </div>
          </div>
          <div class="row justify-center">
            <div class="col-md-6 col-xs-12">
              <q-carousel
                v-if="projectToShow.images && projectToShow.images.length"
                @click.stop=""
                swipeable
                control-color="white"
                v-model="slide"
                arrows
                class="bg-dark"
                infinite
              >
                <q-carousel-slide
                  class=" "
                  v-for="(image, index) in projectToShow.images"
                  :key="index"
                  :name="index"
                  :img-src="image"
                />
              </q-carousel>
            </div>
            <div class="col-md-6 col-xs-12">
              <q-video
                :style="mobile ? '' : 'margin-top: 32px'"
                v-if="projectToShow.video"
                :ratio="16 / 9"
                :src="projectToShow.video"
              />
            </div>
          </div>

          <div class="col-md-12 col-xs-12 col-md q-my-md">
            <div
              class="q-mx-md text-white"
              v-html="projectToShow.content"
            ></div>
          </div>
          <div
            v-for="document in projectToShow.documents"
            :key="document.id"
            class="q-ma-md"
          >
            <q-btn
              no-caps
              color="white"
              text-color="primary"
              :label="document.name"
              @click="open(document.url)"
            />
          </div>
          <div>
            <q-card-section class="row">
              <div v-for="(media, index) in projectToShow.media" :key="index">
                <q-btn
                  no-caps
                  color="white"
                  class="q-mx-sm"
                  text-color="primary"
                  :label="media.title"
                  @click="open(media.src)"
                />
              </div>
            </q-card-section>
          </div>
          <div>
            <q-card-actions class="q-ml-md" style="">
              <div v-for="(tag, index) in projectToShow.tags" :key="index">
                <q-badge outlined color="white" :label="tag" class="q-mx-sm" />
              </div>
            </q-card-actions>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { openURL } from "quasar";

export default {
  // name: 'PageName',
  data() {
    return {
      slide: 0,
      projectToShow: undefined,
      showProject: false,
      hover: {},
    };
  },
  computed: {
    projects: {
      get() {
        return this.$store.state.articles.articles;
      },
    },

    mobile() {
      let ret = false;
      ret =
        this.$q.screen.xs || this.$q.screen.sm || this.$q.screen.width < 1050;
      return ret;
    },

    getNumberOfColumns() {
      let ret = "col-2";
      if (this.$q.screen.xs) {
        ret = "col-6";
      }
      return ret;
    },
  },
  methods: {
    open(url) {
      openURL(url);
    },
    goToProjectPage(project) {
      this.$q.loading.show();
      this.$router.push({ path: `portfolio/${project.id}` }).finally(() => {
        this.$q.loading.hide();
      });
    },
    getCardStyle(project) {
      let toret = "height:33.33333vh; border-radius: 0px;";
      return toret;
    },
  },
  async mounted() {
    this.$q.loading.show();
    this.projectToShow =
      this.projects.filter(
        (pr) => parseInt(pr.id) === parseInt(this.$route.params.id)
      )[0] ?? null;
    if (!this.projectToShow) {
      await this.$store.dispatch("articles/getArticles");
      this.projectToShow =
        this.projects.filter(
          (pr) => parseInt(pr.id) === parseInt(this.$route.params.id)
        )[0] ?? null;
    }
    if (this.projectToShow.iframe) {
      setTimeout(() => {
        this.$q.loading.hide();
      }, 1000);
    } else {
      this.$q.loading.hide();
    }
  },
};
</script>

<style scoped>
.iframe {
  width: 100%;
  height: 100%;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: none;
}
.q-carousel__slide {
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
