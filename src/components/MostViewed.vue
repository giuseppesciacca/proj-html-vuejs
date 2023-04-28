<script>
export default {
    name: 'MostViewed'
}
</script>

<template>
    <section id="most_viewed" class="py-5">
        <div class="my_container">
            <div class="row py-5">
                <div class="col-4 d-flex flex-column justify-content-center px-3">
                    <h5 class="title_h5">ENJOYABLE INSIGHTS</h5>
                    <h2>Most Viewed <span>Best Blogs</span></h2>
                    <ul class="p-0">
                        <li class="pb-3"><a href="#"><font-awesome-icon :icon="['fas', 'arrow-right-long']" /> Become a
                                Better
                                Blogger: Content
                                Planning</a></li>
                        <li class="pb-3"><a href="#"><font-awesome-icon :icon="['fas', 'arrow-right-long']" /> Promoting
                                Your Online
                                Business on
                                Pinterest</a></li>
                        <li class="pb-3"><a href="#"><font-awesome-icon :icon="['fas', 'arrow-right-long']" /> Gamification
                                and
                                Game-Based Learning</a>
                        </li>
                        <li class="pb-3"><a href="#"><font-awesome-icon :icon="['fas', 'arrow-right-long']" /> Designing an
                                Online Course
                                from
                                Expert's Perspective</a></li>
                        <li class="pb-3"><a href="#"><font-awesome-icon :icon="['fas', 'arrow-right-long']" /> Why Online
                                Courses Are the
                                Future of
                                Education</a></li>
                    </ul>
                </div>

                <div class="col-4">
                    <div class="card border-0">
                        <img class="card-img-top" src="/public/img/artist-blog-03-480x352.jpeg" alt="">
                        <div class="card-body">
                            <p class="card-text mb-1">ARTIST</p>
                            <h5 class="card-title">Brush Strokes Energize Trees in Paintings</h5>
                            <p><font-awesome-icon :icon="['far', 'calendar']" /> May 15, 2020 <span
                                    class="ps-5"><font-awesome-icon :icon="['far', 'eye']" /> 688 views</span></p>
                        </div>
                    </div>
                </div>

                <div class="col-4">
                    <div class="card border-0">
                        <img class="card-img-top" src="/public/img/artist-blog-01-480x352.jpg" alt="">
                        <div class="card-body">
                            <p class="card-text mb-1">ARTIST</p>
                            <h5 class="card-title">Pocket-Sized Notebooks Hold Miniature Paintings</h5>
                            <p><font-awesome-icon :icon="['far', 'calendar']" /> May 15, 2020 <span
                                    class="ps-5"><font-awesome-icon :icon="['far', 'eye']" /> 603
                                    views</span></p>
                        </div>

                    </div>
                </div>
            </div>
            <!-- /.row -->
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as *;

#most_viewed {
    background-color: #f5f1ed;

    .title_h5 {
        color: $shady_lady;
    }

    h2 {
        color: $gun_powder;
        font-weight: bold;

        span {
            color: $jungle_green;
            font-weight: normal;
        }
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: $gun_powder;
        font-weight: bold;
    }

    .card {
        background-color: $white;

        h5 {
            color: $gun_powder;
            font-weight: bold;
        }

        p {
            color: $shady_lady;
        }
    }
}
</style>