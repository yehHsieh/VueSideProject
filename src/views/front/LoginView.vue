
<template>
    <div class="container" style="height: 100vh;">
        <div class="row justify-content-center text-center">
            <h1 class="h3 m-3 font-weight-normal">
                請先登入
            </h1>
            <div class="col-4">
                <form id="form" class="form-signin">
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="username" placeholder="name@example.com" required
                            autofocus v-model="user.username">
                        <label for="username">Email address</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="password" placeholder="Password" required
                            v-model="user.password">
                        <label for="password">Password</label>
                    </div>
                    <button class="btn btn-lg btn-primary w-100 mt-3" type="submit" @click.prevent="login">
                        登入
                    </button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
const { VITE_APP_URL } = import.meta.env;
export default {
    data() {
        return {
            user: {
                username: '',
                password: '',
            },
        }
    },

    methods: {
        login() {
            const user = {
                username,
                password
            };
            this.$http.post(`${VITE_APP_URL}v2/admin/signin`, this.user)
                .then((res) => {
                    const { token, expired } = res.data;
                    document.cookie = `hexSchool = ${token};
                    expires = ${expired}`
                    this.$router.push('Admin/AdminProducts')
                    // this.$refs.toastr.s("XXXXXX");
                })
                .catch((err) => {
                    console.log(err)
                    alert("密碼錯誤")
                    //    this.$refs.toastr.s("XXXXXX");
                });
        },
    },

    mounted() {
        console.log("init");
    }
}
</script>