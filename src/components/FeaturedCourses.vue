<script>
export default {
    name: 'FeaturedCourses'
}
</script>

<template>
    <section id="featured_online_courses" class="py-5">
        <div class="my_container">
            <h6 class="text-center">STIMULATED TO LEARN?</h6>
            <h2 class="text-center">Featured Online Courses</h2>
            <div class="row py-5 g-3">
                <div class="col-6 d-flex">
                    <div class="col-4">
                        <img class="img-fluid" src="../assets/img/course-02-480x298.jpg" alt="">
                    </div>
                    <div class="col-8">
                        <p>$40.00</p>
                        <p>Learning to Write as a Professional Author</p>
                        <span>20 Lessons</span>
                        <span>50 Students</span>
                    </div>
                </div>

                <div class="col-6 d-flex">
                    <div class="col-4">
                        <img class="img-fluid" src="../assets/img/course-02-480x298.jpg" alt="">
                    </div>
                    <div class="col-8">
                        <p>$40.00</p>
                        <p>Learning to Write as a Professional Author</p>
                        <span>20 Lessons</span>
                        <span>50 Students</span>
                    </div>
                </div>
                <div class="col-6 d-flex">
                    <div class="col-4">
                        <img class="img-fluid" src="../assets/img/course-02-480x298.jpg" alt="">
                    </div>
                    <div class="col-8">
                        <p>$40.00</p>
                        <p>Learning to Write as a Professional Author</p>
                        <span>20 Lessons</span>
                        <span>50 Students</span>
                    </div>
                </div>
                <div class="col-6 d-flex">
                    <div class="col-4">
                        <img class="img-fluid" src="../assets/img/course-02-480x298.jpg" alt="">
                    </div>
                    <div class="col-8">
                        <p>$40.00</p>
                        <p>Learning to Write as a Professional Author</p>
                        <span>20 Lessons</span>
                        <span>50 Students</span>
                    </div>
                </div>
                <div class="col-6 d-flex">
                    <div class="col-4">
                        <img class="img-fluid" src="../assets/img/course-02-480x298.jpg" alt="">
                    </div>
                    <div class="col-8">
                        <p>$40.00</p>
                        <p>Learning to Write as a Professional Author</p>
                        <span>20 Lessons</span>
                        <span>50 Students</span>
                    </div>
                </div>
                <div class="col-6 d-flex">
                    <div class="col-4">
                        <img class="img-fluid" src="../assets/img/course-02-480x298.jpg" alt="">
                    </div>
                    <div class="col-8">
                        <p>$40.00</p>
                        <p>Learning to Write as a Professional Author</p>
                        <span>20 Lessons</span>
                        <span>50 Students</span>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;

#featured_online_courses {
    background-color: $hint_of_red;
}

img {
    width: 170px;
    height: 170px;
    border-radius: 50%;
    object-fit: cover;
}
</style>