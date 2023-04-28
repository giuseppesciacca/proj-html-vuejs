<script>
export default {
    name: 'FeaturedCourses',
    data() {
        return {
            courses: [
                {
                    src: 'course-02-480x298.jpg',
                    price: '$40',
                    title: 'Learning to Write as a Professional Author',
                    nLessons: 20,
                    nStudents: 50
                },
                {
                    src: 'stock-full-hd-03-480x298.jpg',
                    price: 'Free',
                    title: 'Customer-centric Info-Tech Strategies',
                    nLessons: 24,
                    nStudents: 769
                },
                {
                    src: 'stock-full-hd-04-480x298.jpg',
                    price: '$19',
                    title: 'Open Programming Courses for Everyone: Python',
                    nLessons: 17,
                    nStudents: 62
                },
                {
                    src: 'stock-full-hd-06-480x298.jpg',
                    price: '$26',
                    title: 'Academic Listening and Note-taking',
                    nLessons: 14,
                    nStudents: 67
                },
                {
                    src: 'course-featured-image-01-480x298.jpg',
                    price: '$39',
                    title: 'Master jQuery in a Short Period of Time',
                    nLessons: 6,
                    nStudents: 51
                },
                {
                    src: 'stock-full-hd-05-480x298.jpg',
                    price: '$59',
                    title: 'Introduction to Javascript for Beginners',
                    nLessons: 14,
                    nStudents: 76
                }

            ]
        }
    }
}
</script>

<template>
    <section id="featured_online_courses" class="py-5">
        <div class="my_container">
            <h6 class="text-center ">STIMULATED TO LEARN?</h6>
            <h2 class="text-center fw-bold">Featured Online Courses</h2>

            <div class="row py-5 g-3">
                <div v-for="item in courses " class="col-6 d-flex align-items-center p-3">
                    <div class="col-4 ps-3">
                        <!-- src="../assets/img/stock-full-hd-05-480x298.jpg"  -->
                        <img class="img-fluid" :src="'/public/img/' + item.src" :alt="item.title">
                        <!-- <img src="/public/img/stock-full-hd-05-480x298.jpg" alt=""> -->
                    </div>
                    <div class="col-8 pe-5 ps-3">
                        <p class="item_price fw-bold fs-5">{{ item.price }}<span v-show="item.price != 'Free'"
                                class="fs-6">.00</span></p>
                        <p class="item_title fw-bold">{{ item.title }}</p>
                        <span class="item_nLessons me-3"><font-awesome-icon :icon="['far', 'file-lines']" /> {{
                            item.nLessons
                        }} Lessons</span>
                        <span class="item_nStudents"><font-awesome-icon :icon="['far', 'user']" /> {{ item.nStudents }}
                            Students</span>
                    </div>
                </div>
                <!-- /card -->
            </div>
            <!-- /.row -->
        </div>
        <!-- /.my_container -->

    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;

#featured_online_courses {
    background-color: #f5f7fa;
}

.col-6 {
    border-radius: 0.25rem;
}

.col-6:hover {
    background-color: $white;
    cursor: pointer;
}

.col-6:hover .item_title {
    color: $mountain_meadow;
}

.item_price {
    color: $mountain_meadow;
}

h2,
.item_title {
    color: $gun_powder
}

h6,
.item_nLessons,
.item_nStudents {
    color: $edward;
    font-size: 0.75rem;
}

img {
    width: 170px;
    height: 170px;
    border-radius: 50%;
    object-fit: cover;
}
</style>