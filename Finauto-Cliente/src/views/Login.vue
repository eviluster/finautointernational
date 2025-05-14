<template>
    <div id="kt_body" class="header-fixed header-mobile-fixed header-bottom-enabled subheader-enabled page-loading">
		<!--begin::Main-->
		<div class="d-flex flex-column flex-root">
			<!--begin::Login-->
			<div class="login login-5 login-signin-on d-flex flex-row-fluid" id="kt_login">
				<div class="d-flex flex-center bgi-size-cover bgi-no-repeat flex-row-fluid" style="background-image: url(images/bg/bg-2.jpg);">
					<div class="login-form text-center text-white p-7 position-relative overflow-hidden">
						<!--begin::Login Header-->
						<div class="d-flex flex-center mb-15">
							<a href="#">
								<img src="/images/Logo finauto 2022(text blanco).png" class="max-h-75px" alt="" />
							</a>
						</div>
						<!--end::Login Header-->
						<router-view></router-view>
						
						
					</div>
				</div>
			</div>
			<!--end::Login-->
		</div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            currentForm: 'signin' // Estado inicial
        };
    },
    methods: {
        showForgotForm() {
            this.currentForm = 'forgot'; // Cambiar a formulario de recuperación
        },
        showSignupForm() {
            this.currentForm = 'signup'; // Cambiar a formulario de registro
        },
        showSigninForm() {
            this.currentForm = 'signin'; // Cambiar a formulario de inicio de sesión
        }
    }
}
</script>

<style scoped>
@import '../assets/styles/login-5.css';
@import '../assets/styles/style.bundle.css';
@import '../assets/plugins/plugins.bundle.css';
@import '../assets/plugins/prismjs.bundle.css';

/* Estilos para tu nuevo layout */
</style>