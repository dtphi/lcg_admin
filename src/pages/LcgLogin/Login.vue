<template>
    <div class="auth-page">
        <b-container>
            <h5 class="auth-logo">
                <i class="fa fa-circle text-primary"></i>
                {{formTitle}}
                <i class="fa fa-circle text-danger"></i>
            </h5>
            <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Login to your Web App</h3>" customHeader>
                <p class="widget-auth-info">
                    {{formCustomHeaderTitle}}
                </p>
                <form class="mt" @submit.prevent="login">
                    <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
                        {{errorMessage}}
                    </b-alert>
                    <div class="form-group">
                        <input class="form-control no-border" ref="email" required type="email" name="email"
                               placeholder="Email"/>
                    </div>
                    <div class="form-group">
                        <input class="form-control no-border" ref="password" required type="password" name="password"
                               placeholder="Password"/>
                    </div>
                    <b-button type="submit" size="sm" class="auth-btn mb-3" variant="inverse">{{formTitleLogin}}
                    </b-button>
                </form>
            </Widget>
        </b-container>
        <footer class="auth-footer">
            2019 &copy; Sing App Vue Admin Dashboard Template.
        </footer>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';
    import Widget from '@/components/Widget/Widget';

    export default {
        name: 'LoginPage',
        components: {Widget},
        data() {
            return {
                formTitle: 'Đăng Nhập Quản Trị',
                formCustomHeaderTitle: 'Sử dụng email .',
                formTitleLogin: 'Đăng nhập',
                errorMessage: null,
                form : {
                    email: '',
                    password: '',
                }
            };
        },
        computed: {
            ...mapGetters('auth', ['authenticated'])
        },
        methods: {
            ...mapActions({
                signIn: 'auth/signIn'
              }),
            async submit () {
                await this.signIn(this.form);

                if (this.authenticated) {
                    this.$router.replace({ name: 'DashBoardPage' })
                }
              },
            login() {
                const email = this.$refs.email.value;
                const password = this.$refs.password.value;

                if (email.length !== 0 && password.length !== 0) {
                    this.form.email = email;
                    this.form.password = password;
                    this.submit();
                }
            },
        },
        created() {
            if (this.authenticated == true) {
                this.$router.push('/dashboard');
            }
        },
    };
</script>
