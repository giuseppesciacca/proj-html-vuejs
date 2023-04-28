<script>
export default {
    name: 'OurLearners',
    data() {
        return {
            active: 1,
            learners: [
                {
                    name: 'FLORENCE THEMES',
                    src: 'testimonial-avata-03.jpg',
                    title: 'It\'s a choice of quality for people with special needs',
                    text: 'I\'m a very strict person so I require everythoing to be organized and neat. Then, I\'ll be able to make things right and shine. MaxCoach guys just got me.',
                    role: '/Multimedia Admin'
                },
                {
                    name: 'MINA HOLLACE',
                    src: 'testimonial-avata-02.jpg',
                    title: 'High level of efficency and scentific teaching methods',
                    text: 'I am free to learn at my own pace, follow my own schedule and choose the subject I want to learn from the syllabus.Great study portal for people like me.',
                    role: '/Freelancer'
                },
                {
                    name: 'MADLEY PONDOR',
                    src: 'testimonial-avata-01.jpg',
                    title: 'Professional team of specialists and passionate mentors at reach',
                    text: 'I need to get a certification for English proficency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
                    role: '/IT Specialist'
                }
            ]
        }
    },
    methods: {
        changeActive(index) {
            this.active = index;
        }
    },
}
</script>

<template>
    <section id="our_learners" class="py-5">
        <div class="my_container">
            <h6 class="text-center">GREAT WORDS ABOUT MAXCOACH</h6>
            <h3 class="text-center pb-5">Our <span>top learners'</span> verbatim</h3>

            <div class="row">

                <div v-for="learner, index in learners" class="col-4">
                    <div class="card p-4 border-0 h-100" :class="index == this.active ? 'active' : ''"
                        @click="changeActive(index)">
                        <h6 class="title pb-3">{{ learner.title }}</h6>
                        <p class="text pb-3">{{ learner.text }}</p>
                        <div class="d-flex">
                            <img class="img-fluid" width="70" :src="'/public/img/' + learner.src" :alt="learner.name">
                            <div class="ps-3">
                                <p class="name mb-2">{{ learner.name }}</p>
                                <p class="role">{{ learner.role }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /.col -->

                <div class="col-12 text-center py-5">
                    <span class="p-2">
                        <font-awesome-icon :icon="['fas', 'circle']" class="active_dot" size="2xs" />
                    </span>
                    <span class="p-2">
                        <font-awesome-icon :icon="['fas', 'circle']" size="2xs" />
                    </span>
                    <span class="p-2">
                        <font-awesome-icon :icon="['fas', 'circle']" size="2xs" />
                    </span>
                    <span class="p-2">
                        <font-awesome-icon :icon="['fas', 'circle']" size="2xs" />
                    </span>
                </div>
            </div>

        </div>
    </section>

    <section id="start_today" class="text-center py-5">
        <div class="my_container position-relative pb-5">
            <h5>Start today for getting <span>Online Certification</span></h5>
            <h2 class="pb-3">You can be your own guiding star with our help!</h2>
            <button class="btn">Get started now</button>

            <img class="img_line" src="/public/img/maxcoach-shape-01.png" alt="">
            <img class="img_circle" src="/public/img/maxcoach-shape-02.png" alt="">

            <svg class="svg_circle" width="80" height="80">
                <circle cx="30" cy="30" r="20" stroke="#e6dcd2" stroke-width="6" fill="#f6f3f5" />
                Sorry, your browser does not support inline SVG.
            </svg>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;

#our_learners {
    background-color: $hint_of_red;

    h6 {
        color: $shady_lady;
    }

    h3 {
        color: $gun_powder;
        font-weight: bold;

        span {
            color: $jungle_green;
            font-weight: normal;
        }
    }
}

.card:not(.active) {
    opacity: 0.6;
}

.card {

    cursor: pointer;

    .title,
    .name {
        color: $gun_powder;
        font-weight: bold;
    }

    .text,
    .role {
        color: $shady_lady;
    }

    img {
        border-radius: 50%;
        object-fit: cover;
    }
}

.col-12 {
    span {
        color: $shady_lady;
    }

    .active_dot {
        color: $gun_powder;
        scale: 1.5;
    }
}

#start_today {

    background-color: $hint_of_red;

    h5,
    h2 {
        color: $gun_powder;
        font-weight: bold;

        span {
            color: $jungle_green;
            font-weight: normal;
        }
    }

    button {
        background-color: $jungle_green;
        color: $white;
        font-weight: bold;
        width: 260px;
        height: 50px;
    }

    .btn:hover {
        background-color: #3f3a64;
    }

    .img_line {
        position: absolute;
        top: 40%;
        left: 3%;
    }

    .img_circle {
        position: absolute;
        top: 40%;
        right: 3%;
    }

    .svg_circle {
        position: absolute;
        top: -10px;
        left: 3%;

    }
}
</style>